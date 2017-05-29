# Postits

## Learning Goals
- To practice creating Backbone components and using them to respond to DOM events.  

## Overview

In this exercise you will create, from the given starter code create an app which builds a list of digital post-it notes.  We will build this exercise in parallel with our lectures.  You will **not** need to submit a pull request.

## Getting Started

You will need to run `npm install` to install the webpack modules required for the project.  To start the web server run `npm start` and you can view the running application at:  [localhost:8081](http://localhost:8081).  

You have to start with an HTML file located in the `/build` directory which displays a form for creating electronic post-it notes.  The HTML file includes an Underscore template to display a Post it note.  

This assignment is designed to simply give you guided practice creating and using Backbonejs Models Views and Collections.  

You can work in pairs at each stage.

## Wave 1 - Models

Create a PostIt model and use an Underscore template to render the note.

**Check-in** You can see a working version [here:](https://gist.github.com/CheezItMan/8ed47b545c0fc558c9c7a095bab4de17)

## Wave 2 - Collections

Create a Backbone Collection and use it to render a list of PostIt notes.  Then add an event handler to create and add new postit notes.  

**Check-in** You can see a working version [here:](https://gist.github.com/CheezItMan/4e807726509f6f256cd7e6fd2ed7a86a)

## Wave 3 - Views

Create a PostItView & a PostItListView which render an individual PostIt model and a collection of Postits.  

Then add an event listener to allow you to add new PostIt notes to the DOM.

A final working version can be found [here:](https://gist.github.com/CheezItMan/6c3c258cce53bf13177969524e1acf66) 

