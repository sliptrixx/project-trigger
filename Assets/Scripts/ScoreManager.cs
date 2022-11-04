using UnityEngine;
using TMPro;

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

	// Update the highscore information
	public void CheckAndUpdateHighscore()
	{
		// Get the highscore from the player prefs
		int highscore = PlayerPrefs.GetInt("highscore", 0);

		// if the current score is greater that the high score, update it on the UI
		if(score > highscore)
		{
			PlayerPrefs.SetInt("highscore", Mathf.CeilToInt(score));
			uiManager?.ReportHighscore(Mathf.CeilToInt(score), isNew: true);
			return;
		}

		// not a new highscore, but we still have to report it to the UIManager
		uiManager?.ReportHighscore(highscore, isNew: false);
	}
}
