---
home: false
title: Set Up Application Infrastructure
footer: CardinalKit
order: 2
---

# Set Up Application Infrastructure

<img src="./images/doctors.svg" alt="Doctors using apps" width="250"><br />

Prior to CardinalKit, researchers would need to implement a backend solution of their choosing so data that their subjects were gathering could be securely stored. CardinalKit leverages existing database architecture on the Google Cloud platform to make it as frictionless as possible to get started with collecting information on your users.

<img src="./images/connect.svg" alt="drawing" width="250"/><br />

## 1. Create a Firebase Account

Head on over to <a href="https://firebase.google.com">firebase.google.com</a> and set up an account.
Note: you may need to use your personal email instead of your university assigned one.

Once, your account is created, log into your Firebase console (top right) and add a new project. Name the project to be something related to your app for future reference.

<Example>
<img src="./images/firebase-addproject.png" alt="Add a new Firebase Project" width="500" />
</Example>

<br />
It is important that you disable Google Analytics because it is not BAA compliant and then click "Create". It will take around a minute to set up.
<br />

<Example>
<img src="./images/google-analytics.png" alt="Disable Google Analytics" width="400"/>
</Example>

<br />
When your project is ready, click "Continue". 
<br />

<Example>
<img src="./images/firebase-ready.png" alt="Your project is ready" width="500" />
</Example>

Now you will be returned to the console. Click "Firestore Database" under the "Build" section in the sidebar, and then "Create database".
<br />
<br />

<Example>
<img src="./images/firebase-database.png" alt="Create a firestore database" width="950"/>
</Example>

<br />
<br />

Be sure to start the database in test mode so your research IT can configure the rules for the storage.

</br>

::: warning
When developing and testing your application, it is fine to use your own custom Firebase backend. However, in production, it is easier to hand-off database maintenance to your IT department (e.g. Stanford Medicine IT). Their configuration will be guaranteed to be HIPAA compliant.
:::

<Example>
<img src="./images/database-setup-1.png" alt="Set your database to test mode" width="450"/>
</Example>

<br />
<br />

Finally, set the deploy location to "us-central" or any location close to your study and click "Enable".

<br />

<Example>
<img src="./images/database-setup-2.png" alt="Choose the deploy location" width="450"/>
</Example>

## 3. Link App to Firebase Project

The last step is to configure your CardinalKit app to communicate with your newly created Firebase database. In the sidebar, select "Project Overview" and then "iOS".

<br />

<Example>
<img src="./images/project-overview.png" alt="Creating a new iOS config in Firebase" width="650"/>
</Example>

<br />
<br />


Fill out the registration form using the bundle ID you selected on while creating your CardinalKit project in Xcode from Step 4 of the previous section. You do not need to answer the other questions.

<br />
<br />

<Example>
<img src="./images/registration.png" alt="Registering your CardinalKit app with Firebase" width="650"/>
</Example>

<br />
<br />

Download the "GoogleService-Info.plist" file when prompted. Keep a note of where this file was downloaded on your computer.

<Example>
<img src="./images/plist.png" alt="Link Firebase to App - Step 1" width="800"/>
</Example>

<br />

There will be a "GoogleService-Info.plist" in the Xcode project as well located in "CardinalKit-Example" > "CardinalKit" > "Supporting Files". Delete the existing file and drag in the new file that you just downloaded in the previous step. Run the app again and make sure no errors pop up.

<Example>
<img src="./images/google-plist.png" alt="Link Firebase to App - Step 2" width="800">
</Example>

<br />
You don't need to continue through the rest of the steps and set up the Firebase SDK and initialization code in your app. This is already done for you in CardinalKit. Go through to step 5 and click on "Continue to Console".
<br />

## 4. Enabling Authentication

CardinalKit supports both **Email/Password Authentication** and **Sign In With Apple**.

### Setting up Email/Password Authentication

In Xcode, open the CKConfiguration.plist file in Xcode and edit the **Enabled** key under the **Sign in with User/Password** key to **1**. (If you have just cloned the project, this is already done for you.)

