---
sidebar_position: 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial: Scores
In this tutorial, we go over how to add a score system to our game and display it on the screen. We will also learn how to save the high score to persistent memory so that it is not lost when the game is closed.

## Scores
To keep track of the score and manage how the player earns points, we will create a new script called `ScoreManager.cs` and attach it to the `GameManager` GameObject. The logic I'm going to use is pretty simple. Every time the player eliminates an enemy, we will add 50 points to the score. We will also add a bonus score when the player clears a stage based on how long it took for them to complete the stage.

### Base score framework
We want a variable to keep track of the score. We also want a public function that we can call to add points to the score.

```csharp
protected float score = 0;

// Add the given score to the whole thing
public void AddScore(float scoreToAdd)
{
    score += scoreToAdd;
}
```

### Bonus Score on Stage Clear
The player gets a bonus score which is based on how long it takes for the player to clear the stage. The faster the player clears the stage, the more points they get. So, the player has 30 seconds to clear the stage, and from there on and they have 1000 points to earn. But every second, the player losses 33 points.

```csharp
[SerializeField] protected float bonusToGive = 1000;
[SerializeField] protected float timeToComplete = 30;

protected float bonus = 0;

void Update()
{
    if (bonusToGive > 0)
    {
        // decrement the bonus on time elapsed
        bonus -= (bonusToGive / timeToComplete) * Time.deltaTime;

        // clamp the bonus to 0, so that we don't apply a negative score
        if (bonus < 0) { bonus = 0; }
    }
}
```

We need to add the bonus when the player clears the stage. We will add a public function to indicate that the stage has been cleared.

```csharp
public void IndicateNewStage()
{
    // add any bonus to the score, then reset the bonus
    score += bonus;
    bonus = bonusToGive;
}
```

### Displaying the score
We want to display the score on the screen, so we need to add a UI text to the HUD canvas. I won't go over how to add the UI text, but I will show you how to set it up to work in our game. We can link the UI text to the `UIManager` script and then we make a call to the `SetScore` function from the `ScoreManager` script to update the score on the screen.

```csharp
[SerializeField] TMP_Text ScoreUI;

public void SetScore(int newScore, int? scoreAdded = null)
{
    ScoreUI.text = $"Score: {newScore}";

    if(scoreAdded is not null)
    {
        // add the code to show score added here...
    }
}
```

I have not added the implementation for showing the score added here, but you can add it if you want. It will be a little more complicated, so I will leave it up to you to figure out how to do it.

### High Score
We want to save the high score so that it is not lost when the game is closed. Basically, persistent memory. To accomplish that, we will use Unity's `PlayerPrefs` system to save the high score.

```csharp
// get a value from player prefs... if not found, return 0
int value = PlayerPrefs.GetInt("key", 0);

// save a value to player prefs
PlayerPrefs.SetInt("key", value);
```

We will add a function called `CheckAndUpdateHighscore` to check if the current score is higher than the high score. If it is, we will update the high score.

```csharp
public void CheckAndUpdateHighscore()
{
    // Get the high score from the player prefs
    int highscore = PlayerPrefs.GetInt("highscore", 0);

    // if the current score is greater than the high score, update it on the UI
    if(score > highscore)
    {
        PlayerPrefs.SetInt("highscore", Mathf.CeilToInt(score));
    }
}
```

For your challenge, you can add the high score to the UI and display it on the screen. My final script has the high score displayed on the screen, but I will leave it up to you to figure out how you want to display it.

It is also important to note that the `PlayerPrefs` system is not secure. Anyone knowledgable can access the data stored in the `PlayerPrefs` system and modify it, say, to give themselves a high score of 10000. In our case, it is not a big deal, but if you are making a game that has a lot of data that needs to be secured and unmodified, you should look into other options. One option is to store it in a custom file that is encrypted and can only be accessed by your game. However, the player can still decrypt the file and modify it, so it is not a perfect solution, but it is better than nothing. Another option is to use a server to store the data and then have the game access the data from the server and post any changes back to the server. But that is a lot more complicated and requires a server to be set up and maintained.

So, at the end of the day, it is very case specific and you will have to decide what is best for your game.

## Final Script
<Tabs>
<TabItem value="ScoreManager.cs">

