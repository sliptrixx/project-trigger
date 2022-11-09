"use strict";(self.webpackChunkproject_trigger=self.webpackChunkproject_trigger||[]).push([[84],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),h=o,u=m["".concat(c,".").concat(h)]||m[h]||p[h]||r;return n?i.createElement(u,a(a({ref:t},s),{},{components:n})):i.createElement(u,a({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4},a="Tutorial: Collision Detection",l={unversionedId:"Basic Tutorials/collision_detection",id:"Basic Tutorials/collision_detection",title:"Tutorial: Collision Detection",description:"In this section we will go over how to detect collision between two GameObject in Unity and how to use the collision information to create more behaviors for our game.",source:"@site/docs/Basic Tutorials/4_collision_detection.md",sourceDirName:"Basic Tutorials",slug:"/Basic Tutorials/collision_detection",permalink:"/project-trigger/docs/Basic Tutorials/collision_detection",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Player Shoot",permalink:"/project-trigger/docs/Basic Tutorials/player_shoot"},next:{title:"Tutorial: Health",permalink:"/project-trigger/docs/Basic Tutorials/health"}},c={},d=[{value:"Colliders and Rigidbody",id:"colliders-and-rigidbody",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Collision Detection in Projectile",id:"collision-detection-in-projectile",level:2},{value:"Destroy the Projectile",id:"destroy-the-projectile",level:3},{value:"Destroy the Meteor",id:"destroy-the-meteor",level:3},{value:"Final Projectile Script",id:"final-projectile-script",level:3}],s={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-collision-detection"},"Tutorial: Collision Detection"),(0,o.kt)("p",null,"In this section we will go over how to detect collision between two GameObject in Unity and how to use the collision information to create more behaviors for our game."),(0,o.kt)("h2",{id:"colliders-and-rigidbody"},"Colliders and Rigidbody"),(0,o.kt)("p",null,"In Unity, there are two primary components that are used to detect collision: ",(0,o.kt)("inlineCode",{parentName:"p"},"Collider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Rigidbody"),". According to Unity's documentation, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Collider")," component is used to define the shape of a GameObject and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Rigidbody")," component is used to define physical properties of a GameObject. In Unity, these two components are used together to detect collision between two GameObjects."),(0,o.kt)("p",null,"Since we are working with 2D games, we will only be using the 2D version of these components: ",(0,o.kt)("inlineCode",{parentName:"p"},"Collider2D")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Rigidbody2D"),". But be aware that for 3D games, you will be using the 3D version of these components: ",(0,o.kt)("inlineCode",{parentName:"p"},"Collider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Rigidbody"),". Also, if you search for ",(0,o.kt)("inlineCode",{parentName:"p"},"Collider2D"),", you will find that there are many different types of ",(0,o.kt)("inlineCode",{parentName:"p"},"Collider2D")," components such as ",(0,o.kt)("inlineCode",{parentName:"p"},"BoxCollider2D"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CircleCollider2D"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"CapsuleCollider2D"),"."),(0,o.kt)("p",null,"Finally the last concept we need to understand is the concept of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Trigger"),". A ",(0,o.kt)("inlineCode",{parentName:"p"},"Trigger")," is a special type of a collider that does not have any physical properties, i.e., it doesn't react to a collision. Instead, it is used to solely detect a collision and then perform some action. For example, when the player enters a room trigger, we can spawn enemies in that room. A trigger can detect collision with any type of collider, except another trigger."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new GameObject and name it ",(0,o.kt)("inlineCode",{parentName:"li"},"Meteor"),"."),(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"SpriteRenderer")," component to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Meteor")," GameObject and set the ",(0,o.kt)("inlineCode",{parentName:"li"},"Sprite")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"meteorGrey_big1"),"."),(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"Rigidbody2D")," component to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Meteor")," GameObject."),(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"CircleCollider2D")," component to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Meteor")," GameObject.")),(0,o.kt)("h2",{id:"collision-detection-in-projectile"},"Collision Detection in Projectile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"Rigidbody2D")," component to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Projectile")," Prefab."),(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"CircleCollider2D")," component to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Projectile")," Prefab."),(0,o.kt)("li",{parentName:"ul"},"Set the ",(0,o.kt)("inlineCode",{parentName:"li"},"Is Trigger")," property of the ",(0,o.kt)("inlineCode",{parentName:"li"},"CircleCollider2D")," component to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},"Apply an offset to the ",(0,o.kt)("inlineCode",{parentName:"li"},"CircleCollider2D")," component by (0, 0.2) and set the ",(0,o.kt)("inlineCode",{parentName:"li"},"Radius")," to 0.075.")),(0,o.kt)("p",null,"In the projectile script, we can detect a collision with Unity's ",(0,o.kt)("inlineCode",{parentName:"p"},"OnTriggerEnter2D")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"void OnTriggerEnter2D(Collider2D other)\n{\n    // Print the name of the other object\n    Debug.Log(other.gameObject.name);\n}\n")),(0,o.kt)("p",null,"Similarly, we have other functions to check if we are actively inside a trigger or if we have exited a trigger."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"void OnTriggerStay2D(Collider2D other) { }\nvoid OnTriggerExit2D(Collider2D other) { }\n")),(0,o.kt)("h3",{id:"destroy-the-projectile"},"Destroy the Projectile"),(0,o.kt)("p",null,"Now that we can detect a collision, we can destroy the projectile when it collides with something. Just like how we destroyed the projectile after travelling a certain distance, we can destroy the projectile when it collides with something."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"void OnTriggerEnter2D(Collider2D other)\n{\n    // Destroy the projectile gameobject\n    Destroy(gameObject);\n}\n")),(0,o.kt)("h3",{id:"destroy-the-meteor"},"Destroy the Meteor"),(0,o.kt)("p",null,"Notice that we have a reference to the GameObject that the projectile collided with. We can use this reference to destroy the meteor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"void OnTriggerEnter2D(Collider2D other)\n{\n    // Destroy the meteor gameobject\n    Destroy(other.gameObject);\n}\n")),(0,o.kt)("h3",{id:"final-projectile-script"},"Final Projectile Script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class Projectile : MonoBehaviour\n{\n    [Tooltip("The speed at which the projectile travels")]\n    [SerializeField] float Speed = 5;\n\n    [Tooltip("The max distance it can travel, before the projectile gets destroyed")]\n    [SerializeField] float MaxDistance = 10;\n\n    // how much distance has the projectile travelled?\n    float distanceTravelled = 0;\n\n    // called every frame\n    void Update()\n    {\n        // move it in the direction the object is looking at factored by speed\n        transform.position += transform.up * (Speed * Time.deltaTime);\n        \n        // increment the variable tracking the total distance travelled by the projectile,\n        // then check if it has travelled past the max distance\n        distanceTravelled += Speed * Time.deltaTime;\n        if(distanceTravelled >= MaxDistance)\n        {\n            // destroy the projectile if it has travelled more than the max distance\n            Destroy(gameObject);\n        }\n\n    }\n\n    // called when the projectile has a collision\n    void OnTriggerEnter2D(Collider2D collision)\n    {\n        // Destroy the collided object\n        Destroy(collision.gameObject);\n\n        // Destroy the projectile\n        Destroy(gameObject);\n    }\n}\n')),(0,o.kt)("p",null,'In the next section we will go over how we can refactor our code to make it more reusable, easier to maintain, and adding more "security" by giving ownership of the object being destroyed to the object that is being destroyed.'))}p.isMDXComponent=!0}}]);