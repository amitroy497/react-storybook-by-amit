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

Button.stories.js

![Button-stories-js](./readme-images/using-srgs/Buttonstoriesjs-1.png)

![Button-stories-js](./readme-images/using-srgs/Buttonstoriesjs-2.png)

Can define args as default export, so that all components have same children props.

![Button-stories-js](./readme-images/using-srgs/Buttonstoriesjs-3.png)

Args at story level will overwrite the args at component level
