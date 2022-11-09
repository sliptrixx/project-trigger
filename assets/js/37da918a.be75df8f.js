"use strict";(self.webpackChunkproject_trigger=self.webpackChunkproject_trigger||[]).push([[893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,p=m["".concat(o,".").concat(u)]||m[u]||h[u]||r;return n?a.createElement(p,s(s({ref:t},d),{},{components:n})):a.createElement(p,s({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),i=n(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),i=n(7294),r=n(6010),s=n(2389),l=n(7392),o=n(7094),c=n(2466);const d="tabList__CuJ",h="tabItem_LNqP";function m(e){var t;const{lazy:n,block:s,defaultValue:m,values:u,groupId:p,className:g}=e,f=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=u??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,o.U)(),[T,S]=(0,i.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=p){const e=w[p];null!=e&&e!==T&&y.some((t=>t.value===e))&&S(e)}const E=e=>{const t=e.currentTarget,n=N.indexOf(t),a=y[n].value;a!==T&&(C(t),S(a),null!=p&&k(p,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},g)},y.map((e=>{let{value:t,label:n,attributes:s}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:O,onClick:E},s,{className:(0,r.Z)("tabs__item",h,null==s?void 0:s.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,i.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function u(e){const t=(0,s.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},6161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var a=n(7462),i=(n(7294),n(3905)),r=n(5488),s=n(5162);const l={sidebar_position:7},o="Tutorial: Stages",c={unversionedId:"Basic Tutorials/stages",id:"Basic Tutorials/stages",title:"Tutorial: Stages",description:"",source:"@site/docs/Basic Tutorials/7_stages.md",sourceDirName:"Basic Tutorials",slug:"/Basic Tutorials/stages",permalink:"/project-trigger/docs/Basic Tutorials/stages",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Tutorial: Basic Enemy",permalink:"/project-trigger/docs/Basic Tutorials/basic_enemy"},next:{title:"Tutorial: HUD",permalink:"/project-trigger/docs/Basic Tutorials/hud"}},d={},h=[{value:"Getting Started",id:"getting-started",level:2},{value:"StageManager.cs",id:"stagemanagercs",level:2},{value:"Loading a scene",id:"loading-a-scene",level:3},{value:"Tracking stages",id:"tracking-stages",level:3},{value:"Tracking enemies",id:"tracking-enemies",level:3},{value:"Switching stages",id:"switching-stages",level:3},{value:"Bug Fixing",id:"bug-fixing",level:3},{value:"Final Script",id:"final-script",level:3},{value:"Bonus: Difficulty Curves",id:"bonus-difficulty-curves",level:2}],m={toc:h};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tutorial-stages"},"Tutorial: Stages"),(0,i.kt)("p",null,"Now that we have simple enemies setup, we can start to add some more complexity to our game. In this tutorial, we will add a stage system to our game that will allow us to have multiple levels and automatically switch levels when the player eliminates all enemies in the current level."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In our scenes folder, let's create 3 new scenes called ",(0,i.kt)("inlineCode",{parentName:"li"},"Stage1"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Stage2"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"Stage3")),(0,i.kt)("li",{parentName:"ul"},"Populate each scene with a bunch of enemies that represent an increasing difficulty level",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Below in the bonus section, I'll go over some tips on how to create a good difficulty curve"),(0,i.kt)("li",{parentName:"ul"},"Make sure to delete the ",(0,i.kt)("inlineCode",{parentName:"li"},"MainCamera")," from each scene"))),(0,i.kt)("li",{parentName:"ul"},"Create a GameObject in the ",(0,i.kt)("inlineCode",{parentName:"li"},"CoreGameplay")," scene called ",(0,i.kt)("inlineCode",{parentName:"li"},"GameManager"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Here's what my scenes look like:")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"Stage 1",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stage 1",src:n(8021).Z,width:"619",height:"349"}))),(0,i.kt)(s.Z,{value:"Stage 2",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stage 2",src:n(2589).Z,width:"619",height:"349"}))),(0,i.kt)(s.Z,{value:"Stage 3",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stage 3",src:n(8154).Z,width:"619",height:"349"})))),(0,i.kt)("h2",{id:"stagemanagercs"},"StageManager.cs"),(0,i.kt)("p",null,"To load levels into the current scene and manage when to switch levels, we will create a new script called ",(0,i.kt)("inlineCode",{parentName:"p"},"StageManager.cs"),". We will attach this script to the ",(0,i.kt)("inlineCode",{parentName:"p"},"GameManager")," object in the scene."),(0,i.kt)("h3",{id:"loading-a-scene"},"Loading a scene"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"UnityEngine.SceneManagement")," namespace, we have two different modes to load scenes into the current scene. The first is called ",(0,i.kt)("inlineCode",{parentName:"p"},"Single")," which will unload the current scene and load the requested scene. The second is called ",(0,i.kt)("inlineCode",{parentName:"p"},"Additive")," which will load the requested scene on top of the current scene."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// load stage 1 using single mode\nSceneManager.LoadScene("Stage1", LoadSceneMode.Single);\n\n// load stage 1 using additive mode\nSceneManager.LoadScene("Stage1", LoadSceneMode.Additive);\n')),(0,i.kt)("p",null,"We will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Additive")," method to just load the enemies into the current scene. This will allow us to keep the player and camera in the scene and not have to reload them every time we switch levels."),(0,i.kt)("h3",{id:"tracking-stages"},"Tracking stages"),(0,i.kt)("p",null,"To switch stage, we need to keep track of the current stages as well as a list of all the stages in the game. The stages can be represented as strings, so we will create a list of strings to hold the names of the stages. The current stage will be represented by an integer that will be used to index into the list of stages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'[Tooltip("A list of all the stages in the game")]\n[SerializeField] List<string> scenes;\n\n// we start with index 0, which is the first stage in the list\nint currentSceneID = 0;\n')),(0,i.kt)("h3",{id:"tracking-enemies"},"Tracking enemies"),(0,i.kt)("p",null,"We will also need to keep track of the number of enemies in the current scene. We can do this by creating a variable to hold the number of enemies and initializing it by counting the number of enemies in the scene. We need to do this as soon as the scene is loaded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"int enemiesLeft = 0;\nenemiesLeft = FindObjectsOfType<EnemyAI>().Length;\n")),(0,i.kt)("p",null,"To track the number of enemies left in the scene, we will need to create a public function that will decrement the number of enemies left and we will call this function from the ",(0,i.kt)("inlineCode",{parentName:"p"},"EnemyAI")," script when an enemy is destroyed."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"In StageManager.cs:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Report to the stage manager that an enemy was killed\npublic void ReportEnemyDeath()\n{\n    enemiesLeft--;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"In EnemyAI.cs:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"void OnDestroy()\n{\n    // get a reference to the stage manager and report that this enemy was destroyed\n    var stageManger = FindObjectOfType<StageManager>();\n    stageManger?.ReportEnemyDeath();\n}\n")),(0,i.kt)("h3",{id:"switching-stages"},"Switching stages"),(0,i.kt)("p",null,"Now that we have all the building blocks in place, we can create the logic to switch stages. As soon as there are no more enemies left in the scene, we will load the next stage in the list. We will also add an additional condition that will check ignore the switch if we are on the last stage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"void Update()\n{\n    // if there are no enemies left, we can switch to the next stage\n    if(enemiesLeft == 0 && currentSceneID < scenes.Count)\n    {\n        SceneManager.LoadScene(scenes[currentScenID], LoadSceneMode.Additive);\n        enemiesLeft = FindObjectsOfType<EnemyAI>().Length;\n        currentSceneID++;\n    }\n}\n")),(0,i.kt)("h3",{id:"bug-fixing"},"Bug Fixing"),(0,i.kt)("p",null,"Let's test out our stage manager by running the game. We would immediately notice that something is wrong and that all the stages are loaded at the same time. This is because ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadScene")," is not a synchronous function and ",(0,i.kt)("inlineCode",{parentName:"p"},"enemiesLeft")," will remain 0 until the next frame. To fix this, we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"LoadScene")," function. I'll also create a custom local function to handle this for manageability."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"void LoadEnemyScene(string scenename)\n{\n    var asyncLoad = SceneManager.LoadSceneAsync(scenename, LoadSceneMode.Additive);\n    asyncLoad.completed += (AsyncOperation op) => \n    {\n        enemiesLeft = FindObjectsOfType<EnemyAI>().Length;\n    };\n}\n")),(0,i.kt)("p",null,"What we are doing here is creating an ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncOperation")," object that will load the scene in the background, and as soon as the scene is loaded, it will call the completed callback and update the number of enemies in the scene. There is one last issue that we need to fix. The enemy count will remain 0 until the stage is loaded and our update loop will switch to the next frame. So, temporarily, we will set the enemy count to something impossible like -1 so that we can prevent the stage from switching until the requested scene is loaded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"void Update()\n{\n    // if there are no enemies left, we can switch to the next stage\n    if(enemiesLeft == 0 && currentSceneID < scenes.Count)\n    {\n        enemiesLeft = -1;\n        LoadEnemyScene(scenes[currentScenID]);\n        currentSceneID++;\n    }\n}\n")),(0,i.kt)("h3",{id:"final-script"},"Final Script"),(0,i.kt)("p",null,"Here is the final script for the ",(0,i.kt)("inlineCode",{parentName:"p"},"StageManager.cs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"EnemyAI.cs")," scripts."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"StageManager.cs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections;\nusing System.Collections.Generic;\nusing UnityEditor;\nusing UnityEngine;\nusing UnityEngine.SceneManagement;\n\n// Script responsible for adding new enemies from the next stage to the current scene once player has\n// cleared all enemies in the current stage\npublic class StageManager : MonoBehaviour\n{\n    [SerializeField] List<string> scenes;\n\n    int currentSceneID = 0;\n    int enemiesLeft = 0;\n\n    void Update()\n    {\n        // if there are no enemies left, we can switch to the next stage\n        if(enemiesLeft == 0 && currentSceneID < scenes.Count)\n        {\n            enemiesLeft = -1;\n            LoadEnemyScene(scenes[currentScenID]);\n            currentSceneID++;\n        }\n    }\n\n    void LoadEnemyScene(string scenename)\n    {\n        var asyncLoad = SceneManager.LoadSceneAsync(scenename, LoadSceneMode.Additive);\n        asyncLoad.completed += (AsyncOperation op) => \n        {\n            enemiesLeft = FindObjectsOfType<EnemyAI>().Length;\n        };\n    }\n\n    // Report to the stage manager that an enemy was killed\n    public void ReportEnemyDeath()\n    {\n        enemiesLeft--;\n    }\n}\n"))),(0,i.kt)(s.Z,{value:"EnemyAI.cs",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using UnityEngine;\n\n[RequireComponent(typeof(Blaster))]\npublic class EnemyAI : MonoBehaviour\n{\n    [Tooltip("How frequently should the enemy fire a projectile (given in seconds)")]\n    [SerializeField] protected float fireRate = 1;\n\n    [Tooltip("How much time to wait before firing")]\n    [SerializeField] protected float startWaitTime = 0;\n\n    [Header("Simple movement")]\n    [Tooltip("How fast should the enemy travel in terms units/seconds")]\n    [SerializeField] protected float moveSpeed = 1;\n\n    [Tooltip("How far should the the enemy move")]\n    [SerializeField] protected float WiggleRoom = 1;\n\n    [Tooltip("The direction in which the enemy AI should currently move")]\n    [SerializeField] protected bool MoveRight = true;\n\n    // A private reference to the blaster that the enemy can shoot from\n    protected Blaster blaster;\n\n    // this variable is used to track how many seconds have elapsed since last fired\n    protected float fireTimer = 0;\n\n    // the position that anchor\'s the enemy\n    protected Vector3 anchor;\n\n    void Start()\n    {\n        // since we are using the RequireComponent attribute, we are guaranteed to have a blaster\n        blaster = GetComponent<Blaster>();\n\n        // set the anchor position so that the enemy can move left and right relative to it\n        anchor = transform.position;\n    }\n\n    void Update()\n    {\n        // elapse the start wait time if it hasn\'t elapsed\n        if(startWaitTime > 0)\n        {\n            startWaitTime -= Time.deltaTime;\n        }\n\n        // increment the timer\n        fireTimer += Time.deltaTime;\n\n        // if the timer has elapsed, shoot from the blaster and reset the timer\n        if(fireTimer >= fireRate && startWaitTime <= 0)\n        {\n            blaster.Shoot();\n            fireTimer = 0;\n        }\n\n        // move the player in the expected direction\n        Vector3 move = MoveRight ? transform.right : -transform.right;\n        transform.position += move * Time.deltaTime * moveSpeed;\n\n        // do the check to toggle the direction once they have travelled pass the bounds\n        if (Vector3.Distance(anchor, transform.position) > WiggleRoom / 2)\n        {\n            MoveRight = !MoveRight;\n        }\n    }\n\n    void OnDestroy()\n    {\n        // get a reference to the stage manager and report that this enemy was destroyed\n        var stageManger = FindObjectOfType<StageManager>();\n        stageManger?.ReportEnemyDeath();\n    }\n}\n')))),(0,i.kt)("h2",{id:"bonus-difficulty-curves"},"Bonus: Difficulty Curves"),(0,i.kt)("p",null,"The way we have setup our enemies, we can adjust multiple properties that can help us adjust the difficulty of the game in a variety of ways. The most simplest way to increase difficulty is by increasing the number of enemies in each stage. The more enemies are present the harder it is for a player to defeat the level."),(0,i.kt)("p",null,"The next way to increase difficulty is by increasing the rate at which the enemies fire. This can be adjusted by changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"fireRate")," variable in the ",(0,i.kt)("inlineCode",{parentName:"p"},"EnemyAI")," component. The lower the value, the faster the enemy will fire. An enemy who can fire faster will decrease the chance of the player being able to dodge the projectiles and will increase the difficulty of the game."),(0,i.kt)("p",null,"Another way to increase difficulty is by increasing the speed of the enemy movement by adjusting the ",(0,i.kt)("inlineCode",{parentName:"p"},"moveSpeed")," variable in the ",(0,i.kt)("inlineCode",{parentName:"p"},"EnemyAI")," component. The faster the enemy moves, the harder it is for the player to hit the enemy with their projectiles. We can also adjust how far the enemy can move by adjusting the ",(0,i.kt)("inlineCode",{parentName:"p"},"WiggleRoom")," variable. The larget the wiggle room, the more the enemy can move left and right."),(0,i.kt)("p",null,"Finally, we can adjust the difficulty of a stage by increasing the health of the enemies. This can be done by adjusting the ",(0,i.kt)("inlineCode",{parentName:"p"},"hp")," variable in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Health")," component. The higher the health, the more damage the player will need to apply to the enemy to eliminate it."),(0,i.kt)("p",null,"With all of this in mind, we can create an interesting difficulty curve for our game. We can start with a few enemies that fires slowly and have low health. As the game progresses, we can increase the number of enemies, increase the rate at which they fire, increase their health, and increase their movement speed. By managing these variables, we can control the intensity of the game."))}u.isMDXComponent=!0},8021:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stage1-13f5eeea9b8e8e3bdbe728fba1c87ba8.png"},2589:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stage2-fc500566407602ac963a2b34da69657d.png"},8154:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stage3-b8c53f808ebdf09c334c88abd6650a5c.png"}}]);