---
sidebar_position: 4
---

# Tutorial: Collision Detection
In this section, we will go over how to detect collision between two GameObject in Unity and how to use the collision information to create more behaviors for our game.

## Colliders and Rigidbody
In Unity, there are two primary components that are used to detect collision: `Collider` and `Rigidbody`. According to Unity's documentation, a `Collider` component is used to define the shape of a GameObject and a `Rigidbody` component is used to define the physical properties of a GameObject. In Unity, these two components are used together to detect collision between two GameObjects.

Since we are working with 2D games, we will only be using the 2D version of these components: `Collider2D` and `Rigidbody2D`. But be aware that for 3D games, you will be using the 3D version of these components: `Collider` and `Rigidbody`. Also, if you search for `Collider2D`, you will find that there are many different types of `Collider2D` components such as `BoxCollider2D`, `CircleCollider2D`, and `CapsuleCollider2D`.

Finally, the last concept we need to understand is the concept of a `Trigger`. A `Trigger` is a special type of collider that does not have any physical properties, i.e., it doesn't react to a collision. Instead, it is used to solely detect a collision and then perform some action. For example, when the player enters a room trigger, we can spawn enemies in that room. A trigger can detect collision with any type of collider, except another trigger.

## Getting Started
- Create a new GameObject and name it `Meteor`.
- Add a `SpriteRenderer` component to the `Meteor` GameObject and set the `Sprite` to `meteorGrey_big1`.
- Add a `Rigidbody2D` component to the `Meteor` GameObject.
- Add a `CircleCollider2D` component to the `Meteor` GameObject.

## Collision Detection in Projectile
- Add a `Rigidbody2D` component to the `Projectile` Prefab.
- Add a `CircleCollider2D` component to the `Projectile` Prefab.
- Set the `Is Trigger` property of the `CircleCollider2D` component to `true`.
- Apply an offset to the `CircleCollider2D` component by (0, 0.2) and set the `Radius` to 0.075.

In the projectile script, we can detect a collision with Unity's `OnTriggerEnter2D` function.

```csharp
void OnTriggerEnter2D(Collider2D other)
{
    // Print the name of the other object
    Debug.Log(other.gameObject.name);
}
```

Similarly, we have other functions to check if we are actively inside a trigger or if we have exited a trigger.

```csharp
void OnTriggerStay2D(Collider2D other) { }
void OnTriggerExit2D(Collider2D other) { }
```

### Destroy the Projectile
Now that we can detect a collision, we can destroy the projectile when it collides with something. Just like how we destroyed the projectile after traveling a certain distance, we can destroy the projectile when it collides with something.

```csharp
void OnTriggerEnter2D(Collider2D other)
{
    // Destroy the projectile gameobject
    Destroy(gameObject);
}
```

### Destroy the Meteor
Notice that we have a reference to the GameObject that the projectile collided with. We can use this reference to destroy the meteor.

```csharp
void OnTriggerEnter2D(Collider2D other)
{
    // Destroy the meteor gameobject
    Destroy(other.gameObject);
}
```

### Final Projectile Script
```csharp
using UnityEngine;

public class Projectile : MonoBehaviour
{
    [Tooltip("The speed at which the projectile travels")]
    [SerializeField] float Speed = 5;

    [Tooltip("The max distance it can travel, before the projectile gets destroyed")]
    [SerializeField] float MaxDistance = 10;

    // how much distance has the projectile traveled?
    float distanceTravelled = 0;

    // called every frame
    void Update()
    {
        // move it in the direction the object is looking at factored by speed
        transform.position += transform.up * (Speed * Time.deltaTime);
        
        // increment the variable tracking the total distance traveled by the projectile,
        // then check if it has traveled past the max distance
        distanceTravelled += Speed * Time.deltaTime;
        if(distanceTravelled >= MaxDistance)
        {
            // destroy the projectile if it has traveled more than the max distance
            Destroy(gameObject);
        }

    }

    // called when the projectile has a collision
    void OnTriggerEnter2D(Collider2D collision)
    {
        // Destroy the collided object
        Destroy(collision.gameObject);

        // Destroy the projectile
        Destroy(gameObject);
    }
}
```

In the next section, we will go over how we can refactor our code to make it more reusable, easier to maintain and adding more "security" by giving ownership of the object being destroyed to the object that is being destroyed.
