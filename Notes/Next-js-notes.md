## 'use client'
- In Next.js, we can't use client side components directly.
- Here Components are *server components*, which do not have access to browser APIs.
- Server components are rendered once on the server → they don’t maintain per-user state
- Data fetching → server component
- Interactive UI (buttons, forms, animations) → client component
- Only use 'use client' when you need interactivity

## 'TypeScript & App Folder Structure'
- TypeScript used to catch early errors like a function can have predefined data type parameters to avoid errors later.
- In App folder, each folder defines route and page.tsx inside each folder activates the route.

## 'TypeScript Type Annotation'
- It saves lot of run time error caused by different data type inputs which used to happen in JS.
- By mentioning the data type in TS, it checks for the input each time while compilation.

## 'State Immutability'
- In React State variables, we should not change the original array directly.
- Instead we copy, modify and update as per feature.

## 'Controlled Inputs'
- In React, controlled inputs handled by using useState() hook to know exactly what is being typed inside the input field.
- DOM elements were accessed in pure JS, to get the immediate value of the input. But in React, this is the best practice to update values.

## 'Valid HTML Structure for <ul> and <li>'
- Previous structure for the list: Incorrect 
<ul>
    <span>
    <li></li>
    </span>
</ul>
- Above code is an invalid HTML Structure because it will only allow <li> to be an direct child of <ul>.
- But still this code will work, also causes some styling issues and React key bugs.
- Good practice is to have structure like this;
<ul>
    <li>
    </li>
</ul>

## 'Unique Identifier'
- For small testing app, use Date.now() since it will show the timestamp in milliseconds.
- Larger Scale apps, crypto.randomUUID() for unique string values.