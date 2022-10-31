"use strict";(self.webpackChunkproject_trigger=self.webpackChunkproject_trigger||[]).push([[994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,u=d["".concat(l,".").concat(f)]||d[f]||h[f]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="Tutorial: Player Shoot",s={unversionedId:"Tutorials/player_shoot",id:"Tutorials/player_shoot",title:"Tutorial: Player Shoot",description:"In this section we will learn how to create new scripts and modify existing scripts to allow the player to shoot projectiles created in the last section.",source:"@site/docs/Tutorials/3_player_shoot.md",sourceDirName:"Tutorials",slug:"/Tutorials/player_shoot",permalink:"/project-trigger/docs/Tutorials/player_shoot",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Projectiles",permalink:"/project-trigger/docs/Tutorials/projectile"},next:{title:"Tutorial: Collision Detection",permalink:"/project-trigger/docs/Tutorials/collision_detection"}},l={},p=[{value:"Prefabs",id:"prefabs",level:2},{value:"Creating a Prefab",id:"creating-a-prefab",level:3},{value:"Using a Prefab",id:"using-a-prefab",level:3},{value:"Blaster.cs",id:"blastercs",level:2},{value:"Creating a Projectile",id:"creating-a-projectile",level:3},{value:"Detecting Input",id:"detecting-input",level:3},{value:"Why are we doing it this way?",id:"why-are-we-doing-it-this-way",level:4},{value:"Testing the Blaster",id:"testing-the-blaster",level:3},{value:"Blaster Offset",id:"blaster-offset",level:3},{value:"Final Scripts",id:"final-scripts",level:2},{value:"PlayerControls.cs",id:"playercontrolscs",level:3},{value:"Blaster.cs",id:"blastercs-1",level:3}],c={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-player-shoot"},"Tutorial: Player Shoot"),(0,r.kt)("p",null,"In this section we will learn how to create new scripts and modify existing scripts to allow the player to shoot projectiles created in the last section."),(0,r.kt)("h2",{id:"prefabs"},"Prefabs"),(0,r.kt)("p",null,"In Unity, a prefab is a template for a GameObject aand is useful for creating multiple instances of the same object. For example, if we want projectiles to be dynamically created when the player shoots, we can create a prefab for the projectile and use it as the base for all projectiles spawned by the player."),(0,r.kt)("h3",{id:"creating-a-prefab"},"Creating a Prefab"),(0,r.kt)("p",null,"It's very easy to create a prefab in Unity. Simply drag and drop a GameObject that needs to be a prefab into the Project Window and Unity will automatically convert the GameObject into a prefab."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps to create a projectile prefab:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a folder called ",(0,r.kt)("inlineCode",{parentName:"li"},"Prefabs")," in the Project Window"),(0,r.kt)("li",{parentName:"ul"},"Drag and Drop the projectile GameObject created in the previous section into the ",(0,r.kt)("inlineCode",{parentName:"li"},"Prefabs")," folder")),(0,r.kt)("h3",{id:"using-a-prefab"},"Using a Prefab"),(0,r.kt)("p",null,"We can use a prefab in the scene by dragging and dropping the prefab from the project window into the hierarchy window, and Unity will create a new instance of the prefab in the scene. Try adding multiple instances of the projectile prefab to the scene and modify the sprite in the prefab to see how it affects all instances of the prefab."),(0,r.kt)("p",null,"Another use case for prefabs is to use it as a template for dynamic creation of object. Just like how we can set properties such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Speed")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MaxDistance")," on a projectile, we can pass in reference to a prefab to a script and use it to create new instances of the prefab."),(0,r.kt)("h2",{id:"blastercs"},"Blaster.cs"),(0,r.kt)("p",null,"Go ahead and create a new C# script called ",(0,r.kt)("inlineCode",{parentName:"p"},"Blaster.cs")," and attach it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Player")," GameObject. This script will represent a weapon blaster that will create new projectiles when the player wants to shoot."),(0,r.kt)("h3",{id:"creating-a-projectile"},"Creating a Projectile"),(0,r.kt)("p",null,"If we have a reference to a GameObject prefab, we can use Unity's ",(0,r.kt)("inlineCode",{parentName:"p"},"Instantiate")," function to create a new instance of the prefab. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Instantiate")," function takes a prefab and returns a reference to the new instance of the prefab. We can use this reference to set properties on the new instance of the prefab."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// to create a new instance\nGameObject prefab;\nGameObject instance = Instantiate(prefab);\n\n// to create a new instance and set it's position and rotation\nVector3 position;\nQuaternion rotation;\nGameObject instance = Instantiate(prefab, position, rotation);\n")),(0,r.kt)("p",null,"We can use this information to create a new projectile when the player requests the blaster to shoot. We can do this by creating a new public function called ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," and calling it when the player presses the primary mouse button."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"[SerializeField] GameObject projectilePrefab;\n\npublic void Shoot() \n{\n    // create a new projectile at the blaster's position\n    Instantiate(projectilePrefab, transform.position, transform.rotation);\n}\n")),(0,r.kt)("h3",{id:"detecting-input"},"Detecting Input"),(0,r.kt)("p",null,"We will now modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayerControls.cs")," script to detect when the player presses the primary mouse button and call the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," function on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Blaster")," component. "),(0,r.kt)("p",null,"For that, first we need to add a reference to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Blaster")," component in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayerControls")," script. There are two ways to do this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a serialized field for the ",(0,r.kt)("inlineCode",{parentName:"li"},"Blaster")," component and drag and drop the ",(0,r.kt)("inlineCode",{parentName:"li"},"Blaster")," component from the hierarchy window into the field in the inspector"),(0,r.kt)("li",{parentName:"ul"},"(or) Find the ",(0,r.kt)("inlineCode",{parentName:"li"},"Blaster")," component in the same GameObject as the ",(0,r.kt)("inlineCode",{parentName:"li"},"PlayerControls")," component using the ",(0,r.kt)("inlineCode",{parentName:"li"},"GetComponent")," function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Blaster blaster;\n\nvoid Start()\n{\n    blaster = GetComponent<Blaster>();\n}\n")),(0,r.kt)("p",null,"In the update loop, we can check if the player has pressed the primary mouse button and call the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," function on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Blaster")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// in the update loop\nif(Input.GetMouseButtonDown(0))\n{\n    blaster.Shoot();\n}\n")),(0,r.kt)("h4",{id:"why-are-we-doing-it-this-way"},"Why are we doing it this way?"),(0,r.kt)("p",null,"We don't necessarily need to create a new script for the blaster and could have just added the ",(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," function to the player script. However, it's a good practice to seperate the logic for different components of a GameObject into different scripts. This makes managing the code easier and allows us to reuse the code in other scripts."),(0,r.kt)("p",null,'For example, The Enemies! We can create an enemy that can shoot projectiles by adding a Blaster component to the enemy GameObject. Obviously, we still need to create a "Enemy Brain" script to determine when to call the shoot function, but we can reuse the ',(0,r.kt)("inlineCode",{parentName:"p"},"Shoot")," function in the Blaster script."),(0,r.kt)("h3",{id:"testing-the-blaster"},"Testing the Blaster"),(0,r.kt)("p",null,"Now that we have a blaster that can create projectiles, let's test it out. Press play and try shooting projectiles by pressing the primary mouse button. You should see projectiles being created at the player's position."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are getting an error, make sure that you have a reference to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProjectilePrefab")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Blaster")," component in the inspector.")),(0,r.kt)("h3",{id:"blaster-offset"},"Blaster Offset"),(0,r.kt)("p",null,"The projectiles are being created at the player's position, aka, the center of the player, which is not where the projectile must be fired from. We can add an offset to the projectile's spawn position to fix this issue."),(0,r.kt)("p",null,"To do this, we will add a new serialized Vector2 called ",(0,r.kt)("inlineCode",{parentName:"p"},"Offset")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Blaster"),' component and use that to adjust the spawn position of the projectile. The "offset" has to be applied in the direction of the player\'s rotation, so we will use the ',(0,r.kt)("inlineCode",{parentName:"p"},"Transform.right")," property to modify the horizontal component of the offset and ",(0,r.kt)("inlineCode",{parentName:"p"},"Transform.up")," property to modify the vertical component of the offset."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"[SerializeField] Vector2 offset;\n\npublic void Shoot() \n{\n    // create a new projectile at the blaster's position\n    Vector3 pos = transform.position + transform.right * Offset.x + transform.up * Offset.y;\n    Instantiate(projectilePrefab, transform.position + (Vector3)offset, transform.rotation);\n}\n")),(0,r.kt)("p",null,"Now that we have an offset, let's test it out. Press play and try shooting projectiles by pressing the primary mouse button. You should see projectiles being created from the offset position and not the center of the player. Try adjusting the offset values in the inspector to see how it affects the projectile's spawn position. Also, try rotating the player and shooting projectiles to see how the offset is applied in the direction of the player's rotation."),(0,r.kt)("h2",{id:"final-scripts"},"Final Scripts"),(0,r.kt)("p",null,"Here are the final scripts for this section."),(0,r.kt)("h3",{id:"playercontrolscs"},"PlayerControls.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using UnityEngine;\n\npublic class PlayerControls : MonoBehaviour\n{\n    [Tooltip("The speed at which the player ship moves")]\n    public float Speed = 3;\n\n    Blaster blaster;\n\n    private void Start()\n    {\n        blaster = GetComponent<Blaster>();\n    }\n\n    void Update()\n    {\n        if(Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.RightArrow))\n        {\n            transform.position += Vector3.right * Speed * Time.deltaTime;\n        }\n\n        if(Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.LeftArrow))\n        {\n            transform.position -= Vector3.right * Speed * Time.deltaTime;\n        }\n\n        if(Input.GetMouseButtonDown(0))\n        {\n            blaster.Shoot();\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"blastercs-1"},"Blaster.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using UnityEngine;\n\npublic class Blaster : MonoBehaviour\n{\n    [Tooltip("Additional offset from the source transform from where the projectile is spawned")]\n    [SerializeField] Vector2 Offset;\n\n    [Tooltip("A reference to the projectile prefab that will be used to instantiate projectiles")]\n    [SerializeField] GameObject ProjectilePrefab;\n\n    // Shoot a projectile from the blaster position\n    public void Shoot()\n    {\n        // apply an offset along the direction at which the blaster is looking at,\n        // then spawn a projectile from that position with the current rotation of the blaster\n        var pos = transform.position + Offset.x * transform.right + Offset.y * transform.up;\n        Instantiate(ProjectilePrefab, pos, transform.rotation);\n    }\n}\n')))}h.isMDXComponent=!0}}]);