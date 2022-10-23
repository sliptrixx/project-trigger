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

	void Start()
	{
		// load stage 1 at start
		SceneManager.LoadScene("Stage1", LoadSceneMode.Additive);	
	}
}
