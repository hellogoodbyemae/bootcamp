# Live Online Web

## Unit 19.2 Async Classroom Guide

#### BEFORE YOU START:

 - Open the video link for today’s class: [https://youtu.be/kR8yj_xBoE8](https://youtu.be/kR8yj_xBoE8)
 - Be ready with your activity files from class. You will need them to complete the day’s activities.
 - Review the day’s objectives:
    - To begin to feel comfortable building static UIs with JSX.
    - To gain an initial understanding of the component-based paradigm in ReactJS.
    - To dissect and build a few simple examples using ReactJS.
 - Be sure to jot down any lingering questions that you’ll want to take to office-hours.

### 00:06 to 20:40 - Instructor Do: Go Through Slides 

Welcome to class!

Today we will focus on components — self-contained modules that are responsible for producing part of an application's UI and functionality in React. This is radically different from the concept of separating the view and logic layers. When we split up our application into components, we're still separating its concerns, but we aren't necessarily separating its technologies.

Watch the video through the timestamps indicated above to review the related slides with the rest of class. Be sure to take notes and feel free to pause the video as needed to research any topics that you might need further clarification on.

Then, get ready for a research focused student activity.

### 20:47 to 23:01 - Groups Do: Installation + Documentation Research

In this activity, you will first install Create React App (if you haven't already), and then you will answer some questions about the React documentation.

Watch the video as indicated above to listen to the instructions for this activity. You will find the instructions in `14-Stu_DocumentationQuestions` from your class activity files. 

When you are done, unpause the video to review the answers to these questions with the rest of class.

### 23:08 to 33:36 - Instructor Do: Review Questions

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Most importantly, make sure that you are formulating a basic understanding of JSX and components along with some of the motivations behind them. To recap:

  - We use components as a way to separate our application into reusable pieces of its UI. This allows us to think about each part of our application's interface in isolation and allows us to quickly build new views into our apps over time since we'll be able to reuse component's we've already created.

  - Using JSX is optional but most React projects make use of it. JSX allows us to describe the UI our components using familiar HTML-like markup in our JavaScript. This allows us to quickly describe and understand the UI our components will produce as well take advantage of the full power of JavaScript, rather than be limited to the features available in a templating language such as Handlebars.

Once you have a good grasp on these concepts, move on to the next section to go over a Create React App demo.

### 33:42 to 43:32 - Instructor Do: Demo Create React App

In this section, the instructor will demonstrate how we can quickly create a React application using Create React App.

Watch the video through the timestamps indicated above to follow along with the example. Be sure to take notes and feel free to pause the video as needed to research any topics that you might need further clarification on.

When you are through, get ready to try this out yourself in a student activity!

### 43:38 to 44:28 - Groups Do: Hello World Example

Now that we have a high-level understanding of Create React App, let's dissect a simpler example and answer some questions.

Watch the video as indicated above to listen to the instructions for this activity. You will find the instructions in `15-Stu_HelloReact` from your class activity files. 

When you are done, unpause the video to review the answers to these questions.

### 44:35 to 48:47 - Instructor Do: Review Hello World Example

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. 

Remember, the major ES6 takeaways are:

  - `const` works like `var`, but it's meant for values that aren't going to be reassigned, otherwise `let` is preferred.
  - arrow functions are shorter function syntax where this is bound to the context where the function was created.
    - If an arrow function body contains a single expression (such as a block of JSX code), that expression is implicitly returned without having to use the return keyword or curly braces.
    - Arrow functions aren't meant to replace regular functions altogether, as they lack a few features we won't have to worry about today. But they can make for some more elegant code if used properly.
  - ES2015 modules are part of a new module system introduced with ES6. So far we've been working with CommonJS modules (module.exports & require syntax) — which for our purposes today will work similarly.
    - As we'll see a bit later, ES2015 modules allow for finer tune control over what is exported and imported from a module. For now just compare the new syntax to what they're used to.

When you are done, get ready for a follow-up activity.

### 48:53 to 50:25 - Students Do: HelloDiv

In this activity you will write a React component that displays your name and some information about yourself.

Watch the video as indicated above to listen to the instructions for this activity. You will find the instructions in `16-Stu_HelloDiv` from your class activity files. 

### 50:31 to 54:46 - Instructor Do: Review HelloDiv

This is the last review before we take a break!

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. 

You will know that you are being successful with these activities if you understand and can explain these concepts:

  - `HelloDiv` is exported and rendered inside of `App`.
  - `App` is exported and then rendered inside of `index.js` as the first argument to the `ReactDOM.render` method.
  - The second argument to the `ReactDOM.render` method is the real DOM element that our React application should be rendered inside of.
  - `HelloDiv`, like most components we'll write, is a JavaScript function; it returns some JSX

How did you do? Do you need to spend some more time with the documentation? Be sure to document any lingering questions that you might need to bring to office-hours.

### 54:53 to 55:14 - BREAK!

We've covered a lot today and this is a good stopping point. 

Let's take a quick 15 minute break before continuing.

### 55:20 to 59:47 - Instructor Do: Hello Bootstrap

Welcome back!

So far we've only just begun to work with React but we've still managed to learn a few key things:
  - In React, we structure our code into components.
  - A component is a JavaScript function that describes some part of our application's UI.
  - Inside of our components, we describe our application's UI using JSX: a markup syntax that resembles HTML.

We're now going to go over how we can add Bootstrap to a React project.

Watch the video through the timestamps indicated above to follow along with the example. Be sure to take notes code along with the instructor. You will need the practice for the next student activity!

### 59:53 to 01:02:04 - Students Do: Hello Bootstrap

In this activity, you will be given slightly less starter code and tasked with creating a React application which renders Bootstrap components to the page.

Watch the video as indicated above to listen to the instructions for this activity. You will find the instructions in `18-Stu_HelloBootstrap` from your class activity files. 

Good luck!

### 01:02:10 to 01:07:04 - Instructor Do: Review Hello Bootstrap

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

Remember, the most important takeaways are:
  - If we want to render multiple JSX elements, they should be contained within a single parent element, such as a div.
  - Void elements, such as input tags, are represented by JSX tags with a self-closing forward slash, i.e. `<input />`.
  - We need to import the react library anywhere that we are utilizing JSX.
  - We use `className` instead of `class` because `class` is a reserved word in JavaScript.

In the next section, we will dive deeper into JSX variable.

### 01:07:11 to 01:15:15 - Instructor Do: JSX Variables

In this section, we will learn to declare a variable and then use it inside JSX by wrapping it in curly braces.

Watch the video through the timestamps indicated above to review the example with the rest of class. Be sure to code along with the instructor. You will need the practice for the upcoming activity!

### 01:15:22 to 01:16:26 - Students Do: JSX Variables

In this activity you will render JavaScript expressions inside of JSX curly braces.

Watch the video as indicated above to listen to the instructions for this activity. You will find the instructions in `20-Stu_JSXVariables` from your class activity files. 

### 01:16:32 to 01:19:55 - Instructor Do: Review JSX Variables

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

The main takeaway here is that when we use JSX curly braces, it means we want to evaluate a JavaScript expression inside. The final value of the expression will be rendered to the page.

If you think you've got it, move on to the final lesson for the day. Otherwise, feel free to pause the video and spend some time researching any topics that you still need to understand.

### 01:20:01 to 01:32:39 - Instructor Do: CSS Demo

In this section we're going to talk about some new built-in options for styling our components.

Watch the video through the timestamps indicated above to review the examples provided. Be sure to take notes and code along with he instructor. This knowledge is indispensable for your ffuture work with React! 

### 01:32:45 to 01:34:22 - Students Do: CSS Props

This is the final activity for the day! In this activity you will change the appearance of an application's components using inline styles.

Watch the video as indicated above to listen to the instructions for this activity. You will find the instructions in `22-Stu_StyleProp` from your class activity files. 

### 01:34:28 to 01:38:54 - Review + Class End

Watch the video through the timestamps indicated above to review the solution to this activity with the rest of class. Remember that you should have access to the solution code in your class activity files.

After that, class is over. Be sure to bring any lingering questions to office-hours.

Happy coding!
