# Live Online Web

## Unit 6.1 Async Classroom Guide

#### BEFORE YOU START:

 - Open the video link for today’s class: [https://youtu.be/nKJlXGaZvKc](https://youtu.be/nKJlXGaZvKc)
 - Be ready with your activity files from class. You will need them to complete the day’s activities.
 - Review the day’s objectives:
    - To introduce the concept and utility of APIs and JSON in web applications
    - To be exposed to a variety of APIs and the process for building endpoint URLs to utilize them
    - To work with the OMDb and Giphy APIs to build data-rich applications
 - Be sure to jot down any lingering questions that you’ll want to take to office-hours.

### 00:06 to 01:22 - Students Do: CustomerObject Parsing

Welcome to week 6! We're going to hit the ground running with a JavaScript object parsing activity.

Follow along with the video with `01-CustomerObject` from your class activity files. Listen to the instructor's context, then jump right in. Don't just look at the solution code! It is a disservice to yourself and your learning. This should be a warm-up using familiar concepts.

Once you are done review the solution in the following section.

### 01:28 to 15:26 - Instructor Do: Review CustomerObject Parsing

Watch the video through the timestamps indicated above to review the solution to this activity. Remember that you should have access to the solution code in your class activity files.

How'd you do? Keep an ear out for student questions that may help further clarify these concepts for you. Then, head over to the next section to install a useful Chrome plugin (you'll be using this a lot!)

### 15:32 to 17:30 - Students Do: Install JSON Formatter

Watch the instructor's context on the [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa/related?hl=en). Then, follow the link to install it yourself.

This tool will help you parse objects that you'll be sending and receiving when you ping APIs throughout the day.

Sound interesting? Check out the instructor's web scraping demo in the next section. It0s pretty cool stuff!

### 17:37 to 34:13 - Instructor Do: New York Times Scraper Demo 

