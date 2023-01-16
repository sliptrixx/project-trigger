"use strict";(self.webpackChunkproject_trigger=self.webpackChunkproject_trigger||[]).push([[855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,u=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(u,r(r({ref:t},h),{},{components:n})):a.createElement(u,r({ref:t},h))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),i=n(7294),o=n(6010),r=n(2389),l=n(7392),s=n(7094),c=n(2466);const h="tabList__CuJ",m="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:r,values:p,groupId:d,className:u}=e,f=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===r?r:r??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,s.U)(),[w,T]=(0,i.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=d){const e=y[d];null!=e&&e!==w&&g.some((t=>t.value===e))&&T(e)}const R=e=>{const t=e.currentTarget,n=N.indexOf(t),a=g[n].value;a!==w&&(C(t),T(a),null!=d&&k(d,String(a)))},S=e=>{let t=null;switch(e.key){case"Enter":R(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",h)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},u)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:S,onClick:R},r,{className:(0,o.Z)("tabs__item",m,r?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,i.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}},9627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(7462),i=(n(7294),n(3905)),o=n(5488),r=n(5162);const l={sidebar_position:6},s="Tutorial: Basic Enemy",c={unversionedId:"Basic Tutorials/basic_enemy",id:"Basic Tutorials/basic_enemy",title:"Tutorial: Basic Enemy",description:"",source:"@site/docs/Basic Tutorials/6_basic_enemy.md",sourceDirName:"Basic Tutorials",slug:"/Basic Tutorials/basic_enemy",permalink:"/project-trigger/docs/Basic Tutorials/basic_enemy",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Health",permalink:"/project-trigger/docs/Basic Tutorials/health"},next:{title:"Tutorial: Stages",permalink:"/project-trigger/docs/Basic Tutorials/stages"}},h={},m=[{value:"Getting Started",id:"getting-started",level:2},{value:"EnemyAI.cs",id:"enemyaics",level:2},{value:"Blaster",id:"blaster",level:3},{value:"Shooting",id:"shooting",level:3},{value:"Movement",id:"movement",level:3},{value:"Bonus",id:"bonus",level:2},{value:"Orientation Agnostic Movement",id:"orientation-agnostic-movement",level:3},{value:"Final Script",id:"final-script",level:2},{value:"Final Thoughts",id:"final-thoughts",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tutorial-basic-enemy"},"Tutorial: Basic Enemy"),(0,i.kt)("p",null,"In this section, we will go over how we can create a basic enemy that can move left and right and shoot bullets at a constant rate. We will reuse a lot of code we have written in the previous sections and learn how powerful modular single-responsibility code can be."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, let's convert our ",(0,i.kt)("inlineCode",{parentName:"li"},"Meteor")," gameobject into a prefab by dragging it into the ",(0,i.kt)("em",{parentName:"li"},'"Prefabs"')," folder"),(0,i.kt)("li",{parentName:"ul"},"Next, let's create a new GameObject called ",(0,i.kt)("inlineCode",{parentName:"li"},"Enemy")," and set it up similarly to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Meteor")," GameObject",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add a sprite renderer and set the sprite to ",(0,i.kt)("inlineCode",{parentName:"li"},"EnemyRed5")),(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"Rigidbody2D")," component and set the gravity scale to 0"),(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"CircleCollider2D")," component and set the radius to 0.485"),(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"Health")," component and set the hp to 3"),(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"Blaster")," component and add the appropriate bullet prefab"))),(0,i.kt)("li",{parentName:"ul"},"Rotate the ",(0,i.kt)("inlineCode",{parentName:"li"},"Enemy")," GameObject 180 degrees on the Z axis")),(0,i.kt)("p",null,"Notice how we are reusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Health")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Blaster")," components we created in the previous sections. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Health")," script can be damaged and destroyed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Bullet")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Blaster")," script can shoot bullets from a specified offset. Furthermore, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Blaster")," component uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"Bullet")," prefab with a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"Projectile")," script we previously created."),(0,i.kt)("p",null,"These scripts are not local to the player but can be used by any GameObject, which is pretty cool. This is the power of modular single-responsibility code. We can reuse the same code for different purposes."),(0,i.kt)("h2",{id:"enemyaics"},"EnemyAI.cs"),(0,i.kt)("p",null,"Now let's create a new script called ",(0,i.kt)("inlineCode",{parentName:"p"},"EnemyAI.cs")," and add it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Enemy")," GameObject that will be responsible for controlling when the enemy shoots and its movement."),(0,i.kt)("h3",{id:"blaster"},"Blaster"),(0,i.kt)("p",null,"Let's start with the shooting. First, we need a reference to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Blaster")," component so we can shoot bullets. We can get a reference to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Blaster")," component in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Start")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"protected Blaster blaster;\n\nvoid Start()\n{\n    blaster = GetComponent<Blaster>();\n}\n")),(0,i.kt)("p",null,"A really useful attribute we can use is the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequireComponent")," attribute. This attribute will force a GameObject to have the specified component when this component is attached. First, have a look at what it looks like."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"[RequireComponent(typeof(Blaster))]\npublic class EnemyAI : MonoBehaviour\n{\n    // ...\n}\n")),(0,i.kt)("p",null,"Here, we are defining that the ",(0,i.kt)("inlineCode",{parentName:"p"},"EnemyAI")," component requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"Blaster")," component to function. So, when you add an EnemyAI component to a GameObject, it will automatically add a ",(0,i.kt)("inlineCode",{parentName:"p"},"Blaster")," component to the GameObject. This is useful because we don't have to worry about adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"Blaster")," component to the GameObject, and we can just assume that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Blaster")," component is there. Another benefit of this is that if we accidentally try to remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"Blaster")," component from a GameObject with the ",(0,i.kt)("inlineCode",{parentName:"p"},"EnemyAI")," component, Unity will prevent us from doing so."),(0,i.kt)("h3",{id:"shooting"},"Shooting"),(0,i.kt)("p",null,"We want the enemy to fire projectiles at a constant rate, say every x seconds. We can define this rate as ",(0,i.kt)("inlineCode",{parentName:"p"},"fireRate")," and set it to 1 second. We can use another variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"fireTimer")," to keep track of how much time has elapsed since the last shot. As soon as the ",(0,i.kt)("inlineCode",{parentName:"p"},"fireTimer")," reaches the ",(0,i.kt)("inlineCode",{parentName:"p"},"fireRate")," we can shoot a bullet and reset the ",(0,i.kt)("inlineCode",{parentName:"p"},"fireTimer")," to 0."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// how often the enemy shoots\n[SerializeField] protected float fireRate = 1.0f;\n\n// variable to keep track of how many seconds have elapsed since the last shot\nprotected float fireTimer = 0;\n\nvoid Update()\n{\n    // increment the timer\n    fireTimer += Time.deltaTime;\n\n    // if the timer has elapsed, shoot a bullet and reset the timer\n    if(fireTimer >= fireRate)\n    {\n        blaster.Shoot();\n        fireTimer = 0;\n    }\n}\n")),(0,i.kt)("p",null,"Now we can test our game and see if the enemy is shooting bullets at a constant rate. Try changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"fireRate")," value in the inspector to see how it affects the game."),(0,i.kt)("h3",{id:"movement"},"Movement"),(0,i.kt)("p",null,"The enemy now shoots bullets at a constant rate, but it is static and kind of boring. Let's make it a bit more interesting by making it move left and right. We must define a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"moveSpeed")," that determines how fast the enemy will move. We also need to define a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"WiggleRoom")," (probably there's a better name to describe this functionality) that defines how far the enemy can move left and right from its initial position. Finally, we need a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"MoveRight")," that determines if the enemy is moving right or left."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// how fast the enemy moves\n[SerializeField] protected float moveSpeed = 1.0f;\n\n// how far the enemy can move left and right from its initial position\n[SerializeField] protected float WiggleRoom = 1.0f;\n\n// determines if the enemy is moving right or left\n[SerializeField] protected bool MoveRight = true;\n")),(0,i.kt)("p",null,"It might seem unnecessary to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"SerializeField")," attribute to it, but by making the ",(0,i.kt)("inlineCode",{parentName:"p"},"MoveRight")," variable editable in the editor, we can change the start direction of the enemy."),(0,i.kt)("p",null,"To move the enemy from the start position, we need to first store and cache the initial position of the enemy. We can do this in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Start")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// the position that anchors the enemy\nprotected Vector3 anchor;\n\nvoid Start()\n{\n    // cache the initial position of the enemy\n    anchor = transform.position;\n}\n")),(0,i.kt)("p",null,'Now in the update loop, we can move the enemy in the expected direction. I\'m going to do it in a "dumb" way, but in the bonus section, we will make it a bit more interesting.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"void Update()\n{\n    // the vector3 direction in which the enemy should move\n    Vector3 direction = (MoveRight) ? Vector3.right : -Vector3.right;\n\n    // apply the movement\n    transform.position += direction * moveSpeed * Time.deltaTime;\n\n    // switch direction of travel once the enemy has reached the edge of the wiggle room\n    if ((MoveRight && transform.position.x > anchor.x + WiggleRoom / 2) || (!MoveRight && transform.position.x < anchor.x WiggleRoom / 2))\n    {\n        MoveRight = !MoveRight;\n    }\n}\n")),(0,i.kt)("p",null,"Now we test this feature in the game and see if the enemy is moving left to right and right to left. Try changing and experimenting with the exposed values in the inspector and see how it affects the game."),(0,i.kt)("h2",{id:"bonus"},"Bonus"),(0,i.kt)("h3",{id:"orientation-agnostic-movement"},"Orientation Agnostic Movement"),(0,i.kt)("p",null,"The enemy moves left and right, but there's an issue. Try rotating the player and see what happens. The enemy will continue moving left and right in the world space and not with respect to its orientation. If that's your desired behavior, then you can skip this section. However, if you want the enemy to move left and right with respect to its orientation, then keep reading."),(0,i.kt)("p",null,"We can solve this by using the local transform right vector instead of the world space right vector. And for the condition to switch the direction of travel, we can calculate the distance between the enemy's current position and the anchor position and compare it to the wiggle room."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// the direction to move\nVector3 direction = (MoveRight) ? transform.right : -transform.right;\ntransform.position += direction * moveSpeed * Time.deltaTime;\n\n// switch direction of travel once the enemy has reached the edge of the wiggle room\nif(Vector3.Distance(anchor, transform.position) > WiggleRoom / 2) \n{\n    MoveRight = !MoveRight;\n}\n")),(0,i.kt)("h2",{id:"final-script"},"Final Script"),(0,i.kt)("p",null,"Here is the final script for the ",(0,i.kt)("inlineCode",{parentName:"p"},"EnemyAI")," component."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Regular",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using UnityEngine;\n\n[RequireComponent(typeof(Blaster))]\npublic class EnemyAI : MonoBehaviour\n{\n    [Tooltip("How frequently should the enemy fire a projectile (given in seconds)")]\n    [SerializeField] protected float fireRate = 1;\n\n    [Header("Simple movement")]\n    [Tooltip("How fast should the enemy travel in terms units/seconds")]\n    [SerializeField] protected float moveSpeed = 1;\n\n    [Tooltip("How far should the the enemy move")]\n    [SerializeField] protected float WiggleRoom = 1;\n\n    [Tooltip("The direction in which the enemy AI should currently move")]\n    [SerializeField] protected bool MoveRight = true;\n\n    // A private reference to the blaster that the enemy can shoot from\n    protected Blaster blaster;\n\n    // this variable is used to track how many seconds have elapsed since last fired\n    protected float fireTimer = 0;\n\n    // the position that anchor\'s the enemy\n    protected Vector3 anchor;\n\n    void Start()\n    {\n        // since we are using the RequireComponent attribute, we are guaranteed to have a blaster\n        blaster = GetComponent<Blaster>();\n\n        // set the anchor position so that the enemy can move left and right relative to it\n        anchor = transform.position;\n    }\n\n    private void Update()\n    {\n        // increment the timer\n        fireTimer += Time.deltaTime;\n\n        // if the timer has elapsed, shoot from the blaster and reset the timer\n        if(fireTimer >= fireRate)\n        {\n            blaster.Shoot();\n            fireTimer = 0;\n        }\n\n        // move the player in the expected direction\n        Vector3 move = MoveRight ? Vector3.right : -Vector3.right;\n        transform.position += move * Time.deltaTime * moveSpeed;\n\n        // do the check to toggle the direction once they have travelled pass the bounds\n        if ((MoveRight && transform.position.x > anchor.x + WiggleRoom / 2) || (!MoveRight && transform.position.x < anchor.x - WiggleRoom / 2))\n        {\n            MoveRight = !MoveRight;\n        }\n    }\n}\n'))),(0,i.kt)(r.Z,{value:"Orientation Agnostic",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using UnityEngine;\n\n[RequireComponent(typeof(Blaster))]\npublic class EnemyAI : MonoBehaviour\n{\n    [Tooltip("How frequently should the enemy fire a projectile (given in seconds)")]\n    [SerializeField] protected float fireRate = 1;\n\n    [Header("Simple movement")]\n    [Tooltip("How fast should the enemy travel in terms units/seconds")]\n    [SerializeField] protected float moveSpeed = 1;\n\n    [Tooltip("How far should the the enemy move")]\n    [SerializeField] protected float WiggleRoom = 1;\n\n    [Tooltip("The direction in which the enemy AI should currently move")]\n    [SerializeField] protected bool MoveRight = true;\n\n    // A private reference to the blaster that the enemy can shoot from\n    protected Blaster blaster;\n\n    // this variable is used to track how many seconds have elapsed since last fired\n    protected float fireTimer = 0;\n\n    // the position that anchor\'s the enemy\n    protected Vector3 anchor;\n\n    void Start()\n    {\n        // since we are using the RequireComponent attribute, we are guaranteed to have a blaster\n        blaster = GetComponent<Blaster>();\n\n        // set the anchor position so that the enemy can move left and right relative to it\n        anchor = transform.position;\n    }\n\n    private void Update()\n    {\n        // increment the timer\n        fireTimer += Time.deltaTime;\n\n        // if the timer has elapsed, shoot from the blaster and reset the timer\n        if(fireTimer >= fireRate)\n        {\n            blaster.Shoot();\n            fireTimer = 0;\n        }\n\n        // move the player in the expected direction\n        Vector3 move = MoveRight ? transform.right : -transform.right;\n        transform.position += move * Time.deltaTime * moveSpeed;\n\n        // do the check to toggle the direction once they have travelled pass the bounds\n        if (Vector3.Distance(anchor, transform.position) > WiggleRoom / 2)\n        {\n            MoveRight = !MoveRight;\n        }\n    }\n}\n')))),(0,i.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,i.kt)("p",null,"In this tutorial, we learned how to create a very simple enemy AI that uses a blaster to shoot at the player at a constant fire rate while moving left and right. It's very much possible to split this script into multiple components, say, separating the movement and the shooting functionality. However, for the sake of simplicity, I decided to keep it all in one script."),(0,i.kt)("p",null,"Moreover, I plan on upgrading the Enemy AI script to use a finite state machine, so the simpler the script is, the less work to scrap and rewrite. The content on the finite state machine will be covered in a future tutorial in the advanced section of the series."))}d.isMDXComponent=!0}}]);