```csharp
using UnityEngine;

public class ScoreManager : MonoBehaviour
{
    [Tooltip("The bonus to give per stage")]
    [SerializeField] protected float bonusToGive = 1000;

    [Tooltip("Time to complete the stage to recieve at least some bonus points")]
    [SerializeField] protected float timeToComplete = 30;

    protected float score = 0;
    protected float bonus = 0;

    protected UIManager uiManager = null;

    void Start()
    {
        uiManager = GetComponent<UIManager>();
    }

    void Update()
    {
        if(bonusToGive > 0)
        {
            // decrement the bonus based on time elapsed
            bonus -= (bonusToGive / timeToComplete) * Time.deltaTime;
            
            // floor the bonus to 0
            if (bonus < 0) { bonus = 0; }
        }
    }

    // Add the given score to the whole thing
    public void AddScore(float scoreToAdd)
    {
        score += scoreToAdd;
        uiManager.SetScore(Mathf.CeilToInt(score), Mathf.CeilToInt(scoreToAdd));
    }

    // Indicate to the score manager, that the game switched to a new stage
    public void IndicateNewStage()
    {
        // add the collected bonus
        score += bonus;

        // update the bonus score UI, if the player has a bonus
        if(bonus > 0)
        {
            uiManager.SetScore(Mathf.FloorToInt(score), Mathf.FloorToInt(bonus));
        }

        // reset the score
        bonus = bonusToGive;
    }

    // Update the high score information
    public void CheckAndUpdateHighscore()
    {
        // Get the high score from the player prefs
        int highscore = PlayerPrefs.GetInt("highscore", 0);

        // if the current score is greater than the high score, update it on the UI
        if(score > highscore)
        {
            PlayerPrefs.SetInt("highscore", Mathf.CeilToInt(score));
            uiManager?.ReportHighscore(Mathf.CeilToInt(score), isNew: true);
            return;
        }

        // not a new high score, but we still have to report it to the UIManager
        uiManager?.ReportHighscore(highscore, isNew: false);
    }
}
```

</TabItem>
<TabItem value="UIManager.cs">

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class UIManager : MonoBehaviour
{
    [Tooltip("The health component to track")]
    public Health HealthToTrack;

    [Header("UI Elements")]
    [Tooltip("The UI text that displays the health element being tracked")]
    [SerializeField] TMP_Text HealthUI;

    [Tooltip("The UI text that displays the current stage the player is playing")]
    [SerializeField] TMP_Text StageUI;

    [Tooltip("The UI text that displays the score")]
    [SerializeField] TMP_Text ScoreUI;

    [Tooltip("The UI text that displays the highscore")]
    [SerializeField] TMP_Text[] HighscoreUIs;

    [Tooltip("The game over UI element that appears when the player dies")]
    [SerializeField] GameObject GameOverScreen;

    [Tooltip("The game complete UI element that appears when the player completes all stages")]
    [SerializeField] GameObject GameCompleteScreen;

    // time to show the stage UI
    float stageUITimer = 0;

    void Update()
    {
        // we can definitely improve the efficiency using the OnHealthChange event,
        // however, I'm going to keep it pretty simple

        // every tick we update the health UI.
        var hp = HealthToTrack ? HealthToTrack.GetHP() : 0;
        HealthUI.text = $"Health: {hp}";

        // tick down the stage UI timer
        stageUITimer -= Time.deltaTime;

        // once the stage timer has elapsed and the stage UI is visible,
        // set the UI inactive
        if(stageUITimer <= 0 && StageUI.gameObject.activeSelf)
        {
            StageUI.gameObject.SetActive(false);
        }
    }

    // Request the UI manager to show the stage number as UI for the requested time
    public void RequestStageUI(int stagenumber, float time)
    {
        StageUI.text = $"Stage {stagenumber}";
        StageUI.gameObject.SetActive(true);
        stageUITimer = time;
    }

    // Open the game over Menu
    public void OpenGameOverMenu()
    {
        GameOverScreen.SetActive(true);
    }

    // Open the game complete menu
    public void OpenGameCompleteMenu()
    {
        GameCompleteScreen.SetActive(true);
    }

    // Set the score with an optional score that was added
    public void SetScore(int newScore, int? scoreAdded = null)
    {
        ScoreUI.text = $"Score: {newScore}";
    }

    public void ReportHighscore(int highscore, bool isNew)
    {
        // Build the high score string
        string text = "";
        if(isNew)
        {
            text += "New Highscore!!!\n";
        }
        text += $"Highscore: {highscore}";

        // Set the high score in all high score UI elements
        foreach(var highscoreUI in HighscoreUIs)
        {
            highscoreUI.text = text;
        }
    }
}
```

</TabItem>
<TabItem value="StageManager.cs">

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.SceneManagement;

// Script responsible for adding new enemies from the next stage to the current scene once the player has
// cleared all enemies in the current stage
public class StageManager : MonoBehaviour
{
    [SerializeField] List<string> scenes;

    int currentSceneID = 0;
    int enemiesLeft = 0;

    void Update()
    {
        // if there are no enemies left on the scene and there are scenes left to load,
        // then we load the next enemy level
        if(enemiesLeft == 0)
        {
            enemiesLeft = -1;
            if(currentSceneID < scenes.Count)
            {
                LoadEnemyScene(scenes[currentSceneID]);
            }
            currentSceneID++;

            // Let the score manager to give the bonus for the current stage
            var scoreManager = GetComponent<ScoreManager>();
            scoreManager?.IndicateNewStage();

            // Request the UI manager to show the stage text UI
            var uiManager = GetComponent<UIManager>();
            if (currentSceneID <= scenes.Count)
            {
                uiManager?.RequestStageUI(currentSceneID, 3.0f);
            }
            else
            {
                scoreManager?.CheckAndUpdateHighscore();
                uiManager?.OpenGameCompleteMenu();
            }
        }
    }

    void LoadEnemyScene(string scenename)
    {
        var asyncLoad = SceneManager.LoadSceneAsync(scenename, LoadSceneMode.Additive);
        asyncLoad.completed += (AsyncOperation op) => 
        {
            enemiesLeft = FindObjectsOfType<EnemyAI>().Length;
        };
    }

    // Report to the stage manager that an enemy was killed
    public void ReportEnemyDeath()
    {
        enemiesLeft--;
    }

    // Restart the game
    public void Restart()
    {
        SceneManager.LoadScene("CoreGameplay");
    }
}
```

