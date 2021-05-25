# Live Online Web

## Unit 13.1 Async Classroom Guide

#### BEFORE YOU START:

 - Open the video link for today’s class: [https://youtu.be/LVKLHL-uvIU](https://youtu.be/LVKLHL-uvIU)
 - Be ready with your activity files from class. You will need them to complete the day’s activities.
 - Review the day’s objectives:
    - To gain a conceptual understanding of server-side code.
    - To learn the fundamentals of building a server using plain Node.js to listen and respond to client-side requests.
 - Be sure to jot down any lingering questions that you’ll want to take to office-hours.

### 00:06 to 26:01 - Instructor Do: Welcome Class + Intro to Servers

Welcome to class!

We are going to start with a intro to servers presentation. Watch the video through the timestamps indicated above to review the slideshow. Feel free to pause the video as needed to research any terms that you might need help understanding.

To help you keep track, here are some of the main takeaways about the role of servers in fullstack development:

  - Listeners that listen for client-side requests.
  - URL Parsers for breaking down the URLs that clients make requests to. (You can use the example of how news websites use URLs that mix dates and article titles to identify, which resource to grab)
  - Route Handling for determining what happens when a user visits or sends data to a specific URL.
  - The ability to send HTML or send JSONs in response to users requesting data.
  - The ability to receive POSTs (i.e. data that users send).
  - The ability to initiate more complex server-side logic in response to any of these requests.
  - And more (Authentication, Logging, Database Connections, etc.)

In the next section, we will watch a demo on setting up a server with node.

### 26:07 to 38:26 - Instructor Do: My First Server

In this demo, we will go through the process of re-creating the server.js file found in `01-FirstServer`. Watch the video through the timestamps indicated above to follow along.

Remember, Always Be Coding. Try to replicate what you see on screen. It will make the following activity that much easier to understand.

### 38:32 to 40:32 - Groups Do: Two Servers App

Now it' your turn to build a web server (or rather two).

Watch the video as indicated above to hear the instructor's context for this activity. You can follow along with the instructions using `02-Two-Servers` from your class activity files.

When you are done, unpause the video to review your work!

### 40:38 to 45:40 - Instructor Do: Review Two Servers App

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

Once you are through, get ready for a break!

### 45:40 to 45:46 - BREAK!

We've covered a lot today and this is a good stopping point. 

Let's take a quick 15 minute break before continuing.

### 45:46 to 55:51 - Instructor Do: Portfolio Server

In this demonstration, we will go over a basic "url parsing" and "routing" example.

Watch the video through the timestamps indicated above to learn about the following:

  - The use of the abbreviated terms req and res, which are short for request and response.
  - The use of the switch-case statement which routes the code to a different function depending on the URL provided.
  - The way in which we can render HTML dynamically on the page through each function.

Be sure to take notes. In the next section, you'll analyze the same code to try to describe how it works.

### 55:57 to 57:06 - Students Do: Discuss Portfolio

Watch the discussion through the timestamps indicated above. How do other students' conclusions compare to your own? Are there any topics that you need to research before continuing?

In the next section, we will show how to serve HTML pages dynamically, using our server.

### 57:13 to 01:10:36 - Instructor Do: Serving HTML

In this next demonstration, we will be using fs to read and serve HTML files.

You can follow along with the video using `04-Serving-HTML/` from your class activity files. Be sure to code along with the demo, you'll need the practice for the next activity!

### 01:10:42 to 01:12:30  - Groups Do: Serve-Favorites

Now it's your turn to build a web server (or rather two).

Watch the video as indicated above to hear the instructor's context for this activity. You can follow along with the instructions using `05-Serve-Favorites` from your class activity files.

When you are done, unpause the video to review your work!

### 01:12:37 to 01:17:50 - Instructor Do: Review Students Serve Favorites 

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

In the final section, we will give a glimpse of the kinds of functionality we will be able to build throughout the rest of the unit, with a discussion on Request methods.

### 01:17:57 to 05:05 - Instructor Do: Request Methods

Up until now, we have only been using GET requests. In this final section, we will very briefly introduce you to other HTTP methods.

You can follow along with the video using `06-Request-Methods/` from your class activity files. Be sure to code along with the demo, you'll need the practice for your homework!

As you complete this section, can try to hit your new End Points using PostMan (or any similar application). Alternatively you can use CURL:

  - curl -i -H "Accept: application/json" -X GET -d "firstName=james" http://localhost:8080
  - curl -i -H "Accept: application/json" -X POST -d "firstName=james" http://localhost:8080
  - curl -i -H "Accept: application/json" -X PUT -d "firstName=james" http://localhost:8080
  - curl -i -H "Accept: application/json" -X DELETE -d "firstName=james" http://localhost:8080

After that, class is over! Be sure to bring any pertinent questions to office-hours.

Happy coding!
