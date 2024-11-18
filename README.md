# Tic-Tac-Toe Assignment

## Instructions:
Create a fully functional 2-player Tic-Tac-Toe game using HTML, CSS, and JavaScript. Players will take turns as "X" and "O" on a 3x3 grid, with the goal of getting three in a row.

---

## Plan:
### Objective: 
Define the purpose of the program.

### Features:
- A 3x3 game grid.
- Players take turns as "X" and "O".
- Check for a winner or a draw after each move.
- Display the result (winner or draw) at the end.
- A reset button to restart the game.

### Requirements:
- **HTML:** Game board and result display.
- **CSS:** Styling for the grid and game interface.
- **JavaScript:** Game logic, turn management, and win/draw detection.

### Breakdown Requirements:
- **Determine necessary variables:**  
  List variables and describe content.
- **Decide on basic HTML structure:**  
  How will you build the board?
- **Plan algorithm to determine a winner:**
- **User Interactions:**  
  How will the player select their space?
- **Edge Cases:**  
  - Players attempt to click on an already-filled cell.  
  - Ensure that the game doesn’t allow moves after a win/draw.

---

## Design:
### HTML Structure:
- Game board.
- User input.
- Reset button.

### Visual Layout:
Attach a wireframe.

---

## Function Design:
Write pseudocode for each of the following functions:

1. `initializeGame()`:  
   Displays the game board and sets the player to X.

2. `playerMove()`:  
   Handles the player input and places a mark on the board.  
   *This may be completed as more than one function if you choose.*

3. `checkWinner()`:  
   Checks all rows, columns, and diagonals for three identical symbols.

4. `resetGame()`:  
   Resets the game board.

---

## Implement:
- Write your code.
- Don’t forget descriptive comments.

---

## Test:
### Unit Testing:  
Test each function (e.g., `initializeGame()`, `playerMove()`, `checkWinner()`, and `resetGame()`) individually.

### Edge Cases:
- Ensure no moves are allowed on filled cells.
- Confirm the game ends properly on a win or draw.

### User Input:
- Test:  

| Test Number | Ended in Win for X | Ended in Win for O | Ended in Draw | Result Output | Is the Output Correct? |
|-------------|--------------------|--------------------|---------------|---------------|-------------------------|
| 1           |                    |                    |               |               |                         |
| 2           |                    |                    |               |               |                         |
| 3           |                    |                    |               |               |                         |
| 4           |                    |                    |               |               |                         |
| 5           |                    |                    |               |               |                         |
| 6           |                    |                    |               |               |                         |
| 7           |                    |                    |               |               |                         |
| 8           |                    |                    |               |               |                         |
| 9           |                    |                    |               |               |                         |
| 10          |                    |                    |               |               |                         |

### Retest if Needed:
| Test Number | Ended in Win for X | Ended in Win for O | Ended in Draw | Result Output | Is the Output Correct? |
|-------------|--------------------|--------------------|---------------|---------------|-------------------------|
| 1           |                    |                    |               |               |                         |
| 2           |                    |                    |               |               |                         |
| 3           |                    |                    |               |               |                         |
| 4           |                    |                    |               |               |                         |
| 5           |                    |                    |               |               |                         |
| 6           |                    |                    |               |               |                         |
| 7           |                    |                    |               |               |                         |
| 8           |                    |                    |               |               |                         |
| 9           |                    |                    |               |               |                         |
| 10          |                    |                    |               |               |                         |

---

## Deploy:
- Grade your project using the rubric below.
- Highlight the block that indicates the level you believe you have achieved for each criterion.
- Submit the assignment on Google Classroom.

---

## Maintain:
- What would you do to expand on this project?

---

## Rubric:
| **Criteria**                     | **Exceeds Expectations (100%)** | **Meets Expectations (90%)** | **Approaching Expectations (75%)** | **Needs Improvement (50%)** | **Did Not Attempt (0)** |
|-----------------------------------|---------------------------------|-----------------------------|------------------------------------|-----------------------------|--------------------------|
| **Plan (8 points)**               | Thoroughly defines project goals, features, and technical requirements. Clear planning and requirements documentation. | Defines most project goals and requirements, with minor gaps in planning details. | Basic goals or requirements outlined but lacks comprehensive planning. | Minimal planning or requirements identified, unclear project direction. | Did Not Attempt |
| **Design (8 points)**             | Detailed wireframe, mock-up, or storyboard with logical layout, user-friendly navigation, and a clear aesthetic that reflects project goals. | Design is mostly complete and functional but lacks some detail in layout or user flow. | Design is basic or lacking in some critical user flow or layout. | Minimal design elements or poor organization. | Did Not Attempt |
| **Implement (10 points)**         | Project submitted on or before the start of class on the due date. | Project submitted by the end of the day on the due date. | Project submitted one or two days late. | Project submitted less than one week late based on the due date (if due Monday, must be submitted by midnight Sunday). | Over one week late. |
| **Test (8 points)**               | Comprehensive testing conducted; identified issues logged and addressed effectively. | Adequate testing conducted with minor issues. | Minimal testing with several issues remaining. | Little to no testing conducted; major issues unresolved. | Did Not Attempt |
| **Maintain (8 points)**           | Develops detailed plans for future development that could lead to a new release. | Develops plans for future development that includes significant changes/improvements to the program. | Includes some ideas for future development that change/improve the program but lacks planning. | Includes ideas for future development but they make no significant change to the program. | Did Not Attempt |
| **HTML Structure and Syntax (10 points)** | HTML is correctly structured and valid. Tags are closed properly, indentation is consistent, and semantic tags are used appropriately. | HTML is mostly correct, with minor syntax or structure issues that don’t affect the display. | Multiple syntax or structural errors; improper use of tags or inconsistent indentation. | HTML is minimally functional, with numerous errors affecting display and readability. | Did Not Attempt |
| **CSS Placement and Organization (5 points)** | CSS is primarily external, with internal or inline styles only where necessary for overriding specific styles. CSS is organized and easy to read. | CSS is mostly external, with minimal and justifiable use of internal or inline styles. | CSS is partially external, but internal or inline styles are used without clear justification. | CSS is mostly internal or inline, with poor organization. | Did Not Attempt |
| **Project Functionality: Core Features (20 points)** | All required core features are implemented and work as specified. | Most core features work as specified, with minor issues. | Core features are partially implemented, but functionality is limited or inconsistent. | Minimal core functionality is present, but major features do not work. | Did Not Attempt |
| **User Experience and Visual Design (8 points)** | Visual design is cohesive, elements are aligned, and the layout is intuitive. User interactions are smooth and logical. | Visual design is mostly cohesive, but some minor alignment or layout issues exist. | Visual design is functional but lacks consistency or has significant alignment issues. | Visual design is disorganized, with poor alignment and user flow. | Did Not Attempt |
| **Comments (15 points)**          | Comments are detailed, insightful, and enhance understanding. | Comments are detailed, insightful, and enhance understanding. | Comments are present and relevant. | Comments are vague or lack detail. | Did Not Attempt |
