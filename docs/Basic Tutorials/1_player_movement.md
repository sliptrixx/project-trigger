---
sidebar_position: 1
---

# Tutorial: Player Movement
In this section, we will learn how to create a simple player script and attach it to an object in the scene to move it left and right.

## Getting Started
- Create a new GameObject in the scene and name it `Player`
- Add a SpriteRenderer component to the `Player` GameObject
  - Set the Sprite to the "playerShip1_blue"
- Create a new C# script called `PlayerControls.cs` and attach it to the `Player` GameObject

## PlayerControls.cs
### Detecting Input
To detect input from the user, we can use Unity's Input system to detect when the user presses a key. We can then use this information to move the player.

```csharp
if(Input.GetKey(KeyCode.D)) {
    // if called on Update, the user is holding down the D key
}
```

There are other similar APIs to detect when a key is pressed or released. For example, `Input.GetKeyDown(KeyCode.D)` will return true if the user pressed the D key in this frame. `Input.GetKeyUp(KeyCode.D)` will return true if the user released the D key in this frame.

### Adding Movement
There are many different ways to move a GameObject. For now, let's use the simplest method: using `transform.position`. In Unity, all GameObjects have a transform component. A transform component stores the position, rotation, and scale data for an individual GameObject. We can use the `transform.position` property to move the GameObject.

```csharp
// move the player 1 unit to the right
transform.position += new Vector3(1, 0, 0);

// move the player 1 unit to the left
transform.position -= new Vector3(1, 0, 0);
```

Unity also provides helper values such as `Vector3.right` which represents `Vector3(1, 0, 0)`. This can help make the code more readable.

### Combine the Two
Now that we know how to detect input and move the player, we can put it all together to create a simple player script.

```csharp
using UnityEngine;

public class PlayerControls : MonoBehaviour
{
    void Update()
    {
        if(Input.GetKey(KeyCode.D))
        {
            transform.position += Vector3.right;
        }

        if(Input.GetKey(KeyCode.A))
        {
            transform.position -= Vector3.right;
        }
    }
}
```

### Delta Time
Now let's test if this works. We quickly notice the player is moving too fast. Because we are calling the move logic on Update, we are moving the object by 1 unit every frame. We can fix this by multiplying the movement vector by a value `deltaTime`. `deltaTime` is the time in seconds it took to complete the last frame. This value will be different for every computer, so we can use it to make the movement speed consistent across different computers.

```csharp
transform.position += Vector3.right * Time.deltaTime;
```

### Speed
You may notice that the script is now moving at a speed of 1 unit per second. We can speed things up by multiplying the movement vector by a float representing a value higher than 1.

```csharp
// move the player 5 units per second
float speed = 5f;
transform.position += Vector3.right * Speed * Time.deltaTime;
```

### Final Script
```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControls : MonoBehaviour
{
    [Tooltip("The speed at which the player ship moves")]
    public float Speed = 3;

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
    }
}
```

## Bonus Tips
- Since the variable is public, you can make the speed value editable in the inspector. This can be useful for testing different values without having to recompile the code.
- If you want to keep the variable private, you can use the `[serializeField]` attribute just before the variable declaration to make it editable in the inspector.
- You can also use the `[Tooltip]` attribute to add a tooltip to the variable in the inspector.
