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
		}
	}

	void LoadEnemyScene(string scenename)
	{
		var asyncLoad = SceneManager.LoadSceneAsync(scenename, LoadSceneMode.Additive);
		asyncLoad.completed += (AsyncOperation op) => 
		{
			enemiesLeft = FindObjectsOfType<EnemyAI>().Length;
			Debug.Log(enemiesLeft);
		};
	}

	// Report to the stage manager that an enemy was killed
	public void ReportEnemyDeath()
	{
		enemiesLeft--;
	}
}
