- What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
In a React.js application, PropTypes is a library used to define type and which props are required. It's important to type check out data in JS as this benefits the future me and other developer using my component in two ways:
1. I can easily open up a component and check which props are required and what type they should be.
2. React will give helpful error messages in the console, saying which props is wrong, missing and the render method that caused the problem

- Describe a life-cycle event in React?
There are 3 different life-cycle event that occur in React
1. Mounting - Initialises the environment for a component
2. Updating - Updates environment onces it is initialised and always ensures to update the output on the screen once the data flow of the component changes
3. Death of a component - Removes the component once its no longer used

- Explain the details of a Higher Order Component?
HOC is a function that receives a Component as an argument(adds better functionality) and returns a new Component source.

- What are three different ways to style components in React? Explain some of the benefits of each.
1. Vanilla CSS is used by importing an external CSS file; the styling is written within the file. The benefit would be it's quick and no need to install any external libs.
2. Styled Components is a library allows to write inline css syntax inside of a Component. This is fast and efficeint.
3. BootStrap/ReactStrap is a library with a large databse of pre-written CSS code. This allows to create professional looking designs in a short time compared to doing it from scratch.
