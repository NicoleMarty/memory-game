# Mean Girl Memory Game (clicky game)

## What the game does

From a technical standpoint, the game's statc UI is broken up into components. React.js is used to manage component state and respond to user events.

- Renders different images of notorious mean girls to the screen.
- Each image listens for click events.
- The game tracks the user's current score (Score) and best score (Best).
- Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.
- The user's score increments when clicking an image for the first time.
- The user's score resets to 0 if they click the same image more than once.
- Once the user's score is reset after an incorrect guess, the game keeps the best score until the user has won.

## High-level overview of code organization

    build
    node_modules
    public
    	index.html
    src
    	components
        	FriendCard.js
            Score.js
            Wrapper.js
        style
        	friendcard.css
            score.css
            wrapper.css
      App.css
      App.js
      Images.json
      index.css
      index.js

.gitignore
package.json
README.md

## Start-to-finish instructions on how to run the game

Game is deployed at [https://shrouded-earth-89601.herokuapp.com/](https://shrouded-earth-89601.herokuapp.com/)

## Technologies used in to build game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- React
- Axios
- Javascript
- HTML
- CSS

## My role in the game's development

I was the sole developer in this project. :sunglasses:

## Continuing development notes

Modeling fonts and such after the Burn Book in Mean Girls. Also, names of the mean girl on hover/click.
