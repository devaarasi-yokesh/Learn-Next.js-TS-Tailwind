## Example:
Problem: Hydration mismatch in task app
Root cause: server rendered empty list, client read localStorage immediately and rendered saved tasks
Fix: move storage read into useEffect, use loaded flag
Concept learned: render vs mount vs hydration

Problem: Hydration mismatch in task app
Root cause: With the help of AI, got to know it's a rendering issue. I don't understand it because of no knowledge about how rendering works.
Understanding the problem: Visiting React rendering lifecycle - to clearly know what's the issue.
### React Component
- In React, everything is a component which is a function from JS ( Functional Component)
- In this functional component, we can use Hooks ( useEffect, useState) which are extra functionalities.
- Also JSX is returned from this function which is a html + JS code - will be shown in the browser later.
### Lifecycle - Client Side

#### Initial render ( mount - actually run the code inside functional component)

- Step 1:
  1. Run all code inside function body
  2. Initialize all values (useState, useMemo, const, var...)
  3. Run JSX 

- Step 2: Take the computed JSX code to Virtual DOM
   - Virtual DOM -  Virtual Representation of the DOM which lives in memory, managed by React
   React uses virtual DOM to compare it with actual DOM to make updates efficiently.
   - Middleware 

- Step 3:
    - DOM - What user sees on screen

- Step 4:
    Browser paint - What user sees

- Step 5: Schedule all remaining hooks to run(useEffect); Code inside useEffect() runs
  - useEffect hook got initialized in step 1 with all other initialization.
  - But the code inside of useEffect scheduled to run after the component mount into the DOM.

- Step 6: Runs cleanup functions (useEffect)

#### Update (re-render) 

- Step 1:
  1. Run all code inside function body
  2. *Update* all values (useState, useMemo, const, var...)
  3. Run JSX 

- Step 2: Take the computed JSX code to Virtual DOM
   - Virtual DOM -  Virtual Representation of the DOM which lives in memory, managed by React
   React uses virtual DOM to compare it with actual DOM to make updates efficiently.
   - Middleware 

- Step 3:
    - DOM - What user sees on screen

- Step 4:
    Browser paint - What user sees

- Step 5: Schedule all remaining hooks to run(useEffect); Code inside useEffect() runs
  - useEffect hook got initialized in step 1 with all other initialization.
  - But the code inside of useEffect scheduled to run after the component mount into the DOM.

- Step 6: Runs cleanup functions (useEffect)

#### Exit (unmount)

- Step 1:
  - *Releasing* all values from memory (useState, useMemo, const, var..)

- Step 2:
    Runs cleanup functions (useEffect)

- Step 3: Take the computed JSX code to Virtual DOM
    Virtual DOM

- Step 4: Compare it with actual DOM to make updates from last render
   DOM

- Step 5: Schedule all remaining hooks to run(useEffect);

- Step 6: Runs cleanup functions (useEffect)


### Server Side
- Step 1:
    - (async) function component() {}
    - JSX returned as HTML

- Step 2:
    - React sends directly to the Browser.

- No hooks, no traditional lifecycle
- *runs on server only* - function
- server components can be *async*
- If async, can fetch data (url,db..), update html and send to browser.

#### Update
- Step 1:
   - Function in server get called. using this kind of statement revalidatePath('/')
   - Trigger re-run the function and update html through a request, send to browser.
