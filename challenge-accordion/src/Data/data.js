export const data = [
    {
        id: "1",
        question: "What is React.js, and how does it differ from other JavaScript frameworks/libraries?",
        answer : "React.js is a JavaScript library developed by Facebook for building user interfaces. It differs from other frameworks by its virtual DOM implementation, which optimizes the updating of the actual DOM for better performance. React also emphasizes a component-based architecture for building UIs, promoting reusability and maintainability."
    },
    {
        id: "2",
        question:"Explain the concept of JSX in React.",
        answer: "JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React. It allows us to write HTML-like code within JavaScript files, making it easier to describe UI components. JSX gets transpiled into JavaScript and ultimately into browser-readable code. It helps in creating concise and readable React components."
    },
    {
        id: "3",
        question: "What are React components? Explain the difference between functional and class components.",
        answer: "React components are the building blocks of a React application. Functional components are simple JavaScript functions that take props as arguments and return React elements. Class components, on the other hand, are ES6 classes that extend React.Component and can manage state, lifecycle methods, etc. With the introduction of hooks in React 16.8, functional components can now also manage state and have access to lifecycle methods."
    },
    {
        id:"4",
        question: "What is the significance of state in React, and how is it different from props?",
        answer: "State is a built-in object in React that represents the mutable data of a component. It is used for rendering dynamic content and for managing the component's behavior. Unlike props, which are passed from parent to child and remain immutable within the child component, state is managed within the component and can be updated using setState()."
    },
    {
        id:"5",
        question: "Explain the React virtual DOM and its advantages.",
        answer: "The virtual DOM is a lightweight copy of the actual DOM. When state changes in a React component, a virtual DOM tree is created, and the difference (diffing) between the virtual DOM and the previous state is calculated. Only the necessary updates are then applied to the real DOM, improving performance by minimizing direct manipulations of the actual DOM."
    },
    {
        id:"6",
        question: "What are React hooks, and why were they introduced?",
        answer: "React hooks are functions that allow functional components to use state, lifecycle methods, and other React features. They were introduced in React 16.8 to enable functional components to manage state and side effects without the need for class components. Some commonly used hooks include useState, useEffect, and useContext."
    },
    {
        id:"7",
        question: "Explain the concept of props drilling and how to avoid it.",
        answer: "Props drilling occurs when props are passed through multiple layers of components, making the code harder to maintain. To avoid props drilling, one can use React context API for passing data down the component tree without the need to explicitly pass props through each intermediate component."
    },
    {
        id: "8",
        question: "What is React Router, and how is it used for navigation in a React application?",
        answer: "React Router is a library for handling navigation in a React application. It allows developers to define different routes in their application and render different components based on the URL. React Router provides a <BrowserRouter> component to enable client-side navigation and a <Link> component to create links between different views."
    },
    {
        id: "9",
        question: "What is the significance of the useEffect hook?",
        answer: "The useEffect hook is used for handling side effects in functional components. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components. useEffect can be used for tasks such as data fetching, subscriptions, and manual DOM manipulations."
    },
    {
        id:"10",
        question: "How does React differ from Angular and Vue.js?",
        answer: "React, Angular, and Vue.js are all popular JavaScript frameworks/libraries for building user interfaces, but they have some key differences. React is a library for building UI components and is more flexible, allowing developers to choose other libraries and tools for additional functionality. Angular is a full-fledged framework with more built-in features, and Vue.js is designed to be incrementally adoptable, making it easy to integrate into existing projects. Each has its strengths and is suitable for different scenarios."
    }
]