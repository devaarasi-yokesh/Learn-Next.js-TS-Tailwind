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