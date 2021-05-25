# Live Online Web

## Unit 19.1 Async Classroom Guide

#### BEFORE YOU START:

 - Open the video link for today’s class: [https://youtu.be/SWCNLZimvNA](https://youtu.be/SWCNLZimvNA)
 - Be ready with your activity files from class. You will need them to complete the day’s activities.
 - Review the day’s objectives:
   - To understand and utilize ES6 arrow functions
   - To understand and utilize const/let and block Scope
   - To understand ES2015 modules
   - To understand classes, constructors, and class methods
   - To understand truthy/falsy values and and short circuit evaluation
   - To understand and utilize ternary expressions
   - To understand and utilize the `forEach`, `map`, and `filter` array methods
   - To understand ES6 object destructuring
 - Be sure to jot down any lingering questions that you’ll want to take to office-hours.

### 00:06 to 05:23 - Preview of ES6

Welcome to class!

This week we will finally be learning React. However, when working with React, it’s common to utilize newer ES6 JavaScript features we haven’t covered yet. Today we’ll go through some of the most commonly used ES6 features, as well as some JavaScript fundamentals you may not have mastered yet. 

Watch the video through the timestamps indicated above. Be sure to take notes and feel free to pause the video as needed to research any topics that you might need further clarification on.

In the next section, we will introduce arrow functions.

### 05:30 to 20:40 - Instructor Do: Arrow Function Demo

In this demonstration, you will learn about arrow functions, including syntax differences, when to use them, and when to avoid them.

Watch the video through the timestamps indicated above. Don't be lazy! Code along with the instructor and get some practice in before the next activity. If you get lost, take the time to pause the video and research on your own (the MDN docs are always a good place to start).

When you are through, unpause the video and get ready for the first activity of the day.

### 20:47 to 21:53 - Students Do: Arrow Function Practice

In this activity you will convert a file with pre-written code over to use arrow functions where suitable.

Watch the video as indicated above to listen to the instructions for this activity. You will find the instructions in `02-Stu_ArrowFunctionPractice` from your class activity files. 

When you are done, unpause the video to review the solution.

### 21:59 to 28:13 - Instructor Do: Review Arrow Function Practice

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

Remember, the takeaways for now are:
- In most cases, we can replace regular functions with arrow functions.
- Arrow functions shouldn’t be object methods.

In the next section, we will introduce the concept of Block Scoping.

### 28:19 to 36:14 - Instructor Do: Let and Block Scope 

In this example we will demonstrate the new `let` keyword and how block scoping works.

Watch the video through the timestamps indicated above. Be sure to take notes and feel free to pause the video as needed to research any topics that you might need further clarification on.

If you get lost with these concepts, just remember: With function scope, variables defined inside of a function body are only available inside of that function, as well as functions defined inside of that function.

In the next section we will add to these lessons by introducing the `const` keyword.

### 36:21 to 47:14 - Instructor Do: Constant Reference

Aside from `let`, we also have one more new option for declaring variables: `const`. As you might imagine, you can think of this as "constant". This new tool can help prevent us from accidentally reassigning values we don't mean to, and also helps express intent.

Watch the video through the timestamps indicated above to review a few examples with the rest of class. Be sure to take notes and feel free to pause the video as needed to research any topics that you might need further clarification on.

When you are done, get ready to try these new concepts yourself with a student activity.

### 47:21 to 48:47 - Students Do: Convert Const Let Arrow

In this activity, you will convert a prebuilt Crystal Guessing Game to use the new ES6 syntax covered so far.

Watch the video as indicated above to listen to the instructions for this activity. You will find the instructions in `05-Stu_ConvertConstLetArrow` from your class activity files. 

When you are done, unpause the video to review the solution.

### 48:53 to 57:02 - Instructor Do: Review Convert Const/Let & Arrow

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

Pay particular attention to the use of each keyword or function type. Context matters, and learning to read it will help you get the most out of these keywords.

In the next section, we will introduce some new keywords that will add more nuance to your conditional expressions.

### 57:08 to 01:11:12 - Instructor Do: Truthy/Falsey and Ternary Expressions 

In this example we will briefly go over short circuit evaluation (Truthy and Falsey) as well as ternary expressions. While not new to JavaScript, these are heavily used in React and may require some explanation.

Watch the video through the timestamps indicated above to review the examples with the rest of class. Be sure to take notes and feel free to pause the video as needed to research any topics that you might need further clarification on.

Then, get ready to try this out yourself in a student activity.

### 01:11:18 to 01:12:35 - Student Do: Truthy and Falsey

In this activity you will refactor if/else statements to make use of short-circuit evaluation and ternary expressions. Once complete, the activity code should work the same way.

Watch the video as indicated above to listen to the instructions for this activity. You will find the instructions in `07-Stu_TruthyFalsey` from your class activity files. 

### 01:12:42 to 01:19:03 - Instructor Do: Review Truthy and Falsey

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

When you are through, get ready for a break!

### 01:19:03 to 01:19:09 - BREAK!

We've covered a lot today and this is a good stopping point. 

Let's take a quick 15 minute break before continuing.

### 01:19:09 to 01:30:18 - Instructor Do: Functional Loops

Welcome back!

Let's hit the ground running with a demonstration where you will be introduced to new Array methods: `forEach`, `filter`, and `map`.

Watch the video through the timestamps indicated above to review a few examples of each of these methods. Be sure to take notes and feel free to pause the video as needed to research any topics that you might need further clarification on.

Feeling lost? Don't worry, it may take a minute to click. Remember:

 - Each of these array methods:
    - Works on an array
    - Runs a callback function once for each element in the array
    - Passes the each element into the callback as an argument
  - The differences between each of these methods are:
    - `forEach` is the simplest. It runs the callback for each element in the array
    - `fitler` is similar to `forEach`, but it returns a brand new array using elements in the original array.
    - `map `is similar in that it also returns a brand new array using elements in the original array. Unlike `filter`, the new array created with map is always the same length as the original array.

When you are through, get ready for a student activity.

### 01:30:24 to 01:31:46 - Students Do: Functional Loops

In this activity you will use the `map` and `filter` methods to solve problems you previously would have solved with for-loops.

Watch the video as indicated above to listen to the instructions for this activity. You will find the instructions in `09-Stu_FunctionalLoops` from your class activity files. 

### 01:31:52 to 01:44:32 - Instructor Do: Review Functional Loops

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

After this, we have one more concept to go over, Classes.

### 01:44:38 to 02:13:37 - Instructor Do: ES6 Classes

Many programming languages have the concept of classes. A class can be used as a blueprint for creating new objects or "instances". Up until recently, we used constructor functions in JavaScript to achieve the same effect. Classes in ES6 are just a new syntax for JavaScript constructor functions that make it easier to define blueprints for objects.

Watch the video through the timestamps indicated above to review a few examples of each of these concepts with the rest of class. Be sure to take notes and feel free to pause the video as needed to research any topics that you might need further clarification on.

Then, get ready to try this out yourself in a student activity.

### 02:13:44 to 02:15:10 - Student Do: Constructor to Class

In this activity you will convert a constructor function to an ES6 class.

Watch the video as indicated above to listen to the instructions for this activity. You will find the instructions in `11-Stu_ConstructorToClass` from your class activity files. 

### 02:15:17 to 02:30:37 - Instructor Do: Review Constructor to Class + Class End

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

After that, class is over. Be sure to bring any lingering questions to office-hours.

Happy coding!
