<!-- # Kanban.Board.20d170018
# Frontend Assignment

# **Use React JS for the Assignment**

**Design:** 

**Display state:** 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e1a13657-9dc2-496d-a5c7-b27be15e9fe0/Untitled.png)

**State based on display. - Grouping by user is selected.**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de6f9ade-433a-4185-a6df-4d396ea8be2d/Untitled.png)

**Grouping by priority is selected.**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f8e52ba-2b96-40e8-be6a-34e25dd240eb/Untitled.png)

**Card:**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/896834d4-fe3d-4db5-bd76-29049439b0cb/Untitled.png)

**Api** :  https://api.quicksell.co/v1/internal/frontend-assignment 

You are required to create an interactive Kanban board application using React JS that interacts with the provided API from  https://api.quicksell.co/v1/internal/frontend-assignment

When a user clicks the "display" button and selects a grouping option, the Kanban board should dynamically adjust to reflect the user's choice.

The application should offer three distinct ways to group the data:

1. **By Status**: Group tickets based on their current status.
2. **By User**: Arrange tickets according to the assigned user.
3. **By Priority**: Group tickets based on their priority level.

Users should also be able to sort the displayed tickets in two ways:

1. **Priority**: Arrange tickets in descending order of priority.
2. **Title**: Sort tickets in ascending order based on their title.

The Kanban board should be responsive and visually appealing, with a design similar to the provided screenshots. 

**The priority levels for the tickets are as follows:**

- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)

**Priority levels: (This values you will receive in the api)**

4 - Urgent

3 - High

2 - Medium

1 - Low

0 - No priority

Additionally, the application should save the user's view state even after page reload.

**Assets**

[Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/867c6222-5e73-49fb-b21f-a276ba2d258b/76bcb3fe-d025-4ad4-9247-e38c2935b859/Untitled.zip)

**Note:** 

1. Don’t use css library like Bootstrap, Tailwind, Vite, Material UI, Charka…etc
2. Don’t use NextJs or similar framework. Code in pure ReactJS
3. Write Pure CSS Code only. No library for css (bootstrap,..etc). Styled JSX can be used though

## **Evaluation Criteria**

Your work will be evaluated based on the following criteria:

> UI Should Look exactly same as screenshot.
> 
1. **Functionality**: The application should effectively fetch data from the provided API and allow users to group and sort tickets based on the given options.
2. **Visual Design**: The UI should match the provided design, including the layout, card design, and overall aesthetics.
3. **Business Logic Optimisation**
4. **Component Structuring**: Components should be appropriately structured, promoting reusability and maintainability.

## **Task Submission**

1. Zip your source code and upload it to Google Form 

https://forms.gle/SRb9d6jKEEXJhXG76

1. Host the website somewhere and provide the link for evaluation.

Good luck with your assignment!



# Frontend Assignment - React JS Kanban Board

## **Objective**
Create an interactive Kanban board application using React JS that interacts with the provided API. The application should allow users to group and sort tickets dynamically, following the provided design and specifications.

## **Design & Screenshots**

Below are the visual design references for the Kanban board:

1. **Default Display** (when no grouping is selected):
   ![Default Display](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e1a13657-9dc2-496d-a5c7-b27be15e9fe0/Untitled.png)

2. **Group by User**:
   ![Group by User](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de6f9ade-433a-4185-a6df-4d396ea8be2d/Untitled.png)

3. **Group by Priority**:
   ![Group by Priority](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f8e52ba-2b96-40e8-be6a-34e25dd240eb/Untitled.png)

4. **Card Design**:
   ![Card Design](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/896834d4-fe3d-4db5-bd76-29049439b0cb/Untitled.png)

## **API**

- **Base URL**: `https://api.quicksell.co/v1/internal/frontend-assignment`

You will use this API to fetch the ticket data and populate the Kanban board.

## **Features**

### Grouping Options:
The Kanban board should allow users to group the tickets in three ways:
1. **By Status**: Group tickets by their current status.
2. **By User**: Group tickets by the assigned user.
3. **By Priority**: Group tickets based on their priority level.

### Sorting Options:
Users should be able to sort the displayed tickets by:
1. **Priority**: Sort tickets in descending order of priority.
2. **Title**: Sort tickets in ascending order of their title.

### Priority Levels:
Tickets will have the following priority levels:
- **4** - Urgent
- **3** - High
- **2** - Medium
- **1** - Low
- **0** - No Priority

### State Persistence:
The application should save the user's view state (selected grouping, sorting) and persist it even after a page reload.

### Responsiveness:
Ensure that the Kanban board is responsive and visually appealing, with a design similar to the provided screenshots.

## **Assets**

- Download assets: [Kanban Design Assets](https://prod-files-secure.s3.us-west-2.amazonaws.com/867c6222-5e73-49fb-b21f-a276ba2d258b/76bcb3fe-d025-4ad4-9247-e38c2935b859/Untitled.zip)

## **Important Notes**

- Do not use CSS libraries like Bootstrap, Tailwind, Material UI, Chakra, etc.
- Do not use Next.js or any similar framework. Use pure ReactJS only.
- Write pure CSS code. Styled JSX can be used for styling, but no external CSS libraries.

## **Evaluation Criteria**

Your work will be evaluated based on the following:
1. **Functionality**: Proper fetching of data and correct implementation of grouping and sorting features.
2. **Visual Design**: The UI must match the provided design, including layout, card design, and overall aesthetic.
3. **Business Logic Optimization**: Efficient and clean implementation of business logic.
4. **Component Structuring**: Code should be modular, reusable, and maintainable.

## **Task Submission**

1. Zip your source code and upload it to the Google Form:  
   [Upload Source Code](https://forms.gle/SRb9d6jKEEXJhXG76)
   
2. Host the website and provide the link for evaluation.

## **Good luck with your assignment!** -->
