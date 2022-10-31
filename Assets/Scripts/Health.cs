using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices.WindowsRuntime;
using UnityEngine;

public class Health : MonoBehaviour
{
	[SerializeField] protected int hp = 1;

	// Apply damage to the object
	public void ApplyDamage(int damage)
	{
		hp -= damage;

		// if the health drops below zero destroy the object
		if (hp <= 0)
		{
			Destroy(gameObject);
		}
	}

	// Apply heals to the object
	public void ApplyHeals(int heals)
	{
		// basically reverse damage
		ApplyDamage(-heals);
	}

	// Get the health from the health component
	public int GetHP() 
	{
		return hp;
	}
}
