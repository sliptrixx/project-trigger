using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Projectile : MonoBehaviour
{
	[Tooltip("The speed at which the projectile travels")]
	[SerializeField] protected float Speed = 5;

	[Tooltip("The max distance it can travel, before the projectile gets destroyed")]
	[SerializeField] protected float MaxDistance = 10;

	// how much distance has the projectile travelled?
	float distanceTravelled = 0;

	// called every frame
	void Update()
	{
		// move it in the direction the object is looking at factored by speed
		transform.position += transform.up * (Speed * Time.deltaTime);
		
		// increment the variable tracking the total distance travelled by the projectile,
		// then check if it has travelled past the max distance
		distanceTravelled += Speed * Time.deltaTime;
		if(distanceTravelled >= MaxDistance)
		{
			// destroy the projectile if it has travelled more than the max distance
			Destroy(gameObject);
		}

	}

	// called when the projectile has a collision
	void OnTriggerEnter2D(Collider2D collision)
	{
		// if the object that the projectile collided with has a health component to it,
		// then we apply damage
		var health = collision.GetComponent<Health>();
		if(health is not null)
		{
			health.ApplyDamage(1);

			// additionally we destroy the projectile.
			Destroy(gameObject); 
		}
	}
}
