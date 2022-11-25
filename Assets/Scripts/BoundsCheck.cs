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
