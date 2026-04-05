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