# 🛒 My Fake Store

> ℹ️ **Note:**  
> This project was built specifically for a recruitment task. The stack and implementation are intentionally simple and modern.

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

A simple, modern e-commerce demo built with **Next.js 15**, **React 19**, **Jotai**, **Zod**, and **CSS Modules**. The project is designed to be clean, maintainable, and easy to extend.

---

## 📁 Folder Structure

The project uses a feature-based folder structure for clarity and scalability. All business logic and UI components are grouped by feature.

---

## Implemented Features

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

- **Other:**
  - Responsive design (mobile & desktop).
  - Dark/light theme toggle.
  - Skeleton components for loading states.
  - Data is fetched from [https://fakestoreapi.com](https://fakestoreapi.com).

---

## Responsiveness

The application is fully responsive and works seamlessly on both mobile devices and larger desktop screens.

---

## Data Source

All data displayed in the application is fetched from the public API: [https://fakestoreapi.com](https://fakestoreapi.com).
