---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial: Audio
In this tutorial, we will be adding audio to our game to make it more immersive. We will start simple by adding two sound effects to our game: one for when a blaster shoots and one for when an enemy is destroyed. We will go over two different implementations and you can choose which one you prefer.

## Blaster Shoot
Whenever the player or the enemy shoots, we want to play a sound effect. So, we will go to the "Player" gameobject which has a blaster and add an `AudioSource` component to it. An audio source a component in Unity that is used to play audio clips.

To play an audio clip, we need drag and drop a sound clip from the project window into the `AudioClip` field in the `AudioSource` component. I have added a bunch of sound effects to the starter project, so you can use any of those. For this tutorial, I will be using the `laserSmall_000.ogg` sound effect.

Also, we want to make sure that the sound doesn't automatically play when the game starts. In Unity, this option is turned on by default, so we need to uncheck the `Play On Awake` option in the `AudioSource` component.

Now, we need to modify our `Blaster` script to play the sound effect from the `AudioSource` when it shoots a projectile. Let's get the reference to the `AudioSource` component in the `Start` method:

```csharp
[Tooltip("The audio source that can play the projectile fire audio")]
protected AudioSource audioSource = null;

void Start()
{
    audioSource = GetComponent<AudioSource>();
}
```

Now, we can play the sound effect in the `Shoot` method by calling the `Play` method on the `AudioSource` component.

```csharp
public void Shoot()
{
    // ... code to spawn projectile

    // play the projectile fired sound effect
    if(audioSource) 
    {
        audioSource.Play();
    }
}
```

Test it out by playing the game and shooting the blaster. You should hear a sound effect when the player shoots. We can expand it to the enemy blaster by adding an `AudioSource` component to the "Enemy" prefabs and it should automatically work the same way.

## Explosion on Destroy
We have a sound effect for when the blaster shoots by directly accessing the `AudioSource` component. However, as we expand on our game, we will find it quite tedious to add an `AudioSource` component to every gameobject that needs to play a sound effect. Wouldn't it be nice if we could just specify the sound effect and the position of the sound effect in the world and have the sound play automatically? This is where our custom `AudioManager` comes in.

Let's start by adding a new script to our **"GameManager"** object called `AudioManger`. It'll have a public function that anyone can invoke to play an explosion sound effect at a given position. So, we need to add a serialized property describing the explosion sound effect and a method to play the sound effect at a given position.

```csharp
[Tooltip("A reference to the explosion sound effect")]
[SerializeField] AudioClip ExplosionSound;

public void PlayExplosion(Vector3 position)
{
    AudioSource.PlayClipAtPoint(ExplosionSound, position);
}
```

We can now specify the explosion sound effect in the inspector and call the `PlayExplosion` function from anywher in our game. I'm going to use the `explosionCrunch_000.ogg` sound effect for this tutorial. Next, we need to modify our `Health` script to play the explosion sound effect when the hp reaches 0.

```csharp
// ... code to check if hp is 0
if(hp <= 0)
{
    // play the explosion sound effect
    var audioManager = FindObjectOfType<AudioManager>();
    audioManager?.PlayExplosion(transform.position);

    // ... code to destroy the gameobject
}
```

Test it out by playing the game and shooting the enemy. You should hear a sound effect when the enemy is destroyed. This is a simple implementation of the `AudioManager` that can be expanded to play other sound effects as well.

Each of the two methods have their own pros and cons. The first method gives the developer more control over the sound effects, but it can be tedious to add an `AudioSource` component to every gameobject that needs to play a sound effect and configure the properties. The second method is more convenient, but it is less flexible and doesn't give the developer as much control over the sound effects. The most control you get is the position of the sound effect and the volume of the sound effect. So, it's up to you to decide which method you prefer.

## Final Scripts
Here are the final scripts for this tutorial for reference:

<Tabs>
<TabItem value="AudioManager">

```csharp
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
```

</TabItem>
<TabItem value="Blaster">

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Blaster : MonoBehaviour
{
	[Tooltip("Additional offset from the source transform from where the projectile is spawned")]
	[SerializeField] protected Vector2 Offset;

	[Tooltip("A reference to the projectile prefab that will be used to instantiate projectiles")]
	[SerializeField] protected GameObject ProjectilePrefab;

	[Tooltip("The audio source that can play the projectile fire audio")]
	protected AudioSource audioSource = null;

	void Start()
	{
		audioSource = GetComponent<AudioSource>();
	}

	// Shoot a projectile from the blaster position
	public void Shoot()
	{
		// apply an offset along the direction at which the blaster is looking at,
		// then spawn a projectile from that position with the current rotation of the blaster
		var pos = transform.position + Offset.x * transform.right + Offset.y * transform.up;
		Instantiate(ProjectilePrefab, pos, transform.rotation);

		// play the projectile fire audio
		if(audioSource)
		{
			audioSource.Play();
		}
	}
}
```

</TabItem>
<TabItem value="Health">

```csharp
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
			// play the explosion sound effect before destroying the object
			var audioManager = FindObjectOfType<AudioManager>();
			audioManager?.PlayExplosion(transform.position);

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
```

</TabItem>
</Tabs>
