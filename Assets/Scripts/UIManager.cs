using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class UIManager : MonoBehaviour
{
	[Tooltip("The health component to track")]
	public Health HealthToTrack;

	[Tooltip("The UI text that displays the health element being tracked")]
	[SerializeField] TMP_Text HealthUI;

	
	void Update()
	{
		// we can definitely improve the efficiency using OnHealthChange event,
		// however, i'm going to keep it pretty simple

		// every tick we update the health UI.
		var hp = HealthToTrack ? HealthToTrack.GetHP() : 0;
		HealthUI.text = $"Health: {hp}";
	}
}
