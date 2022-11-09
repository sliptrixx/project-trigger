---
sidebar_position: 3
---

# Tutorial: Player Shoot
In this section we will learn how to create new scripts and modify existing scripts to allow the player to shoot projectiles created in the last section.

## Prefabs
In Unity, a prefab is a template for a GameObject aand is useful for creating multiple instances of the same object. For example, if we want projectiles to be dynamically created when the player shoots, we can create a prefab for the projectile and use it as the base for all projectiles spawned by the player.

### Creating a Prefab
It's very easy to create a prefab in Unity. Simply drag and drop a GameObject that needs to be a prefab into the Project Window and Unity will automatically convert the GameObject into a prefab.

**Steps to create a projectile prefab:**
- Create a folder called `Prefabs` in the Project Window
- Drag and Drop the projectile GameObject created in the previous section into the `Prefabs` folder

### Using a Prefab
We can use a prefab in the scene by dragging and dropping the prefab from the project window into the hierarchy window, and Unity will create a new instance of the prefab in the scene. Try adding multiple instances of the projectile prefab to the scene and modify the sprite in the prefab to see how it affects all instances of the prefab.

Another use case for prefabs is to use it as a template for dynamic creation of object. Just like how we can set properties such as `Speed` and `MaxDistance` on a projectile, we can pass in reference to a prefab to a script and use it to create new instances of the prefab.


## Blaster.cs
Go ahead and create a new C# script called `Blaster.cs` and attach it to the `Player` GameObject. This script will represent a weapon blaster that will create new projectiles when the player wants to shoot.

### Creating a Projectile
If we have a reference to a GameObject prefab, we can use Unity's `Instantiate` function to create a new instance of the prefab. The `Instantiate` function takes a prefab and returns a reference to the new instance of the prefab. We can use this reference to set properties on the new instance of the prefab.

```csharp
// to create a new instance
GameObject prefab;
GameObject instance = Instantiate(prefab);

// to create a new instance and set it's position and rotation
Vector3 position;
Quaternion rotation;
GameObject instance = Instantiate(prefab, position, rotation);
```

We can use this information to create a new projectile when the player requests the blaster to shoot. We can do this by creating a new public function called `Shoot` and calling it when the player presses the primary mouse button.

```csharp
[SerializeField] GameObject projectilePrefab;

public void Shoot() 
{
    // create a new projectile at the blaster's position
    Instantiate(projectilePrefab, transform.position, transform.rotation);
}
```

### Detecting Input
We will now modify the `PlayerControls.cs` script to detect when the player presses the primary mouse button and call the `Shoot` function on the `Blaster` component. 

For that, first we need to add a reference to the `Blaster` component in the `PlayerControls` script. There are two ways to do this:
- Add a serialized field for the `Blaster` component and drag and drop the `Blaster` component from the hierarchy window into the field in the inspector
- (or) Find the `Blaster` component in the same GameObject as the `PlayerControls` component using the `GetComponent` function

```csharp
Blaster blaster;

void Start()
{
    blaster = GetComponent<Blaster>();
}
```

In the update loop, we can check if the player has pressed the primary mouse button and call the `Shoot` function on the `Blaster` component.

```csharp
// in the update loop
if(Input.GetMouseButtonDown(0))
{
    blaster.Shoot();
}
```

#### Why are we doing it this way?
We don't necessarily need to create a new script for the blaster and could have just added the `Shoot` function to the player script. However, it's a good practice to seperate the logic for different components of a GameObject into different scripts. This makes managing the code easier and allows us to reuse the code in other scripts.

For example, The Enemies! We can create an enemy that can shoot projectiles by adding a Blaster component to the enemy GameObject. Obviously, we still need to create a "Enemy Brain" script to determine when to call the shoot function, but we can reuse the `Shoot` function in the Blaster script.

### Testing the Blaster
Now that we have a blaster that can create projectiles, let's test it out. Press play and try shooting projectiles by pressing the primary mouse button. You should see projectiles being created at the player's position.

:::note

If you are getting an error, make sure that you have a reference to the `ProjectilePrefab` in the `Blaster` component in the inspector.

:::

### Blaster Offset
The projectiles are being created at the player's position, aka, the center of the player, which is not where the projectile must be fired from. We can add an offset to the projectile's spawn position to fix this issue.

To do this, we will add a new serialized Vector2 called `Offset` to the `Blaster` component and use that to adjust the spawn position of the projectile. The "offset" has to be applied in the direction of the player's rotation, so we will use the `Transform.right` property to modify the horizontal component of the offset and `Transform.up` property to modify the vertical component of the offset.

```csharp
[SerializeField] Vector2 offset;

public void Shoot() 
{
    // create a new projectile at the blaster's position
    Vector3 pos = transform.position + transform.right * Offset.x + transform.up * Offset.y;
    Instantiate(projectilePrefab, transform.position + (Vector3)offset, transform.rotation);
}
```

Now that we have an offset, let's test it out. Press play and try shooting projectiles by pressing the primary mouse button. You should see projectiles being created from the offset position and not the center of the player. Try adjusting the offset values in the inspector to see how it affects the projectile's spawn position. Also, try rotating the player and shooting projectiles to see how the offset is applied in the direction of the player's rotation.


## Final Scripts
Here are the final scripts for this section.

### PlayerControls.cs
```csharp
using UnityEngine;

public class PlayerControls : MonoBehaviour
{
	[Tooltip("The speed at which the player ship moves")]
	public float Speed = 3;

	Blaster blaster;

	private void Start()
	{
		blaster = GetComponent<Blaster>();
	}

	void Update()
	{
		if(Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.RightArrow))
		{
			transform.position += Vector3.right * Speed * Time.deltaTime;
		}

		if(Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.LeftArrow))
		{
			transform.position -= Vector3.right * Speed * Time.deltaTime;
		}

		if(Input.GetMouseButtonDown(0))
		{
			blaster.Shoot();
		}
	}
}
```

### Blaster.cs
```csharp
using UnityEngine;

public class Blaster : MonoBehaviour
{
	[Tooltip("Additional offset from the source transform from where the projectile is spawned")]
	[SerializeField] Vector2 Offset;

	[Tooltip("A reference to the projectile prefab that will be used to instantiate projectiles")]
	[SerializeField] GameObject ProjectilePrefab;

	// Shoot a projectile from the blaster position
	public void Shoot()
	{
		// apply an offset along the direction at which the blaster is looking at,
		// then spawn a projectile from that position with the current rotation of the blaster
		var pos = transform.position + Offset.x * transform.right + Offset.y * transform.up;
		Instantiate(ProjectilePrefab, pos, transform.rotation);
	}
}
```
