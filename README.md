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

## Display on desktop
![Знімок екрана 2024-11-14 182547](https://github.com/user-attachments/assets/5e6aab60-b2fe-4254-840a-424bd53d2f18)

## Display on tablet

                                                  ![Знімок екрана 2024-11-14 182531 -40% tablet](https://github.com/user-attachments/assets/26d5eeba-4a26-43e0-b6b3-3cf3f565c459)

## Display on mobile

                                                  ![Знімок екрана 2024-11-14 182448 - 40% mobile](https://github.com/user-attachments/assets/6ea1c4b4-d03f-440c-aef2-d36a450f860a)

## Project commands

`cd packages/backend` - jump to your backend folder <br />
`yarn` - install dependencies <br />
`yarn serve` - run your backend <br />
`cd packages/frontend` - jump to your frontend folder <br />
`yarn install` dependencies <br />
`yarn dev` - run your frontend <br />
```

```
