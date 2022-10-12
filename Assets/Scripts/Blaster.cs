using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Blaster : MonoBehaviour
{
	[Tooltip("Additional offset from the source transform from where the projectile is spawned")]
	[SerializeField] protected Vector2 Offset;

	[Tooltip("A reference to the projectile prefab that will be used to instantiate projectiles")]
	[SerializeField] protected GameObject ProjectilePrefab;

	// Shoot a projectile from the blaster position
	public void Shoot()
	{
		// apply an offset along the direction at which the blaster is looking at,
		// then spawn a projectile from that position with the current rotation of the blaster
		var pos = transform.position + Offset.x * transform.right + Offset.y * transform.up;
		Instantiate(ProjectilePrefab, pos, transform.rotation);
	}
}
