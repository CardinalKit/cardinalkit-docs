---
home: false
title: Deploy the Dashboard
footer: Stanford Byers Center for Biodesign
order: 1
---

# Deploying the Web Dashboard

CardinalKit offers a web dashboard that can be used to visualize mobile health data and survey responses, as well as create and update surveys.

*Requirements:* [Node.js](https://nodejs.org/en/) must be installed on your system.

## 1. Configure Your Firebase Project

Before starting this section, you need to have configured a Firebase project and connected your CardinalKit iOS app to it. Please refer to 'Set up Application Infrastructure' if you haven't done this yet, then return to this section. If you have, then proceed to the next step:
 
 - Go to [firebase.google.com](https://firebase.google.com) and sign in with the same account that you set up for the mobile app.
 
 - Select the same Firebase project that you created previously.
 <br />
 <br />
 <img src="./images/project.png" alt="drawing" width="450"/>
 <br />
 <br />
 - Then select **Project Settings** in the configuration menu.
 <br />
 <br />
 <img src="./images/settings.png" alt="drawing" width="450"/>
 <br />
 <br />
 - Now select **Add app** to create a new web application and associate it with Firebase.
 <br />
 <br />
 <img src="./images/new-app.png" alt="drawing" width="775"/>
 <br />
 <br />
 - Click on the **web app** symbol.
 <br />
 <br />
 <img src="./images/webapp.png" alt="drawing" width="450"/>
 <br />
 <br />
  - Complete the Firebase form to register a new web app.
 <br />
 <br />
 <img src="./images/register1.png" alt="drawing" width="438"/>
 <br />
 <br />
  - Copy the generated Firebase configuration.
 <br />
 <img src="./images/register2.png" alt="drawing" width="650"/>
 <br />
 - Open the ***cardinal-kit-web/.env*** file and replace the bolded keys with their values from the configuration you obtained in the last step.
 <br />
 <br />
   - VUE_APP_FIREBASE_API_KEY = "**apiKey**"
   - VUE_APP_FIREBASE_AUTH_DOMAIN  = "**authDomain**"
   - VUE_APP_FIREBASE_PROJECT_ID  = "**projectId**"
   - VUE_APP_FIREBASE_STORAGE_BUCKET  = "**storageBucket**"
   - VUE_APP_FIREBASE_MESSAGING_SENDER_ID  = "**messagingSenderId**"
   - VUE_APP_FIREBASE_APP_ID = "**firebaseConfig.appId**"


## 2. Test the Dashboard Locally

Once we have configured firebase complements, the next step is to run the service of your website locally. You can also deploy it to the cloud using [Firebase Hosting](https://firebase.google.com/docs/hosting). 

```bash
 cd cardinal-kit-web
```

Once in the folder, the first thing is to install all the dependencies that the Vue project needs. For this we will use npm:

```bash
 npm install
```

After having everything installed and configured, we can run the project.

```bash
 npm run serve
```

## 3. Deploy the Dashboard to Firebase Hosting

Once we confirm that our dashboard is working properly locally, we can deploy it to Firebase Hosting.

First, make sure you are in the `cardinal-kit-web` directory in your terminal.

```bash
cd cardinal-kit-web
```

Then, we need to install dependencies.

```bash
npm install
```

Now, run the build script to create a production build of your dashboard.

```bash
npm run build
```

Then, login to firebase from the command line.

```bash
firebase login
```

Now, connect the directory to your Firebase project.

```bash
firebase init
```

Firebase will go through a series of questions:

- Which Firebase CLI features do you want to set up for this folder? → **hosting: Configure and deploy Firebase Hosting sites**
- Please select an option: **Use an existing project**
- What do you want to use as your public directory? → **dist**  
- Configure as a single page app? **Y**
- File dist/index.html already exists. Overwrite? **N**

Now, deploy your dashboard to Firebase:

```bash
firebase deploy
```

You will now be given a URL where you can see the dashboard live!

Now that your environment is set up, the next time you can just run `firebase deploy` to deploy your updates.
