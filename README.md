# 🛒 My Fake Store

> ℹ️ **Note:**  
> This project was built specifically for a recruitment task. The chosen stack reflects my intention to showcase a modern, scalable, and maintainable architecture, even if some choices (like the stack size or implementation scope) might be different in a real-world MVP.

## ⚡️ Quick Start

To get the project up and running locally, follow these steps:

1. **Install dependencies**
   ```bash
   pnpm install
   ```
2. **Run the development server**
   ```bash
   pnpm dev
   ```
3. **Build for production**
   ```bash
   pnpm build
   ```
4. **Start the production server**
   ```bash
   pnpm start
   ```

---

A modern, scalable e-commerce demo built with **Next.js 15**, **React 19** (with React Compiler), **TanStack Query**, **Jotai**, **Zod**, **CSS Modules**, and **Biome**.  
We design this project from the ground up with best practices in mind, making it an excellent foundation for real-world applications that need to grow and adapt over time.

---

## 🛠️ Tech Stack

- **Next.js 15**
- **React 19 + React Compiler**
- **TanStack Query 5**
- **Jotai**
- **Zod**
- **CSS Modules**
- **Biome**
- **pnpm**

---

## Why these technologies and architecture?

Below, we briefly explain the reasoning behind our technology choices and other key architectural decisions. Each decision is made to ensure scalability, maintainability, and a great developer and user experience.

---

## 📁 Folder Structure & Non-Routable Folders

