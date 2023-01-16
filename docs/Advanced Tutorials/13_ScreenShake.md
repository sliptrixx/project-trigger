---
sidebar_position: 13
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial: Screen Shake
In this short tutorial, we will discuss how we can use a `CameraShake` script to shake the camera when an event occurs. This is useful in games to add a bit of excitement to them. We will be primarily looking at an implementation technique that works for a fixed 2D camera. This is not the only way to implement screen shake, but it is a simple and effective way to do it.

## ScreenShake.cs
Let's start by creating and attaching a new script called `CameraShake` and attach it to the main camera. We will need to store the original position of the camera so that we can apply an offset to it. 

```csharp
// the original position of the camera
Vector3 origin;

void Start()
{
    origin = transform.position; // assuming that the script is attached to the camera
}
```

We need to create a function that will start the camera shake. The actual shake will be done in the `Update` function, but we need to store the duration and magnitude of the shake so that we can use it in the `Update` function.

```csharp
// how long the camera shake should last?
float duration = 0;

// how strong the camera shake should be?
float magnitude = 0;

public void Shake(float duration, float magnitude)
{
    this.duration = duration;
    this.magnitude = magnitude;
}
```

### Shaking the camera
The magnitude of the shake is the maximum distance that the camera can move from the original position. We can pick a random float value between 0 and the magnitude and apply that as the offset to the camera on the `x-axis. We can then use this `x` value and the `magnitude` to calculate the `y` value using the Pythagorean theorem. This will give us a random offset that's part of the circle with the radius of the magnitude.

$$y = sqrt(\sqrt(magnitude^2-x^2))$$

```csharp
void Update()
{
    // skip if the duration is 0
    if (duration <= 0) { return; }

    // pick a random value that's between 0 and the magnitude as the x offset
    float x = Random.Range(0, magnitude);

    // calculate the y offset so that's it in a circle with a radius of magnitude
    float y = Mathf.Sqrt(magnitude * magnitude - x * x);

    // apply the offset to the camera
    transform.position = origin + new Vector3(x, y, 0);

    // tick the timer down
    duration -= Time.deltaTime;
}
```

The other thing we need to do is to determine the axis of the shake. I just picked a scheme where the shake on the horizontal axis is flip-flopped every frame and the shake on the vertical axis is random. There's probably a much better way to do this, but this is just a simple implementation that doesn't look too bad.

```csharp
bool moveRight = false;

void Update()
{
    // ... calculate x and y

    // pick the positive/negative axises - x is based on moveRight - y is random
    x *= moveRight ? 1 : -1;
    y *= (Random.Range(0.0f, 1.0f) < 0.5f) ? 1 : -1;

    // apply the offset to the camera
    transform.position = origin + new Vector3(x, y, 0);

    // end of tick updates
    moveRight = !moveRight;
    duration -= Time.deltaTime;
}
```

### Using the CameraShake
We can use the `CameraShake` script to apply a shake to the camera when an entity takes damage. This has to be implemented in the `health` script

```csharp
CameraShake cameraShake;

void Start()
{
    cameraShake = FindObjectOfType<CameraShake>();
}

public void ApplyDamage(int damage)
{
    hp -= damage;

    // apply camera shake as a feedback
    cameraShake.Shake(0.25f, 0.2f);

    if (hp <= 0)
    {
        // audio code...

        // Apply a larger camera shake on death
        cameraShake.Shake(0.4f, 0.4f);
    }
}
```

### Attenuating the shake
The shake is constant right now, but we can make it attenuated and it's magnitude will decrease to 0 over time. We can do this by introducing a new variable called `attenuation` which will represent the rate at which the magnitude will decrease every second. We can then decrease the magnitude by this calculated `attenuation` value.

```csharp
void Update()
{
    // end of tick updates
    magnitude -= attenuation * Time.deltaTime;
}

public void Shake(float duration, float magnitude)
{
    this.duration = duration;
    this.magnitude = magnitude;

    // calculate the attenuation
    attenuation = magnitude / duration;
}
```

## Conculsion
This tutorial covers a very simple implementation of screen shake with some basic attenuation. However, there are many different ways to do it and make it better. You may try and lerp from the current offset to the new expected offset to make it smoother. You may return it back to its origin after the shake is done. You may calculate the magnitude of the shake from the source based on the distance from the player.

Furthermore, all of the techniques discussed seem very simple for a 2D game with a fixed camera. However, once the camera starts moving, the camera's position is no longer the `transform.position` of the camera. You will need to store that position in a different variable and use that to set the `transform.position` and apply the camera shake. It becomes a bit more complicated, but it's still doable.

## Final Scripts

<Tabs>
<TabItem value="CameraShake.cs">

```csharp
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
```

</TabItem>
<TabItem value="Health.cs">

```csharp
using UnityEngine;

public class Health : MonoBehaviour
{
    [SerializeField] protected int hp = 1;

    CameraShake cameraShake = null;

    void Start()
    {
        cameraShake = FindObjectOfType<CameraShake>();
    }

    // Apply damage to the object
    public void ApplyDamage(int damage)
    {
        hp -= damage;

        // apply camera shake as a feedback
        cameraShake.Shake(0.25f, 0.2f);

        // if the health drops below zero destroy the object
        if (hp <= 0)
        {
            // play the explosion sound effect before destroying the object
            var audioManager = FindObjectOfType<AudioManager>();
            audioManager?.PlayExplosion(transform.position);

            // Apply a larger camera shake when the enemy is killed
            cameraShake.Shake(0.4f, 0.4f);

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
