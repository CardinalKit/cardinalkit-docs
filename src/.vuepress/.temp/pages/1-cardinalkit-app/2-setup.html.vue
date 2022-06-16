<template><div><h1 id="set-up-application-infrastructure" tabindex="-1"><a class="header-anchor" href="#set-up-application-infrastructure" aria-hidden="true">#</a> Set Up Application Infrastructure</h1>
<p><img src="@source/1-cardinalkit-app/images/doctors.svg" alt="Doctors using apps" width="250"><br /></p>
<p>Prior to CardinalKit, researchers would need to implement a backend solution of their choosing so data that their subjects were gathering could be securely stored. CardinalKit leverages existing database architecture on the Google Cloud platform to make it as frictionless as possible to get started with collecting information on your users.</p>
<p><img src="@source/1-cardinalkit-app/images/connect.svg" alt="drawing" width="250"/><br /></p>
<h2 id="_1-create-a-firebase-account" tabindex="-1"><a class="header-anchor" href="#_1-create-a-firebase-account" aria-hidden="true">#</a> 1. Create a Firebase Account</h2>
<p>Head on over to <a href="https://firebase.google.com">firebase.google.com</a> and set up an account.
Note: you may need to use your personal email instead of your university assigned one.</p>
<p>Once, your account is created, log into your Firebase console (top right) and add a new project. Name the project to be something related to your app for future reference.</p>
<img src="@source/1-cardinalkit-app/images/firebase-addproject.png" alt="Add a new Firebase Project" width="500" />
<br />
It is important that you disable Google Analytics because it is not BAA compliant and then click "Create". It will take around a minute to set up.
<br />
<img src="@source/1-cardinalkit-app/images/google-analytics.png" alt="Disable Google Analytics" width="400"/>
<br />
When your project is ready, click "Continue". 
<br />
<img src="@source/1-cardinalkit-app/images/firebase-ready.png" alt="Your project is ready" width="500" />
<p>Now you will be returned to the console. Click &quot;Firestore Database&quot; under the &quot;Build&quot; section in the sidebar, and then &quot;Create database&quot;.
<br />
<br /></p>
<img src="@source/1-cardinalkit-app/images/firebase-database.png" alt="Create a firestore database" width="950"/>
<br />
<br />
<p>Be sure to start the database in test mode so your research IT can configure the rules for the storage.</p>
<br />
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>When developing and testing your application, it is fine to use your own custom Firebase backend. However, in production, it is easier to hand-off database maintenance to your IT department (e.g. Stanford Medicine IT). Their configuration will be guaranteed to be HIPAA compliant.</p>
</div>
<img src="@source/1-cardinalkit-app/images/database-setup-1.png" alt="Set your database to test mode" width="450"/>
<br />
<br />
<p>Finally, set the deploy location to &quot;us-central&quot; or any location close to your study and click &quot;Enable&quot;.</p>
<br />
<img src="@source/1-cardinalkit-app/images/database-setup-2.png" alt="Choose the deploy location" width="450"/>
<h2 id="_2-link-app-to-firebase-project" tabindex="-1"><a class="header-anchor" href="#_2-link-app-to-firebase-project" aria-hidden="true">#</a> 2. Link App to Firebase Project</h2>
<p>The last step is to configure your CardinalKit app to communicate with your newly created Firebase database. In the sidebar, select &quot;Project Overview&quot; and then &quot;iOS&quot;.</p>
<br />
<img src="@source/1-cardinalkit-app/images/project-overview.png" alt="Creating a new iOS config in Firebase" width="650"/>
<br />
<br />
<p>Fill out the registration form using the bundle ID you selected on while creating your CardinalKit project in Xcode from Step 4 of the previous section. You do not need to answer the other questions.</p>
<br />
<br />
<img src="@source/1-cardinalkit-app/images/registration.png" alt="Registering your CardinalKit app with Firebase" width="650"/>
<br />
<br />
<p>Download the &quot;GoogleService-Info.plist&quot; file when prompted. Keep a note of where this file was downloaded on your computer.</p>
<img src="@source/1-cardinalkit-app/images/plist.png" alt="Link Firebase to App - Step 1" width="800"/>
<br />
<p>There will be a &quot;GoogleService-Info.plist&quot; in the Xcode project as well located in &quot;CardinalKit-Example&quot; &gt; &quot;CardinalKit&quot; &gt; &quot;Supporting Files&quot;. Delete the existing file and drag in the new file that you just downloaded in the previous step. Run the app again and make sure no errors pop up.</p>
<img src="@source/1-cardinalkit-app/images/google-plist.png" alt="Link Firebase to App - Step 2" width="800">
<br />
You don't need to continue through the rest of the steps and set up the Firebase SDK and initialization code in your app. This is already done for you in CardinalKit. Go through to step 5 and click on "Continue to Console".
<br />
<h2 id="_3-setting-up-email-password-authentication" tabindex="-1"><a class="header-anchor" href="#_3-setting-up-email-password-authentication" aria-hidden="true">#</a> 3. Setting up Email/Password Authentication</h2>
<p>In Xcode, open the CKConfiguration.plist file in Xcode and edit the <strong>Enabled</strong> key under the <strong>Sign in with User/Password</strong> key to <strong>1</strong>. (If you have just cloned the project, this is already done for you.)</p>
<br />
<img src="@source/1-cardinalkit-app/images/email_authentication-1.png" alt="Email/Password Authentication Setup Step 1" width="800">
<br />
<p>In your Firebase console, click on &quot;Authentication&quot;, then click on &quot;Email/Password&quot;.</p>
<img src="@source/1-cardinalkit-app/images/email_authentication-2.png" alt="Email/Password Authentication Setup Step 2" width="800"/>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If you have already set up an authentication method and are adding another one, you will see a different screen at this step. In that case, click on &quot;Sign-In Method&quot; at the top and click &quot;Add New Provider&quot;, instead.</p>
</div>
<br />
<p>On the next screen, enable &quot;Email/Password Sign On&quot; and click &quot;Save&quot;.</p>
<img src="@source/1-cardinalkit-app/images/email_authentication-3.png" alt="Email/Password Authentication Setup Step 3" width="800" />
<br />
<p>You should now see that Email/Password authentication has been enabled.</p>
<h2 id="_4-setting-up-sign-in-with-apple-optional" tabindex="-1"><a class="header-anchor" href="#_4-setting-up-sign-in-with-apple-optional" aria-hidden="true">#</a> 4. Setting up Sign in with Apple (Optional)</h2>
<p>Read the entire &quot;Before You Begin&quot; section of the Authenticate Using Apple on iOS Firebase tutorial and make sure you have the correct configurations for this feature.</p>
<p>In your Firebase project, navigate to &quot;Authentication&quot; &gt; &quot;Sign-in method&quot; and click on &quot;Add Provider&quot;.</p>
<img src="@source/1-cardinalkit-app/images/apple-sign-in-step1.png" alt="Apple Sign In Setup Step 1" width="800" />
<br />
<p>Now select &quot;Apple&quot;.</p>
<img src="@source/1-cardinalkit-app/images/apple-sign-in-step2.png" alt="Apple Sign In Setup Step 2" width="650" />
<br />
<p>Set Apple to &quot;Enabled&quot;.</p>
<img src="@source/1-cardinalkit-app/images/apple-sign-in-step3.png" alt="Apple Sign In Setup Step 3" width="650" />
<br />
<p>The last step is to open the CKConfiguration.plist file in Xcode and edit the <strong>Enabled</strong> key under the <strong>Sign in with Apple</strong> key to <strong>1</strong>.</p>
<h2 id="_5-setting-up-sign-in-with-google-optional" tabindex="-1"><a class="header-anchor" href="#_5-setting-up-sign-in-with-google-optional" aria-hidden="true">#</a> 5. Setting up Sign In With Google (Optional)</h2>
<p>First, open your Firebase console, click on the &quot;Authentication&quot; tab, then click on &quot;Sign In Method&quot;, then click on &quot;Add New Provider&quot;.</p>
<img src="@source/1-cardinalkit-app/images/google-setup-step-1.png" alt="Google Sign In Setup Step 1" width="800" />
<br />
<p>Now, click on &quot;Google&quot; in the list of sign-in providers.</p>
<br />
<img src="@source/1-cardinalkit-app/images/google-setup-step-2.png" alt="Google Sign In Setup Step 2" width="800" />
<br />
<p>Then, fill in your project's public facing name, choose a project support email address, and click &quot;Save&quot;.</p>
<br />
<img src="@source/1-cardinalkit-app/images/google-setup-step-3.png" alt="Google Sign In Setup Step 3" width="800" />
<br />
<p>Next, you will need to create a custom URL scheme in your Xcode project. In Xcode, open your CardinalKit project and double-click the project name in the navigator view on the left. Select your project from the &quot;Targets&quot; section and then select the &quot;Info&quot; tab and expand the &quot;URL Types&quot; section.</p>
<img src="@source/1-cardinalkit-app/images/google-setup-step-4.png" alt="Google Sign In Setup Step 4" width="800" />
<br />
<p>Click the <strong>+</strong> button and a URL scheme with your Reversed Client ID. This can be found by opening your <strong>GoogleService-Info.plist</strong> file and looking for the <strong>REVERSED_CLIENT_ID</strong> key. When this is complete your project should look like this:</p>
<img src="@source/1-cardinalkit-app/images/google-setup-step-5.png" alt="Google Sign In Setup Step 5" width="800" />
<br />
<p>The last step is to open the CKConfiguration.plist file in Xcode and edit the <strong>Enabled</strong> key under the <strong>Sign in with Google</strong> key to <strong>1</strong>.</p>
<img src="@source/1-cardinalkit-app/images/google-setup-step-6.png" alt="Google Sign In Setup Step 6" width="800" />
<h2 id="_6-add-custom-rules-to-the-firebase-database" tabindex="-1"><a class="header-anchor" href="#_6-add-custom-rules-to-the-firebase-database" aria-hidden="true">#</a> 6. Add Custom Rules to the Firebase Database</h2>
<p>The final step is to allow authorized users to upload data to Firebase.</p>
<p><img src="@source/1-cardinalkit-app/images/10.gif" alt="drawing" width="650"/><br /></p>
<p>Navigate to the Database tab in your Firebase dashboard. Find the &quot;Rules&quot; section and edit the text to match the following rule set:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents/studies/{studyId}/users {
    match /{userId}/{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Congrats! You're now set up to use CardinalKit as a starting point for your research app - run the app within Xcode and test it out!</p>
<br />
<p><img src="@source/1-cardinalkit-app/images/celebrate.svg" alt="drawing" width="350"/><br /></p>
</div></template>
