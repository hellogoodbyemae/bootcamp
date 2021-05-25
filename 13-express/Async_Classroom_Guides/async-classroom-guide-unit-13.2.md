# Live Online Web

## Unit 13.2 Async Classroom Guide

#### BEFORE YOU START:

 - Open the video link for today’s class: [https://youtu.be/EDRZN-HSyqE](https://youtu.be/EDRZN-HSyqE)
 - Be ready with your activity files from class. You will need them to complete the day’s activities.
 - Review the day’s objectives:
    - To gain a preliminary understanding of the basic elements of an Express server.
    - To gain an initial understanding of Express routing.
    - To build a complete Express-based web application.
 - Be sure to jot down any lingering questions that you’ll want to take to office-hours.

### 00:06 to 09:36 - Instructor Do: Welcome Class + Quick Recap "Server" Concepts

Welcome to class!

Today we are going to go over express, a server solution available to you via node. Before that, however, we should recap some of the previous routing concepts, and address some concerns that students might have at this point in the class.

Watch the video through the timestamps indicated above to recap these concept. Be sure to take notes and pause the video as necessary to research any concepts that you might still need help with.

In the next section, we will introduce the Express framework.

### 09:42 to 16:22 - Instructor Do: Demo basic routing with server1.js 

The next few activities will be spent incrementally building out StarWars app using the Express framework.

First, we will introduce the application's functionality through a demonstration on setting up an Express server. Watch the video as through the timestamps indicated above, and follow-along with the code in `08-StarWars-1` from your class activity files.

Make sure that your code is functional by the end of this section. We will be adding to it every step of the way!

### 16:28 to 17:17 - Students Do: Add Route to server1.js

Now it's your turn to add some routes to this Express app.

Watch the video as indicated above to hear the instructor's context for this activity. You can follow along with the instructions using `08-StarWars-1` from your class activity files (yes, the same ones from the previous demo!).

When you are done, unpause the video to review your work!

### 17:24 to 23:54 - Instructor Do: Review Previous Activity

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

In the next activity, we will take a look at the contents of `req.params`.

### 24:01 to 30:12 - Students Do: Dissect req.params

In this activity, we will review the contents of `req.params`, which define the parameters that our request object will present to the server.

First, watch the video as indicated above to watch a brief demonstration of this concept. You can follow along with the instructions using `09-StarWars-2` from your class activity files. 

Then, try to log the information as described in the instructions. 

### 30:19 to 34:16 - Instructor Do: Review Previous Activity

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. 

Remember, the key takeaway is that the `/:character` syntax is a way of saying we have a "variable" parameter in the URL route. Show them via the browser that this means they can search for a given character using the URL and it will display in the console.

### 34:23 to 44:39 - Everyone Do: Dissect Parameter Match

Before continuing with other kinds of routes, let's take a moment to further dissect the result object.

Watch the video as indicated above and follow along with the class. Examine the code flagged in the comments found in `10-StarWars-3` from your class activity files.

Be sure to pause the video as needed to research any topics that you still need help with. It is critical that you understand this for the next few sections!

### 44:45 to 46:34 - Instructor Do: Show code for Post Route

In this demo, we will go through the process of creating a POST request using the code found in `12-StarWars-5`. Watch the video through the timestamps indicated above to follow along.

Remember, Always Be Coding. Try to replicate what you see on screen. It will make the following activity that much easier to understand.

### 46:40 to 47:20 - Students Do: req.body dissection

Now it's your turn to add some routes to this Express app.

Watch the video as indicated above to hear the instructor's context for this activity. You can follow along with the instructions using `12-StarWars-5` from your class activity files (yes, the same ones from the previous demo!).

When you are done, unpause the video to watch a demo on Postman, an app that helps you test endpoints.

### 47:26 to 56:41 - Everyone Do: Postman Demo

In this demo, we will go through the process of installing Postman to test our endpoints without the need of a GUI.

Follow along with the video through the timestamps indicated above to learn how to use this app. It will be instrumental to the next few sections.

### 56:41 to 56:47 - BREAK!

We've covered a lot today and this is a good stopping point. 

Let's take a quick 15 minute break before continuing.

### 56:47 to 01:02:17 - Everyone Do: Demo sendFile (server6.js + view.html)

In this section, you will look at the file sent to you and try to explain what the `res.sendFile line does`. 

Then, try creating a new HTML file and routing to that one instead.

Watch the video as indicated above to hear the instructor's context for this activity. You can follow along with the instructions using `13-StarWars-6` from your class activity files.

When you are through, unpause the video to review the now completed application.

### 01:02:24 to 01:16:42 - Instructor Do: Demo Complete Application

Watch the video as indicated in the timestamps above to review the the final steps to complete the application. You can follow along with the demo using `14-FinalStarWarsApp` from your class activity files.

How did you do? Are there any elements that you don't understand? Should you need it, be sure to check out the [video review guide](https://youtu.be/ygk-kNstqK0?list=PLgJ8UgkiorCmI_wKKVt5FlkTG63sQF6rr).

In the final sections, we will deploy this application to Heroku, a service that lets us deploy dynamic web pages, like this one!

### 01:16:48 to 01:17:48 - Instructor Do: Introduce Heroku

Local development is fun, but it's much more fun to deploy and share with others!

Unfortunately, GitHub Pages only hosts "static" pages, and doesn't support the server side of our application. Heroku is a platform as a service (PaaS). It allows deployment of a back-end and will start up and host your web server and server-side code for you!

Watch the video through the timestamps indicated above to learn how to do this yourself. Then, get ready to try it yourself in the final activity for the day.

### 01:17:55 to 01:20:40 - Groups Do: Deploy to Heroku

To close out today's class, you should deploy your application to Heroku. You will need the following:

  - `01-Activities/14-FinalStarWarsApp`
  - `03-Supplemental/HerokuGuide`

Watch the video through the timestamps indicated above to review the steps along with class, then get ready to do this yourself.

Good luck!

### 01:20:47 to 01:25:20 - Class End

Once your application is live, class is over! Be sure to bring any pertinent questions to office-hours.

Happy coding!

