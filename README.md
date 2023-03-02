# Interview Scheduler
## Project Info
Interview Scheduler is an SPA (Single Page Application) for tracking students interviews. The App utilizes React built-in and custom hooks and allows users to add, edit and delete appointments in real time. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. For quality assurance, the project follows best practices of TDD (Test Driven Development), where individual Components are tested in isolation as well as End-to-End testing is performed. Project is built with the latest tools and techniques for optimized user experience.

## Project Functionality
* Appointment days (M-F) are displayed and colour-coded depending on availability
* Each day shows the number of slots available as a snapshot of the week
* A user can switch between days and see detailed information
* Booked and available slots are clearly emphasized
* A user can book interviews by typing in a student name and clicking on an interviewer from a list of interviewers
* A user can change the details of an existing interview by pressing the edit icon
* A user can cancel an existing interview, a pop-up message will ask to confirm the action before permanently deleting an interview
* Days display currently remaining spots and capture updates after each modification

## Visual Representation 

Screen View
![2](https://user-images.githubusercontent.com/95922075/222508785-949f440c-c3ad-4f50-aaae-961ab8cf2b6b.jpg)
you can see booking table for each day, by selecting the day it will display the opened/booked slots

New appointment
![1](https://user-images.githubusercontent.com/95922075/222509571-b15db64b-f8d8-4b9a-a14a-5f142645328e.jpg)
User can add an appointment by clicking on an emply slot with a plus sign, add the name and choose the interviewer and then proceed with saving the appointment 

Deleting/Canceling 
![3](https://user-images.githubusercontent.com/95922075/222509848-d889b6e9-e4db-4e3a-8cf5-388ee0a6fc17.jpg)
User can delete their appointment by pressing delete button and then confirm deleteion 

Attention: For full functionality you have to run client and API server concurrently

## Installation
npm install

## Server start(webpack Development)
npm start

## Jest Test Framework
npm test

## Storybook Testbed
npm run storybook


# Project Stack
Front-End: React, Axios, JSX, HTML, SASS, JavaScript

Back-End: Express, Node.js, PostgreSQL

Testing: Storybook, Webpack Dev Server, Jest, Testing Library and Cypress

# Dependencies
* Axios
* Babel-loader
* Babel/core
* Classnames
* Node-sass
* Normalize.css
* Prop-types
* React
* React-dom
* React-scripts
* React-test-renderer
* Storybook/addon-actions
* Storybook/addon-backgrounds
* Storybook/addon-links
* Storybook/addons
* Storybook/react
* Testing-library/jest-dom
* Testing-library/react
* Testing-library/react-hooks


# API and DB Setup

For full functionality both must run concurrently: the client and the API server applications.

* Start by forking and cloning the scheduler-api server [here(https://github.com/lighthouse-labs/scheduler-api)]
* Follow the steps outlined in README to install and setup the database
* Fork and clone this repo
* Navigate to the root directory and install dependencies with npm install
* Once you have the database setup and the scheduler-api server running, run the following command from the root directory of the project npm start





















