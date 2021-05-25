# Live Online Web

## Unit 7.3 Async Classroom Guide

#### BEFORE YOU START:

 - Open the video link for today’s class: [https://youtu.be/9xet-ZHdL-c](https://youtu.be/9xet-ZHdL-c)
 - Be ready with your activity files from class. You will need them to complete the day’s activities.
 - Review the day’s objectives:
    - To provide a "real-world" application development scenario that utilizes HTML, CSS, Databases, and Data Manipulation
    - To introduce the concept of creating lists and children using Firebase
    - To introduce the MomentJS library for date-time manipulation
 - Be sure to jot down any lingering questions that you’ll want to take to office-hours.

### 00:06 to 06:12 - Instructor Do: Scenario Introduction

Welcome to class!

We're going to hit the ground running today with a time-tracker activity that utilizes all of the skills we've learned so far. By the way, this will be _directly relevant_ to your homework, so take notes!

Watch the video as indicated above to hear it firsthand from the instructor. Then, continue on to the next section to discuss the time-tracker's functionality.

### 06:18 to 08:41 - Where's the Data?

In this section, the rest of class discusses the data storage solution for this application, as well as the underlying architecture of the application.

Watch the video through the timestamps indicated above to hear the answers to the questions:

  - Which fields MUST BE in the database?
  - Which fields can we avoid sending to the database in favor of calculating locally?

Then, head over to the next section to watch a demo of this backend's functionality.

### 08:47 to 15:50 - Instructor Do: App Backend Demo

As a continuation of the previous section, watch the video as indicated above to see how Firebase saves the following data:

  - Employee Name
  - Role
  - Start Date
  - Monthly Rate

The main takeaway here is that the other fields are being calculated based on the available (read: stored) data. Pretty neat, huh?

In the next section, you'll start building such an application yourself.

### 15:57 to 17:14 - Groups Do: Main Application Design Phase

Let's out the lessons from the previous section into practice. 

Wathc the video as indicated above and follow the instructions in the readme.md found in `17-TimeSheet` from your class activity files. Then, complete the activity as indicated.

Fo the sake of transparency, there will be no catch-up code for today. Try to get through this as best as you can. Reach out to peers or your instructional staff if you need help. Keep in mind, this would normally be a group activity. Pace yourself, and take the time to research any concepts that you still need help with. You can do it!

### 17:20 to 23:29 - Instructor Do: Intro to Push

Let's add a bit more complexity. How could you replace existing data instead of simply adding a new entry?

Watch the video as indicated above to learn how to push and overwrite data in a Firebase object. Follow along with the instructor's demo using `18-Push` from your class activity files. 

Once you are done, get ready for the big solo-activity of the day!

### 23:35 to 24:54 - Groups Do: Main Application - Push Phase

Let's put the lessons from the previous section into practice.

Watch the video as indicated above and follow the instructions in the readme.md found in `18-push` from your class activity files. Then, complete the activity as indicated.

Once you are done, head over to the next demo, before a break.

### 25:00 to 37:12 - Instructor Do: Intro to Child_Added

In this section, we will learn to "append children" to a property in a Firebase data object.

Watch the video as indicated above to learn how to "add a child" to a Firebase object. Follow along with the instructor's demo using `19-Add_Child` from your class activity files.

Once you are through, get ready for a break!

### 37:18 to 37:51 - BREAK!

Let's take a quick break before the next activity. 

Stretch your legs. Get some water. Self care is important.

### 37:57 to 39:10 - Groups Do: Main Application - Child_Added Phase

Let's practice appending children in Firebase.

Watch the video as indicated above and follow the instructions in the readme.md found in `18-push` from your class activity files. Then, complete the activity as indicated.

Once you are done, head over to the next demo, before a break.

### 39:16 to 41:38 - Instructor Do: Intro to MomentJS

MomentJS is a pretty cool tool to parse, validate, manipulate, and display dates and times in JavaScript.

Watch the video as indicated above to view a demo on MomentJS, and the ways in which you can interpret DateTime data with it. Follow along with the instructor's demo by visiting  [https://momentjs.com/](https://momentjs.com/)

In the next section, you will apply this to the application we've been building!

### 41:45 to 42:23 - Groups Do: MomentJS Activity 

You know the drill, let's put these lessons to work!

Watch the video as indicated above and follow the instructions in the readme.md found in `20-MomentJS` from your class activity files. Then, complete the activity as indicated.

Once you are done, head over to the next demo, before a break.

### 42:30 to 46:44 - Instructor Do: MomentJS Activity Review

Watch the video through the timestamps indicated above to review the solution to this activity. Remember that you should have access to the solution code in your class activity files.

In the final sections, we'll expand on these skills by interpreting and manipulating data s needed for opur applications.

### 46:50 to 54:02 - Groups Do: Main Application - Datetime Manipulation 

Let's wind back the clock and take a look at `17-TimeSheet` from before.

Watch the video as indicated above and follow the instructions in the readme.md found in `20-MomentJS` from your class activity files. Then, complete the activity as indicated.

Once you are done, head over to the final sections to apply this to the Traintime prediction application.

### 54:09 to 55:28 - Everyone Do: Traintime Prediction (Math)

This final activity is divided into two parts. First, we'll need to figure out the logic for this activity, mathematically.

Watch the video through the timestamps indicated above to get the instructor's context on this activity. To recap, here are the instructions:

  - Assuming:
    - The first train of the day comes in at 3:00 AM.
    - The train runs every 17 minutes
    - The current time is 7:12 PM.
    - There have been no delays and will be no delays.
    
  - Question:
    - How many minutes away is the next train?

Take a few minutes to sort out this logic, then head over to the final section to implement it!

### 55:34 to 56:33 - Everyone Do: Traintime Prediction (Code) + Class Close

Heads up, the class video that you are watching did not have enough time to complete and review this final activity. However, that does not mean that you can't!

Watch the video as indicated above to hear the instructor's brief context for this activity. Then, follow the instructions in the readme found within `21-TrainPredictions` from your class activity files. 

Take your time completing this activity. Then, look for the solution code to review your work. How did you do? Are you ready for the homework? How about your first Group Project?

Speaking of Project I, this class also consists of a Group Formation activity. Please reach out to your instructional staff for further information about your Class' group projects, and your group in particular.

As for this lesson in particular, we're done for the day.

Happy coding, and good luck with your project!