We use the recommended pattern of non-routable folders (prefixed with `_`, e.g., `_components`, `_hooks`, `_queries`) inside the `app/` directory. This approach is based on the official Next.js guidance for [private folders](https://nextjs.org/docs/app/getting-started/project-structure#private-folders). By organizing our code this way, we keep route-specific logic close to where it’s used, make it easy to remove entire features by deleting a single folder, and ensure that shared or global logic is placed at a higher level, while feature-specific code stays local. This structure helps us maintain a clean, scalable, and maintainable codebase as the project grows.

---

## 🟦 TanStack Query, Suspense, Error Boundaries & Data Validation

We use **TanStack Query** for all data fetching and caching. By leveraging `useSuspenseQuery`, we fully embrace React’s Suspense mechanism, allowing us to declaratively handle loading states with `<Suspense>` and skeleton components, rather than managing loading state manually. Errors are caught and displayed using **Error Boundaries**, ensuring robust error handling throughout the app.

To guarantee both type safety and runtime validation, we use **Zod** schemas for all data fetched from APIs. This means that every piece of data we work with is validated, reducing the risk of runtime errors and making our code more reliable and maintainable.

---

## 🗝️ Factory Query Keys

We generate query keys using a factory pattern with TanStack Query. This approach ensures cache consistency, avoids accidental key collisions, and makes it easy to refactor or extend queries as the application grows. By using factory functions for query keys, we scale our data layer with confidence and clarity. For more on this approach, see [How to create scalable query keys in TanStack Query (tkdodo.eu)](https://tkdodo.eu/blog/effective-react-query-keys).

---

## 🟢 Jotai State Management

We use **Jotai** to manage global state, such as the shopping cart. Our implementation leverages two types of atoms: primitive atoms for simple state (like the cart items themselves), and derived atoms for computed values (such as the total price or item count). This separation allows us to keep our state logic clear and maintainable. Jotai is a proven, lightweight solution that scales well for our needs. While we could have used a reducer-based approach, we find that Jotai offers better scalability and simplicity, especially as the app grows.

We also synchronize our state with LocalStorage, ensuring that user data persists across page reloads and sessions.

---

## ⚡️ React Compiler

We leverage **React Compiler** (React 19), which automatically optimizes our components for performance. Because of this, we intentionally do not add manual optimizations such as `memo`, `useCallback`, or `useMemo`, allowing the compiler to do its job and optimize components automatically. This gives us the benefits of memoization and reactivity with less manual code, resulting in a faster and more maintainable app.

---

## 🛡️ Zod for Validation

We use **Zod** for validating all data, both on the client and server. This ensures that our data is always type-safe and valid at runtime, preventing invalid data from entering our system and reducing the risk of bugs.

---

## 🎨 CSS Modules

We use **CSS Modules** for styling, which is one of the best solutions if we’re not using Tailwind CSS. CSS Modules provide style encapsulation and prevent class name collisions, making our styles predictable and maintainable.

---

## 🌗 Dark & Light Theme

We implement a built-in dark/light theme toggle from the very beginning, emphasizing the importance of supporting multiple color schemes. Even if we remove the toggle (which is not perfect), our theme will still adapt to the user’s system preferences, providing a great user experience and accessibility out of the box.

---

## 🛒 Add-to-Cart UX: useTransition, Timeout, and Refs

In a production-grade project, we would typically show a toast or notification when a product is added to the cart. For simplicity, we use a button state change to indicate the action. Our solution allows users to add the same product multiple times in quick succession, with immediate feedback. We achieve this by using React’s `useTransition` hook, a timeout, and refs to manage the button state and transitions. This approach, implemented in the product list, ensures a responsive and intuitive user experience even without external notification libraries.

---

## 🦴 Skeleton Components

We use simple skeleton components to preserve the layout and structure of the UI while data is loading. Although these are straightforward components, they significantly improve the user experience and make the application feel faster and more responsive.

---

## 🖥️ Server Components

We strive to use server components wherever possible in this project. By doing so, we can deliver fully rendered HTML to the client more quickly, improving both performance and SEO. Server components allow us to offload work from the client to the server, resulting in a faster, more efficient application that is easier to maintain and scale.

---

## 🚀 Why this stack and approach?

This stack and architectural approach allow us to rapidly scale the project and quickly build a simple MVP to showcase results to clients. If we had the choice, we would definitely choose a similar stack, with minor differences such as Tailwind CSS instead of CSS Modules, shadcn/ui instead of custom components, and Prisma with a more robust authentication solution for user management (Better Auth/NextAuth). With this setup, combined with the use of server actions and new React hooks like `useActionState`, we can deliver features quickly and maintain the application with ease. This modern approach ensures that we can adapt to changing requirements and deliver high-quality products efficiently.

---

## Implemented Features

This application fulfills all the functional requirements specified in the assignment:

- **Main Page:**
  - Displays a list of all product categories.
  - Enables navigation to a selected category by clicking.
  - Provides access to the cart via an icon in the top right corner.

- **Category Page:**
  - Shows the category name and the number of products in that category.
  - Lists products with their title, price, and image.
  - Allows adding products to the cart.
  - Supports navigation back to the main page and to the cart.

- **Cart Page:**
  - Displays all products added to the cart with their details.
  - Shows the total price of items in the cart.
  - Allows removing products and changing their quantity.

Additionally, the application uses skeleton components for loading states and provides immediate feedback when adding products to the cart (button state change).

---

## Responsiveness

The application is fully responsive and works seamlessly on both mobile devices and larger desktop screens. The layout and components automatically adapt to different screen sizes, ensuring a smooth user experience across all devices.

---

## Data Source

All data displayed in the application is fetched from the public API: [https://fakestoreapi.com](https://fakestoreapi.com).

---

## Improvements & Further Development

If given more time, I would focus on the following areas to further enhance the application:

- **Application design and feature placement:**
  I would dedicate more time to refining the overall architecture and considering the placement and necessity of certain features, such as the theme toggle and its current location in the UI.

- **Pagination and infinite loading:**
  While the current API returns a small number of categories and products, real-world applications typically deal with much larger datasets. I would implement pagination or infinite scrolling using tools like `useInfiniteQuery` or `useSuspenseInfiniteQuery` to provide a smoother experience when handling large amounts of data.

- **Testing:**
  The main goal was to deliver a fully functional application that works well on both mobile and desktop devices. With more time, I would definitely add unit and integration tests from the start to ensure the application's reliability and maintainability.
