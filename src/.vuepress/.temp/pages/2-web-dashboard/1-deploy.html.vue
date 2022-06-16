<template><div><h1 id="setting-up-the-web-dashboard" tabindex="-1"><a class="header-anchor" href="#setting-up-the-web-dashboard" aria-hidden="true">#</a> Setting Up the Web Dashboard</h1>
<p>CardinalKit offers a web dashboard that can be used to visualize mobile health data and survey responses, as well as create and update surveys.</p>
<p><em>Requirements:</em> <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a> must be installed on your system.</p>
<h2 id="_1-configure-your-firebase-project" tabindex="-1"><a class="header-anchor" href="#_1-configure-your-firebase-project" aria-hidden="true">#</a> 1. Configure Your Firebase Project</h2>
<p>Before starting this section, you need to have configured a Firebase project and connected your CardinalKit iOS app to it. Please refer to 'Set up Application Infrastructure' if you haven't done this yet, then return to this section. If you have, then proceed to the next step:</p>
<p>Go to <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer">firebase.google.com<ExternalLinkIcon/></a> and sign in with the same account that you set up for the mobile app.</p>
<p>Select the same Firebase project that you created previously.
<br />
<br />
<img src="@source/2-web-dashboard/images/project.png" alt="drawing" width="450"/>
<br />
<br />
Then select <strong>Project Settings</strong> in the configuration menu.
<br />
<br />
<img src="@source/2-web-dashboard/images/settings.png" alt="drawing" width="450"/>
<br />
<br />
Now select <strong>Add app</strong> to create a new web application and associate it with Firebase.
<br />
<br />
<img src="@source/2-web-dashboard/images/new-app.png" alt="drawing" width="775"/>
<br />
<br />
Click on the <strong>web app</strong> symbol.
<br />
<br />
<img src="@source/2-web-dashboard/images/webapp.png" alt="drawing" width="450"/>
<br />
<br />
Complete the Firebase form to register a new web app.
<br />
<br />
<img src="@source/2-web-dashboard/images/register1.png" alt="drawing" width="438"/>
<br />
<br />
Copy the generated Firebase configuration.
<br />
<img src="@source/2-web-dashboard/images/register2.png" alt="drawing" width="650"/>
<br />
Open the <em><strong>cardinal-kit-web/.env</strong></em> file and replace the bolded keys with their values from the configuration you obtained in the last step.
<br />
<br /></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>VUE_APP_FIREBASE_API_KEY = "**apiKey**"
VUE_APP_FIREBASE_AUTH_DOMAIN  = "**authDomain**"
VUE_APP_FIREBASE_PROJECT_ID  = "**projectId**"
VUE_APP_FIREBASE_STORAGE_BUCKET  = "**storageBucket**"
VUE_APP_FIREBASE_MESSAGING_SENDER_ID  = "**messagingSenderId**"
VUE_APP_FIREBASE_APP_ID = "**firebaseConfig.appId**"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div> <br />
 <br />
 Now navigate to "Firestore Database" > "Indexes" in your Firebase console. Make sure "Composite" is selected.
 <br />
 <br />
 <img src="@source/2-web-dashboard/images/create-indexes.png" alt="indexes" width="800">
 <br />
 <br />
 Please add the six indexes that are shown in the image above by clicking "Add Index". It may take a couple of minutes for the indexes to finish building.
<h2 id="_2-create-an-administrator-account" tabindex="-1"><a class="header-anchor" href="#_2-create-an-administrator-account" aria-hidden="true">#</a> 2. Create an administrator account</h2>
 <br />
<p>To manage your dashboard you need to create an Administrator account. This is created from the Firebase console.</p>
<p>From the <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer">Firebase console<ExternalLinkIcon/></a>, enter the <strong>Authentication</strong> section.</p>
 <br />
 <img src="@source/2-web-dashboard/images/authentication.png" alt="drawing" width="550"/>
 <br />
 <br />
<p>And then add a new user.</p>
 <br />
 <img src="@source/2-web-dashboard/images/newuser.png" alt="drawing" width="850"/>
 <br />
 <br />
