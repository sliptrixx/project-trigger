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
		// we can definitely improve the efficiency using OnHealthChange event,
		// however, i'm going to keep it pretty simple

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
		// Build the highscore string
		string text = "";
		if(isNew)
		{
			text += "New Highscore!!!\n";
		}
		text += $"Highscore: {highscore}";

		// Set the high score in all highscore ui elements
		foreach(var highscoreUI in HighscoreUIs)
		{
			highscoreUI.text = text;
		}
	}
}