<br />

<Example>
<img src="./images/email_authentication-1.png" alt="Email/Password Authentication Setup Step 1" width="800">
</Example>

<br />

In your Firebase console, click on "Authentication", then click on "Email/Password". 

<Example>
<img src="./images/email_authentication-2.png" alt="Email/Password Authentication Setup Step 2" width="800"/>
</Example>

::: tip
If you have already set up an authentication method and are adding another one, you will see a different screen at this step. In that case, click on "Sign-In Method" at the top and click "Add New Provider", instead.
:::

<br />

On the next screen, enable "Email/Password Sign On" and click "Save".

<Example>
<img src="./images/email_authentication-3.png" alt="Email/Password Authentication Setup Step 3" width="800" />
</Example>

<br />

You should now see that Email/Password authentication has been enabled.

### Setting up Sign in with Apple (Optional)

Read the entire "Before You Begin" section of the Authenticate Using Apple on iOS Firebase tutorial and make sure you have the correct configurations for this feature.

In your Firebase project, navigate to "Authentication" > "Sign-in method" and click on "Add Provider".

<Example>
<img src="./images/apple-sign-in-step1.png" alt="Apple Sign In Setup Step 1" width="800" />
</Example>

<br />

Now select "Apple".

<Example>
<img src="./images/apple-sign-in-step2.png" alt="Apple Sign In Setup Step 2" width="650" />
</Example>

<br />

Set Apple to "Enabled".

<Example>
<img src="./images/apple-sign-in-step3.png" alt="Apple Sign In Setup Step 3" width="650" />
</Example>

<br />

The last step is to open the CKConfiguration.plist file in Xcode and edit the **Enabled** key under the **Sign in with Apple** key to **1**.

### Setting up Sign In With Google (Optional)

First, open your Firebase console, click on the "Authentication" tab, then click on "Sign In Method", then click on "Add New Provider".

<Example>
<img src="./images/google-setup-step-1.png" alt="Google Sign In Setup Step 1" width="800" />
</Example>

<br />

Now, click on "Google" in the list of sign-in providers.

<br />

<Example>
<img src="./images/google-setup-step-2.png" alt="Google Sign In Setup Step 2" width="800" />
</Example>

<br />

Then, fill in your project's public facing name, choose a project support email address, and click "Save".

<br />

<Example>
<img src="./images/google-setup-step-3.png" alt="Google Sign In Setup Step 3" width="800" />
</Example>

<br />

Next, you will need to create a custom URL scheme in your Xcode project. In Xcode, open your CardinalKit project and double-click the project name in the navigator view on the left. Select your project from the "Targets" section and then select the "Info" tab and expand the "URL Types" section.

<Example>
<img src="./images/google-setup-step-4.png" alt="Google Sign In Setup Step 4" width="800" />
</Example>

<br />

Click the **+** button and a URL scheme with your Reversed Client ID. This can be found by opening your **GoogleService-Info.plist** file and looking for the **REVERSED_CLIENT_ID** key. When this is complete your project should look like this:

<Example>
<img src="./images/google-setup-step-5.png" alt="Google Sign In Setup Step 5" width="800" />
</Example>

<br />

The last step is to open the CKConfiguration.plist file in Xcode and edit the **Enabled** key under the **Sign in with Google** key to **1**.

<Example>
<img src="./images/google-setup-step-6.png" alt="Google Sign In Setup Step 6" width="800" />
</Example>

## 5. Add Custom Rules to the Firebase Database

The final step is to allow authorized users to upload data to Firebase.

<img src="./images/10.gif" alt="drawing" width="650"/><br />
 
Navigate to the Database tab in your Firebase dashboard. Find the "Rules" section and edit the text to match the following rule set:

<Example>

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents/studies/{studyId}/users {
    match /{userId}/{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}
```
</Example>

Congrats! You're now set up to use CardinalKit as a starting point for your research app - run the app within Xcode and test it out!

<br />

<img src="./images/celebrate.svg" alt="drawing" width="350"/><br />

