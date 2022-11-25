---
sidebar_position: 12
---

# Tutorial: Bounds
In this short tutorial, we will discuss how we can use a `BoundsCheck` script to keep any gameobject within the bounds of the screen. This is useful for 2D games where the camera is confined to a specific area. For example, our top-down shooter game.

## BoundsCheck.cs
Let's start by creating a new script called `BoundsCheck` and attaching it to our player. In this script we need to determine what the "bounds" are. Unity provides a helpful function part of the camera called `ScreenToWorldPoint`. This function takes a `Vector2` position in screen space (although the API only accepts a vector3 and an automatic casting happens in the background) and converts it to a `Vector3` world space. 

The bottom left corner of the screen is considered as (0, 0).

```csharp
Vector3 bottomLeft = Camera.main.ScreenToWorldPoint(Vector2.zero);
```

And the top right corner of the screen is the screen width and height. This can be accessed from the static class `Screen` and the `width` and `height` properties.

```csharp
topRight = Camera.main.ScreenToWorldPoint(new Vector2(Screen.width, Screen.height));
```

This can be called at the start of the game and stored in a variable for later use. This will work in most cases, but it's important to note that if the screen size changes mid-game, the bounds will be incorrect. And unfortunately, there is no event provided by Unity to detect when the screen size changes, however, you may write your own event handler to detect this and use that to update the bounds.

### Limiting the Bounds
Now that we have the bounds, we need to limit the object the script is attached to to the calculated bounds. We can do this by checking the position of the object and clamping it to the bounds. We need to do this in the `LateUpdate` function because we want to make sure that the object has been updated to the correct expected position before we clamp it.

```csharp
void LateUpdate()
{
    Vector3 pos = transform.position;
    pos.x = Mathf.Clamp(pos.x, bottomLeft.x, topRight.x);
    pos.y = Mathf.Clamp(pos.y, bottomLeft.y, topRight.y);
    transform.position = pos;
}
```

### Final Script
Here's the final script for reference.

```csharp
using UnityEngine;

public class BoundsCheck : MonoBehaviour
{
	Vector3 bottomLeft;
	Vector3 topRight;

	void Start()
	{
		// calculate the bottom left and top right point of the screen bounds
		bottomLeft = Camera.main.ScreenToWorldPoint(Vector2.zero);
		topRight = Camera.main.ScreenToWorldPoint(new Vector2(Screen.width, Screen.height));
	}

	void LateUpdate()
	{
		var pos = transform.position;

		// if past the bounds on the horizontal or vertical axis, fix it
		pos.x = Mathf.Clamp(pos.x, bottomLeft.x, topRight.x);
		pos.y = Mathf.Clamp(pos.y, bottomLeft.y, topRight.y);

		// apply the position
		transform.position = pos;
	}
}
```
