"use strict";(self.webpackChunkproject_trigger=self.webpackChunkproject_trigger||[]).push([[575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:12},i="Tutorial: Bounds",s={unversionedId:"Advanced Tutorials/bounds",id:"Advanced Tutorials/bounds",title:"Tutorial: Bounds",description:"In this short tutorial, we will discuss how we can use a BoundsCheck script to keep any gameobject within the bounds of the screen. This is useful for 2D games where the camera is confined to a specific area. For example, our top-down shooter game.",source:"@site/docs/Advanced Tutorials/12_bounds.md",sourceDirName:"Advanced Tutorials",slug:"/Advanced Tutorials/bounds",permalink:"/project-trigger/docs/Advanced Tutorials/bounds",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Spritesheet Animation",permalink:"/project-trigger/docs/Advanced Tutorials/spritesheet"},next:{title:"Tutorial: Screen Shake",permalink:"/project-trigger/docs/Advanced Tutorials/ScreenShake"}},c={},p=[{value:"BoundsCheck.cs",id:"boundscheckcs",level:2},{value:"Limiting the Bounds",id:"limiting-the-bounds",level:3},{value:"Final Script",id:"final-script",level:3}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-bounds"},"Tutorial: Bounds"),(0,r.kt)("p",null,"In this short tutorial, we will discuss how we can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"BoundsCheck")," script to keep any gameobject within the bounds of the screen. This is useful for 2D games where the camera is confined to a specific area. For example, our top-down shooter game."),(0,r.kt)("h2",{id:"boundscheckcs"},"BoundsCheck.cs"),(0,r.kt)("p",null,"Let's start by creating a new script called ",(0,r.kt)("inlineCode",{parentName:"p"},"BoundsCheck"),' and attaching it to our player. In this script we need to determine what the "bounds" are. Unity provides a helpful function part of the camera called ',(0,r.kt)("inlineCode",{parentName:"p"},"ScreenToWorldPoint"),". This function takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"Vector2")," position in screen space (although the API only accepts a vector3 and an automatic casting happens in the background) and converts it to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Vector3")," world space. "),(0,r.kt)("p",null,"The bottom left corner of the screen is considered as (0, 0)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"Vector3 bottomLeft = Camera.main.ScreenToWorldPoint(Vector2.zero);\n")),(0,r.kt)("p",null,"And the top right corner of the screen is the screen width and height. This can be accessed from the static class ",(0,r.kt)("inlineCode",{parentName:"p"},"Screen")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"topRight = Camera.main.ScreenToWorldPoint(new Vector2(Screen.width, Screen.height));\n")),(0,r.kt)("p",null,"This can be called at the start of the game and stored in a variable for later use. This will work in most cases, but it's important to note that if the screen size changes mid-game, the bounds will be incorrect. And unfortunately, there is no event provided by Unity to detect when the screen size changes, however, you may write your own event handler to detect this and use that to update the bounds."),(0,r.kt)("h3",{id:"limiting-the-bounds"},"Limiting the Bounds"),(0,r.kt)("p",null,"Now that we have the bounds, we need to limit the object the script is attached to to the calculated bounds. We can do this by checking the position of the object and clamping it to the bounds. We need to do this in the ",(0,r.kt)("inlineCode",{parentName:"p"},"LateUpdate")," function because we want to make sure that the object has been updated to the correct expected position before we clamp it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"void LateUpdate()\n{\n    Vector3 pos = transform.position;\n    pos.x = Mathf.Clamp(pos.x, bottomLeft.x, topRight.x);\n    pos.y = Mathf.Clamp(pos.y, bottomLeft.y, topRight.y);\n    transform.position = pos;\n}\n")),(0,r.kt)("h3",{id:"final-script"},"Final Script"),(0,r.kt)("p",null,"Here's the final script for reference."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using UnityEngine;\n\npublic class BoundsCheck : MonoBehaviour\n{\n    Vector3 bottomLeft;\n    Vector3 topRight;\n\n    void Start()\n    {\n        // calculate the bottom left and top right point of the screen bounds\n        bottomLeft = Camera.main.ScreenToWorldPoint(Vector2.zero);\n        topRight = Camera.main.ScreenToWorldPoint(new Vector2(Screen.width, Screen.height));\n    }\n\n    void LateUpdate()\n    {\n        var pos = transform.position;\n\n        // if past the bounds on the horizontal or vertical axis, fix it\n        pos.x = Mathf.Clamp(pos.x, bottomLeft.x, topRight.x);\n        pos.y = Mathf.Clamp(pos.y, bottomLeft.y, topRight.y);\n\n        // apply the position\n        transform.position = pos;\n    }\n}\n")))}d.isMDXComponent=!0}}]);