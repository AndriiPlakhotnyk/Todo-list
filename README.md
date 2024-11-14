# CGS Test project

## Project main stack

#### Backend:

Express, Typescript, Postresql, Prisma ORM, Passport. </br>

#### Frontend:

React, Typescript, Zustand, React Final Form, Blueprint, Emotion CSS.

## Project commands

`cd packages/backend` - jump to your backend folder <br />
`yarn` - install dependencies <br />
`yarn serve` - run your backend <br />
`cd packages/frontend` - jump to your frontend folder <br />
`yarn install` dependencies <br />
`yarn dev` - run your frontend <br />

## Project description

The TodoList application is a full-stack project that enables users to manage their tasks with an intuitive interface and robust backend. The application features token-based authentication powered by Passport and JWT, providing secure login and registration. User accounts are verified via email, and password resets are also managed through secure email verification links using nodemailer.

On the backend, the application supports full CRUD functionality for todos with comprehensive validation, ensuring data integrity. It allows users to create private tasks that only they can edit, as well as public tasks visible to all users (read-only for non-owners). Pagination, filtering by title and status, and role-based access control (for private vs. public todos) enhance usability.

The frontend offers a responsive UI optimized for desktop, tablet, and mobile views. It includes features like adaptive pagination (buttons on desktop, horizontal scrolling on tablet, and vertical scrolling on mobile) and form handling with real-time validation for seamless user experience. User state and tasks are managed with Zustand, while React Final Form and Emotion CSS power the app’s dynamic and visually appealing components.

Display on desktop
![image](https://github.com/user-attachments/assets/0a43b244-c391-488e-8011-af1c6d91f5d0)

Display on tablet
![image](https://github.com/user-attachments/assets/6a31122f-0ea4-4d65-8c2d-a9642d20cbbb)

Display on mobile
![image](https://github.com/user-attachments/assets/ca9b8db9-922f-4482-82ef-7f9db66e0443)

## Useful links and technologies

[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) <br />
[Blueprint](https://blueprintjs.com/docs/#blueprint/getting-started) <br />
[React Final Form](https://final-form.org/docs/react-final-form/getting-started) <br />
[Formik](https://formik.org/docs/overview) <br />
[React Hook Form](https://www.react-hook-form.com/get-started) <br />
[Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) <br />
[Passport](http://www.passportjs.org/) <br />
[Emotion CSS](https://emotion.sh/docs/introduction) <br />
[Prisma](https://www.prisma.io/docs/orm/overview/introduction) <br />
[Documentation](https://github.com/CodeGeneration-2020/code-generation-code-style/blob/main/docs/javascript.md#server-interactions-) <br />

```

```
