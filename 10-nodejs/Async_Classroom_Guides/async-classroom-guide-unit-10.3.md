# Live Online Web

## Unit 10.3 Async Classroom Guide

#### BEFORE YOU START:

 - Open the video link for today’s class: [https://youtu.be/3NxUISlxG7I](https://youtu.be/3NxUISlxG7I)
 - Be ready with your activity files from class. You will need them to complete the day’s activities.
 - Review the day’s objectives:
    - To introduce students to the concept of NPM and the process for including new packages.
    - To introduce students to inquirer.js, an NPM package for building responsive command line applications.
 - Be sure to jot down any lingering questions that you’ll want to take to office-hours.

### 00:06 to 01:22 - Welcome!

Welcome to class!

Today we're going to hit the ground running with a CommandSort warm-up. So, watch the video as indicated above to hear the day's objectives from the instructor, then head over to the next section to get started.

### 01:28 to 02:27 - Students Do: CommandSort Refresher

In this first activity, we're going to practice using the command line in node to execute a simple sort function.

Go to the timestamp indicated above and listen to the instructor’s context for the following activity. You can follow along with `20-CommandSort` from your class activity files.

When you have finished the activity, unpause the video and head over to the next section to review your work!

### 02:34 to 10:58 - Instructor Do: Review CommandSort

Watch the video through the timestamps indicated above to review the solution to this activity. Remember that you should have access to the solution code in your class activity files.

How'd you do? Are you getting comfortable with the way node functions? Take this time to review research any lingering questions you might have.

When you are ready, restart the video for a refresher on using the Axios NPM package.

### 11:04 to 29:55 - Instructor Do: Axios Refresher 

Watch the video through the timestamps indicated above to recap [Axios](https://www.npmjs.com/package/axios), a promise based HTTP client for the browser and node.js

Pay particular attention tot he use of `package.json`. As you watch, ask yourself, where do these dependencies come from? How are they being tracked?

In the next section, the instructor will expand upon NPM, what it is, and how it offers a giant arsenal of pre-made code that can speed up our development by leveraging the work of others.

Copy-paste coding at its very best.

### 30:02 to 41:23 - Instructor Do: Visit NPM and Explain

In this section you will learn more about NPM.

In a nutshell, NPM stands for Node Package Manager. It allows us to quickly incorporate pre-made code snippets into our Node applications.

Follow along with the instructor's explanation by watching the video though the timestamps indicated above, and visit the NPM website:

[https://www.npmjs.com/browse/star](https://www.npmjs.com/browse/star)

Then, in the next section, you will review another example using a different node package.

### 41:29 to 58:45 - Instructor Do: Weather NPM

In this section, you will learn about the Weather-js node package.

Watch the video as indicated above to hear it first hand from the instructor.

_NOTE:_ As you follow along with the demo, be sure to search for "weather-js" and not just "weather" as they will bring up different packages.

In the next section, you will get to try this for yourself!

### 58:52 to 01:05:02 - Groups Do: Geocode NPM

Let's put our knowledge of NPM into practice.

Go to the timestamp indicated above and listen to the instructor’s context for the following activity. You can follow along with `23-GeocodeNPM` from your class activity files.

_NOTE:_ You will have to replace YOUR-MAPQUEST-API-CONSUMER-KEY in geocodeChallenge.js with your MapQuest API key (if you haven't already signed up for one, do so [here](https://developer.mapquest.com/plan_purchase/steps/business_edition/business_edition_free/register)).

When you have finished the activity, unpause the video and head over to the next section to review your work!

### 01:05:08 to 01:05:41 - Instructor Do: Review Geocode NPM 

Watch the video through the timestamps indicated above to review the solution to this activity. Remember that you should have access to the solution code in your class activity files.

When you are ready, restart the video to dive deeper into node packages.

### 01:17:32 to 01:17:38 - Instructor Do: Intro to Node Packages

In this section we will try to answer the question: "Why might zipping up code containing NPM packages and sending it around be a bad approach for a collaborative team?"

Watch the video through the timestamps indicated above to hear it first hand from the instructor.

Then, get ready with your class activity files to try this out for yourself!

### 01:22:16 to 01:27:08 - Everyone Do: NPM Install weatherdest

Watch the video as indicated above to follow along with ths activity. You will need your class activity files for this.

To help you keep track, here are the instructions:
  - Navigate to the folder where your weatherDest.js file is.
  - Delete the node_modules folder. Then do the following:
    - Create a package.json file (i.e. run npm init)
    - Add your dependencies to the package.json (i.e. run npm install node-geocoder and npm install weather-js)
    - Confirm that you now have a node_modules folder with the node-geocoder and weather-js packages as a result
    - Finally, re-run your weatherDest.js to confirm that it still works as expected
  - Now delete your node_modules folder again but keep your packages.json file. This time...
    - Simply run npm install
    - Confirm that you once again have a node_modules folder with the node-geocoder and weather-js packages
    - Finally, re-run weatherDest.js to confirm that it still works as expected

When you are done, get ready for a break!

### 01:27:08 to 01:27:15 - BREAK!

This is a good stopping point for now.

Take 15 minutes to stretch your legs and rest your eyes!

When we return, we will take a look at a node package called Inquirer.

### 01:27:15 to 01:37:22 - Instructor Do: Inquirer Intro 

Inquirer is a useful node package that contains a collection of common interactive command line user interfaces.

Watch the video through the timestamps indicated above to learn about its installation process and basic functionalities. Remember, you can follow along with `25-Inquirer_Intro` from your class activity files.

When you are through, get ready to try this for yourself.

### 01:37:28 to 01:39:15 - Groups Do: Inquirer User Activity

Let's put our understanding of Inquirer into practice.

Go to the timestamp indicated above and listen to the instructor’s context for the following activity. You can follow along with `26-Inquirer_Users` from your class activity files.

When you have finished the activity, unpause the video and head over to the next section to review your work!

### 01:39:22 to 01:46:13 - Instructor Do: Review Inquirer User Activity

Watch the video through the timestamps indicated above to review the solution to this activity. Remember that you should have access to the solution code in your class activity files.

Need a slower paced run through of this activity? Check out the [video review](https://www.youtube.com/watch?v=JJqriV7Q9og).

When you are ready, restart the video to listen to the instructions for an additional Geocode activity.

### 01:46:19 to 01:47:34 - Groups Do: Inquirer Geocode + Begin ZombieChallenge

_Heads up:_ The class in the video that you are watching did not have time to complete the following activity. However, that does not mean that you can't give it a shot yourself.

Go to the timestamp indicated above and listen to the instructor’s context for the activity. You can follow along with `27-Inquirer_Geocode` from your class activity files.

When you have finished the activity, check out the solution code and compare it against your work. You can also follow along with the solution in the [video guide](https://www.youtube.com/watch?v=G9CtacWgYho).

How did you do? This is pretty advanced stuff, so don't worry if it is not 100% clicking yet. You'll get there with practice!

### 01:47:41 to 01:49:58 - Instructor Do: Intro to Debugging Node

Debugging is a good skill to have that might help you find get your code up and running faster. In node, you can do this with `inspect-process` in node.

Watch the video as indicated above to watch a walk through and explanation of this node package, and how you can leverage it to debug your code.

Then, get ready to try it out yourself in the final activity for the day.

### 01:50:05 to 01:59:47 - Everyone Do: Debug Node with inspect-process package

Watch the video through the timestamps indicated above to follow along with a debugging activity. To help you follow along, here are the instructions.

Instructions:
  - Install the Node package inspect-process globally on your machine by running npm install -g inspect-process.
  - Then open any Node program we've worked on to date and add the keyword debugger; in various places.
  - Then run the program by typing inspect <NAME OF PROGRAM>.
  - Experiment with the resulting inspect-process interface to step through the code.

_Note:_ Debugging Node.js applications can get a bit complex. If it works for you... Great! Don't sweat it if the debugger doesn't work right out of the box. You can always just console.log when debugging your Node applications.

Should you need it, you can also check out the [NPM Package inspect-process documentation](https://www.npmjs.com/package/inspect-process).

### 01:59:54 to 01:59:59 - Class End

Class is done!

You might notice that there is still an additional bonus activity in your class activity files. If you are interested, follow along with the instructions found in the readme.md for `29-ZombieChallenge`.

Give this activity a shot! When you are, you can review the solution code found in the same directory.

Happy coding!
