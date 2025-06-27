# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# E-Commerce Product Page

A modern, responsive e-commerce product page built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This project is inspired by Amazon's product pages and demonstrates a fully interactive UI with an image carousel, product details, color/size selectors, and more.

---

## ✨ Features

- **Image Carousel:** Browse product images with next/prev buttons and clickable thumbnails.
- **Product Details:** Title, brand, ratings, price, discount, and badges.
- **Selectors:** Choose color, size, and quantity.
- **Cart Actions:** Add to Cart and Buy Now buttons.
- **Shipping & Seller Info:** Amazon-style shipping, seller, and return policy.
- **Expandable Details:** Toggle to show/hide additional product specifications.
- **Responsive Design:** Looks great on desktop and mobile.
- **Timeline:** Shows project start and due dates.

---

## 🚀 Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/ecommerce-product-page.git
cd ecommerce-product-page
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Development Server

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## 🛠️ Project Structure

```
src/
  App.tsx         # Main product page component
  main.tsx        # React entry point
  index.css       # Tailwind CSS imports
  ...
```

---

## 🧑‍💻 Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📦 Customization

- **Product Data:** Update images, colors, sizes, and details in `App.tsx`.
- **Styling:** Modify Tailwind classes for your brand.
- **Functionality:** Extend with cart logic, API integration, or more features.

---

## 📅 Project Timeline

- **Start:** Jun 23, 2025, 9:00 AM
- **Due:** Aug 31, 2025, 11:59 PM

---

## 📄 License

This project is for educational/demo purposes. Feel free to use and modify!
