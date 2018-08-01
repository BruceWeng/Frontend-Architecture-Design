# Frontend-Architecture-Design
#### Design frontend architecture that scales from user story.
1. User story
2. Layout design
3. Component design
4. Action design (constant, action creator): Non-effect for reducer, side-effect for saga
5. Initial state interface design
6. Prop interface design
7. Reducer design (receive only success action)
8. Ajax async function design (error handling)
9. Saga design
10. Unit testing
11. Styling

#### Tips for Redux at Scale:

1. Planed 1 full day of training for each member
2. Tooled our environment
3. Used action creators
4. Redux Ducks
5. Write Unit tests
6. Use payload-based actions
7. Side-effecs with Sagas 

     a. Arrange saga by feature
     
     b. Consolidate and register with sagas/index.js

     c. Export only top-level sagas

8. Normalized the state like a db
9. Selectors are helpful
10. Flow and TypeScript helped

#### Tips for CSS Grid Layout at Scale:

1. Creates a grid container **(display: grid)**
2. Draws grid lines. Takes list of length value (em, px, %, fr, etc) denoting the distance between each line **(grid-template-columns, grid-template-rows)**
3. Applied to grid items. Defines the start and end grid lines for columns and rows. **(grid-column: 1/3, grid-row: 2/4)**
4. Applied to grid container. Use a text-based grid map to apply grid area names to indivisual cells. **(grid-template-areas)**
5. Specifies what grid area the element is placed within **(grid-area: [area name];)**

#### CSS Grid practical approach - Progressive Enhancement:
1. Build accessible mobile-first layout without grid.
2. Use mobile-first layout as fallback for all browsers.
3. Use @supports to detect grid support.
4. At the appropriate break point, create layout with grid and grid-areas.
5. Explore new layouts as viewport widens.

#### Be responsible and set the web we wish to see:
1. Make it accessible.
2. Make it fancy.
3. Make sure the fancy doesn't break accessibility.
