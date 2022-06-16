<template><div><h1 id="survey-creation" tabindex="-1"><a class="header-anchor" href="#survey-creation" aria-hidden="true">#</a> Survey Creation</h1>
<p>CardinalKit allows you to create custom surveys that users can complete. They can be listed on the Tasks screen, or you can schedule them to be completed on specific days or within a certain period. Surveys can also be assigned to a specific user or a study.</p>
<h2 id="_1-create-a-survey" tabindex="-1"><a class="header-anchor" href="#_1-create-a-survey" aria-hidden="true">#</a> 1. Create a Survey</h2>
<p>Log into the dashboard as an administrator, then in the sidebar click on <em>Surveys</em>.</p>
<img src="@source/2-web-dashboard/images/surveys/1-sidebar.png" alt="drawing" width="450"/>
<p>Here you will see the list of all the surveys that have been previously created. You can see details, edit, and delete. At the bottom click on <em>Create new survey</em>.</p>
<img src="@source/2-web-dashboard/images/surveys/2-create.png" alt="drawing" width="950"/>
<p>On the main screen of your application, the surveys are separated by sections indicating the title, subtitle and the name of the section where it will be located.
The order number indicates from top to bottom in which position you want it to appear.
Show on main screen whether or not you want it to appear on the main screen of the application.</p>
<p>Surveys are made up of several steps, these can be forms (one step with several questions on a single screen) or individual questions, each one displayed on a different screen.</p>
<img src="@source/2-web-dashboard/images/surveys/3-form.png" alt="drawing" width="750"/>
<h3 id="add-a-question" tabindex="-1"><a class="header-anchor" href="#add-a-question" aria-hidden="true">#</a> - Add a Question</h3>
<p>to add a question click on add question and select the type of question you want to add</p>
<p>All questions have a unique identifier and question text</p>
<img src="@source/2-web-dashboard/images/surveys/4-addquestion.png" alt="drawing" width="450"/>
<h3 id="create-a-form" tabindex="-1"><a class="header-anchor" href="#create-a-form" aria-hidden="true">#</a> - Create a Form</h3>
<p>To create a form click on add question and in the selectable list (Type Of Question) locate the option form.</p>
<img src="@source/2-web-dashboard/images/surveys/5-select.png" alt="drawing" width="750"/>
<p>Enter the title and a description, the identifier will be a unique id that will serve to distinguish the questions in the database.</p>
<p>You can add all the questions you need by clicking on the Add Form question button and selecting the type of question</p>
<p>To add questions to a form, click on add form question.</p>
<h2 id="_2-survey-types" tabindex="-1"><a class="header-anchor" href="#_2-survey-types" aria-hidden="true">#</a> 2. Survey Types</h2>
<br />
<h4 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> Text:</h4>
<p>Create an open question with a single line text answer</p>
<h4 id="text-area" tabindex="-1"><a class="header-anchor" href="#text-area" aria-hidden="true">#</a> Text Area:</h4>
<p>Create an open question with a text type answer with several lines to answer</p>
<h4 id="single-choice" tabindex="-1"><a class="header-anchor" href="#single-choice" aria-hidden="true">#</a> Single Choice:</h4>
<p>Create a multiple choice question with a single answer</p>
<h4 id="multiple-choice" tabindex="-1"><a class="header-anchor" href="#multiple-choice" aria-hidden="true">#</a> Multiple Choice:</h4>
<p>Create a multiple choice question with a choice of 1 or more</p>
<h4 id="form" tabindex="-1"><a class="header-anchor" href="#form" aria-hidden="true">#</a> Form:</h4>
<p>Create a form with several questions on a single page</p>
<h4 id="scale" tabindex="-1"><a class="header-anchor" href="#scale" aria-hidden="true">#</a> Scale:</h4>
<p>Create a question with a numerical answer and a graphic scroll</p>
<h4 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> Boolean:</h4>
<p>Create a question with a yes or no answer</p>
<h4 id="instruction" tabindex="-1"><a class="header-anchor" href="#instruction" aria-hidden="true">#</a> Instruction:</h4>
<p>Create an instructions page can be displayed at the beginning of the entire questionnaire</p>
<h4 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature:</h4>
<p>Create a screen to collect a user's signature</p>
<h4 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> Date:</h4>
<p>Create a question with a dated answer</p>
<h4 id="numeric" tabindex="-1"><a class="header-anchor" href="#numeric" aria-hidden="true">#</a> Numeric:</h4>
<p>create a question with a numerical answer in a text box</p>
<h4 id="e-mail" tabindex="-1"><a class="header-anchor" href="#e-mail" aria-hidden="true">#</a> E-mail:</h4>
<p>Create a field for email input</p>
<h4 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> Location:</h4>
<p>Collect an address or location of the user</p>
<h4 id="text-scale" tabindex="-1"><a class="header-anchor" href="#text-scale" aria-hidden="true">#</a> Text scale:</h4>
<p>Create a scale question with text values</p>
<h4 id="timeinterval" tabindex="-1"><a class="header-anchor" href="#timeinterval" aria-hidden="true">#</a> TimeInterval:</h4>
<p>Create a question to answer with a time interval</p>
<h4 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> Height:</h4>
<p>Pick up the user's height</p>
<h4 id="weigh" tabindex="-1"><a class="header-anchor" href="#weigh" aria-hidden="true">#</a> Weigh:</h4>
<p>Pick up the weight of the user</p>
<h4 id="socioeconomic" tabindex="-1"><a class="header-anchor" href="#socioeconomic" aria-hidden="true">#</a> Socioeconomic:</h4>
<p>Create a scale of socioeconomic levels for the user's choice</p>
<h4 id="continuous-scale" tabindex="-1"><a class="header-anchor" href="#continuous-scale" aria-hidden="true">#</a> Continuous Scale:</h4>
<p>Create a numerical scale including decimal numbers</p>
<h4 id="picker" tabindex="-1"><a class="header-anchor" href="#picker" aria-hidden="true">#</a> Picker:</h4>
<p>Create a select with multiple options</p>
<h4 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary:</h4>
<p>show the user a final message</p>
<img src="@source/2-web-dashboard/images/surveys/6-example.png" alt="drawing" width="350"/>
<br />
<img src="@source/2-web-dashboard/images/surveys/7-example2.png" alt="drawing" width="350"/>
<h2 id="_3-assigning-a-survey-to-a-study" tabindex="-1"><a class="header-anchor" href="#_3-assigning-a-survey-to-a-study" aria-hidden="true">#</a> 3. Assigning a Survey to a Study</h2>
<p>The surveys previously created in addition to being able to be filled from the main screen can be added to the calendar and to be filled in specific days or with periodically</p>
<p>To add a questionnaire to a complete study, on the survey page click on the scheduler button</p>
<img src="@source/2-web-dashboard/images/surveys/8-scheduler.png" alt="drawing" width="650"/>
<br />
<br />
<p>There you will see a calendar and a table with the currently assigned surveys
To assign a new one, click on the &quot;Add survey to calendar&quot; button.</p>
<img src="@source/2-web-dashboard/images/surveys/9-calendar.png" alt="drawing" width="650"/>
<br />
<br />
<p>A pop up will appear where you can indicate from which date to which date you want the survey to be filled in the interval of days that you want to pass from one occurrence to another</p>
<img src="@source/2-web-dashboard/images/surveys/10-form.png" alt="drawing" width="650"/>
<br />
<br />
<p>Finally a picker to select all the existing surveys and a short description that the user will read in the calendar of your application</p>
<h2 id="_4-assigning-a-survey-to-a-specific-user" tabindex="-1"><a class="header-anchor" href="#_4-assigning-a-survey-to-a-specific-user" aria-hidden="true">#</a> 4. Assigning a Survey to a Specific User</h2>
<p>In addition to assigning them to a complete study, you can assign surveys to specific users.</p>
<p>For this you must go to the studies section/Patients -&gt; select the user to whom you want to add the survey by clicking the view button</p>
<img src="@source/2-web-dashboard/images/surveys/11-surveypatient.png" alt="drawing" width="650"/>
<br />
<br />
<p>There you will see several sections of data including one called surveys, select it</p>
<img src="@source/2-web-dashboard/images/surveys/12-select-survey.png" alt="drawing" width="650"/>
<br />
<br />
<p>In this new screen you will be able to see the summary of all the responses that the user has had in front of the assigned surveys, click on scheduler to proceed to assign a new one.</p>
<img src="@source/2-web-dashboard/images/surveys/13-scheduler.png" alt="drawing" width="650"/>
<br />
<br />
<p>You will see the calendar and the table of assigned surveys press add survey to calendar and fill in the form in the same way that you filled it in to add the surveys to a study</p>
<img src="@source/2-web-dashboard/images/surveys/14-form.png" alt="drawing" width="650"/>
<h2 id="_5-download-answers" tabindex="-1"><a class="header-anchor" href="#_5-download-answers" aria-hidden="true">#</a> 5. Download Answers</h2>
<p>CardinalKit features the ability to download all the responses of all users to a specific survey in a single .csv file.
<br />
<br />
go to the surveys tab and select the details button for a specific survey</p>
<img src="@source/2-web-dashboard/images/surveys/15-edit.png" alt="drawing" width="650"/>
<br />
<br />
<p>You will find the summary of all survey responses separated by question
click on the download button and you will get a csv file with all the answers organized</p>
<img src="@source/2-web-dashboard/images/surveys/16-download.png" alt="drawing" width="650"/>  
<br />
<br />
<img src="@source/2-web-dashboard/images/surveys/17-example.png" alt="drawing" width="1050"/>  </div></template>
