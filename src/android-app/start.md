---
home: false
title: Create a New CardinalKit Android App
footer: Stanford Byers Center for Biodesign
order: 1
---

# Create a New CardinalKit Android App

<img src="./images/doctors.svg" alt="drawing" width="250"/><br />

## 1. Install Android Studio

Android apps are built natively in Android Studio, an app that is available from the [Android Developer website](https://developer.android.com/studio) for both Mac and Windows. Developing a CardinalKit Android app requires a minimum of Android Studio Chipmunk 2021.2.1 or newer.

## 2. Download the Template Project

Our open-source template Android application is available [on our Github](https://github.com/cardinalkit/cardinalkit-android). If you are familiar with Git, you can clone the project in terminal as follows:

```
git clone https://github.com/CardinalKit/CardinalKit-Android.git
```

Alternatively, you can also download the project as a zip file by clicking "Code" > "Download Zip". Once downloaded, extract the contents of the zip file.

## 3. Open the Project in Android Studio

Open Android Studio, click the "Open" button and select the folder where you extracted the project files. Select the 'CardinalKit-Android' project. 

Android Studio will now show you a "Gradle sync in progress..." message. Wait until this is complete.

## 4. Test Your App

Specify the target for deployment. Select either your phone, if it is plugged in, or pick a device to simulate (we recommend Pixel 4 API 32 or greater). Press the "play" button to build and run the app in the simulator.

If your app is now up and running, continue onto the next section to set up the cloud infrastructure for your app.
