# Live Online Web

## Unit 10.2 Async Classroom Guide

#### BEFORE YOU START:

 - Open the video link for today’s class: [https://youtu.be/69NPKW97tyQ](https://youtu.be/69NPKW97tyQ)
 - Be ready with your activity files from class. You will need them to complete the day’s activities.
 - Review the day’s objectives:
    - To introduce the internal fs package for handling reading and writing to files with Node.
    - To introduce the NPM axios package for performing HTTP get requests to external websites with Node.
 - Be sure to jot down any lingering questions that you’ll want to take to office-hours.

### 00:06 to 00:57 - Students Do: Command Line Equality

Welcome to class!

We're going to hit the ground running with a warm-up activity.

Get started by watching the video as indicated above. You can follow along with the instructions below:

  - Starting from a blank JavaScript file, create a Node application that takes in two command line arguments and checks if they are equal. If the two numbers are equal then output: "true". Otherwise output: "false".

  - **Bonus:** Check if the two numbers are both multiples of 7. Again output "true" if they are and output "false" if they are not.

  - _Hint:_ `console.log(process.argv)` as a starting point if you are completely lost.

Then, open up your editor and get crackin'!

### 01:03 to 05:41 - Instructor Do: Review Command Line Equality

Watch the video through the timestamps indicated above to review the solution to this activity. Remember that you should have access to the solution code in `10-CommandLineArg` from your class activity files.

Then, head on over to the next section for the first lesson of the day, writing files using node.

### 05:47 to 14:38 - Instructor Do: Write a File

In this example, the instructor will be introducing you to the concept of writing to a text file using Node's internal `fs` package.

Watch the video through the timestamps indicated above to see the instructor's demo. Keep an eye out for the use of `fs` and the order of the parameters that follow.

When you are done, move on to the next section for the reverse situation: reading a file.

### 14:44 to 21:00 - Instructor Do: Read a File

Watch the video as indicated above to learn how to set-up a function using the read function from the same `fs` package.

As an aside, if you are confused about where these variables are coming from, this is because `readFile` is effectively "making" the values and assigning these variables via a callback. Don't know what we mean by callbacks? Do not worry, we will be covering these in an upcoming class. For now, simply focus on what the variables are doing within the context of this code.

When you are done, get ready to try this yourself in a student activity.

### 21:06 to 22:39 - Groups Do: Best Things Ever

Let's put our knowledge of `fs` into practice.

Go to the timestamp indicated above and listen to the instructor’s context for the following activity. You can follow along with `13-BestThingsEver` from your class activity files.

When you have finished the activity, unpause the video and head over to the next section to review your work before taking a break!

### 22:46 to 35:51 - Instructor Do: Review Best Things Ever

Watch the video through the timestamps indicated above to review the solution to this activity. Remember that you should have access to the solution code in your class activity files.

Then, get ready for a break.

### 35:51 to 35:57 - BREAK!

We've covered a lot today. Let's take a quick 15 minute break before continuing with the class.

### 35:57 to 43:02 - Instructor Do: AppendFile

Welcome back!

In this section, the instructor will conclude our exploration of the `fs` package by presenting the append function.

Watch the video through the timestamps indicated above to see the instructor's demo. As you watch, notice that `appendFile` works the same as `writeFile`. In fact, it will also create a new file if one does not already exist. Unlike `writeFile`, however, appendFile won't clear the contents of a file if that file already exists.

In the next section, you'll do another activity that puts all of these lessons together.

### 43:08 to 44:50 - Groups Do: Bank.js

Let's take our understanding of `fs` further by practicing some more nuanced functionality.

Go to the timestamp indicated above and listen to the instructor’s context for the following activity. You can follow along with `14-AppendFile` from your class activity files.

When you have finished the activity, unpause the video and head over to the next section to review your work!

### 44:56 to 01:00:58 - Instructor Do: Review Bank.js

Watch the video through the timestamps indicated above to review the solution to this activity. Remember that you should have access to the solution code in your class activity files.

In the next few sections, you will learn about the request package, which wil allow you to receive information from different APIs.

### 01:01:04 to 01:09:41 - Instructor Do: Axios

_Heads-up:_ This part of the curriculum ahs recently been updated to utilize an NPM package called "Axios", as opposed to the "request" package used in the video that you are watching. These two packages operate similarly. However, your own class will have gone through this section using Axios. Please reach out to your instructional staff, or attend office-hours to clear any question that you might have about the difference between these two approaches.

For now, watch the video as indicated above to learn how to use "request".

### 01:09:47 to 01:13:40 - Instructor Do: OMDB-Axios

In this section, you will learn how to ping the Open Movie Database (OMDb) API that we had used in previous classes.

Remember that your own class activity files will reference the Axios package, but the video is using the "request" package native to node. Please follow the instructions described in the video, as the functionality of both of these packages is quite similar.

When you are through, get ready for an activity that brings this all together.

### 01:13:46 to 01:15:26 - Partners Do: OMDB-Axios Interactive

For this activity you have two options:

  - Easier: Require that the user provide a movie with a single word in the title (ex: Cinderella)
  - Harder: Allow the user to provide a movie with as many words as possible (ex: Forrest Gump).

_Hint:_ Be sure to use an OMDB API Key with your axios request. You may use trilogy.

Watch the video as indicated above to listen to the instructor's context. Then, complete the activity as described. You should have the reference code in your class activity files.

Please reach out to an instructional staff member or one of your peers if you need help with this activity due to the discrepancy between the package used in the video and the package described in your class activity files.

Once you are done, head over to the next section to review your work.

### 01:15:32 to 01:20:34 - Instructor Do: Review OMDB-Axios Interactive + Class End

Watch the video through the timestamps indicated above to review the solution to this activity. Remember that you should have access to the solution code in your class activity files, even if the video and your solution code utilize different node packages.

After that, class is over!

Like we said, be sure to check in with instructional staff if you need help understanding the Axios NPM package that we mentioned.

Happy coding!
