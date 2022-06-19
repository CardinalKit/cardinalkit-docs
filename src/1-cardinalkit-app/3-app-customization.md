---
home: false
title: Customize Your App
footer: Alternova Inc
order: 3
---

# App Customization Guide

## Configuration Options

CardinalKit provides quick customization options for your health research application through the **CKConfiguration.plist** file, located in the **/CardinalKit-Example/Supporting Files** folder. This file is a spreadsheet that maps CardinalKit-defined keys to user-selected values. This reference shows you how to customize that file to suit your needs. Every key must have a value or the app will crash.

<img src="./images/swiftui.png" alt="drawing" width="650"/>

The default CardinalKit sample app with no CKConfiguration.plist changes.

### CKConfiguration Keys and Values

| Key                          | Values                                                                                                                               |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Study Title                  | The title of your application                                                                                                        |
| Team Name                    | The name of your team or department                                                                                                  |
| Email                        | A support email for users to contact                                                                                                 |
| Phone                        | A support phone number for users to contact                                                                                          |
| Copyright                    | A copyright/informative statement that shows up at the bottom of the Profile view                                                    |
| Website                      | A website URL with more information about your app                                                                                   |
| Tint Color                   | A hexadecimal color for secondary text and iconography in ResearchKit popovers (i.e. #b6133f)                                        |
| Primary Color                | A hexadecimal color for buttons and text throughout the CardinalKit app                                                              |
| Review Consent Step Text     | Text for consent form review                                                                                                         |
| Consent File Name            | Name of saved consent pdf file                                                                                                       |
| Reason for Consent Text      | Text for consent alert                                                                                                               |
| Passcode Text                | Text for passcode selection                                                                                                          |
| Passcode Type                | 4 or 6: The number of numbers in the passcode                                                                                        |
| Completion Step Title        | Title for completing onboarding                                                                                                      |
| Completion Step Text         | Subtext for completing onboarding                                                                                                    |
| Failed Login Title           | Title for failing login                                                                                                              |
| Failed Login Text            | Subtext for failing login                                                                                                            |
| Health Permissions Title     | Title for requesting health permissions                                                                                              |
| Health Records               | Access user health records using Apple's FHIRModels by setting Enabled to 1                                                          |
| Health Permissions Text      | Subtext for requesting health permisions                                                                                             |
| Background Read Frequency    | immediate, hourly, daily, or weekly: How often to read from HealthKit data records                                                   |
| Login-Sign-In-With-Apple        | See below                                                                                                                            |
| Login-Sign-In-With-Facebook     | See below                                                                                                                            |
| Login-Sign-In-With-Google       | See below                                                                                                                            |
| Login-Sign-In-With-UserPassword | See below                                                                                                                            |
| Login-Passwordless           | Sign in using a passwordless setup (this process also needs to be activated on Firebase — refer to our documentation to get started) |
| Login Step Title             | Title for logging in                                                                                                                 |
| Login Step Text              | Subtext for logging in                                                                                                               |
| Withdrawal Instruction Title | Title for withdrawal step                                                                                                            |
| Withdrawal Instruction Text  | Subtext for withdrawal step                                                                                                          |
| Withdraw Title               | Title to show after withdrawing                                                                                                      |
| Withdraw Text                | Subtext to show after withdrawing                                                                                                    |
| Passcode On Return Text      | Text to show when user returns to app and sees passcode request                                                                      |
| Consent Title                | Title of consent form document                                                                                                       |
| Use CareKit                  | Enable the Schedule and Contact tabs from CareKit                                                                      |
| Consent Form                 | See below. At least 1 section is required.                                                                                           |
| Onboarding                   | See below. At least 1 panel is required.                                                                                             |
| Use Cloud Surveys            | Enables surveys created from the web dashboard to appear in Tasks. If disabled, will show locally created surveys in Tasks.          |

### Consent Form Specifications

The values to this element in the file will construct the consent process. At least 1 section is required.

| Consent Form Items |
|--------------------|
| Overview           |
| Data Gathering     |
| Privacy            |
| Data Use           |
| Time Commitment    |
| Study Survey       |
| Study Tasks        |
| Withdrawing        |


### Onboarding Specifications

The ```Onboarding``` key is an array of dictionary items. Each dictionary represents a single panel in the onboarding paging view.



| Key         | Value                           |
|-------------|---------------------------------|
| Title       | A title for the page            |
| Description | A description for the page      |
| Logo        | An emoji or number for the page |

### Sign in with Identity Providers

The ```Login-Sign-In-With-Apple```, ```Login-Sign-In-With-Google```, ```Login-Sign-In-With-Facebook``` and ```Login-Sign-In-With-UserPassword``` keys are arrays of dictionary items. Before turning this feature on, make sure you have taken care of the necessary setup for each provider in Firebase.

| Key     | Value                                     |
|---------|-------------------------------------------|
| Enabled | Whether identity provider sign in is enabled (1 or 0) |


## Create a ResearchKit Survey

Using CardinalKit, you can create [ResearchKit](https://www.researchandcare.org/) surveys that automatically upload their results to your Firestore database.

<div style="position: relative; padding-bottom: 46.19093539054966%; height: 0;"><iframe src="https://www.loom.com/embed/2943f9f789864334961681bb36e2ece0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Using Navigation Logic in Surveys

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/4d754e6ec81046e29d0aba4efdccc210" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Create a ResearchKit Active Task

Using CardinalKit, you can create [ResearchKit](https://www.researchandcare.org/) active tasks that automatically upload their results to your Firestore database.

<div style="position: relative; padding-bottom: 42.1875%; height: 0;"><iframe src="https://www.loom.com/embed/6c9e11665bad4cfb93d0863148214309" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Customize your Consent Process

<div style="position: relative; padding-bottom: 47.638190954773876%; height: 0;"><iframe src="https://www.loom.com/embed/f40186b0c35846b4b448cd6ceb707d26" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

