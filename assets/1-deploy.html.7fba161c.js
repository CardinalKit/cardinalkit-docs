import{_ as i,r,o as d,c as o,a as e,b as t,d as s,e as n}from"./app.9be2dd71.js";var l="/cardinalkit-docs/assets/project.b8c2bc9a.png",c="/cardinalkit-docs/assets/settings.b6a54d7b.png",u="/cardinalkit-docs/assets/new-app.2396165c.png",h="/cardinalkit-docs/assets/webapp.0d18d9d2.png",b="/cardinalkit-docs/assets/register1.fe62c34d.png",p="/cardinalkit-docs/assets/register2.6f795293.png",m="/cardinalkit-docs/assets/authentication.2c7c68ca.png",v="/cardinalkit-docs/assets/newuser.03d6e066.png",g="/cardinalkit-docs/assets/userpassword.5d8aeccc.png",_="/cardinalkit-docs/assets/useruid.7cb03ba5.png",f="/cardinalkit-docs/assets/firestore.8e88e89a.png",w="/cardinalkit-docs/assets/create-roles-collection.d9880e40.png",y="/cardinalkit-docs/assets/add-role-document.58a7a90c.png",k="/cardinalkit-docs/assets/admin-role-finished.9203c956.png",x="/cardinalkit-docs/assets/create-indexes.b2c390ad.png";const q={},I=e("h1",{id:"setting-up-the-web-dashboard",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setting-up-the-web-dashboard","aria-hidden":"true"},"#"),s(" Setting Up the Web Dashboard")],-1),F=e("p",null,"CardinalKit offers a web dashboard that can be used to visualize mobile health data and survey responses, as well as create and schedule surveys.",-1),A=e("h3",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),s(" Requirements")],-1),E=e("p",null,[s("Before getting started, you will need to have configured a Firebase project and connected your CardinalKit iOS or Android app to it. Please refer to the "),e("em",null,"Set up Application Infrastructure"),s(" section in either the iOS or Android section of this guide if you haven't done this yet, then return to this section to continue setting up the dashboard.")],-1),S=s("You will need to have Node.js installed on your system. To check if Node.js is installed, open a terminal window and type 'node -v'. If it is installed, the version will be displayed. If not, please visit "),P={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},C=s("nodejs.org"),T=s(" to download and install it."),N=s("You will also need to have the Firebase Command Line Interface (CLI) installed on your system. Installation instructions can be found at "),U={href:"https://firebase.google.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},j=s("firebase.google.com/docs/cli"),D=s("."),R=e("p",null,"Once you have both of these tools installed, you can proceed to the first step below.",-1),B=e("h2",{id:"_1-configure-your-firebase-project",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-configure-your-firebase-project","aria-hidden":"true"},"#"),s(" 1. Configure Your Firebase Project")],-1),$=e("p",null,"Before starting this section,",-1),V=s("Go to "),O={href:"https://firebase.google.com",target:"_blank",rel:"noopener noreferrer"},L=s("firebase.google.com"),Y=s(" and sign in with the same account that you set up for the mobile app."),G=n('<p>Select the same Firebase project that you created previously. <br><br><img src="'+l+'" alt="drawing" width="450"><br><br> Then select <strong>Project Settings</strong> in the configuration menu. <br><br><img src="'+c+'" alt="drawing" width="450"><br><br> Now select <strong>Add app</strong> to create a new web application and associate it with Firebase. <br><br><img src="'+u+'" alt="drawing" width="775"><br><br> Click on the <strong>web app</strong> symbol.</p><br><br><img src="'+h+'" alt="drawing" width="450"><br><br><p>Give your dashboard application a name and then click &quot;Register App&quot; to continue.</p><br><br><img src="'+b+'" alt="drawing" width="438"><br><br><p>Copy and save the generated Firebase configuration details.</p><br><img src="'+p+`" alt="drawing" width="650"><br><br><p>Using a text editor, open the <em><strong>cardinal-kit-web/.env</strong></em> file and replace the bolded keys with their values from the configuration you obtained in the last step.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VUE_APP_FIREBASE_API_KEY = &quot;**apiKey**&quot;
VUE_APP_FIREBASE_AUTH_DOMAIN  = &quot;**authDomain**&quot;
VUE_APP_FIREBASE_PROJECT_ID  = &quot;**projectId**&quot;
VUE_APP_FIREBASE_STORAGE_BUCKET  = &quot;**storageBucket**&quot;
VUE_APP_FIREBASE_MESSAGING_SENDER_ID  = &quot;**messagingSenderId**&quot;
VUE_APP_FIREBASE_APP_ID = &quot;**firebaseConfig.appId**&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-create-an-administrator-account" tabindex="-1"><a class="header-anchor" href="#_2-create-an-administrator-account" aria-hidden="true">#</a> 2. Create an Administrator account</h2><br><p>To manage your dashboard you need to create an Administrator account. This is created from the Firebase console.</p>`,22),K=s("From the "),H={href:"https://console.firebase.google.com",target:"_blank",rel:"noopener noreferrer"},M=s("Firebase console"),W=s(", click on "),z=e("strong",null,"Build",-1),J=s(" on the left sidebar, and then enter the "),Q=e("strong",null,"Authentication",-1),X=s(" section."),Z=n('<br><img src="'+m+'" alt="drawing" width="550"><br><br><p>And then add a new user.</p><br><img src="'+v+'" alt="drawing" width="850"><br><br><p>Enter a username and password for the administrator user.</p><br><img src="'+g+'" alt="drawing" width="750"><br><br><p>Now you need to indicate to the dashboard that this new user is an <strong>administrator</strong> user.</p><p>User roles are managed in Firestore Database. For users created from the web, this process will be automatic, it is necessary to do it by hand only once for the administrator user.</p><p>First copy the <strong>UID</strong> of the user you just created. You can do this by hovering over the UID and clicking on the Copy icon.</p><br><img src="'+_+'" alt="drawing" width="750"><br><br><p>Then click on <strong>Firestore Database</strong>:</p><br><img src="'+f+'" alt="drawing" width="550"><br><br><p>Click <em>Start collection</em> and name the collection <strong>users_roles</strong>.</p><br><img src="'+w+'" alt="" width="550"><br><br><p>Now, within the newly created collection, click <em>Add document</em> and paste in the <strong>UID</strong> of the admin user as the name. Then add a field to the document called <strong>rol</strong> with value <strong>superAdmin</strong>.</p><br><img src="'+y+'" alt="" width="550"><br><br><p>The end result should appear as follows:</p><img src="'+k+`" alt="drawing" width="850"><h2 id="_3-update-firebase-security-rules" tabindex="-1"><a class="header-anchor" href="#_3-update-firebase-security-rules" aria-hidden="true">#</a> 3. Update Firebase Security Rules</h2><p>In order for your administrator user to be able to access the dashboard, you need to update the <strong>Firebase Security Rules</strong>. This is done from the Firebase console.</p><p>Open <strong>Firestore Database</strong> in the Firebase console, and click on the <strong>Rules</strong> tab. Then replace the rules with the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rules_version = &#39;2&#39;;
service cloud.firestore {
	match /databases/{database}/documents{
  	match /studies/{studyId}{
    	allow write: if request.auth!= null
        allow read: if request.auth!= null
   		
        function accessToStudy() {
   			let data = get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data;
   			return &quot;studies&quot; in data &amp;&amp; studyId in data.studies;
   		}
        
        match /users/{userId}/{path_=**}{
        	allow write: if request.auth!= null &amp;&amp; request.auth.uid == userId
        	
            function accessToUser(){
                let data = get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data;
                return &quot;users_access&quot; in data &amp;&amp; userId in data.users_access
        	}

          allow read: if request.auth!= null &amp;&amp; 
          (
            request.auth.uid == userId ||
            (
              exists(/databases/$(database)/documents/users_roles/$(request.auth.uid)) &amp;&amp;
              (
                get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data.rol == &quot;superAdmin&quot; ||
                (
                  get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data.rol == &quot;doctor&quot; &amp;&amp;
                  (
                    accessToStudy() ||
                    accessToUser()
                  )
                )
              )
            )
          )
        }
        match /surveys/{surveyId}/{path_=**}{
        	allow write: if request.auth.uid != null 
        	allow read: if request.auth.uid != null
        }
        
      }
      match /users_roles/{user}/{path_=**}{
      	allow write: if request.auth.uid != null &amp;&amp;
        	(request.auth.uid == user || 
          	exists(/databases/$(database)/documents/users_roles/$(request.auth.uid)) &amp;&amp;
          	get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data.rol == &quot;superAdmin&quot;)
        allow read: if request.auth.uid != null
      }
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Click <strong>Publish</strong> to save your new rules.</p><h2 id="_4-create-indexes" tabindex="-1"><a class="header-anchor" href="#_4-create-indexes" aria-hidden="true">#</a> 4. Create Indexes</h2>`,44),ee=s("Cloud Firestore requires "),se={href:"https://firebase.google.com/docs/firestore/query-data/indexing",target:"_blank",rel:"noopener noreferrer"},ae=s("indexes"),te=s(" to be created for each query. In this section, we will create custom indexes that our dashboard will use."),ne=n('<p>Navigate to <strong>Firestore Database</strong>, then click the <strong>Indexes</strong> tab. Make sure <strong>Composite</strong> is selected.</p><br><br><img src="'+x+`" alt="indexes" width="800"><br><br><p>Please add the six indexes that are shown in the image above by clicking <strong>Add Index</strong>. It may take a couple of minutes for the indexes to finish building.</p><h2 id="_5-test-the-dashboard-locally" tabindex="-1"><a class="header-anchor" href="#_5-test-the-dashboard-locally" aria-hidden="true">#</a> 5. Test the Dashboard Locally</h2><p>Now you can test the dashboard locally.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token builtin class-name">cd</span> cardinal-kit-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once in the folder, the first thing is to install all the dependencies that the Vue project needs. For this we will use npm:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After having everything installed and configured, we can run the project.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-deploy-the-dashboard-to-firebase-hosting" tabindex="-1"><a class="header-anchor" href="#_6-deploy-the-dashboard-to-firebase-hosting" aria-hidden="true">#</a> 6. Deploy the Dashboard to Firebase Hosting</h2><p>Once we confirm that our dashboard is working properly locally, we can deploy it to Firebase Hosting.</p><p>First, make sure you are in the <code>cardinal-kit-web/src</code> directory in your terminal.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> cardinal-kit-web/src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, we need to install dependencies.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now, run the build script to create a production build of your dashboard.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, login to firebase from the command line.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firebase login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now, connect the directory to your Firebase project.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firebase init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Firebase will go through a series of questions:</p><ul><li>Which Firebase CLI features do you want to set up for this folder? \u2192 <strong>hosting: Configure and deploy Firebase Hosting sites</strong></li><li>Please select an option: <strong>Use an existing project</strong></li><li>What do you want to use as your public directory? \u2192 <strong>dist</strong></li><li>Configure as a single page app? <strong>Y</strong></li><li>File dist/index.html already exists. Overwrite? <strong>N</strong></li></ul><p>Now, deploy your dashboard to Firebase:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firebase deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You will now be given a URL where you can see the dashboard live! Now that your environment is set up, the next time you can just run <code>firebase deploy</code> to deploy your updates.</p>`,31);function ie(re,de){const a=r("ExternalLinkIcon");return d(),o("div",null,[I,F,A,E,e("p",null,[S,e("a",P,[C,t(a)]),T]),e("p",null,[N,e("a",U,[j,t(a)]),D]),R,B,$,e("p",null,[V,e("a",O,[L,t(a)]),Y]),G,e("p",null,[K,e("a",H,[M,t(a)]),W,z,J,Q,X]),Z,e("p",null,[ee,e("a",se,[ae,t(a)]),te]),ne])}var le=i(q,[["render",ie],["__file","1-deploy.html.vue"]]);export{le as default};