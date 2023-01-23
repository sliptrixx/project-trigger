---
sidebar_position: 8
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial: HUD
One of the most important aspects of a game is the UI. In this tutorial, we will create a simple HUD that displays the player's health and the current stage they are on. Later, we will also add game over and stage complete screens.

## HUD
The HUD is a UI element that is always visible to the player and is used to show important information about the current state of the game. A good example of a HUD is a health bar or a score counter found in many arcade games. 

### Create a canvas
In Unity, a canvas is a type of GameObject that is used to host and display UI elements. To create a canvas, select `UI > Canvas` in the hierarchy window. This will create a canvas GameObject in the scene.

The canvas has a lot of different settings that can be configured. The **Canvas Scaler** component is used to control the overall scale and pixel density of UI elements in the canvas. The default is set to *Constant Pixel Size*, which means that the UI elements will not be scaled when the resolution changes. This might be what you are looking for, however, my preference is to use the *Scale with Screen Size* option which will keep the UI elements the same size regardless of the resolution.

The canvas itself has a **Render Mode** setting that determines how the canvas is rendered. The default is *Screen Space - Overlay*, which means that canvas will always be rendered on top of the scene. This is what we want for our HUD. However, if you want to render a UI element in 3D space, you can use the *Screen Space - Camera* to give it some depth, or if you want to create a more diegetic UI, you may try the *World Space* options. Experiment with them to see what they do.

### Create a health UI
The first UI element we will add to the canvas is a simple health text. To do this, right-click on the canvas and select `UI > Text - TextMeshPro` to create a new text element. In the inspector, change the text input to "Health: 0" and mess around with the font size, color, and style to your liking. 

Drag the game view and rescale it and you'll notice that the text is always centered in the middle of the screen. This is because this is Unity's default anchoring mode. However, we can change how a UI element is anchored relative to the parent UI element. To do this, click the box-like icon in the top left corner of the `Rect Transform` component. This will open the anchoring window.

I'll select the bottom left option and set the position to my liking. Now, when I resize the game view, the text will always be anchored to the bottom left corner of the screen.

### UIManager.cs
Now that we have a health UI element, we need to update it whenever the player's health changes. To do this, we will create a new script called `UIManager.cs` and attach it to our `Game Manager` GameObject. This script will be responsible for interacting with the UI elements and updating them when necessary.

To update the text of a UI element programmatically, we need to access the TextMeshPro text component and modify the text property. We will first create a serialized field to get the reference to the text component.

```csharp
using TMPro;

public class UIManager : MonoBehaviour
{
    [SerializeField] TMP_Text HealthUI;

    void Start()
    {
        HealthUI.text = "Some random text";
    }
}
```

Drag and drop the text element into the `HealthUI` field in the inspector. Now, when you run the game, you should see the text change to "Some random text".

### Update health UI
Now, we need to update the text to show what the player's health is. I am going to take a lazy approach and just update the text every frame. A better approach would be for the `Health` component to fire an event whenever the hp value changes and the `UIManager` subscribes to that event. But, for now, this will do.

I also added a public getter in the `Health` component to get the current hp value. This is so that other scripts can access the hp value without having the option to modify it.

```csharp
public Health HealthToTrack;

void Update()
{
    HealthUI.text = $"Health: {HealthToTrack.GetHP()}";
}
```

Now, when you run the game, you should see the health UI update to the player's current health. Except, there's a small issue when the player dies and the `Health` component that we are tracking gets destroyed. 

So, what's the solution? There are a few ways to solve this problem. One way would be for the health to be tracked reporting to the UI manager when it gets destroyed. This would have worked great if we were using events, but since we are not, we will have to use a different approach.

The other way would be to check if the health component we are working with is currently valid or not. In Unity, when a component reference is cast to a boolean, it will return true if the component is valid and false if it is not. So we can use this to check if the health component is valid or not.

```csharp
var hp = HealthToTrack ? HealthToTrack.GetHP() : 0;
HealthUI.text = $"Health: {hp}";
```

Now, when you run the game, you should see the health UI update to 0 when the player dies!

Lastly, I want to mention one other thing about `Unity.Object` references. When you assign a reference to it and later the reference gets destroyed, the value of this variable is not null and it won't be set to null. The casting to a boolean will return false if the reference is destroyed.

```csharp
// assign null
Health HealthToTrack = null;
if(HealthToTrack == null) { } // True
if(HealthToTrack) // False

// assign a new reference
HealthToTrack = new Health();
if(HealthToTrack == null) { } // False
if(HealthToTrack) // True

// destroy the reference
Destroy(HealthToTrack);
if(HealthToTrack == null) { } // False
if(HealthToTrack) // False
```

### Create a stage UI
Just like the health UI, we will create a stage UI element and update it whenever the player enters a new stage. But let's add some spice to it. I want to make the stage UI element only appear on the screen for a few seconds and then disappear.

To do this, we will have a float variable that keeps track of how long the stage UI element has been on screen and we will make it disappear after the time has passed.

```csharp
[Tooltip("The UI text that displays the current stage the player is playing")]
[SerializeField] TMP_Text StageUI;

// time to show the stage UI
float stageUITimer = 0;

// public API to request the UI manager to show the stage UI
public void RequestStageUI(int stagenumber, float duration)
{
    StageUI.text = $"Stage {stagenumber}";
    StageUI.gameObject.SetActive(true);
    stageUITimer = duration;
}

void Update()
{
    // tick down the time
    stageUITimer -= Time.deltaTime;

    // once the time has elapsed and the stage UI is still active, hide it
    if(stageUITimer <= 0 && StageUI.gameObject.activeSelf)
    {
        StageUI.gameObject.SetActive(false);
    }
}
```

