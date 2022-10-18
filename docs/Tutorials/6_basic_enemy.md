---
sidebar_position: 6
---

# Tutorial: Basic Enemy
In this section we will go over how we can create a basic enemy that can move left and right and shoot bullets at a constant rate. We will reuse a lot of code we have written in the previous sections and learn how powerful modular single responsibility code can be.

## Getting Started
- First, lets convert our `Meteor` gameobject into a prefab by dragging it into the *"Prefabs"* folder
- Next, lets create a new GameObject called `Enemy` and set it up similar to the `Meteor` GameObject
  - Add a sprite renderer and set the sprite to `EnemyRed5`
  - Add a `Rigidbody2D` component and set the gravity scale to 0
  - Add a `CircleCollider2D` component and set the radius to 0.485
  - Add a `Health` component and set the hp to 3
  - Add a `Blaster` component and add the appropriate bullet prefab
- Rotate the `Enemy` GameObject 180 degrees on the Z axis

Notice how we are reusing the `Health` and `Blaster` components we created in the previous sections. The `Health` script can be damaged and destroyed by the `Bullet` and the `Blaster` script can shoot bullets from a specified offset. Furthermore, the `Blaster` component uses a `Bullet` prefab with a simple `Projectile` script we previously created.

These scripts are not local to the player, but can be used by any GameObject, which is pretty cool. This is the power of modular single responsibility code. We can reuse the same code for different purposes.

## EnemyAI.cs
Now lets create a new script called `EnemyAI.cs` and add it to the `Enemy` GameObject that will be responsible for controlling when the enemy shoots and its movement.

### Blaster
Let's start with the shooting. First, we need a reference to the `Blaster` component so we can shoot bullets. We can get a reference to the `Blaster` component in the `Start` function.

```csharp
protected Blaster blaster;

void Start()
{
    blaster = GetComponent<Blaster>();
}
```

A really useful attribute we can use is the `RequireComponent` attribute. This attribute will force a GameObject to have the specified component, when this component is attached. First have a look at what it looks like.

```csharp
[RequireComponent(typeof(Blaster))]
public class EnemyAI : MonoBehaviour
{
    // ...
}
```

Here, we are defining that the `EnemyAI` component requires the `Blaster` component to function. So, when you add an EnemyAI component to a GameObject, it will automatically add a `Blaster` component to the GameObject. This is useful because we don't have to worry about adding the `Blaster` component to the GameObject, and we can just assume that the `Blaster` component is there. Another benefit of this is that if we accidentally try to remove the `Blaster` component from a GameObject with the `EnemyAI` component, Unity will prevent us from doing so.

### Shooting
We want the enemy to fire projectile at a constant rate, say every x seconds. We can define this rate as `fireRate` and set it to 1 second. We can use another variable called `fireTimer` to keep track of how much time has elapsed since the last shot. As soon as the `fireTimer` reaches the `fireRate` we can shoot a bullet and reset the `fireTimer` to 0.

```csharp
// how often the enemy shoots
[SerializeField] protected float fireRate = 1.0f;

// variable to keep track of how many seconds have elapsed since the last shot
protected float fireTimer = 0;

void Update()
{
    // increment the timer
    fireTimer += Time.deltaTime;

    // if the timer has elapsed, shoot a bullet and reset the timer
    if(fireTimer >= fireRate)
    {
        blaster.Shoot();
        fireTimer = 0;
    }
}
```

Now we can test our game and see if the enemy is shooting bullets at a constant rate. Try changing the `fireRate` value in the inspector to see how it affects the game.

### Movement
The enemy now shoots bullets at a constant rate, but it static and kind of boring. Let's make it a bit more interesting by making move left and right. We must define a variable called `moveSpeed` that determines how fast the enemy will move. We also need to define a variable called `WiggleRoom` (probably there's a better name to describe this functionality) that defines how far the enemy can move left and right from its initial position. Finally, we need a variable call `MoveRight` that determines if the enemy is moving right or left.


```csharp
// how fast the enemy moves
[SerializeField] protected float moveSpeed = 1.0f;

// how far the enemy can move left and right from its initial position
[SerializeField] protected float WiggleRoom = 1.0f;

// determines if the enemy is moving right or left
[SerializeField] protected bool MoveRight = true;
```

It might seem unnecessary to add the `SerializeField` attribute to it, but by making the `MoveRight` variable editable in the editor, we can change the start direction of the enemy.

