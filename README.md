## About

I was keen to showcase some existing skills whilst also learning some new ones along the way. This is my first project from scratch using the hooks functional component approach with Redux. I have extensive experience with Redux and class based components, so I was curious to see how it would look using hooks from the ground up.

This submission utilises functional components, React hooks, Redux and react-redux hooks, CSS Grid, flexbox, React Testing Library and some config driven architecture methods. I am pleased with where I have got to but would happily spend more time on it too!

Overall I am pleased with the submission. I think the use of functional components throughout, broken into sensible containers and components looks neat and is much more lightweight in terms of lines of code than the class based approach. I’ve also made the privacy form really easy to extend by making it config driven. All you need to do is add an object into the config and it will add it to the form and will work fully with redux to maintain that in the state throughout too.

## Installation and Running
To run the project you will need node and npm installed. I am using node version 12.18.0 and npm version 6.14.4 for reference.

Run the below commands to install and start the project. `npm start` will automatically open the browser at `localhost:3000` and display the first page.

```
$ npm install
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Notes
Currently the form resets the state on a successful completion - ie, once you reach the done page. You can then head back to the initial home page and submit again. I have not yet covered all cases for navigating back but have the means in place to do so. When testing manually, if it's feeling confusing, then just complete the form to reset, and head back to the homepage [http://localhost:3000](http://localhost:3000).

## Testing
Tests are run with `npm test`. It will open the test runner in interactive watch mode, press `a` to run all the tests.

See the official documentation for [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Demo
An example happy path of the form
https://recordit.co/agzPGeOC2I

And of the error validation
https://recordit.co/4Tl0swoSA6

## Stretch Goals
Here is a demo of how to add a new checkbox on the privacy form, which will populate through the store and be logged out with the rest of the details without the need to add checkboxes manually or edit reducers.
https://recordit.co/utui044dZQ

## Next Steps
There are a few things I would like to still do with this project, namely:

- Create variables for brand colours in CSS files
- Make the components styled components, and have a style.css file in the same directory as the index and test file
- Make the sidebar content config driven as per the progressBar. Move them both into a more generic config called stages
- Hook into the browser back button to make sensible state updates of the stage. This would allow the progress bar to update when navigating from the done page back to it.
- Add a confirm password field which only validates successfully if it matches the existing password field value.
- Go the whole hog and make all of the forms config driven. I would make it so that each input type is a config block and can be added to a stage by adding the block with the relevant data attributes to it. It would then be possible to put another front end forn on top of that, to allow any user to update the form themselves through a simple user interface.
