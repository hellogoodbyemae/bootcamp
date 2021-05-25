# Live Online Web

## Unit 12.3 Async Classroom Guide

#### BEFORE YOU START:

 - Open the video link for today’s class: [https://youtu.be/JRPyLZP9NO0](https://youtu.be/JRPyLZP9NO0).
 - Be ready with your activity files from class. You will need them to complete the day’s activities.
 - Review the day’s objectives:
    - To introduce students to the processes of creating and working within databases which deal with large data
    - To help solidify the foundations of MySQL and SQL syntax
    - To learn how to create MySQL schemas and import large amounts of external data into a database
 - Be sure to jot down any lingering questions that you’ll want to take to office-hours.

### 00:06 to 01:40 - Students Do: MySQL Quiz

Welcome to class!

We're going to kick off today, not with a review, but with a pop-quiz!

Watch the video through the timestamps indicated above to hear the instructor's context. Be sure to jot-down the questions to prevent unnecessary video scrolling.

When prompted, pause the video and complete the quiz. In the next section, you will review the solution with the rest of class.

### 01:46 to 04:45 - Instructor Do: Review MySQL Quiz

Time to review the answers to the warm-up quiz.

Watch the video through the timestamps indicated above. As you do, ask yourself: How do the students' responses compare to your own? Are there any topics that you'd need to research further?

Take a moment to google any lingering doubts. Then, get ready for an introduction to BIG data.

### 04:51 to 07:45 - Instructor Do: Introduction to Big Data

Up until this point we have been dealing with fairly small collections of data on our servers. Today, we will change that by working with MySQL databases that contain massive amounts of data.

It is not terribly different than working on smaller servers. The only major difference here is the amount of information you are sifting through in order to create programs.

Watch the video as indicated in the timestamps above to learn more about how we will make this transition. Be sure to take notes and research any lingering doubts.

In the next section, we will review a large data-set to illustrate the complexities.

### 07:52 to 13:13 - Groups Do: Examining The Dataset

In this section, we will introduce the dataset that you will be working with today. It contains 5000 lines of music data within it.

Watch the video through the timestamps indicated above to get the context for this activity. Take your time inspecting the data-set and getting familiar with it. Take note of the following:

  - Columns containing the artist name; song name; year; raw popularity score for the song from the entire world; and then one column for each of the raw popularity scores for the song from the USA; UK; Europe (i.e., non-English speaking countries in Europe); and the rest of the world, respectively.

  - It includes "raw score" numbers that reflect the "total value of music industry sales", where a higher raw score indicates a greater volume of sales.

In the next section, we will learn how to start populating our databases in bulk using Schemas.

### 13:19 to 17:31 - Instructor Do: Setting Up Schemas and Planting Seeds

The actual code used to affect MySQL servers is not saved directly onto their servers. In fact, the only thing that IS saved when you run SQL queries are the changes you have made to the server. Fortunately, there are other ways in which MySQL developers save their code for just such a reason! 

Watch the video through the timestamps indicated above to learn about Schemas and Seeds, and how they work with MySQL servers. Be sure to take notes. In the next section, you will start preparing your own DB using these tools.

### 17:38 to 18:21 - Groups Do: Preparing the Database

It's time to put these skills into practice.

Watch the video through the timestamps indicated above to get the context for this activity. Follow along with the instructions below:

  - It's time to test your skills in creating databases and tables as you create a database called top_songsDB which will eventually house all of the music data contained within TopSongs.csv

  - Within your database create a table called Top5000 and create columns capable of holding all of the data contained within TopSongs.csv properly.

  - All of your code should be written and saved within a filed called schema.sql so that you can use this same code later should the need ever arise

  - HINT: Try to have your table's columns match those within the CSV file as closely as possible or else you may find the next step in this assignment more difficult than it would otherwise be

  - BONUS: Create a seeds.sql file that adds the data for the first three songs found within TopSongs.csv to your table

  - BONUS: Look into how MySQL Workbench can import and export data files. What file types does it accept? How does it convert the data?

When you are through, unpause the video to watch a review of this activity.

### 18:27 to 27:08 - Everyone Do: Review the Database

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class.

Remember that the table being created should match the data-types contained within the CSV file with the default type being VARCHAR.

In the next section, the instructor will review how to import data in bulk using MySQL workbench.

### 27:14 to 33:16 - Instructor Do: Importing Data

Watch the video as indicated above to learn how to import large data-sets into MySQL workbench. When you are through, unpause the video to try this yourself!

### 33:22 to 35:19 - Groups Do: Importing and Working With Big Data

You know the drill, it's time to get some practice on the previous lesson.

Watch the video through the timestamps indicated above to get the context for this activity. You can follow along with the files found in `12-Top5000Schema` from your class activity files.

In the next section, we will compare different students' solutions.

### 35:25 to 42:52 - Everyone Do: Going Over Working With Big Data 

Before reviewing the complete solution to this activity, let's see how other students attempted to solve this activity.

Watch the video through the timestamps indicated above. As you do so, ask yourself: What are some common pitfalls that you encountered?

When you are through, get ready fro a break!

### 42:52 to 42:59 - BREAK!

We've covered a lot today and this is a good stopping point. 

Let's take a quick 15 minute break before continuing.

### 42:59 to 01:02:57 - Instructor Do: Review Working With Big Data 

In this section, you will take a deeper dive into working with Big Data, using the solution code from the previous activity.

You can follow along with the video using `13-Top5000Code` from your class activity files. Besure to take notes. And, if you want to take a deeper look into this topic, check out this [article explaining MySQL indexes](https://atech.blog/viaduct/mysql-indexes-primer).

### 01:03:04 to 01:07:53 - Groups Do: Two Tables Are Better Than One

This is the last activity of the day, so let's hit the ground running.

Watch the video through the timestamps indicated above to get the context for this activity. You can follow along with the instructions using the README.md found in `14-TwoTables` from your class activity files.

In the final section, you will get to watch other students' solution to this activity and compare your results.

### 01:08:00 to 01:18:51 - Everyone Do: Going Over Two Tables + Class End

Great work, getting through this activity. How do you think you did?

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

Should you need a slower paced recap of this activity, check out the [video review guide](https://www.youtube.com/watch?v=CJDp8W9xIVU&list=PLgJ8UgkiorCncqIRVifiwiP7VoMpcCq0V&index=4&t=0s).

After that, class is over! Be sure to bring any pertinent questions to office-hours.

Happy coding!
