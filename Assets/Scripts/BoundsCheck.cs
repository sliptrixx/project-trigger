using System.Collections;
using System.Collections.Generic;
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
		var position = transform.position;

		// if past the bounds on the horizontal axis, fix it
		if(position.x < bottomLeft.x) { position.x = bottomLeft.x; }
		else if(position.x > topRight.x) { position.x = topRight.x; }

		// if past the bounds on the vertical axis, fix it
		if(position.y < bottomLeft.y) { position.y = bottomLeft.y; }
		else if(position.y > topRight.y) { position.y = topRight.y; }

		// apply the position
		if(position != transform.position) { transform.position = position; }
	}
}