Watch the video through the timestamps indicated above to check out a demo of the [NYT Scraper API](http://nyt-mongo-scraper.herokuapp.com/api/headlines).

As you go through this, try to understand how JavaScript Objects are being used to transfer data from one endpoint to another. This approach of data transmission method is a very common one.

Once you've gone through this, head over to the next section for a quick research activity that will get you thinking about these concepts.

### 34:19 to 35:33 - Students Do: API Research Questions 

Watch the video through the timestamps indicated above to get the instructor's context for this activity.

Then, spend some time researching the answers to the following questions:

  - What is an API?
  - What does API stand for?
  - What are some examples of APIs? (Find links to specific APIs)
  - What do these specific APIs allow you as a developer to do?

While you won't be working with a group, write out your responses anyways. This will help you solidify these lessons in your mind.

### 35:39 to 44:19 - Everyone Do: Review API Research Questions

Watch the video as indicated above and listen to other students' responses. _How do they compare to yours?

### 44:25 to 49:10 - Instructor Do: API Definitions 

What's an API? To recap:

  - APIs stand for Application Programming Interfaces. 
  - They provide a way for creating user code that utilizes other pre-built code to do various tasks. 
  - It can be used to quickly retrieve data from another person's database, to utilize someone elses more complex functionality (like maps), or to control other hardware and software.

In this section, the instructor showcases the [Chuck Norris Jokes API](https://api.chucknorris.io/). Watch the video as indicated above to review the process of querying an API, and some of the nuances behind retrieving the exact data that you are looking for.

There are millions of APIs on the net, and many of them use the JSON format for sending data back and forth. In the next section, we'll experiment a bit more with a different API.

### 49:17 to 54:03 - Instructor Do: API Experimenting

Watch the video through the timestamps indicated above to get context on an API that you'll be experimenting with in the next section.

Pay attention! You'll have to replicate this kind of experimentation shortly.

### 54:10 to 01:06:54 - Students Do: API Experimenting

Heads up: The class in the video mentions the MashApe API library. Nowadays, it is known as the [RapidAPI](https://rapidapi.com) library. Either way, you'll need to create an account.

Watch the video as indicated above to get the instructor's context, then have fun experimenting with the vast world of APIs!

### 01:07:01 to 01:13:53 - Instructor Do: OMDb API Demo

In this section, you'll become familiar with the [Open Movie Database (OMDb) API](https://www.omdbapi.com/).

Watch the instructor's context in the video. Pay particular attention to the way the query is built, including the inclusion of an API key, as per OMDb's documentation. 

Once you think you've got it, head over to the next section to try it out yourself!

### 01:14:00 to 01:15:16 - Students Do: OMDb API Exploration

Watch the instructor's context as per the timestamps indicated above. Then, have fun experimenting with the [OMDb API](https://www.omdbapi.com/). As you do so, ask yourself:

  - Without using the user interface, how would I query the OMDB API to get all of the information related to the movie: Frozen?

  - _Hint:_ you will have to build a URL of your own with the search parameters listed.

Note: The OMDb API now requires an API key. Your key is: trilogy.

When you are through, head on over to the following section to compare your conclusions with those of other students.

### 01:15:22 to 01:19:46 - Everyone Do: OMDb API URLs

Watch the video through the timestamps indicated above to review the different ways in which you could query the OMDb API using the URL.

How do these queries compare to your own attempts in the previous activity? Be sure to write down any questions that you'll need to research further or seek help with.

### 01:19:52 to 01:20:03 - BREAK!

We've covered a lot today. Let's take a quick 15 minute break!

### 01:20:09 to 01:39:12 - Instructor Do: AJAX Query Demo + Logging JSON

Welcome back! You'll notice that the class video instructor has changed. Do not worry! This is the same class content, but was simply recorded at a different time.

In this section, we'll put today's lessons to work to showcase how we can use a jQuery function called AJAX that allows JavaScript to run queries asynchronously. Confused? Don't be! Watch the video as indicated above to hear the instructor's explanation on performing single and multiple AJAX calls within your code.

To help you keep track, here are the parts of an AJAX call:

  - The queryURL which points to the JSON
  - The GET method which tells JavaScript to download the JSON
  - The then function which tells JavaScript to run the code inside ONLY when done with the download
  - Most importantly that all of the data is being stored in the response object-2.9
  - Lastly, in your Chrome inspector, point out how all the code past line 26 happens before the results of our API call are logged. Even though that happens first lexically.

Finally, remember that an AJAX call requires a `.then` to follow it. The AJAX call makes a promise that _something_ will eventually return, and so the function needs instructions on what to do once that promise is fulfilled.

Once you are through, get ready to try it yourself!

### 01:39:18 to 01:39:57 - Students Do: AJAX Query Activity

Now it's your turn! 

Watch the video through the timestamps indicated above to hear the instructor's context. Then, using the example AJAX code provided in `02-Ajax_OMDB` from your class activity files, create an AJAX call to the OMDb API of your own.

Finally, try logging any property about the movie to your console.

When you've got it, head over to the next section to work on displaying these results in HTML!

### 01:40:04 to 01:41:29 - Groups Do: AJAX to HTML Activity

Go to the timestamp above and listen to the instructor’s context for the following activity. You can follow along with `03-AJAX_to_HTML` from your class activity files. Follow the instructions in the readme.md to complete this activity. 

Once you've got it working, head on over to the next section to review your work.

### 01:41:35 to 01:59:58 - Instructor Do: Review AJAX to HTML Activity + Class End

Watch the video through the timestamps indicated above to review the solution. How'd you do? The lessons from this activity 

As a final activity for the day, and to prepare for your upcoming homework, take a few minutes to review the [Giphy Documentation](https://developers.giphy.com/docs/) (a GIF generating API).

Keep in mind, the video does not cover Giphy, but it will be worth your time, as it is relevant to the upcoming homework assignment.

After you have familiarized with the documentation, watch the [video review](https://developers.giphy.com/docs/) to hear another instructor's explanation on how to access the Giphy API.

Once you are through with this, we're done for today! Great work.

Happy coding!
