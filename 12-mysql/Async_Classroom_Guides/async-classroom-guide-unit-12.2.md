# Live Online Web

## Unit 12.2 Async Classroom Guide

#### BEFORE YOU START:

 - Open the video link for today’s class: [https://youtu.be/nnOTl3Cw46c](https://youtu.be/nnOTl3Cw46c)
 - Be ready with your activity files from class. You will need them to complete the day’s activities.
 - Review the day’s objectives:
    - To create a connection to a MySQL database using Node
    - To create, read, update, and delete data from a MySQL database using Node
    - To work with a group in taking a basic concept for a server side application and creating a working prototype for that application within a given time frame
 - Be sure to jot down any lingering questions that you’ll want to take to office-hours.

### 00:06 to 15:37 - Instructor Do: Welcome Class + SQL Review

Welcome to class!

Today's lesson combines the old with the new in a way that shows just how powerful a MySQL server can be.

However, before getting started, watch the video through the timestamps indicated above to review SQL lessons from unit 12.1. Be sure to take notes, and feel free to pause the video to research any topics that you might still have doubts on.

Once you are through, get ready to follow along with a demo on setting up a MySQL database using node!

### 15:44 to 23:07 - Instructor Do: Creating a Database Connection Demo

First thins first, we cannot manipulate the data within a MySQL database without first creating a connection to that specific database. This is actually a lot easier than it sounds, thanks to the "MySQL" package for Node.

Watch the video as indicated along to follow-along with a demo on this topic. You can use the code found in `06-iceCreamWithConnection` from your class activity files to keep track with the demo.

When you are through, get ready to try this yourself in a student activity.

### 23:13 to 24:05 - Students Do: Creating a Database Connection

Alright, now let's bring it all together and practice by setting up a new DB ourselves.

Watch the video through the timestamps indicated above to get the context on this activity. You can follow along with the instructions using the README.md found in  `07-iceCreamReadData` from your class activity files.

In the next section, we will learn to read data from this newly created DB.

### 24:11 to 31:17 - Instructor Do: Reading Data From a Database

As it turns out, calling records from a MySQL database using Node is a whole lot easier than one might initially imagine, so long as you understand SQL syntax.

Get some practice using the proper syntax. Watch the video as indicated above to learn how to properly set-up your code to read data from a MySQL DB.

Be sure to take notes and research topics as needed. You'll be doing this yourself in the next section!

### 31:23 to 34:31 - Students Do: Collecting Data From a Database

You know the drill, it's time to get some practice on the previous lesson.

Watch the video through the timestamps indicated above to get the context for this activity. You can follow along with the instructions using the README.md found in `08-playlistRead` from your class activity files.

In the next section, we will learn to read data from this newly created DB.

### 34:38 to 40:08 - Everyone Do: Review Collecting Data From a Database

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

The next section is a bit lengthy. Get ready with your notes, it'll give context on topics that will be relevant this week.

### 40:15 to 49:40 - Instructor Do: Creating, Updating, and Deleting Data Using Node 

In this section, we will take a deeper dive into the the complete suit of queries we should expect from a SQL database.

Watch the video as indicated above to dive deeper into the nuances of SQL queries. To help you keep track, simply remember the acronym that a lot of programmers use in order to remind themselves which functions they have available to them. This acronym is CRUD :

  - C - CREATE - INSERT INTO pets (name, type, age) VALUES ("fido", "dog", 3)
  - R - READ   - SELECT * FROM pets
  - U - UPDATE - UPDATE pets SET name="under dog" WHERE type = "dog"
  - D - DELETE - DELETE FROM pets WHERE type = "mouse"

In the next section, we will iterate over the last activity to add CRUD functionalities to our app!

### 49:47 to 50:46 - Groups Do: CRUD Playlist 

It's time to start making our playlist application a little more functional through including all four C.R.U.D elements within it.

Watch the video through the timestamps indicated above to get the context for this activity. You can follow along with the instructions below:

  - Add in some pieces of code that CREATE, UPDATE, and DELETE specific pieces of data from your MySQL database. Make sure to include a READ statement at the end as well to ensure that the changes you are making are working properly.

  - BONUS: After successfully adding CRUD to your application, it's time to test your mettle and see if you can make it so this app is more dynamic. Add the ability for users to dynamically input their own data into the database using the Inquirer NPM package.

  - HINT: Recall that you can create MySQL queries which include variables using question marks. Proper usage of this will help you quite a bit.

  - HINT: Remember to take into account the scope of Inquirer package when putting your application together.

After this, get ready for a break, before the big activity of the day.

### 50:46 to 50:52 - BREAK!

We've covered a lot today and this is a good stopping point. 

Let's take a quick 15 minute break before continuing.

### 50:52 to 52:07 - Groups Do: Great-Bay

This is the big activity for the day, so let's hit the ground running.

Watch the video through the timestamps indicated above to get the context for this activity. You can follow along with the instructions using the README.md found in `10-GreatBay` from your class activity files.

In the final section, you will get to watch other students' solution to this activity and compare your results.

### 52:13 to 01:09:55 - Everyone Do: Share Your Work

Great work, getting through this activity. How do you think you did?

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

Should you need a slower paced recap of this activity, check out the [video review guide](https://www.youtube.com/watch?v=oWMAhTUHMFw&list=PLgJ8UgkiorCncqIRVifiwiP7VoMpcCq0V&index=3&t=0s).

After that, class is over! Be sure to bring any pertinent questions to office-hours.

Happy coding!