<p>Enter a username and password for the administrator user.</p>
<br />
<img src="@source/2-web-dashboard/images/userpassword.png" alt="drawing" width="750"/>
<br />
<br />
<h2 id="_3-add-the-admin-role" tabindex="-1"><a class="header-anchor" href="#_3-add-the-admin-role" aria-hidden="true">#</a> 3. Add the admin role</h2>
<p>Now you need to indicate to the dashboard that this new user is an <strong>administrator</strong> user.</p>
<p>User roles are managed in Firestore Database. For users created from the web, this process will be automatic, it is necessary to do it by hand only once for the administrator user.</p>
<p>First copy the <strong>UID</strong> of the user you just created:</p>
<br />
<img src="@source/2-web-dashboard/images/useruid.png" alt="drawing" width="750"/>
<br />
<br />
<p>Then click on <strong>Firestore Database</strong>:</p>
<br />
<img src="@source/2-web-dashboard/images/firestore.png" alt="drawing" />
<br />
<br />
<p>This is the database of the entire project, here you can see all the records of studies and users generated in the application.</p>
<p>Create a new collection called <strong>users_roles</strong>, add a document with the name being the uid of the previously created administrator user.</p>
<p>Finally add a field to the document called <strong>rol</strong> with value <strong>superAdmin</strong>.</p>
<br />
<img src="@source/2-web-dashboard/images/add_role.png" alt="drawing" width="850"/>
<h2 id="_4-update-firebase-security-rules" tabindex="-1"><a class="header-anchor" href="#_4-update-firebase-security-rules" aria-hidden="true">#</a> 4. Update Firebase Security Rules</h2>
<p>In order for your administrator user to be able to access the dashboard, you need to update the <strong>Firebase Security Rules</strong>. This is done from the Firebase console.</p>
<p>Open <strong>Firestore Database</strong> in the Firebase console, and click on the <strong>Rules</strong> tab. Then replace the rules with the following:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rules_version = '2';
service cloud.firestore {
	match /databases/{database}/documents{
  	match /studies/{studyId}{
    	allow write: if request.auth!= null
        allow read: if request.auth!= null
   		
        function accessToStudy() {
   			let data = get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data;
   			return "studies" in data &amp;&amp; studyId in data.studies;
   		}
        
        match /users/{userId}/{path_=**}{
        	allow write: if request.auth!= null &amp;&amp; request.auth.uid == userId
        	
            function accessToUser(){
                let data = get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data;
                return "users_access" in data &amp;&amp; userId in data.users_access
        	}

          allow read: if request.auth!= null &amp;&amp; 
          (
            request.auth.uid == userId ||
            (
              exists(/databases/$(database)/documents/users_roles/$(request.auth.uid)) &amp;&amp;
              (
                get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data.rol == "superAdmin" ||
                (
                  get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data.rol == "doctor" &amp;&amp;
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
          	get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data.rol == "superAdmin")
        allow read: if request.auth.uid != null
      }
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Click <strong>Publish</strong> to save your new rules.</p>
<h2 id="_5-test-the-dashboard-locally" tabindex="-1"><a class="header-anchor" href="#_5-test-the-dashboard-locally" aria-hidden="true">#</a> 5. Test the Dashboard Locally</h2>
<p>Once we have configured Firebase, you can test the dashboard locally. You can also deploy it to the cloud using <a href="https://firebase.google.com/docs/hosting" target="_blank" rel="noopener noreferrer">Firebase Hosting<ExternalLinkIcon/></a> (See step 6 below).</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token builtin class-name">cd</span> cardinal-kit-web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once in the folder, the first thing is to install all the dependencies that the Vue project needs. For this we will use npm:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After having everything installed and configured, we can run the project.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-deploy-the-dashboard-to-firebase-hosting" tabindex="-1"><a class="header-anchor" href="#_3-deploy-the-dashboard-to-firebase-hosting" aria-hidden="true">#</a> 3. Deploy the Dashboard to Firebase Hosting</h2>
<p>Once we confirm that our dashboard is working properly locally, we can deploy it to Firebase Hosting.</p>
<p>First, make sure you are in the <code v-pre>cardinal-kit-web/src</code> directory in your terminal.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> cardinal-kit-web/src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, we need to install dependencies.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now, run the build script to create a production build of your dashboard.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then, login to firebase from the command line.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>firebase login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now, connect the directory to your Firebase project.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>firebase init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Firebase will go through a series of questions:</p>
<ul>
<li>Which Firebase CLI features do you want to set up for this folder? → <strong>hosting: Configure and deploy Firebase Hosting sites</strong></li>
<li>Please select an option: <strong>Use an existing project</strong></li>
<li>What do you want to use as your public directory? → <strong>dist</strong></li>
<li>Configure as a single page app? <strong>Y</strong></li>
<li>File dist/index.html already exists. Overwrite? <strong>N</strong></li>
</ul>
<p>Now, deploy your dashboard to Firebase:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>firebase deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You will now be given a URL where you can see the dashboard live! Now that your environment is set up, the next time you can just run <code v-pre>firebase deploy</code> to deploy your updates.</p>
</div></template>
