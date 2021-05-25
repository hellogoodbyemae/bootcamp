# Live Online Web

## Unit 4.3 Async Classroom Guide

#### BEFORE YOU START:

 - Open the video link for today’s class: [https://youtu.be/5wUhEq6zHZU](https://youtu.be/5wUhEq6zHZU)
 - Be ready with your activity files from class. You will need them to complete the day’s activities.
 - Review the day’s objectives:
    - To build a semi-complex jQuery calculator application in teams.
 - Be sure to jot down any lingering questions that you’ll want to take to office-hours.

### 00:06 to 01:50 - Welcome

Welcome to the last stretch of Unit 4!

Double check that you have everything that you need, and that you are comfortable. Today's class is _very_ activity heavy. You'll be putting all of your jQuery skills to the test, building up to completing today's objective: To build a semi-complex jQuery calculator application in teams.

You'd be surprised how close you are in your knowledge to building something like this!

Watch the video through the timestamps indicated above to get the day's context, then move on to the first warm-up of the day, a quiz on the concept of "scope".

### 01:56 to 04:41 - Students Do: Scope Quiz

This is a quick warm-up to see how well you remember these key concepts from the previous class. 

Watch the video through the timestamps indicated to get the instructor's context on this quiz. To help you follow along, here are the instructions:

  - Spend a few moments studying the codefile found in `17-ScopeQuiz` from your class activity files.

  - Then run the program in the browser.

  - Once you run the program, you'll find that Code Block 1 leads to different alerts than Code Block 2.

  - Think about which Code Block is behaving the way you would expect.

  - Then try and identify the specific difference that is causing the issue with the faulty block.

  - Once you spot the issue, be prepared to explain why JavaScript is handling these Code Blocks differently.

Of course, you won't have a partner to explain it to. Try writing down your explanation, as if you had to deliver it to someone later. Then, move on to the next section to review your answers.

### 04:48 to 11:49 - Review Scope Quiz

Watch the video through the timestamps indicated above to review your response to the scope quiz. 

In particular, pay attention to the use of variables inside and outside of functions. Think about which parts of the code it affects, depending on where they were declared.

How did you do? Make sure that you are clear on these concepts. We are bout to get into an example of `this`, a somewhat confusing concept if you haven't yet grasped scope.

### 11:55 to 14:12 - Groups Do: This Example

What do we mean by `this`?

What the video through the timestamps indicated above to get context on `this` exercise. Follow along with `18-ThisExample` from your class activity files. Using the comments in the guide, answer each of the questions asked in the file.

Confused? Don't worry, it will all click soon. Give this exercise a shot! Focus on trying to wrap your head around `this`.

When you are ready, head on over to the next section to review this example.

### 14:19 to 52:49 - Instructor Do: Review This Example

Warning, this next review is _quite long_. There are a number of student questions that help further clarify the nuances of scope, and how it applies to `this`.

Watch the video through the timestamps indicated above. If you get lost or overwhelmed, don't worry, focus on understanding the review for the first three questions. 

Once you think you've got a handle on `this`, head on over to the next final build-up activity, before we start building our calculator. 

### 52:56 to 55:25 - Students Do: Cobwebs

Go to the timestamp above and listen to the instructor’s context for the following activity. You can follow along with `19-Cobweb` from your class activity files. Follow the instructions in the readme.md to complete this activity. 

Once you are good to go, head on over to the next section to review your work.

### 55:32 to 59:11 - Instructor Do: Review Cobwebs

Watch the video through the timestamps indicated above to review the solution to this activity. This review involves students sharing their code. Watch out for their responses. How does your code compare?

When you are done, get ready for a break.

### 59:18 to 59:55 - BREAK!

Time for a break. Take a few and stretch your legs. You've earned it.

After this, we'll be working on the jQuery calculator!

### 01:00:01 to 01:03:39 - Instructor Do: Intro Calculator 

Heads up, you're not imagining things. The instructor video has changed! Do not worry, this is the same class content, but was recorded at a different time.

Go to the timestamp above and listen to the instructor’s context on the jQuery calculator. You can follow along with `20-jQueryCalculator` from your class activity files. 

When you are done, head on over to the next section take on Phase I of this mini-project.

### 01:03:46 to 01:05:13 - Everyone Do: Phase 1: Getting Situated + Pseudocoding Stage

Watch the video through the timestamps indicated above to get context on this first Phase I.

If you need a guide, your goals should be to:

  - Become familiar with the various elements of the HTML page as it is written now. (Identify the classes and IDs that matter!)
  - Create a general strategy for how you will accomplish the task:
    - How will you capture button clicks?
    - What will you do with the numbers clicked?
    - What will you do when the operator is clicked?
    - How will you differentiate numbers from operators?
    - How will you know the "value" of a number clicked?
    - How will you know when a user is done entering the first number?
  - Create a few test "on-click" events. These could just trigger Alert messages for now. If you get further along, then have these buttons alert their "value".

When you think you have a solid strategy, move opn to Phase II to start building your logic!

### 01:05:19 to 01:07:03 - Everyone Do: Phase 2: Begin Logic

How's it going so far? Watch the video through the timestamps indicated above to get context for this next phase.

To help you keep track, your goals should be to:

  - Begin creating sets of variables that you think you will need. As a few suggestions:
    -firstNumber, secondNumber, operator, result
  - Create code that captures the numbers from button clicks, and then displays them on the HTML.
  - Create code that captures an operator click, then immediately tells your code to begin recording the second number. (Example: If a user clicks the "plus" button, you know they are done typing the first number).
  - Create code that checks which operator the user has clicked, then saves this operator for later use in a conditional statement. (Example: If a user clicks the "plus" button, you know you will need to be adding two numbers. If a user clicks the "minus" button, you will need to be subtracting two numbers. Think: if-else statements!)

This is where the heavy lifting begins. Keep at it, you'll get it soon!

### 01:07:09 to 01:07:52 - Everyone Do: Continue Logic Building + Refinement

Quick warning, we are combining the final two phases here. Even though the class in the video had to cut out the last phase, refinement, we encourage you to push all the way through to the end!

Watch the video through the timestamps indicated above, then set yourself the following goals, in two phases (meaning, take a short break between each one!):

Phase III Objectives: Finish Logic (40 mins):

  - Complete the functionality you are missing in your code.
  - Spend a few moments really assessing what you still have to do.

Phase IV Objectives: Refinement (25 mins):

  - Complete any remaining functionality in your calculator
  - Handle bugs and edge cases (Example: What if a user tries to type in more numbers after getting the result? Will that mess up the screen?)
  - Create code to "restart" the calculator after a user clicks "clear".

This is a lot of work. But, if you can do this, you'll be well on your way to mastering JavaScript logic.

When you are done, head over to the final section to review the calculator logic.

### 01:07:58 to 01:22:18 - Instructor Do: Review Calculator + Class Closing

Watch the video through the timestamps indicated above to review your jQuery calculator code. Take your time watching, and correct your own code as necessary. It'll help you understand better.

Need a slower paced walk through? Watch the [video review](https://youtu.be/yKE7016Ioxc)

After that, you'll be done!

Good luck with your homework, and happy coding!
