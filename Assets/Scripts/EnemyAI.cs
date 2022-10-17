using UnityEngine;

[RequireComponent(typeof(Blaster))]
public class EnemyAI : MonoBehaviour
{
	[Tooltip("How frequently should the enemy fire a projectile (given in seconds)")]
	[SerializeField] protected float fireRate = 1;

	[Header("Simple movement")]
	[Tooltip("How fast should the enemy travel in terms units/seconds")]
	[SerializeField] protected float moveSpeed = 1;

	[Tooltip("How far should the the enemy move")]
	[SerializeField] protected float WiggleRoom = 1;

	[Tooltip("The direction in which the enemy AI should currently move")]
	[SerializeField] protected bool MoveRight = true;

	// A private reference to the blaster that the enemy can shoot from
	protected Blaster blaster;

	// this variable is used to track how many seconds have elapsed since last fired
	protected float fireTimer = 0;

	// the position that anchor's the enemy
	protected Vector3 anchor;

	void Start()
	{
		// since we are using the RequireComponent attribute, we are guaranteed to have a blaster
		blaster = GetComponent<Blaster>();

		// set the anchor position so that the enemy can move left and right relative to it
		anchor = transform.position;
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

		// move the player in the expected direction
		Vector3 move = MoveRight ? Vector3.right : -Vector3.right;
		transform.position += move * Time.deltaTime * moveSpeed;

		// do the check to toggle the direction once they have travelled pass the bounds
		if ((MoveRight && transform.position.x > anchor.x + WiggleRoom / 2) || (!MoveRight && transform.position.x < anchor.x - WiggleRoom / 2))
		{
			MoveRight = !MoveRight;
		}
	}
}
