---
sidebar_position: 5
---

# Tutorial: Health
In this section, we will go over how we can modify our code and design developer-friendly APIs to make our code more reusable and functional. We will do this by adding a health functionality to our little game using a health component.

## Health.cs
We will create a new script called `Health.cs` that will be responsible for storing the current health points of a GameObject and can be damaged by other GameObjects.

```csharp
[SerializeField] protected int hp = 1;

public void ApplyDamage(int damage)
{
    hp -= damage;
}
```

By making the `hp` variable `protected`, we are preventing other scripts from directly modifying the `hp` variable. This is a good practice to follow as we developers are humans and we can easily make mistakes. This way we are forcing other scripts to use the `ApplyDamage` function to modify the `hp` variable, so we don't have to worry about other scripts modifying the `hp` variable directly to like say, set it to 1000.

Forcing the use of the `ApplyDamage` function also allows us to add more functionality to the `ApplyDamage` function in the future. For example, we can log the damage taken, play a sound effect when the object is damaged, or even prevent the object from being damaged if it is in an invulnerable state.

<br></br>

```csharp
// Get the health from the health component
public int GetHP() 
{
    return hp;
}
```

With the `hp` variable being protected we must create a public function called `GetHP` that can be used by other scripts to get the current health points of a GameObject. This is not the only way to do this and there's a better way to do it. In C#, we can use properties to make a variable accessible to other scripts but not allow them to modify it. You can learn more about it from [here](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties).

### Additional Functionality
Now, we can add some additional functionality to the `ApplyDamage` function to destroy the GameObject if the `hp` variable is less than or equal to 0. I would like to say that there are many ways to do this, like, checking if the `hp` variable is less than or equal to 0 in the `Update` function, and this is just one way of doing it.

```csharp
hp -= damage;
if(hp <= 0)
{
    Destroy(gameObject);
}
```

This is a good place to reuse functions and add a utility function that can "heal" the GameObject. This is useful if we want to add a power-up that can heal the player.

```csharp
public void ApplyHeal(int heals)
{
    ApplyDamage(-heals);
}
```

### Final Health.cs
```csharp
using UnityEngine;

public class Health : MonoBehaviour
{
    [SerializeField] protected int hp = 1;

    // Apply damage to the object
    public void ApplyDamage(int damage)
    {
        hp -= damage;
        
        // if the health drops below zero destroy the object
        if(hp <= 0)
        {
            Destroy(gameObject);
        }
    }

    // Apply heals to the object
    public void ApplyHeals(int heals)
    {
        // basically reverse the damage
        ApplyDamage(-heals);
    }
}
```

## Modifying the Projectile Script
Now that we have a `Health.cs` script, we can modify our `Projectile.cs` script to use the Health component to apply damage instead of directly destroying the GameObject.

```csharp
void OnTriggerEnter2D(Collider2D other)
{
    // get the health component and if it exists apply damage of 1 to it
    var health = other.GetComponent<Health>();
    if(health != null) 
    {
        health.ApplyDamage(1);
    }

    Destroy(gameObject);
}
```
### Testing
Now let's put this all together and test it out. We will first add the Health component to the Meteor GameObjects and set the `hp` field to 3. Run the game and try shooting at the meteors. You should see that the meteors are destroyed after 3 shots. Try modifying the `hp` field and see how it affects the game.

## Bonus Tips
- We can add an `IsDead` function to the `Health.cs` script and use it to check if the GameObject is dead or not. This is useful if we want to add an enemy AI that stops shooting at a target that is dead.
- The reason why I am using a protected variable instead of a private variable is that this allows us to inherit from the `Health` base class to create a new class that can modify the `hp` variable more interestingly. For example, we can create a `RechargeableHealth` class that can recharge the `hp` variable over time after not taking damage for a certain amount of time. 
