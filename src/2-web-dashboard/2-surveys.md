---
home: false
title: Creating Surveys
footer: Stanford Byers Center for Biodesign
order: 3
---

# Survey Creation

CardinalKit allows you to create custom surveys that users can complete on their mobile apps. These surveys can be listed on the *Tasks* screen on the mobile app, or you can schedule them to be completed on specific days or within a certain period. Surveys can also be assigned to a specific user or a study.

::: tip
In order for surveys created via the dashboard to appear in the mobile app, *Use Cloud Surveys* should be set to true in *CKConfiguration.plist*.
:::

## 1. Create a Survey

Log into the dashboard as an administrator, then in the sidebar click on *Surveys*.

<img src="./images/surveys/1-sidebar.png" alt="drawing" width="450"/>

Here you will see the list of all the surveys that have been previously created. You can see details, edit, and delete. At the bottom click on *Create new survey*.

<img src="./images/surveys/2-create.png" alt="drawing" width="950"/>

On the main screen of your application, the surveys are separated by sections indicating the title, subtitle and the name of the section where it will be located. 
The order number indicates from top to bottom in which position you want it to appear.
Show on main screen whether or not you want it to appear on the main screen of the application.

Surveys are made up of several steps, these can be forms (one step with several questions on a single screen) or individual questions, each one displayed on a different screen.

<img src="./images/surveys/3-form.png" alt="drawing" width="750"/>

### - Adding Questions To Your Survey

To add a question, click on *Add Question* and select the type of question you want to add.

<img src="./images/surveys/4-addquestion.png" alt="drawing" width="450"/>

### - Creating a Multi-Question Form

You can embed multiple questions into a single form. To create a form, click on *Add question* and in the dropdown list (Select the type of question) choose the *form* option.

<img src="./images/surveys/5-select.png" alt="drawing" width="750"/>

Enter a title, unique identifier, and description for the form. The identifier will be used to distinguish this form in the database.

You can multiple questions to the form by clicking on the *Add Form Question* button, then selecting the type of question you wish to add, and repeating until you have added all the questions you need.


## 2. Survey Types

<br />

#### Text: 
Create an open question with a single line text answer

#### Text Area: 
Create an open question with a text type answer with several lines to answer

#### Single Choice: 
Create a multiple choice question with a single answer

#### Multiple Choice: 
Create a multiple choice question with a choice of 1 or more

#### Form:
Create a form with several questions on a single page

#### Scale: 
Create a question with a numerical answer and a graphic scroll

#### Boolean: 
Create a question with a yes or no answer

#### Instruction: 
Create an instructions page can be displayed at the beginning of the entire questionnaire

#### Signature: 
Create a screen to collect a user's signature

#### Date: 
Create a question with a dated answer

#### Numeric: 
Create a question with a numerical answer in a text box

#### E-mail: 
Create a field for email input

#### Location: 
Collect an address or location of the user

#### Text scale: 
Create a scale question with text values

#### TimeInterval: 
Create a question to answer with a time interval

#### Height: 
Obtain the user's height

#### Weight: 
Obtain the user's weight

#### Socioeconomic: 
Create a scale of socioeconomic levels for the user to choose from

#### Continuous Scale: 
Create a numerical scale including decimal numbers

#### Picker: 
Create a select with multiple options

#### Summary: 
Show the user a final message


## 3. Scheduling Surveys

The survey you created in the previous portion of the guide can also be scheduled to appear on the calendar of the mobile app on specific days.

To add a questionnaire to the schedule, on the survey page, click on the *Scheduler* button.

<img src="./images/surveys/8-scheduler.png" alt="drawing" width="650"/>

<br />
<br />

There you will see a calendar and a table with the currently scheduled surveys. To schedule a new one, click on the *Add Survey to Calendar* button.

<img src="./images/surveys/9-calendar.png" alt="drawing" width="650"/>

<br />
<br />

A pop up will appear where you can select the survey you wish to schedule, as well as indicate the start and end date of your survey, as well as the interval of days in between each day the survey will be offered to the user. You can also add a description that will appear on the mobile app calendar.

<img src="./images/surveys/10-form.png" alt="drawing" width="650"/>

<br />
<br />

## 4. Assigning a Survey to a Specific User

It is also possible to assign surveys to specific users.

To do this, go to the *Patients* screen and select the patient you want to assign the survey to by clicking the *View* button next to their user ID.

<img src="./images/surveys/11-surveypatient.png" alt="drawing" width="650"/>

<br />
<br />

Now click the *Surveys* button.

<img src="./images/surveys/12-select-survey.png" alt="drawing" width="650"/>

<br />
<br />

Now you should be able to see all the surveys this user has taken, as well as schedule a new survey for them to take by clicking the *Scheduler* button.

<img src="./images/surveys/13-scheduler.png" alt="drawing" width="650"/>

<br />
<br />

Now you can select a survey and enter in the start and end dates as well as a description.

<img src="./images/surveys/14-form.png" alt="drawing" width="650"/>

 ## 5. Download Answers

CardinalKit features the ability to download all the responses of all users to a specific survey in a single comma-separated value (CSV) file.
<br />
<br />
To download results as a CSV file, go to the surveys tab and select the *Details* button for a specific survey.

<img src="./images/surveys/15-edit.png" alt="drawing" width="650"/>

<br />
<br />

You will see the results for each question in a table. You can download all the results as a CSV file by clicking the *Download* button at the bottom of the table.

<img src="./images/surveys/16-download.png" alt="drawing" width="650"/>  

<br />
<br />

If you open the CSV file in a spreadsheet editor, you will see the details of each question and each user's response as shown below.

<img src="./images/surveys/17-example.png" alt="drawing" width="1050"/>  