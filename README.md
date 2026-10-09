# 🧠 Quiz

A modern and interactive quiz application built with React and TypeScript. Test your knowledge, explore different topics, and enjoy learning through quizzes!

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tests-Vitest-6E9F18?logo=vitest&logoColor=white" alt="Vitest" />
</p>

## ✨ Features

- 📝 Interactive quizzes with multiple-choice questions
- 📚 Questions organized by categories
- 🌍 Internationalization and language support (PT and EN)
- 🧪 Automated testing
- 🎨 Multiple theming

## 🛠️ Tech Stack

| Technology                                             | Purpose                           |
| ------------------------------------------------------ | --------------------------------- |
| [React](https://react.dev/)                            | UI development                    |
| [TypeScript](https://www.typescriptlang.org/)          | Type safety                       |
| [Vite](https://vite.dev/)                              | Development server and build tool |
| [Styled Components](https://styled-components.com/)    | Component styling                 |
| [TanStack Query](https://tanstack.com/query/latest)    | Data fetching and caching         |
| [React Router](https://reactrouter.com/)               | Navigation                        |
| [i18next](https://www.i18next.com/)                    | Internationalization              |
| [Vitest](https://vitest.dev/)                          | Testing                           |
| [JSON Server](https://github.com/typicode/json-server) | Mock REST API                     |

## 🚀 Getting Started

### Prerequisites

[Node.js - V24](https://nodejs.org/) and [npm](https://www.npmjs.com/)

### Installation

Open a terminal and run:

```bash
git clone https://github.com/201flaviosilva/Quiz.git # Clone the repository
cd Quiz # Change folder
npm install # Install dependencies
npm start # Start the application and mock API
```

The Vite development server opens the app in your browser `http://localhost:5173/`, and JSON Server runs on `http://localhost:3123`.

To start without automatically opening the browser, use:

```bash
npm run start:dev
```

## 📜 Available Scripts

| Command                 | Description                         |
| ----------------------- | ----------------------------------- |
| `npm start`             | Start the app and mock API          |
| `npm run start:dev`     | Same as start but opens the browser |
| `npm run build`         | Build for production                |
| `npm run lint`          | Check code quality                  |
| `npm run format`        | Format code with Prettier           |
| `npm run typecheck`     | Check TypeScript types              |
| `npm run test:run`      | Run tests once                      |
| `npm run test:coverage` | Generate test coverage              |

