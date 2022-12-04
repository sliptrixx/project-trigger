using UnityEngine;

public class CameraShake : MonoBehaviour
{
	// how long the shake should be?
	float duration = 0;

	// how strong should the shake be?
	float magnitude;

	// attenuation per second
	float attenuation;

	// the origin where the object starts
	Vector3 origin;

	// flip flop tracker
	bool moveRight = false;

	void Start()
	{
		origin = transform.position;
	}

	void Update()
	{
		// if the duration is less than 0, there's nothing to shake
		if(duration <= 0) { return; }

		// pick a random value that's between 0 and the magnitude as the x offset
		float x = Random.Range(0, magnitude);

		// calculate the y offset so that's it in a circle with a radius of magnitude
		float y = Mathf.Sqrt(magnitude * magnitude - x * x);

		// pick the positive/negative axises - x is based on moveRight - y is random
		x *= moveRight ? 1 : -1;
		y *= (Random.Range(0.0f, 1.0f) < 0.5f) ? 1 : -1;

		// appply the offset
		transform.position = origin + new Vector3(x, y, 0);

		// tick down the duration and update magnitude based on the calculated attenuation
		duration -= Time.deltaTime;
		magnitude -= attenuation * Time.deltaTime;
		moveRight = !moveRight;
	}

	// Shake the camera with the given magnitude for the specified duration
	public void Shake(float duration, float magnitude)
	{
		this.duration = duration;
		this.magnitude = magnitude;
		attenuation = magnitude / duration;
	}
}
