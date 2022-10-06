"use strict";(self.webpackChunkproject_trigger=self.webpackChunkproject_trigger||[]).push([[947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Tutorial: Player Movement",l={unversionedId:"Tutorials/player_movement",id:"Tutorials/player_movement",title:"Tutorial: Player Movement",description:"In this section we will learn how to create a simple player script and attach it to an object in the scene to move it left and right.",source:"@site/docs/Tutorials/1_player_movement.md",sourceDirName:"Tutorials",slug:"/Tutorials/player_movement",permalink:"/docs/Tutorials/player_movement",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/docs/intro"}},s={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"PlayerControls.cs",id:"playercontrolscs",level:2},{value:"Detecting Input",id:"detecting-input",level:3},{value:"Adding Movement",id:"adding-movement",level:3},{value:"Combine the Two",id:"combine-the-two",level:3},{value:"Delta Time",id:"delta-time",level:3},{value:"Speed",id:"speed",level:3},{value:"Final Script",id:"final-script",level:3},{value:"Bonus Tips",id:"bonus-tips",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tutorial-player-movement"},"Tutorial: Player Movement"),(0,a.kt)("p",null,"In this section we will learn how to create a simple player script and attach it to an object in the scene to move it left and right."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new GameObject in the scene and name it ",(0,a.kt)("inlineCode",{parentName:"li"},"Player")),(0,a.kt)("li",{parentName:"ul"},"Add a SpriteRenderer component to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Player")," GameObject",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Set the Sprite to the "playerShip1_blue"'))),(0,a.kt)("li",{parentName:"ul"},"Create a new C# script called ",(0,a.kt)("inlineCode",{parentName:"li"},"PlayerControls.cs")," and attach it to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Player")," GameObject")),(0,a.kt)("h2",{id:"playercontrolscs"},"PlayerControls.cs"),(0,a.kt)("h3",{id:"detecting-input"},"Detecting Input"),(0,a.kt)("p",null,"To detect an input from the user, we can use Unity's Input system to detect when the user presses a key. We can then use this information to move the player."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"if(Input.GetKey(KeyCode.D)) {\n    // if called on Update, the user is holding down the D key\n}\n")),(0,a.kt)("p",null,"There are other similar APIs to detect when a key is pressed or released. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Input.GetKeyDown(KeyCode.D)")," will return true if the user pressed the D key this frame. ",(0,a.kt)("inlineCode",{parentName:"p"},"Input.GetKeyUp(KeyCode.D)")," will return true if the user released the D key this frame."),(0,a.kt)("h3",{id:"adding-movement"},"Adding Movement"),(0,a.kt)("p",null,"There are many different ways to move a GameObject. For now, lets use the most simplest method: using transform.position. In Unity, all GameObjects have a transform component. A transform component stores the position, rotation, and scale data for an individual GameObject. We can use the transform.position property to move the GameObject."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// move the player 1 unit to the right\ntransform.position += new Vector3(1, 0, 0);\n\n// move the player 1 unit to the left\ntransform.position -= new Vector3(1, 0, 0);\n")),(0,a.kt)("p",null,"Unity also provides helper values such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector3.right")," which represents ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector3(1, 0, 0)"),". This can help make the code more readable."),(0,a.kt)("h3",{id:"combine-the-two"},"Combine the Two"),(0,a.kt)("p",null,"Now that we know how to detect input and move the player, we can put it all together to create a simple player script."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using UnityEngine;\n\npublic class PlayerControls : MonoBehaviour\n{\n    void Update()\n    {\n        if(Input.GetKey(KeyCode.D))\n        {\n            transform.position += Vector3.right;\n        }\n\n        if(Input.GetKey(KeyCode.A))\n        {\n            transform.position -= Vector3.right;\n        }\n    }\n}\n")),(0,a.kt)("h3",{id:"delta-time"},"Delta Time"),(0,a.kt)("p",null,"Now lets test, if this works. We quickly notice the player is moving too fast. Because we are calling the move logic on Update, we are moving the object by 1 unit every frame. We can fix this by multiplying the movement vector by a value ",(0,a.kt)("inlineCode",{parentName:"p"},"deltaTime"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"deltaTime")," is the time in seconds it took to complete the last frame. This value will be different for every computer, so we can use it to make the movement speed consistent across different computers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"transform.position += Vector3.right * Time.deltaTime;\n")),(0,a.kt)("h3",{id:"speed"},"Speed"),(0,a.kt)("p",null,"You may notice that the script is now moving at a speed of 1 units per second. We can speed things up by multiplying the movement vector by a float representing a value higher than 1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// move the player 5 units per second\nfloat speed = 5f;\ntransform.position += Vector3.right * Speed * Time.deltaTime;\n")),(0,a.kt)("h3",{id:"final-script"},"Final Script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class PlayerControls : MonoBehaviour\n{\n    [Tooltip("The speed at which the player ship moves")]\n    public float Speed = 3;\n\n    void Update()\n    {\n        if(Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.RightArrow))\n        {\n            transform.position += Vector3.right * Speed * Time.deltaTime;\n        }\n\n        if(Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.LeftArrow))\n        {\n            transform.position -= Vector3.right * Speed * Time.deltaTime;\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"bonus-tips"},"Bonus Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Since the variable is public, you can make the speed value editable in the inspector. This can be useful for testing different values without having to recompile the code."),(0,a.kt)("li",{parentName:"ul"},"If you want to keep the variable private, you can use the ",(0,a.kt)("inlineCode",{parentName:"li"},"[serializeField]")," attribute just before variable declaration to make it editable in the inspector."),(0,a.kt)("li",{parentName:"ul"},"You can also use the ",(0,a.kt)("inlineCode",{parentName:"li"},"[Tooltip]")," attribute to add a tooltip to the variable in the inspector.")))}u.isMDXComponent=!0}}]);