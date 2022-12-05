using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SelfDestruct : MonoBehaviour
{
	[SerializeField] float duration = 1;

	void Update()
	{
		duration -= Time.deltaTime;
		if(duration <= 0)
		{
			Destroy(gameObject);
		}
	}
}
