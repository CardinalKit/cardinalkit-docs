---
home: false
title: Setting up the Dashboard
footer: Stanford Byers Center for Biodesign
order: 1
---

# Setting Up the Web Dashboard

CardinalKit offers a web dashboard that can be used to visualize mobile health data and survey responses, as well as create and update surveys.

*Requirements:* [Node.js](https://nodejs.org/en/) must be installed on your system.

## 1. Configure Your Firebase Project

Before starting this section, you need to have configured a Firebase project and connected your CardinalKit iOS app to it. Please refer to 'Set up Application Infrastructure' if you haven't done this yet, then return to this section. If you have, then proceed to the next step:
 
 Go to [firebase.google.com](https://firebase.google.com) and sign in with the same account that you set up for the mobile app.
 
 Select the same Firebase project that you created previously.
 <br />
 <br />
 <img src="./images/project.png" alt="drawing" width="450"/>
 <br />
 <br />
 Then select **Project Settings** in the configuration menu.
 <br />
 <br />
 <img src="./images/settings.png" alt="drawing" width="450"/>
 <br />
 <br />
 Now select **Add app** to create a new web application and associate it with Firebase.
 <br />
 <br />
 <img src="./images/new-app.png" alt="drawing" width="775"/>
 <br />
 <br />
 Click on the **web app** symbol.
 <br />
 <br />
 <img src="./images/webapp.png" alt="drawing" width="450"/>
 <br />
 <br />
Complete the Firebase form to register a new web app.
 <br />
 <br />
 <img src="./images/register1.png" alt="drawing" width="438"/>
 <br />
 <br />
Copy the generated Firebase configuration.
 <br />
 <img src="./images/register2.png" alt="drawing" width="650"/>
 <br />
 Open the ***cardinal-kit-web/.env*** file and replace the bolded keys with their values from the configuration you obtained in the last step.
 <br />
 <br />
 ```
 VUE_APP_FIREBASE_API_KEY = "**apiKey**"
 VUE_APP_FIREBASE_AUTH_DOMAIN  = "**authDomain**"
 VUE_APP_FIREBASE_PROJECT_ID  = "**projectId**"
 VUE_APP_FIREBASE_STORAGE_BUCKET  = "**storageBucket**"
 VUE_APP_FIREBASE_MESSAGING_SENDER_ID  = "**messagingSenderId**"
 VUE_APP_FIREBASE_APP_ID = "**firebaseConfig.appId**"
 ```
 <br />
 <br />
 Now navigate to "Firestore Database" > "Indexes" in your Firebase console. Make sure "Composite" is selected.
 <br />
 <br />
 <img src="./images/create-indexes.png" alt="indexes" width="800">
 <br />
 <br />
 Please add the six indexes that are shown in the image above by clicking "Add Index". It may take a couple of minutes for the indexes to finish building.

## 2. Create an administrator account

 <br />

 To manage your dashboard you need to create an Administrator account. This is created from the Firebase console.

 From the [Firebase console](https://console.firebase.google.com), enter the **Authentication** section.

 <br />

 <img src="./images/authentication.png" alt="drawing" width="550"/>

 <br />
 <br />

 And then add a new user.
 
 <br />

 <img src="./images/newuser.png" alt="drawing" width="850"/>

 <br />
 <br />

Enter a username and password for the administrator user.

<br />

<img src="./images/userpassword.png" alt="drawing" width="750"/>

<br />
<br />

## 3. Add the admin role

Now you need to indicate to the dashboard that this new user is an **administrator** user. 

User roles are managed in Firestore Database. For users created from the web, this process will be automatic, it is necessary to do it by hand only once for the administrator user.

First copy the **UID** of the user you just created:

<br />

<img src="./images/useruid.png" alt="drawing" width="750"/>

<br />
<br />

Then click on **Firestore Database**:

<br />

<img src="./images/firestore.png" alt="drawing" />

<br />
<br />

This is the database of the entire project, here you can see all the records of studies and users generated in the application.

Create a new collection called **users_roles**, add a document with the name being the uid of the previously created administrator user.

Finally add a field to the document called **rol** with value **superAdmin**.

<br />

<img src="./images/add_role.png" alt="drawing" width="850"/>

## 4. Update Firebase Security Rules

In order for your administrator user to be able to access the dashboard, you need to update the **Firebase Security Rules**. This is done from the Firebase console. 

Open **Firestore Database** in the Firebase console, and click on the **Rules** tab. Then replace the rules with the following:

```
rules_version = '2';
service cloud.firestore {
	match /databases/{database}/documents{
  	match /studies/{studyId}{
    	allow write: if request.auth!= null
        allow read: if request.auth!= null
   		
        function accessToStudy() {
   			let data = get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data;
   			return "studies" in data && studyId in data.studies;
   		}
        
        match /users/{userId}/{path_=**}{
        	allow write: if request.auth!= null && request.auth.uid == userId
        	
            function accessToUser(){
                let data = get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data;
                return "users_access" in data && userId in data.users_access
        	}

          allow read: if request.auth!= null && 
          (
            request.auth.uid == userId ||
            (
              exists(/databases/$(database)/documents/users_roles/$(request.auth.uid)) &&
              (
                get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data.rol == "superAdmin" ||
                (
                  get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data.rol == "doctor" &&
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
      	allow write: if request.auth.uid != null &&
        	(request.auth.uid == user || 
          	exists(/databases/$(database)/documents/users_roles/$(request.auth.uid)) &&
          	get(/databases/$(database)/documents/users_roles/$(request.auth.uid)).data.rol == "superAdmin")
        allow read: if request.auth.uid != null
      }
	}
}
```

Click **Publish** to save your new rules.

## 5. Test the Dashboard Locally

Once we have configured Firebase, you can test the dashboard locally. You can also deploy it to the cloud using [Firebase Hosting](https://firebase.google.com/docs/hosting) (See step 6 below).

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

First, make sure you are in the `cardinal-kit-web/src` directory in your terminal.

```bash
cd cardinal-kit-web/src
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

You will now be given a URL where you can see the dashboard live! Now that your environment is set up, the next time you can just run `firebase deploy` to deploy your updates.