Now, from the stage manager, we can request the UI manager to show the stage UI whenever the player enters a new stage. Once we are done requesting a load of the stage, we request the UI manager to show the stage UI for 3 seconds.

```csharp
if(enemiesLeft == 0)
{
    // load the next stage code here...

    // request the UI manager to show the stage UI
    var uiManager = GetComponent<UIManager>();
    if(currentSceneID <= stages.Count) 
    {
        uiManager.RequestStageUI(currentSceneID, 3.0f);
    }
}
```

Now, when you run the game, you should see the stage UI appear for 3 seconds whenever the player enters a new stage.

## Game Over and Restart
### Create a game over UI
The next UI element we will add is a game-over UI element that gets displayed when the player dies. This UI element will have a button that will restart the game when clicked.

First, let's create a new panel UI element that will host the game over text as well as the restart button. First, add the text element and set the text to "Game Over". Then, add a button element by right-clicking on the panel object and selecting `UI > Button - TextMeshPro`. It will create a button with a text element inside it as a child. Set the text of the button to "Restart".

First, let's create a public function in the `UIManager` script that will display the game over the UI element when the game determines that the player has lost. Currently, the player has lost the game when the player's health reaches 0. However, you can expand the conditions later on to include other things like the player running out of time or the destruction of the player's objective to protect.

The UI element that we will be turning on/off is the entire panel object that contains the game over text and the restart button. So, we will need to get the reference to the panel gameobject itself.

```csharp
[Tooltip("The game over UI element that appears when the player dies")]
[SerializeField] GameObject GameOverScreen;

// Open the game over Menu
public void OpenGameOverMenu()
{
    GameOverScreen.SetActive(true);
}
```

Now, the last thing we need to do is hook it up to the player when the player dies. When the player's health goes to 0, the gameobject gets destroyed. So, we can call the `OpenGameOverMenu` function when the `PlayerControls` component gets destroyed.

```csharp
// In the PlayerControls.cs script
void OnDestroy()
{
    // request the UI manager to open the game over the menu
    var uiManager = FindObjectOfType<UIManager>();
    uiManager?.OpenGameOverMenu();
}
```

Now, when you run the game, you should see the game over UI element appear when the player dies.

### Create a restart button
The next UI element we will need to implement is the restart button. The restart button should reload the current scene when clicked. To do this we will SceneManager's `LoadScene` function and we will do this in the `StageManager` script.

```csharp
// In the StageManager.cs script
public void Restart()
{
    SceneManager.LoadScene("CoreGameplay");
}
```

Now, we just need to hook up the restart button to the restart function. To do this, select the restart button object from the hierarchy, and in the inspector, navigate to the bottom of the button component. There should be a section called `On Click()`. Click on the **+** button to add a new event. Drag and drop the **Game Manager** object into the object field and select the `StageManager > Restart` function.

Let's quickly test the functionality out. We should notice that as soon as the player dies, the game over UI element appears and the restart button is clickable. And when we click the restart button, the game should reload the "core gameplay" scene.

### Create stages completed UI
The last UI element to create is the stage completed UI element. It's pretty much the same as the game over UI element, but instead of displaying "Game Over", it will display "Stages Completed". I'll just duplicate the game over UI element and rename it to "Stages Completed" and modify the text to my liking. Then, I'll set up the functionality to trigger it in the `UIManager` script.

```csharp
[Tooltip("The game complete UI element that appears when the player completes all stages")]
[SerializeField] GameObject GameCompleteScreen;

// Open the game complete menu
public void OpenGameCompleteMenu()
{
    GameCompleteScreen.SetActive(true);
}
```

Now, we just need to hook it up to the stage manager. When the stage manager has run out of stages to load, we will request the UI Manager to open the game complete menu.

```csharp
// In the StageManager.cs script update loop
var uiManager = GetComponent<UIManager>();
if(currentSceneID <= scenes.count) 
{
    uiManager?.RequestStageUI(currentSceneID, 3.0f);
}
else 
{
    uiManager?.OpenGameCompleteMenu();
}
```

Let's test it out. When you run the game and beat all 3 stages, the new "stages completed" UI element should appear. And when the restart button is pressed, the game should reload the "core gameplay" scene, just like the game over UI element.

## Final Scripts
For reference, here is the final script for the project.

<Tabs>
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

// Script responsible for adding new enemies from the next stage to the current scene once player has
// cleared all enemies in the current stage
public class StageManager : MonoBehaviour
{
    [SerializeField] List<string> scenes;

    int currentSceneID = 0;
    int enemiesLeft = 0;

    void Start()
    {
        enemiesLeft = FindObjectsOfType<EnemyAI>().Length;
    }

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

            // Request the UI manager to show the stage text UI
            var uiManager = GetComponent<UIManager>();
            if (currentSceneID <= scenes.Count)
            {
                uiManager?.RequestStageUI(currentSceneID, 3.0f);
            }
            else
            {
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
        uiManager?.OpenGameOverMenu();
    }
}
```

</TabItem>

</Tabs>

## Final Thoughts
Firstly, a note I want to make is my use of the `FindObjectOfType` function without caching throughout the project. This function is not recommended to be used as it tends to be slow on large projects. However, for this project, I am using it sparingly and it should be fine. A better pattern to use would be the singleton pattern. It's slightly more complicated to implement, so, I am not going to cover it in this tutorial. But feel free to look it up if you are interested.

Another thing that I don't like about this project right now is the way I am requesting the game to load the "CoreGameplay" scene whenever we want to restart the game. What if we renamed the scene to something else? We would have to come back to the script and rename the value. Or what if we wanted to add a completely different game mode in a new scene and want to restart that scene? This method is not ideal and we can do better. We can use the scene that is currently hosting the stage manager and reload that one to restart the game. I will leave that as an exercise for you to do.