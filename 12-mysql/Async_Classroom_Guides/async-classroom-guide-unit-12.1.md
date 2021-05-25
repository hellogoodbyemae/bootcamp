# Live Online Web

## Unit 12.1 Async Classroom Guide

#### BEFORE YOU START:

 - Open the video link for today’s class: [https://youtu.be/-gAAHN592OY](https://youtu.be/-gAAHN592OY)
 - Be ready with your activity files from class. You will need them to complete the day’s activities.
 - Review the day’s objectives:
    - To have MySQL Workbench or Sequel Pro installed and running on everyone's computers
    - To create a localhost connection to a MySQL server and have everyone successfully connect to it
    - To successfully create, use, and populate a MySQL database with data
    - To successfully create, populate, and select data from a MySQL table
 - Be sure to jot down any lingering questions that you’ll want to take to office-hours.

### 00:06 to 03:01 - Instructor Do: Welcome Class + Introduction to SQL and MySQL

Welcome to class. Congratulations! This is the halfway point of the course. You are well on your way to becoming true full-stack developer.

Please be aware that today's class will be going over something entirely new. It may take you some time to pick up this new language, so be patient. This is part of the developer experience. Sometimes, you have dive head-first into something totally new to create amazing things.

So, with that in mind, let's take some time to go over the purpose SQL and MySQL. This context will help you understand how these new skills will connect back to what we've learned so far.

Watch the video as indicated above to hear it first hand from the instructor. When you are through, head over to the next section to follow along with a demo on installing MySQL Workbench.

### 03:07 to 04:54 - Everyone Do: Install MySQL Workbench

In order to code in MySQL, you will require a coding environment other than that of Visual Studio Code.

Watch the video as indicated above to follow a demo on installing MySQL workbench. Like we said, this is all-new stuff. So, feel free to pause the video as needed to search the web for further context on anything that you might need help with.

In the next section, we will create a local connection to your database.

### 05:00 to 23:42 - Everyone Do: Creating a Localhost Connection Demo 

Since we do not have a defined server to connect to, we are going to set up something called a "localhost connection". This type of connection allows us to create locally stored data on our computers as if they were an external server.

Watch the video through the timestamps indicated above to follow along with a local connection demo. After that, we'll go through a series of small exercises that will walk you through setting up your database and populating it.

### 23:49 to 25:17 - Instructor Do: Connections Vs. Databases

Before continuing, take a moment to watch the video as indicated above to clarify some important vocabulary that will help understand the next few sections.

### 25:24 to 30:19 - Instructor Do: Creating a MySQL Database

In this section, you will learn to create a MySQL Database.

Watch the video through the timestamps indicated above to watch a demonstration. Try to follow along on your own machine, so that you can start getting some practice with SQL syntax.

### 30:25 to 40:41 - Instructor Do: Creating a Table

In this section, you will learn to create a table within your database.

Watch the video through the timestamps indicated above to watch a demonstration. Again, follow along on your own machine. Always Be Coding!

### 40:48 to 01:11:20 - Everyone Do: Setting Up FavoriteDB

Alright, now let's bring it all together and practice by setting up a new DB.

Watch the video through the timestamps indicated above to follow along with the class to set up the DB as indicated in `02-FavoriteDB-NoData` from your class activity files.

Once you are through, get ready for a break!

### 01:11:26 to 01:11:43 - BREAK!

We've covered a lot today. Let's take a quick 15 minute break!

### 01:11:49 to 01:16:42 - Instructor Do: Adding and Updating Data In Tables

In this section, you will learn to populate your DataBase with data!

Watch the video as indicated above to watch a demonstration. If you've been following along with the previous demos, you should be able to now populate your own DB. Give it a shot!

When you are through, you will get to practice this on your own in a student activity.

### 01:16:49 to 01:18:15 - Students Do: Adding Data to FavoriteDB 

Time to put these skills to the test.

Go to the timestamp indicated above and listen to the instructor’s context for the following activity. You can follow along with the instructions below:

  - Try to add at least three rows of data to each table.

  - BONUS: Look into how you you might go about creating a column that can hold a default value within it and how default values work when creating new rows.

  - BONUS: Look into how you might go about creating a column with a default value that automatically go up with each new row

  - BONUS: Look into the concept of making a column the "primary key"

  - ULTRA BONUS: Try to create a column called "id" in one of your tables that can contain an integer, is the primary key for the table, cannot be NULL, and automatically increments with each new row added.


While there is no review of this activity in the class video that you are watching, should you need it, check out the [video review](https://www.youtube.com/watch?v=5tcyKHHbS7U&list=PLgJ8UgkiorCncqIRVifiwiP7VoMpcCq0V&index=2&t=0s). How did you do?

When you have finished the activity, unpause the video and head over to the next section to take a deeper dive into the nuances unique data.

### 01:18:21 to 01:23:35 - Instructor Do: The Value of Unique Values

You might notice that the duplicate data in our table is starting to become something of an eyesore... Let's change that!

Watch the video as indicated above to listen to an explanation on the importance of unique values, and how you can implement them into your Tables.

In the next section you'll get to try this yourself!

### 01:23:41 to 01:25:13 - Students Do: Making and Using an ID Column

Go to the timestamp indicated above and listen to the instructor’s context for the following activity. You can follow along with `04-programmingDB` from your class activity files.

When you have finished the activity, unpause the video and head over to the next section to review your work!

### 01:25:20 to 01:29:58 - Everyone Do: programming_db Solution

Watch the video through the timestamps indicated above to review the solution to this activity. Remember that you should have access to the solution code in your class activity files.

The next section is a bit lengthy. Get ready with your notes, it'll give context on topics that will be relevant this week..

### 01:30:05 to 01:52:36 - Instructor Do: Breaking Into the Join + Class End

Now we are getting into one of the more difficult aspects of MySQL, let's review some useful information that will help in your upcoming homework: Joins. Be sure to take notes!

Watch the video through the timestamps indicated above to hear the instructor's explanation. You can follow along with `05-books` from your class activity files. 

Also, to help you keep track, here is a summary of the topics covered:

  - Joins allow those using MySQL to combine two or more individual tables together using a value that is shared between them.

  - We can utilize joins to combine and display data from both tables.

  - Foreign keys are most commonly used to relate tables since primary keys are unique and won't change.

  - Types of Joins:

    - INNER JOIN: Combines tables where the specified data-values within a column match one-another

    - LEFT JOIN: Combines tables and shows all of the values of the first table specified while only the values which match on the second side will be shown

    - RIGHT JOIN: Combines tables and shows all of the values of the second table specified while only the values which match on the first table will be shown

Once you are through, class is over! Be sure to bring any lingering questions to office-hours.

Happy coding!