</TabItem>
<TabItem value="PlayerControls.cs">

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControls : MonoBehaviour
{
    [Tooltip("The speed at which the player ship moves")]
    public float Speed = 3;

    private Blaster blaster;

    private void Start()
    {
        blaster = GetComponent<Blaster>();
    }

    void Update()
    {
        if(Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.RightArrow))
        {
            transform.position += Vector3.right * Speed * Time.deltaTime;
        }

        if(Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.LeftArrow))
        {
            transform.position -= Vector3.right * Speed * Time.deltaTime;
        }

        if(Input.GetMouseButtonDown(0))
        {
            blaster.Shoot();
        }
    }

    private void OnDestroy()
    {
        var uiManager = FindObjectOfType<UIManager>();
        var scoreManager = FindObjectOfType<ScoreManager>();

        scoreManager?.CheckAndUpdateHighscore();
        uiManager?.OpenGameOverMenu();
    }
}
```

</TabItem>
<TabItem value="EnemyAI.cs">

```csharp
using UnityEngine;

[RequireComponent(typeof(Blaster))]
public class EnemyAI : MonoBehaviour
{
    [Tooltip("How frequently should the enemy fire a projectile (given in seconds)")]
    [SerializeField] protected float fireRate = 1;

    [Tooltip("How much time to wait before firing")]
    [SerializeField] protected float startWaitTime = 0;

    [Header("Simple movement")]
    [Tooltip("How fast should the enemy travel in terms units/seconds")]
    [SerializeField] protected float moveSpeed = 1;

    [Tooltip("How far should the the enemy move")]
    [SerializeField] protected float WiggleRoom = 1;

    [Tooltip("The direction in which the enemy AI should currently move")]
    [SerializeField] protected bool MoveRight = true;

    // A private reference to the blaster that the enemy can shoot from
    protected Blaster blaster;

    // this variable is used to track how many seconds have elapsed since last fired
    protected float fireTimer = 0;

    // the position that anchor's the enemy
    protected Vector3 anchor;

    void Start()
    {
        // since we are using the RequireComponent attribute, we are guaranteed to have a blaster
        blaster = GetComponent<Blaster>();

        // set the anchor position so that the enemy can move left and right relative to it
        anchor = transform.position;
    }

    void Update()
    {
        // elapse the start wait time if it hasn't elapsed
        if(startWaitTime > 0)
        {
            startWaitTime -= Time.deltaTime;
        }

        // increment the timer
        fireTimer += Time.deltaTime;

        // if the timer has elapsed, shoot from the blaster and reset the timer
        if(fireTimer >= fireRate && startWaitTime <= 0)
        {
            blaster.Shoot();
            fireTimer = 0;
        }

        // move the player in the expected direction
        Vector3 move = MoveRight ? transform.right : -transform.right;
        transform.position += move * Time.deltaTime * moveSpeed;

        // do the check to toggle the direction once they have travelled pass the bounds
        if (Vector3.Distance(anchor, transform.position) > WiggleRoom / 2)
        {
            MoveRight = !MoveRight;
        }
    }

    void OnDestroy()
    {
        // get a reference to the stage manager and report that this enemy was destroyed
        var stageManger = FindObjectOfType<StageManager>();
        stageManger?.ReportEnemyDeath();

        // get a reference to the score manager and give the player a score of +50
        var scoreManager = FindObjectOfType<ScoreManager>();
        scoreManager?.AddScore(50);
    }
}
```

</TabItem>
</Tabs>
