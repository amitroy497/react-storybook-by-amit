# Storybook

A development environment and playground for UI components.

Create components independently.

Showcase those components interactively in an isolated development environment.

Ability to view the different components that have been already developed.

View what are the different props that those developed components accept.

Ability to visually showcase those components to your stake holders for feedback.

Dynamically change props on a components and immediately see the change in the UI without moving back and forth to the browser and editor.

Feedback of the accessibility score of the components like color contrast.

## CMD commmands

npx sb init

yarn storybook

### Writing Stories

Create a folder name components in ./src

Create a folder Button in ./src/components

Create following files in ./src/components/Button
Button.css
Button.js
Button.stories.

<!-- ./src/components/Button/Button.js -->

![image](./readme-images/# Storybook

A development environment and playground for UI components.

Create components independently.

Showcase those components interactively in an isolated development environment.

Ability to view the different components that have been already developed.

View what are the different props that those developed components accept.

Ability to visually showcase those components to your stake holders for feedback.

Dynamically change props on a components and immediately see the change in the UI without moving back and forth to the browser and editor.

Feedback of the accessibility score of the components like color contrast.

## CMD commmands

npx sb init

yarn storybook

### Writing Stories

Create a folder name components in ./src

Create a folder Button in ./src/components

Create following files in ./src/components/Button

Button.css

Button.js

Button.stories.js

<!-- ./src/components/Button/Button.js -->

![Button-js](./readme-images/writing-stories/button/Buttonjs.PNG)

<!-- ./src/components/Button/Button.css -->

<!-- ./src/components/Button/Button.stories.js -->

![Button-stories-js](./readme-images/writing-stories/button/Buttonstoriesjs.PNG)

### Another story (Input)

Create a folder Input in ./src/components

Create following files in ./src/components/Input

Input.css

Input.js

Input.stories.js

<!-- ./src/components/Input/Input.js -->

![Input-js](./readme-images/writing-stories/input/Inputjs.PNG)

<!-- ./src/components/Input/Input.css -->

<!-- ./src/components/Input/Input.stories.js -->

![Input-stories-js](./readme-images/writing-stories/input/Inputstoriesjs.PNG)

### Story Hierarchy

Grouping components under a label (Form)

<!-- ./src/components/Button/Button.stories.js -->

![Button-stories-js](./readme-images/story-hierachy/Form/Buttonstoriesjs.PNG)

<!-- ./src/components/Input/Input.stories.js -->

![Input-stories-js](./readme-images/story-hierachy/Form/Inputstoriesjs.PNG)

### Rename stories

Renaming the Small to Small Input

<!-- ./src/components/Input/Input.stories.js -->

![Input-stories-js](./readme-images/rename-stories/Inputstoriesjs.PNG)

### Sorting stories

<!-- ./.storybook/preview.js -->

![preview-js](./readme-images/sorting-stories/previewjs.PNG)

### Story within a story

Create a folder Subscription under ./src

Create a new file Subscription.stories.js

<!-- ./src/Subscription/Subscription.stories.js -->

![Subscription-stories-js](./readme-images/story-within-story/Subscriptionstoriesjs.PNG)

Advantages of writing story within story

1. First we reduce the amount of code we write.

2. If we made changes in the other story, it will automatically get reflected in this story.

### Using args

In v6 each story is considered to be a component with set of arguments. For eg :- props are considered as arguments.

Args mechanism start with having to create template.

<!-- ./src/components/Button/Button.stories.js -->

Button.stories.js

![Button-stories-js](./readme-images/using-srgs/Buttonstoriesjs-1.png)

![Button-stories-js](./readme-images/using-srgs/Buttonstoriesjs-2.png)

Can define args as default export, so that all components have same children props.

![Button-stories-js](./readme-images/using-srgs/Buttonstoriesjs-3.png)

Args at story level will overwrite the args at component level

### Decorators

Create a folder Center under ./src/components

Create following files in ./src/components/Center

Center.js

Center.css

<!-- ./src/components/Center/Center.js-->

![Center-js](./readme-images/decorators/Centerjs.PNG)

<!-- ./src/components/Center/Center.css-->

![Center-css](./readme-images/decorators/Centercss.PNG)

<!-- ./src/components/Button/Button.stories.js -->

Button.stories.js

![Button-stories-js](./readme-images/decorators/Buttonstoriesjs-1.png)

![Button-stories-js](./readme-images/decorators/Buttonstoriesjs-2.PNG)

Local Decorators

<!-- ./.storybook/preview.js -->

![preview-js](./readme-images/decorators/previewjs.PNG)

<!-- ./src/components/Button/Button.stories.js -->

![Button-stories-js](./readme-images/decorators/Buttonstoriesjs-3.PNG)

### Theming

<!-- CMD Command (Install package) -->

yarn add @chakra-ui/core @emotion/core

Create a folder ChakraButton under ./src/components

Create a file ChakraButton.stories.js under ./src/components/ChakraButton

<!-- ./src/components/ChakraButton/ChakraButton.stories.js -->

![ChakraButton-stories-js](./readme-images/theming/ChakraButtonstoriesjs.PNG)

<!-- ./.storybook/preview.js -->

![preview-js](./readme-images/theming/previewjs.PNG)

### Theming and Decorators in v6

<!-- ./.storybook/preview.js -->

![preview-js](./readme-images/theming-and-decorators-v6/previewjs.PNG)

### Addons in v6

Addons as the name implicate add extra features to the storybook.

In v6, there are some essential addons which storybook install when we run the init command.

Light and Dark Background

Light Background :-

![Light Background](./readme-images/addons-in-v6/light-background.PNG)

Dark Background :-

![Dark Background](./readme-images/addons-in-v6/dark-background.PNG)

Clear Background :-

![Clear Background](./readme-images/addons-in-v6/clear-background.PNG)

<!-- ./src/components/ChakraButton/ChakraButton.stories.js -->

![ChakraButton-stories-js](./readme-images/addons-in-v6/ChakraButtonstoriesjs-1.PNG)

![Controls](./readme-images/addons-in-v6/controls.PNG)

Green control can be change to any other color

![Controls-variantColor](./readme-images/addons-in-v6/controls-variantColor.PNG)

Children can also be changed

![Controls-Children](./readme-images/addons-in-v6/controls-children.PNG)

Can add actions (like onclick)

![ChakraButton-stories-js](./readme-images/addons-in-v6/ChakraButtonstoriesjs-2.PNG)

![Actions](./readme-images/addons-in-v6/actions.PNG)

Docs Addon

Can check code.

![Docs-Addon](./readme-images/addons-in-v6/docs-addon.png)

Grid Addon

![Grid-Addon](./readme-images/addons-in-v6/grid-addon.png)

Viewport Addon

Small Mobile

![Small Mobile](./readme-images/addons-in-v6/viewport-small-mobile.PNG)

Large Mobile

![Large Mobile](./readme-images/addons-in-v6/viewport-large-mobile.PNG)

Tablet

![Tablet](./readme-images/addons-in-v6/viewport-tablet.PNG)

Enable Measure Addon

![Measure-Addon](./readme-images/addons-in-v6/measure-addon-1.PNG)

![Measure-Addon](./readme-images/addons-in-v6/measure-addon-2.PNG)

![Measure-Addon](./readme-images/addons-in-v6/measure-addon-3.PNG)

Outlines Addon

![Outlines-Addon](./readme-images/addons-in-v6/outlines-addon.PNG)

### Custom Addons

onClick action addon

![ChakraButton-stories-js](./readme-images/custom-addons/ChakraButtonstoriesjs-1.PNG)

![onClick-action-addon](./readme-images/custom-addons/onClick-addon.PNG)

Actions addon

![ChakraButton-stories-js](./readme-images/custom-addons/ChakraButtonstoriesjs-2.PNG)

![onClick-onMouseOver-actions-addon](./readme-images/custom-addons/onClick-onMouseOver-actions-addon.PNG)
