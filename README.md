# React Course: Homework
## Assignments
### Lesson 2
As part of the initialization of the application, you must perform the following steps:

1. Create “CRA” project
2. Install “sass” lib
3. Delete contents of “src” folder
4. Create folders and files in "src" with the following template:

        src
        ├── components
        │   └── App
        │       ├── App.js
        │       └── App.module.scss
        ├── index.css
        └── index.js
5. Configure your application to support importing modules using absolute paths
6. Configure html template (change title and description to “React Course”)

### Lesson 3
It is necessary to create an application - a questionnaire

The user interface should display three main visual blocks (header, content, footer):
1. The header should contain an image with a logo (listed at the end) and the inscription “Questionnaire”
2. The content part should contain a question and answer buttons based on the following data:

        { questionText: "Epic Question",
          firstAnswerText: "Common Answer",
          secondAnswerText: "Epic Answer"
        }

    Also, 10 seconds after the user is shown the content, you need to disable the buttons


3. The footer should contain an image with a logo (listed below) and the inscription “2023 React Course”

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
          <title>React Logo</title>
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" stroke-width="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
   
### Lesson 4
1. The content part should contain a question and answer buttons based on the following updated data:
        
        { questionText: "Epic Question",
          answers: [
            { answerText: "Common Answer",
              correctness: false,
              id: 0
            },
            { answerText: "Rare Answer",
              correctness: false,
              id: 1
            },
            { answerText: "Epic Answer",
              correctness: true,
              id: 2
            },
            { answerText: "Legendary Answer",
              correctness: false,
              id: 3
            }
          ]
        }

2. Set a 2 second delay for receiving data
3. Display a spinner (spinning gray logo) instead of the main content until the data is received
4. Display “Something went wrong!” error instead of main content if no data was received
5. When clicking on any button (as long as they are available), disable all buttons and change the background color of the clicked button according to its “correctness” field (green for true, red for false) and text color to white, and display the corresponding message below all the buttons (“Congratulations! You answered correctly!” for the value “true”, “Unfortunately, you did not find the correct answer!” for the value “false”)
6. If the buttons were disabled by timer (without clicking), display below all buttons the message “The allotted time for an answer has expired!”

### Lesson 5
1. In the header, it is necessary to display the “Reset” button, when clicked, the data is reloaded (with the spinner displayed) and the block with the content returns to its original state (not disabled answer buttons, no success/failure/timeout messages) and a restart of ten second timer
2. In the footer, create a “View the Entire Questionnaire” button, when clicked, a popup should open, inside which you need to dynamically load a component with several png images. Until the download is completed, the message “Loading ...” should be displayed. Also implement the closing of the popup by pressing the button with the image of a cross
3. If necessary, code should be refactored taking into account knowledge about fragments

### Lesson 6
1. Using the context, create the logic for switching dark and light button themes. The switch must be placed in the header
2. Display a “controlled” input field (with a “Type the answer manually” placeholder) below the answer buttons instead of the success/failure/timeout message as long as the buttons are enabled (not disabled). While in the field, at the moment of pressing the corresponding button for submit, if the entered value exactly corresponds to the “answerText” of correct answer (“correctness” = true), implement the logic as if the user clicked on the correct answer button. If the entered value is not correct, nothing happens
3. Implement the logic responsible for rendering the popup at the root of the application tree

### Lesson 7
Transform all your 'Class' components into 'Functional' ones. (transform all related parts of state/lifecycleMethods/Context/etc. keeping the existing application business logic) (except for the 'ErrorBoundary' component, if it exists)

### Lesson 9
1. Install React Router Lib
2. Set the interface display according to the navigation under the following conditions
    * The “Welcome” page should be available at "/"
    * The “Questionnaire” page should be available at "/questionnaire"
    * The “NotFound” page should be available at any URL except "/" and "/questionnaire" (With any message of your choice)
3. The "Welcome" page should display the message "Welcome to Epic Questionnaire" and a "Start" button leading to "/questionnaire"

### Lesson 10
1. Updated data:

        [
          { questionText: "Common Question",
            answers: [
              { answerText: "Common Answer",
                correctness: true,
                id: 0
              },
              { answerText: "Rare Answer",
                correctness: false,
                id: 1
              },
              { answerText: "Epic Answer",
                correctness: false,
                id: 2
              },
              { answerText: "Legendary Answer",
                correctness: false,
                id: 3
              }
            ],
            linkText: "Question 1",
            id: 001
          },
          { questionText: "Epic Question",
            answers: [
              { answerText: "Common Answer",
                correctness: false,
                id: 0
              },
              { answerText: "Rare Answer",
                correctness: false,
                id: 1
              },
              { answerText: "Epic Answer",
                correctness: true,
                id: 2
              },
              { answerText: "Legendary Answer",
                correctness: false,
                id: 3
              }
            ],
            linkText: "Question 2",
            id: 002
          }
        ]

2. Each question must be submitted on a separate page
3. The address "/questionnaire" should redirect to the page with the first question
4. 5 seconds after the “Result” message is displayed, the system should redirect to  the next question (if one exists)
5. The header should display a Navigation Menu with links to each question

### Lesson 12
1. Install “React Redux”
2. Implement Store Creation and сonnect Redux to the Application
3. Add Async Function Middleware
4. Create all the necessary Redux parts to implement the logic of  getting data and then saving it to the Store and retrieving it in React components
5. Don't Transform Functional React Components into Class Components

### Lesson 13
1. Install “Redux Toolkit”
2. Rewrite Redux Store creation using "configureStore"
3. Rewrite key parts of Redux functionality using "createSlice()" and "createAsyncThunk"

### Lesson 15
Write tests for each category according to its characteristics (at least one):
- Rendering
- Data Fetching
- Events
- Timers
