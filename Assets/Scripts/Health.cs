using UnityEngine;

public class Health : MonoBehaviour
{
	[SerializeField] protected int hp = 1;
	[SerializeField] protected GameObject ExplosionVFX = null;

	CameraShake cameraShake = null;

	void Start()
	{
		cameraShake = FindObjectOfType<CameraShake>();
	}

	// Apply damage to the object
	public void ApplyDamage(int damage)
	{
		hp -= damage;

		// apply camera shake as a feedback
		cameraShake.Shake(0.25f, 0.2f);

		// if the health drops below zero destroy the object
		if (hp <= 0)
		{
			// play the explosion sound effect before destroying the object
			var audioManager = FindObjectOfType<AudioManager>();
			audioManager?.PlayExplosion(transform.position);

			// Apply a larger camera shake when the enemy is killed
			cameraShake.Shake(0.4f, 0.4f);

			// Spawn the explosion effect if available
			if(ExplosionVFX)
			{
				// the explosion effect has a self destruct which will handle destroying itself
				Instantiate(ExplosionVFX, transform.position, Quaternion.identity);
			}

			// destroy the object
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
