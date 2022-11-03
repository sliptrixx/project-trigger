using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManager : MonoBehaviour
{
	[Tooltip("A reference to the explosion sound effect")]
	[SerializeField] AudioClip ExplosionSound;

	// Play an explosion sound effect at the given point
	public void PlayExplosion(Vector3 position)
	{
		AudioSource.PlayClipAtPoint(ExplosionSound, position);
	}	
}
