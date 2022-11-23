using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControls : MonoBehaviour
{
	[Tooltip("The speed at which the player ship moves")]
	public float Speed = 3;

	private Blaster blaster;
	private Animator animator;

	private void Start()
	{
		blaster = GetComponent<Blaster>();
		animator = GetComponent<Animator>();
	}

	void Update()
	{
		// variable used to track input in the current frame
		float movementInput = 0;

		// check for user movement input
		if(Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.RightArrow))
		{
			movementInput += 1;
		}

		if(Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.LeftArrow))
		{
			movementInput -= 1;
		}

		// check for shoot input
		if (Input.GetMouseButtonDown(0))
		{
			blaster.Shoot();
		}

		// apply the movement update and send the info to animator
		transform.position += Vector3.right * movementInput * Speed * Time.deltaTime;
		animator.SetFloat("Move", movementInput);
	}

	private void OnDestroy()
	{
		var uiManager = FindObjectOfType<UIManager>();
		var scoreManager = FindObjectOfType<ScoreManager>();

		scoreManager?.CheckAndUpdateHighscore();
		uiManager?.OpenGameOverMenu();
	}
}
