# CGS Test project

## Project main stack

#### Backend:

Express, [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), Postresql, [Prisma ORM](https://www.prisma.io/docs/orm/overview/introduction), [Passport](http://www.passportjs.org/), [Documentation](https://github.com/CodeGeneration-2020/code-generation-code-style/blob/main/docs/javascript.md#server-interactions-) </br>

#### Frontend:

React, [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction), [React Final Form](https://final-form.org/docs/react-final-form/getting-started), [Blueprint](https://blueprintjs.com/docs/#blueprint/getting-started), [Emotion CSS](https://emotion.sh/docs/introduction), [Formik](https://formik.org/docs/overview)

## Project description

The TodoList application is a full-stack project that enables users to manage their tasks with an intuitive interface and robust backend. The application features token-based authentication powered by **Passport** and **JWT**, providing secure login and registration. User accounts are verified via email, and password resets are also managed through secure email verification links using **nodemailer**.

On the backend, the application supports full CRUD functionality for todos with comprehensive validation, ensuring data integrity. It allows users to create private tasks that only they can edit, as well as public tasks visible to all users (read-only for non-owners). Pagination, filtering by title and status, and role-based access control (for private vs. public todos) enhance usability.

The frontend offers a responsive UI optimized for desktop, tablet, and mobile views. It includes features like adaptive pagination (buttons on desktop, horizontal scrolling on tablet, and vertical scrolling on mobile) and form handling with real-time validation for seamless user experience. User state and tasks are managed with **Zustand**, while **React Final Form** and **Emotion CSS** power the app’s dynamic and visually appealing components.

Display on desktop
![image](https://github.com/user-attachments/assets/0a43b244-c391-488e-8011-af1c6d91f5d0)
Display on tablet

![Знімок екрана 2024-11-14 162341 - 50%](https://github.com/user-attachments/assets/e0f9cab0-9964-43c9-9d09-6ef86eab0be5)

Display on mobile

![Знімок екрана 2024-11-14 162417 - 50%](https://github.com/user-attachments/assets/53955734-196f-4985-acac-a0c592be20e4)

## Project commands

`cd packages/backend` - jump to your backend folder <br />
`yarn` - install dependencies <br />
`yarn serve` - run your backend <br />
`cd packages/frontend` - jump to your frontend folder <br />
`yarn install` dependencies <br />
`yarn dev` - run your frontend <br />
```

```
