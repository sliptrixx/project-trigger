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
