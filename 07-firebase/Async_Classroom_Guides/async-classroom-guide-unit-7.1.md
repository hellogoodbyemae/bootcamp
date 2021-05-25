# Live Online Web

## Unit 7.1 Async Classroom Guide

#### BEFORE YOU START:

 - Open the video link for today’s class: [https://youtu.be/esEqPC5zBB4](https://youtu.be/esEqPC5zBB4)
 - Be ready with your activity files from class. You will need them to complete the day’s activities.
 - Review the day’s objectives:
    - To introduce the concept and utility of "data persistence" in web applications
    - To demonstrate different methods for client-side data storage (i.e. localStorage, sessionStorage, and cookies)
    - To build a semi-complex application taking advantage of localStorage to maintain content between browser sessions.
 - Be sure to jot down any lingering questions that you’ll want to take to office-hours.

### 00:06 to 01:55 - Groups Do: Build a Basic To-Do App

Welcome to class!

Today, we will introduce the concept od data persistence, and experiment with different client side storage options available to you.

To start, open up `01-todolist-nopersistence` from your class activity files. Then, watch the video as indicated above to listen to the instructor's context on this first activity.

When you are ready, follow the instructions in the readme.md to get started. As you work through this, pay attention to the limitations that non-persistent data puts on your application's functionality.

### 02:01 to 19:23 - Instructor Do: Build a Basic To-Do App 

In this section, the instructor will walk through building this application to reinforce its structure.

Watch the video through the timestamps indicated above. Do not yet look at the solution code for this. Instead, try to follow the instructor's logic. How does it match your own thinking? How might you change your approach in the future? 

When you are done, head over to the next section for a final review with other students' input. 

### 19:29 to 25:47 - Everyone Do: Go Over the To-Do App

Alright, now is a good time to check out the solution code in `01-todolist-nopersistence` from your class activity files.

Watch the video as indicated above to review the complete solution to this activity. Be sure to correct your own code, as we will iterate on this application throughout the day. It's important that you understand exactly _how_ it works.

When you are through, head over to the next section for a discussion on Data Persistence.

### 25:54 to 28:30 - Instructor Do: Discuss "Data Persistence"

This is a note taking section.

Watch the video through the timestamps indicated above to listen to the instructor explain and discuss the concept of data-persistence. Feel free to pause the video as needed to google any terms, concepts, or examples that might help you better understand this problem space. 

The next sections expand on this by asking you to list the pros and cons of different client-side solutions to data-persistence.

### 28:36 to 32:43 - Everyone Do: Pros / Cons of Client Side Storage

Before restarting the de video, take a moment to list the advantages and disadvantages of using _client-side_ data storage. If you are still unsure about these concepts, take a moment to google them.

Once you've listed as many PROs and CONs as you can, unpause the video to watch the class discussion on this topic. How do these responses compare to your own?

### 32:50 to 38:06 - Everyone Do: Pros / Cons of Server Side Storage

Before restarting the de video, take a moment to list the advantages and disadvantages of using _server-side_ data storage.

Once you've listed as many PROs and CONs as you can, unpause the video to watch the class discussion on this topic.

The rest of today's class will focus on three different client-side data storage solutions. When you are ready, head over to the next section start building an app that can help you test all three!

### 38:12 to 40:29 - Students Do: Sign-in Page Without Persistence 

In this next section, we will build the skeleton app that will let us test out different client-side data storage solutions.

Watch the video as indicated above to listen to the instructor’s context for the following activity. As you watch, ask yourself. How might data-persistence benefit this application?

Then, follow along with the activity instructions using `02-signin-nopersistence` from your class activity files. Follow the instructions in the readme.md to complete this activity. 

### 40:35 to 43:54 - Instructor Do: Review Sign-in without Persistence

Watch the video through the timestamps indicated above to review the solution to this activity. Remember that you should have access to the solution code in your class activity files.

In the next section, we'll try to implement `localStorage` to save our data!

### 44:00 to 54:06 - Instructor Do: Demonstrate localStorage 

In this section, the instructor will showcase how you can leverage `localStorage` to store information on the user's client.

Watch the video as indicated above, then move on to the next section to try it out yourself!

### 54:12 to 54:37 - Students Do: Sign-in Page with localStorage 

Watch the video as indicated above to listen to the instructor's context on the expected functionality for this application. Then, read the instructions contained within `03-localstorage-demo` from your class activity files.

Once you've completed the activity, head over to the next section for a quick review.

### 54:43 to 56:42 - Instructor Do: Review Sign-in with localStorage

Watch the video through the timestamps indicated above to review the solution to this activity. Remember that you should have access to the solution code in your class activity files.

In the next section, we'll try to implement variation on this kind of solution, `sessionStorage`.

### 56:48 to 01:00:34 - Everyone Do: Replace Sign-in with sessionStorage

Watch the video as indicated above to listen to the instructor's context on the expected functionality for this application. Then, read the instructions contained within `04-signin-localstorage` from your class activity files.

Once you've completed the activity, it's time to take a break!

### 01:00:34 to 01:00:40 - BREAK!

Let's take a quick break before discussing the next topic. 

Take 15 minutes to stretch your legs and get some water. Self care is important.

### 01:00:40 to 01:08:11 - Instructor Do: Introduce Cookies

While we will not be dwelling on it for too long in this course, in this section, the instructor will introduce and demonstrate "cookies".

Watch the video as indicated above to listen to the instructor's explanation on this topic. Feel free to pause the video as needed and google any concepts that may help you better understand _how_ cookies work, and _why_ they are a powerful tool in the appropriate context.

When you are done, head over tot he next section to view a functioning application that leverages cookies.

### 01:08:17 to 01:21:19 - Instructor Do: Show Working Cookies App + Sign-In w/ cookies

In this section, the instructor will demo "cookies" in a live application. As you watch, ask yourself. In what kinds of situations should you try to use cookies to store data on the client?

**Important:** Due to security implications, Chrome doesn't support cookies on static local non-deployed HTML pages. There are workarounds for this, but in order to demonstrate the activity we will either be going to the deployed heroku version of this activity. Cookies are not necessary for this weeks homework, but it is important to touch on it for your knowledge.

### 01:21:26 to 01:22:49 - Groups Do: To-Do with localStorage

To finish out the day, revisit our To-Do app from earlier. Given what we've learned, the best client-side storage solution for this app is `localStorage`.

Watch the video as indicated above to listen to the instructor's context on the expected functionality of the final To-Do app. Then, read the instructions contained within `08-todolist-localstorage` from your class activity files.

Once you've completed the activity, it's time to take a break!

### 01:21:56 to 01:38:06 - Instructor Do: Review the To-Do with localStorage + Class End

Watch the video through the timestamps indicated above to review the solution to this activity. Remember that you should have access to the solution code in your class activity files.

Now that we have learned about client-side storage, the next set of classes will focus on server-side approaches that are much more scalable.

Happy coding!