In order to move the enemy from the start position, we need to first store and cache the initial position of the enemy. We can do this in the `Start` function.

```csharp
// the position that anchors the enemy
protected Vector3 anchor;

void Start()
{
    // cache the initial position of the enemy
    anchor = transform.position;
}
```

Now in the update loop we can move the enemy in the expected direction. I'm going to do it in a "dumb" way, but in the bonus section we will we will make it a bit more interesting.

```csharp
void Update()
{
    // the vector3 direction in which the enemy should move
    Vector3 direction = (MoveRight) ? Vector3.right : -Vector3.right;

    // apply the movement
    transform.position += direction * moveSpeed * Time.deltaTime;

    // switch direction of travel once the enemy has reached the edge of the wiggle room
    if ((MoveRight && transform.position.x > anchor.x + WiggleRoom / 2) || (!MoveRight && transform.position.x < anchor.x WiggleRoom / 2))
	{
		MoveRight = !MoveRight;
	}
}
```

Now we test this feature in the game and see if the enemy is moving left to right and right to left. Try changing and experimenting with the exposed values in the inspector and see how it affects the game.

### Final Script
Here is the final script for the `EnemyAI` component.

```csharp
using UnityEngine;

[RequireComponent(typeof(Blaster))]
public class EnemyAI : MonoBehaviour
{
	[Tooltip("How frequently should the enemy fire a projectile (given in seconds)")]
	[SerializeField] protected float fireRate = 1;

	[Header("Simple movement")]
	[Tooltip("How fast should the enemy travel in terms units/seconds")]
	[SerializeField] protected float moveSpeed = 1;

	[Tooltip("How far should the the enemy move")]
	[SerializeField] protected float WiggleRoom = 1;

	[Tooltip("The direction in which the enemy AI should currently move")]
	[SerializeField] protected bool MoveRight = true;

	// A private reference to the blaster that the enemy can shoot from
	protected Blaster blaster;

	// this variable is used to track how many seconds have elapsed since last fired
	protected float fireTimer = 0;

	// the position that anchor's the enemy
	protected Vector3 anchor;

	void Start()
	{
		// since we are using the RequireComponent attribute, we are guaranteed to have a blaster
		blaster = GetComponent<Blaster>();

		// set the anchor position so that the enemy can move left and right relative to it
		anchor = transform.position;
	}

	private void Update()
	{
		// increment the timer
		fireTimer += Time.deltaTime;

		// if the timer has elapsed, shoot from the blaster and reset the timer
		if(fireTimer >= fireRate)
		{
			blaster.Shoot();
			fireTimer = 0;
		}

		// move the player in the expected direction
		Vector3 move = MoveRight ? Vector3.right : -Vector3.right;
		transform.position += move * Time.deltaTime * moveSpeed;

		// do the check to toggle the direction once they have travelled pass the bounds
		if ((MoveRight && transform.position.x > anchor.x + WiggleRoom / 2) || (!MoveRight && transform.position.x < anchor.x - WiggleRoom / 2))
		{
			MoveRight = !MoveRight;
		}
	}
}
```

## Bonus 
### Orientation Agnostic Movement
The enemy moves left and right, but there's an issue. Try rotating the player and see what happens. The enemy will continue moving left and right in the world space and not in respect to its orientation. If that's your desired behavior, then you can skip this section. However, if you want the enemy to move left and right in respect to its orientation, then keep reading.

We can solve this by using the local transform right vector instead of the world space right vector. And for the condition to switch direction of travel, we can calculate the distance between the enemy's current position and the anchor position and compare it to the wiggle room.

```csharp
// the direction to move
Vector3 direction = (MoveRight) ? transform.right : -transform.right;
transform.position += direction * moveSpeed * Time.deltaTime;

// switch direction of travel once the enemy has reached the edge of the wiggle room
if(Vector3.Distance(anchor, transform.position) > WiggleRoom / 2) 
{
    MoveRight = !MoveRight;
}
```

## Final Thoughts
In this tutorial, we learned how to create a very simple enemy AI that uses a blaster to shoot at the player at a constant fire rate while moving left and right. It's a very much possible to split this script into multiple components, say seperating the movement and the shooting functionality. However, for the sake of simplicity, I decided to keep it all in one script.

More over, I plan on upgrading the Enemy AI script to use a finite state machine, so the simpler the script is, the less work to scrap and rewrite. The content on the finite state machine will be covered in a future tutorial in the advanced section of the series.
