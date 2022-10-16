using UnityEngine;

[RequireComponent(typeof(Blaster))]
public class EnemyAI : MonoBehaviour
{
	[Tooltip("How frequently should the enemy fire a projectile (given in seconds)")]
	[SerializeField] protected float fireRate = 1;

	// A private reference to the blaster that the enemy can shoot from
	protected Blaster blaster;

	// this variable is used to track how many seconds have elapsed since last fired
	protected float fireTimer = 0;

	void Start()
	{
		// since we are using the RequireComponent attribute, we are guaranteed to have a blaster
		blaster = GetComponent<Blaster>();
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
	}
}
