---
sidebar_position: 2
---

# Tutorial: Projectiles
In this section we will learn how to build a simple script that represents a projectile that can be fired from a weapon.

## Getting Started
- Create a new GameObject in the scene and name it `Projectile`
- Add a SpriteRenderer component to the `Projectile` GameObject
  - Set the Sprite to the "laserBlue01"
- Create a new C# script called `Projectile.cs` and attach it to the `Projectile` GameObject

## Projectile.cs
### Adding Movement
To move the projectile, we can use the same concepts we learned in the previous tutorial. We can use the transform.position property and manipulate it to move the projectile in the direction it's facing.

```csharp
// move the projectile 1 unit forward every second
void Update()
{
    transform.position += transform.up * Time.deltaTime;
}
```

We can also add a speed variable to the script to control how fast the projectile moves.

```csharp
[SerializeField] float Speed = 5f;

void Update()
{
    transform.position += transform.up * Speed * Time.deltaTime;
}
```

Place the projectile in the scene and test it out. You should see the projectile move forward at a constant speed as defined by the speed variable in the inspector. You can also rotate the projectile object and notice that it continues to move in the direction it's facing. This is because the transform.up property represents the direction the object is facing.

### Destroying the Projectile
You may have noticed that the projectile continues to move even after it leaves the screen. Imagine if the player shot 100 projectiles as they played the game. This would quickly fill up the scene with projectiles that are no longer visible and have no effect on the gameplay. To fix this, we can destroy the projectile after it has travelled a certain distance.

To get started we need to track how far the projectile has travelled. We can do this by adding a `distanceTravelled` variable to the script and increment it's value every frame. Since `transform.up` is a normalized vector, it's distance would always be 1. We can use this information to calculate the distance the projectile has travelled in the world.

```csharp
float distanceTravelled = 0;

void Update()
{
    distanceTravelled += Speed * Time.deltaTime;
}
```

Now after we have travelled a certain distance, we can destroy the projectile. We can do this by calling the `Destroy` function. This function takes a Unity object and destroys it. In our case, we want to delete the entire Gameobject that represents the projectile. We can get a reference to the GameObject a Monobehaviour (also know as the script) is attached to by using the `gameObject` property.

```csharp
if(distanceTravelled > 10)
{
    Destroy(gameObject);
}
```

In the above example, after travelling for 10 units, the projectile will be destroyed. You can test this by placing the projectile in the scene and running the game. You should see the projectile disappear after travelling 10 units. You can also change the speed variable in the inspector to see how it gets destroyed at the same point.

You can also further customize the projectile by adding a `MaxDistance` variable to the script that represents how far the projectile can travel before it is destroyed. This way you can control the range of the projectile in the inspector.

```csharp
[SerialzeField] float MaxDistance = 10f;

// in update
if(distanceTravelled > MaxDistance)
{
    Destroy(gameObject);
}
```

### Putting it all together
Here is the final version of the Projectile.cs script.

```csharp
using UnityEngine;

public class Projectile : MonoBehaviour
{
	[Tooltip("The speed at which the projectile travels")]
	[SerializeField] float Speed = 5;

	[Tooltip("The max distance it can travel, before the projectile gets destroyed")]
	[SerializeField] float MaxDistance = 10;

	// how much distance has the projectile travelled?
	float distanceTravelled = 0;

	private void Update()
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
}
```
