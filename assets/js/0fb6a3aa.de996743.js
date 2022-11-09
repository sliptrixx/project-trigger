"use strict";(self.webpackChunkproject_trigger=self.webpackChunkproject_trigger||[]).push([[437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),o=n(7294),r=n(6010),i=n(2389),s=n(7392),l=n(7094),c=n(2466);const h="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:u,groupId:m,className:g}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=u??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,s.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:S}=(0,l.U)(),[w,k]=(0,o.useState)(b),I=[],{blockElementScrollPositionUntilNextRender:M}=(0,c.o5)();if(null!=m){const e=T[m];null!=e&&e!==w&&v.some((t=>t.value===e))&&k(e)}const U=e=>{const t=e.currentTarget,n=I.indexOf(t),a=v[n].value;a!==w&&(M(t),k(a),null!=m&&S(m,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":U(e);break;case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;n=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;n=I[t]??I[I.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",h)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>I.push(e),onKeyDown:C,onClick:U},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function u(e){const t=(0,i.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},5071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(5488),i=n(5162);const s={sidebar_position:10},l="Tutorial: Scores",c={unversionedId:"Advanced Tutorials/scores",id:"Advanced Tutorials/scores",title:"Tutorial: Scores",description:"",source:"@site/docs/Advanced Tutorials/10_scores.md",sourceDirName:"Advanced Tutorials",slug:"/Advanced Tutorials/scores",permalink:"/project-trigger/docs/Advanced Tutorials/scores",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/project-trigger/docs/intro"},next:{title:"Tutorial: Player Movement",permalink:"/project-trigger/docs/Basic Tutorials/player_movement"}},h={},d=[{value:"Scores",id:"scores",level:2},{value:"Base score framework",id:"base-score-framework",level:3},{value:"Bonus Score on Stage Clear",id:"bonus-score-on-stage-clear",level:3},{value:"Displaying the score",id:"displaying-the-score",level:3},{value:"High Score",id:"high-score",level:3},{value:"Final Script",id:"final-script",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-scores"},"Tutorial: Scores"),(0,o.kt)("p",null,"In this tutorial we go over how to add a score system to our game and display it on the screen. We will also learn how to save the high score to persistent memory so that it is not lost when the game is closed."),(0,o.kt)("h2",{id:"scores"},"Scores"),(0,o.kt)("p",null,"To keep track of the score and manage how the player earns points, we will create a new script called ",(0,o.kt)("inlineCode",{parentName:"p"},"ScoreManager.cs")," and attach it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"GameManager")," GameObject. The logic I'm going to use is pretty simple. Every time the player eliminates an enemy, we will add 50 points to the score. We will also add a bonus score when the player clears a stage based on how long it took for them to complete the stage."),(0,o.kt)("h3",{id:"base-score-framework"},"Base score framework"),(0,o.kt)("p",null,"We want a variable to keep track of the score. We also want a public function that we can call to add points to the score."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"protected float score = 0;\n\n// Add the given score to the whole thing\npublic void AddScore(float scoreToAdd)\n{\n    score += scoreToAdd;\n}\n")),(0,o.kt)("h3",{id:"bonus-score-on-stage-clear"},"Bonus Score on Stage Clear"),(0,o.kt)("p",null,"The player gets a bonus score which is based on how long it takes for the player to clear the stage. The faster the player clears the stage, the more points they get. So, the player has 30 seconds to clear the stage and from there on and they have 1000 points to earn. But every second, the player losses 33 points."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"[SerializeField] protected float bonusToGive = 1000;\n[SerializeField] protected float timeToComplete = 30;\n\nprotected float bonus = 0;\n\nvoid Update()\n{\n    if (bonusToGive > 0)\n    {\n        // decrement the bonus on time elapsed\n        bonus -= (bonusToGive / timeToComplete) * Time.deltaTime;\n\n        // clamp the bonus to 0, so that we don't apply a negative score\n        if (bonus < 0) { bonus = 0; }\n    }\n}\n")),(0,o.kt)("p",null,"We need to add the bonus when the player clears the stage. We will add a public function to indicate that the stage has been cleared."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public void IndicateNewStage()\n{\n    // add any bonus to the score, then reset the bonus\n    score += bonus;\n    bonus = bonusToGive;\n}\n")),(0,o.kt)("h3",{id:"displaying-the-score"},"Displaying the score"),(0,o.kt)("p",null,"We want to display the score on the screen, so we need to add a UI text to the HUD canvas. I won't go over how to add the UI text, but I will show you how to set it up to work in our game. We can link the UI text to the ",(0,o.kt)("inlineCode",{parentName:"p"},"UIManager")," script and then we make a call to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SetScore")," function from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ScoreManager")," script to update the score on the screen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'[SerializeField] TMP_Text ScoreUI;\n\npublic void SetScore(int newScore, int? scoreAdded = null)\n{\n    ScoreUI.text = $"Score: {newScore}";\n\n    if(scoreAdded is not null)\n    {\n        // add the code to show score added here...\n    }\n}\n')),(0,o.kt)("p",null,"I have not added the implementation for showing the score added here, but you can add it if you want. It will be a little more complicated, so I will leave it up to you to figure out how to do it."),(0,o.kt)("h3",{id:"high-score"},"High Score"),(0,o.kt)("p",null,"We want to save the high score so that it is not lost when the game is closed. Basically, persistent memory. To accomplish that, we will use Unity's ",(0,o.kt)("inlineCode",{parentName:"p"},"PlayerPrefs")," system to save the high score."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// get a value from player prefs... if not found, return 0\nint value = PlayerPrefs.GetInt("key", 0);\n\n// save a value to player prefs\nPlayerPrefs.SetInt("key", value);\n')),(0,o.kt)("p",null,"We will add a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"CheckAndUpdateHighscore")," to check if the current score is higher than the high score. If it is, we will update the high score."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'public void CheckAndUpdateHighscore()\n{\n    // Get the highscore from the player prefs\n    int highscore = PlayerPrefs.GetInt("highscore", 0);\n\n    // if the current score is greater that the high score, update it on the UI\n    if(score > highscore)\n    {\n        PlayerPrefs.SetInt("highscore", Mathf.CeilToInt(score));\n    }\n}\n')),(0,o.kt)("p",null,"For your challenge, you can add the high score to the UI and display it on the screen. My final script has the high score displayed on the screen, but I will leave it up to you to figure out how you want to display it."),(0,o.kt)("p",null,"It is also important to note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlayerPrefs")," system is not secure. Anyone knowledgable can access the data stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlayerPrefs")," system and modify it, say, to give themselves a high score of 10000. In our case, it is not a big deal, but if you are making a game that has a lot of data that needs to be secured and unmodified, you should look into other options. One option is to store it in a custom file that is encrypted and can only be accessed by your game. However, the player can still decrypt the file and modify it, so it is not a perfect solution, but it is better than nothing. Another option is to use a server to store the data and then have the game access the data from the server and post any changes back to the server. But that is a lot more complicated and requires a server to be set up and maintained."),(0,o.kt)("p",null,"So, at the end of the day, it is very case specific and you will have to decide what is best for your game."),(0,o.kt)("h2",{id:"final-script"},"Final Script"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ScoreManager.cs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using UnityEngine;\n\npublic class ScoreManager : MonoBehaviour\n{\n    [Tooltip("The bonus to give per stage")]\n    [SerializeField] protected float bonusToGive = 1000;\n\n    [Tooltip("Time to complete the stage to recieve at least some bonus points")]\n    [SerializeField] protected float timeToComplete = 30;\n\n    protected float score = 0;\n    protected float bonus = 0;\n\n    protected UIManager uiManager = null;\n\n    void Start()\n    {\n        uiManager = GetComponent<UIManager>();\n    }\n\n    void Update()\n    {\n        if(bonusToGive > 0)\n        {\n            // decrement the bonus based on time elapsed\n            bonus -= (bonusToGive / timeToComplete) * Time.deltaTime;\n            \n            // floor the bonus to 0\n            if (bonus < 0) { bonus = 0; }\n        }\n    }\n\n    // Add the given score to the whole thing\n    public void AddScore(float scoreToAdd)\n    {\n        score += scoreToAdd;\n        uiManager.SetScore(Mathf.CeilToInt(score), Mathf.CeilToInt(scoreToAdd));\n    }\n\n    // Indicate to the score manager, that the game switched to a new stage\n    public void IndicateNewStage()\n    {\n        // add the collected bonus\n        score += bonus;\n\n        // update the bonus score UI, if the player has a bonus\n        if(bonus > 0)\n        {\n            uiManager.SetScore(Mathf.FloorToInt(score), Mathf.FloorToInt(bonus));\n        }\n\n        // reset the score\n        bonus = bonusToGive;\n    }\n\n    // Update the highscore information\n    public void CheckAndUpdateHighscore()\n    {\n        // Get the highscore from the player prefs\n        int highscore = PlayerPrefs.GetInt("highscore", 0);\n\n        // if the current score is greater that the high score, update it on the UI\n        if(score > highscore)\n        {\n            PlayerPrefs.SetInt("highscore", Mathf.CeilToInt(score));\n            uiManager?.ReportHighscore(Mathf.CeilToInt(score), isNew: true);\n            return;\n        }\n\n        // not a new highscore, but we still have to report it to the UIManager\n        uiManager?.ReportHighscore(highscore, isNew: false);\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"UIManager.cs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\nusing TMPro;\n\npublic class UIManager : MonoBehaviour\n{\n    [Tooltip("The health component to track")]\n    public Health HealthToTrack;\n\n    [Header("UI Elements")]\n    [Tooltip("The UI text that displays the health element being tracked")]\n    [SerializeField] TMP_Text HealthUI;\n\n    [Tooltip("The UI text that displays the current stage the player is playing")]\n    [SerializeField] TMP_Text StageUI;\n\n    [Tooltip("The UI text that displays the score")]\n    [SerializeField] TMP_Text ScoreUI;\n\n    [Tooltip("The UI text that displays the highscore")]\n    [SerializeField] TMP_Text[] HighscoreUIs;\n\n    [Tooltip("The game over UI element that appears when the player dies")]\n    [SerializeField] GameObject GameOverScreen;\n\n    [Tooltip("The game complete UI element that appears when the player completes all stages")]\n    [SerializeField] GameObject GameCompleteScreen;\n\n    // time to show the stage UI\n    float stageUITimer = 0;\n\n    void Update()\n    {\n        // we can definitely improve the efficiency using OnHealthChange event,\n        // however, i\'m going to keep it pretty simple\n\n        // every tick we update the health UI.\n        var hp = HealthToTrack ? HealthToTrack.GetHP() : 0;\n        HealthUI.text = $"Health: {hp}";\n\n        // tick down the stage UI timer\n        stageUITimer -= Time.deltaTime;\n\n        // once the stage timer has elapsed and the stage UI is visible,\n        // set the UI inactive\n        if(stageUITimer <= 0 && StageUI.gameObject.activeSelf)\n        {\n            StageUI.gameObject.SetActive(false);\n        }\n    }\n\n    // Request the UI manager to show the stage number as UI for the requested time\n    public void RequestStageUI(int stagenumber, float time)\n    {\n        StageUI.text = $"Stage {stagenumber}";\n        StageUI.gameObject.SetActive(true);\n        stageUITimer = time;\n    }\n\n    // Open the game over Menu\n    public void OpenGameOverMenu()\n    {\n        GameOverScreen.SetActive(true);\n    }\n\n    // Open the game complete menu\n    public void OpenGameCompleteMenu()\n    {\n        GameCompleteScreen.SetActive(true);\n    }\n\n    // Set the score with an optional score that was added\n    public void SetScore(int newScore, int? scoreAdded = null)\n    {\n        ScoreUI.text = $"Score: {newScore}";\n    }\n\n    public void ReportHighscore(int highscore, bool isNew)\n    {\n        // Build the highscore string\n        string text = "";\n        if(isNew)\n        {\n            text += "New Highscore!!!\\n";\n        }\n        text += $"Highscore: {highscore}";\n\n        // Set the high score in all highscore ui elements\n        foreach(var highscoreUI in HighscoreUIs)\n        {\n            highscoreUI.text = text;\n        }\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"StageManager.cs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEditor;\nusing UnityEngine;\nusing UnityEngine.SceneManagement;\n\n// Script responsible for adding new enemies from the next stage to the current scene once player has\n// cleared all enemies in the current stage\npublic class StageManager : MonoBehaviour\n{\n    [SerializeField] List<string> scenes;\n\n    int currentSceneID = 0;\n    int enemiesLeft = 0;\n\n    void Update()\n    {\n        // if there are no enemies left on the scene and there are scenes left to load,\n        // then we load the next enemy level\n        if(enemiesLeft == 0)\n        {\n            enemiesLeft = -1;\n            if(currentSceneID < scenes.Count)\n            {\n                LoadEnemyScene(scenes[currentSceneID]);\n            }\n            currentSceneID++;\n\n            // Let the score manager to give the bonus for the current stage\n            var scoreManager = GetComponent<ScoreManager>();\n            scoreManager?.IndicateNewStage();\n\n            // Request the UI manager to show the stage text UI\n            var uiManager = GetComponent<UIManager>();\n            if (currentSceneID <= scenes.Count)\n            {\n                uiManager?.RequestStageUI(currentSceneID, 3.0f);\n            }\n            else\n            {\n                scoreManager?.CheckAndUpdateHighscore();\n                uiManager?.OpenGameCompleteMenu();\n            }\n        }\n    }\n\n    void LoadEnemyScene(string scenename)\n    {\n        var asyncLoad = SceneManager.LoadSceneAsync(scenename, LoadSceneMode.Additive);\n        asyncLoad.completed += (AsyncOperation op) => \n        {\n            enemiesLeft = FindObjectsOfType<EnemyAI>().Length;\n        };\n    }\n\n    // Report to the stage manager that an enemy was killed\n    public void ReportEnemyDeath()\n    {\n        enemiesLeft--;\n    }\n\n    // Restart the game\n    public void Restart()\n    {\n        SceneManager.LoadScene("CoreGameplay");\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"PlayerControls.cs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections;\nusing System.Collections.Generic;\nusing UnityEngine;\n\npublic class PlayerControls : MonoBehaviour\n{\n    [Tooltip("The speed at which the player ship moves")]\n    public float Speed = 3;\n\n    private Blaster blaster;\n\n    private void Start()\n    {\n        blaster = GetComponent<Blaster>();\n    }\n\n    void Update()\n    {\n        if(Input.GetKey(KeyCode.D) || Input.GetKey(KeyCode.RightArrow))\n        {\n            transform.position += Vector3.right * Speed * Time.deltaTime;\n        }\n\n        if(Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.LeftArrow))\n        {\n            transform.position -= Vector3.right * Speed * Time.deltaTime;\n        }\n\n        if(Input.GetMouseButtonDown(0))\n        {\n            blaster.Shoot();\n        }\n    }\n\n    private void OnDestroy()\n    {\n        var uiManager = FindObjectOfType<UIManager>();\n        var scoreManager = FindObjectOfType<ScoreManager>();\n\n        scoreManager?.CheckAndUpdateHighscore();\n        uiManager?.OpenGameOverMenu();\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"EnemyAI.cs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using UnityEngine;\n\n[RequireComponent(typeof(Blaster))]\npublic class EnemyAI : MonoBehaviour\n{\n    [Tooltip("How frequently should the enemy fire a projectile (given in seconds)")]\n    [SerializeField] protected float fireRate = 1;\n\n    [Tooltip("How much time to wait before firing")]\n    [SerializeField] protected float startWaitTime = 0;\n\n    [Header("Simple movement")]\n    [Tooltip("How fast should the enemy travel in terms units/seconds")]\n    [SerializeField] protected float moveSpeed = 1;\n\n    [Tooltip("How far should the the enemy move")]\n    [SerializeField] protected float WiggleRoom = 1;\n\n    [Tooltip("The direction in which the enemy AI should currently move")]\n    [SerializeField] protected bool MoveRight = true;\n\n    // A private reference to the blaster that the enemy can shoot from\n    protected Blaster blaster;\n\n    // this variable is used to track how many seconds have elapsed since last fired\n    protected float fireTimer = 0;\n\n    // the position that anchor\'s the enemy\n    protected Vector3 anchor;\n\n    void Start()\n    {\n        // since we are using the RequireComponent attribute, we are guaranteed to have a blaster\n        blaster = GetComponent<Blaster>();\n\n        // set the anchor position so that the enemy can move left and right relative to it\n        anchor = transform.position;\n    }\n\n    void Update()\n    {\n        // elapse the start wait time if it hasn\'t elapsed\n        if(startWaitTime > 0)\n        {\n            startWaitTime -= Time.deltaTime;\n        }\n\n        // increment the timer\n        fireTimer += Time.deltaTime;\n\n        // if the timer has elapsed, shoot from the blaster and reset the timer\n        if(fireTimer >= fireRate && startWaitTime <= 0)\n        {\n            blaster.Shoot();\n            fireTimer = 0;\n        }\n\n        // move the player in the expected direction\n        Vector3 move = MoveRight ? transform.right : -transform.right;\n        transform.position += move * Time.deltaTime * moveSpeed;\n\n        // do the check to toggle the direction once they have travelled pass the bounds\n        if (Vector3.Distance(anchor, transform.position) > WiggleRoom / 2)\n        {\n            MoveRight = !MoveRight;\n        }\n    }\n\n    void OnDestroy()\n    {\n        // get a reference to the stage manager and report that this enemy was destroyed\n        var stageManger = FindObjectOfType<StageManager>();\n        stageManger?.ReportEnemyDeath();\n\n        // get a reference to the score manager and give the player a score of +50\n        var scoreManager = FindObjectOfType<ScoreManager>();\n        scoreManager?.AddScore(50);\n    }\n}\n')))))}u.isMDXComponent=!0}}]);