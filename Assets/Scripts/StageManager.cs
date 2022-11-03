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

			// Also let the score manager to give the bonus for the current stage
			var scoreManager = GetComponent<ScoreManager>();
			scoreManager?.IndicateNewStage();
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
