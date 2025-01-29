import { Question } from '../../types';

export const reactQuestions: Question[] = [

  {

    id: 'react-1',

    category: 'ReactJS',

    title: 'What are React Hooks and their benefits?',

    answer: 'Hooks are functions that allow using state and lifecycle features in functional components. Benefits include: reusing stateful logic between components, splitting complex components into smaller functions, and avoiding class components complexity. Common hooks: useState, useEffect, useContext, useRef.',

    codeExample: `function Counter() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    document.title = \`Count: \${count}\`;

  }, [count]);


  return (

    <button onClick={() => setCount(count + 1)}>

      Count: {count}

    </button>

  );

}`

  },

  {

    id: 'react-2',

    category: 'ReactJS',

    title: 'Explain React Virtual DOM and its benefits.',

    answer: 'Virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize rendering by: 1) Creating a virtual representation of UI, 2) When state changes, creating a new virtual DOM, 3) Comparing it with previous version (diffing), 4) Only updating actual DOM where necessary. This process is called reconciliation.',

  },

  {

    id: 'react-3',

    category: 'ReactJS',

    title: 'What are React props and state?',

    answer: 'Props are read-only data passed from parent to child components. State is mutable data managed within a component. Props are used for component communication, while state is for handling component-specific data that can change over time.',

    codeExample: `// Props example

function Welcome(props) {

  return <h1>Hello, {props.name}</h1>;

}


// State example

function Counter() {

  const [count, setCount] = useState(0);

  return (

    <button onClick={() => setCount(count + 1)}>

      Count: {count}

    </button>

  );

}`

  },

  {

    id: 'react-4',

    category: 'ReactJS',

    title: 'How does React work?',

    answer: 'React works by creating a virtual representation of the UI in memory. When the state of a component changes, React updates the virtual DOM, compares it with the previous version, and efficiently updates the actual DOM only where necessary.',

  },

  {

    id: 'react-5',

    category: 'ReactJS',

    title: 'What are the advantages and disadvantages of React?',

    answer: 'Advantages: 1) Component-based architecture for reusability. 2) Virtual DOM for performance optimization. 3) Strong community support. 4) Rich ecosystem of libraries. Disadvantages: 1) Learning curve for beginners. 2) Frequent updates can lead to breaking changes. 3) JSX syntax may be confusing for new developers.',

  },

  {

    id: 'react-6',

    category: 'ReactJS',

    title: 'What is JSX and its benefits?',

    answer: 'JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. Benefits include: 1) Improved readability and structure. 2) Easier to visualize the UI. 3) Allows embedding expressions directly in the markup.',

    codeExample: `const element = <h1>Hello, world!</h1>;`

  },

  {

    id: 'react-7',

    category: 'ReactJS',

    title: 'What is the difference between React, Angular, and Vue?',

    answer: 'React is a library focused on building UI components, Angular is a full-fledged framework with a comprehensive set of tools, and Vue is a progressive framework that can be incrementally adopted. React uses a virtual DOM, Angular uses two-way data binding, and Vue offers a reactive data model.',

  },

  {

    id: 'react-8',

    category: 'ReactJS',

    title: 'What is a React component and how is it different from a regular JavaScript function?',

    answer: 'A React component is a reusable piece of UI that can manage its own state and lifecycle. Unlike regular JavaScript functions, React components return JSX and can be composed together to build complex UIs.',

    codeExample: `function MyComponent() {

  return <div>Hello, World!</div>;

}`

  },

  {

    id: 'react-9',

    category: 'ReactJS',

    title: 'What is the Virtual DOM and how does it improve performance?',

    answer: 'The Virtual DOM is a lightweight copy of the actual DOM. It improves performance by minimizing direct manipulation of the DOM, which is slow. React updates the Virtual DOM first, then calculates the most efficient way to update the actual DOM, reducing the number of updates needed.',

  },

  {

    id: 'react-10',

    category: 'ReactJS',

    title: 'Can we use other methods instead of JSX in React?',

    answer: 'Yes, you can use React.createElement() to create elements without JSX. However, JSX is more concise and easier to read, making it the preferred method for most developers.',

    codeExample: `const element = React.createElement('h1', null, 'Hello, world!');`

  },

  {

    id: 'react-11',

    category: 'ReactJS',

    title: 'What is the difference between state and props?',

    answer: 'State is mutable data managed within a component, while props are read-only data passed from parent to child components. State can change over time, while props are set by the parent and cannot be modified by the child.',

  },

  {

    id: 'react-12',

    category: 'ReactJS',

    title: 'What are lifecycle methods in React?',

    answer: 'Lifecycle methods are special methods in class components that allow you to run code at specific points in a component’s life, such as mounting, updating, and unmounting. Common lifecycle methods include componentDidMount, componentDidUpdate, and componentWillUnmount.',

  },

  {

    id: 'react-13',

    category: 'ReactJS',

    title: 'What is the useState hook?',

    answer: 'The useState hook is a built-in hook that allows you to add state to functional components. It returns an array with the current state value and a function to update it.',

    codeExample: `const [count, setCount] = useState(0);`

  },

  {

    id: 'react-14',

    category: 'ReactJS',

    title: 'What is the useEffect hook?',

    answer: 'The useEffect hook allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after every render by default, but you can control when it runs by passing a dependency array.',

    codeExample: `useEffect(() => {

  // Code to run on component mount or update

}, [dependencies]);`

  },

  {

    id: 'react-15',

    category: 'ReactJS',

    title: 'What is the useLayoutEffect hook?',

    answer: 'The useLayoutEffect hook is similar to useEffect but runs synchronously after all DOM mutations. It is useful for reading layout from the DOM and synchronously re-rendering.',

    codeExample: `useLayoutEffect(() => {

  // Code to run after DOM updates

}, [dependencies]);`

  },

  {

    id: 'react-16',

    category: 'ReactJS',

    title: 'What is the useRef hook?',

    answer: 'The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument. It can be used to access DOM elements directly or to store mutable values that do not cause re-renders.',

    codeExample: `const inputRef = useRef(null);

useEffect(() => {

  inputRef.current.focus();

}, []);

return <input ref={inputRef} />;`

  },

  {

    id: 'react-17',

    category: 'ReactJS',

    title: 'What is the useMemo hook?',

    answer: 'The useMemo hook returns a memoized value, which is useful for optimizing performance by preventing expensive calculations on every render. It only recalculates the value when its dependencies change.',

    codeExample: `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`

  },

  {

    id: 'react-18',

    category: 'ReactJS',

    title: 'What is the useReducer hook?',

    answer: 'The useReducer hook is an alternative to useState for managing complex state logic in functional components. It accepts a reducer function and an initial state, returning the current state and a dispatch function.',

    codeExample: `const [state, dispatch] = useReducer(reducer, initialState);`

  },

  {

    id: 'react-19',

    category: 'ReactJS',

    title: 'What is the difference between useEffect and useLayoutEffect?',

    answer: 'useEffect runs asynchronously after the render is committed to the screen, while useLayoutEffect runs synchronously after all DOM mutations but before the browser has painted the screen. This means useLayoutEffect is useful for reading layout from the DOM and synchronously re-rendering, while useEffect is better for side effects that do not require immediate DOM updates.',

  },

  {

    id: 'react-20',

    category: 'ReactJS',

    title: 'What is the difference between useCallback and useMemo?',

    answer: 'useCallback returns a memoized version of a callback function that only changes if one of the dependencies has changed, while useMemo returns a memoized value. useCallback is used to optimize performance by preventing unnecessary re-creations of functions, while useMemo is used to optimize expensive calculations.',

  },

  {

    id: 'react-21',

    category: 'ReactJS',

    title: 'What is the diffing algorithm in React?',

    answer: 'The diffing algorithm is a process used by React to compare the current Virtual DOM with the previous Virtual DOM to determine what has changed. This allows React to update only the parts of the actual DOM that have changed, improving performance.',

  },

  {

    id: 'react-22',

    category: 'ReactJS',

    title: 'What is reconciliation in React?',

    answer: 'Reconciliation is the process through which React updates the DOM with changes made to the Virtual DOM. It involves comparing the new Virtual DOM with the previous one and determining the most efficient way to update the actual DOM.',

  },

  {

    id: 'react-23',

    category: 'ReactJS',

    title: 'What is hydration in React?',

    answer: 'Hydration is the process of attaching event listeners to the server-rendered HTML. It allows React to take over the server-rendered markup and make it interactive without having to re-render the entire component tree.',

  },

  {

    id: 'react-24',

    category: 'ReactJS',

    title: 'What is re-rendering in React?',

    answer: 'Re-rendering occurs when a component’s state or props change, causing React to re-evaluate the component and update the Virtual DOM. If the Virtual DOM differs from the actual DOM, React will update the actual DOM accordingly.',

  },

  {

    id: 'react-25',

    category: 'ReactJS',

    title: 'How is data passed from parent to child components in React?',

    answer: 'Data is passed from parent to child components using props. The parent component can define properties and pass them down to the child component, which can then access them via the props object.',

  },

  {

    id: 'react-26',

    category: 'ReactJS',

    title: 'How is data passed from child to parent components in React?',

    answer: 'Data is passed from child to parent components using callback functions. The parent component can pass a function as a prop to the child, and the child can call this function to send data back to the parent.',

  },

  {

    id: 'react-27',

    category: 'ReactJS',

    title: 'How can data be transferred from child to sibling components in React?',

    answer: 'Data can be transferred from child to sibling components by lifting the state up to the common parent component. The parent can manage the state and pass it down to both siblings as props.',

  },

  {

    id: 'react-28',

    category: 'ReactJS',

    title: 'What is prop drilling in React?',

    answer: 'Prop drilling refers to the process of passing data through multiple layers of components, even if some of those components do not need the data. This can lead to cumbersome code and is often mitigated by using context or state management libraries.',

  },

  {

    id: 'react-29',

    category: 'ReactJS',

    title: 'What is the Context API in React?',

    answer: 'The Context API is a feature that allows you to share state across the entire component tree without having to pass props down manually at every level. It is useful for managing global state, such as themes or user authentication.',

  },

  {

    id: 'react-30',

    category: 'ReactJS',

    title: 'What is Redux and how does it differ from the Context API?',

    answer: 'Redux is a state management library that provides a centralized store for managing application state. It uses actions and reducers to update the state. The Context API is built into React and is simpler to use for smaller applications, while Redux is more powerful and suitable for larger applications with complex state management needs.',

  },

  {

    id: 'react-31',

    category: 'ReactJS',

    title: 'What are controlled components in React?',

    answer: 'Controlled components are form elements whose value is controlled by React state. The component’s state is the single source of truth, and any changes to the input are handled through event handlers that update the state.',

    codeExample: `function ControlledInput() {

  const [value, setValue] = useState('');

  return (

    <input

      type="text"

      value={value}

      onChange={e => setValue(e.target.value)}

    />

  );

}`

  },

  {

    id: 'react-32',

    category: 'ReactJS',

    title: 'What are uncontrolled components in React?',

    answer: 'Uncontrolled components are form elements that store their own state internally. React does not control their value, and you can access the value using refs instead of state.',

    codeExample: `function UncontrolledInput() {

  const inputRef = useRef(null);

  const handleSubmit = () => {

    alert(inputRef.current.value);

  };

  return (

    <div>

      <input type="text" ref={inputRef} />

      <button onClick={handleSubmit}>Submit</button>

    </div>

  );

}`

  },

  {

    id: 'react-33',

    category: 'ReactJS',

    title: 'What is event handling in React?',

    answer: 'Event handling in React is done using camelCase syntax for event names. You can pass a function as the event handler, and React will call it when the event occurs.',

    codeExample: `function ClickButton() {

  const handleClick = () => {

    alert('Button clicked!');

  };

  return <button onClick={handleClick}>Click me</button>;

}`

  },

  {

    id: 'react-34',

    category: 'ReactJS',

    title: 'What are synthetic events in React?',

    answer: 'Synthetic events are React’s cross-browser wrapper around the browser’s native events. They provide a consistent interface for handling events across different browsers.',

  },

  {

    id: 'react-35',

    category: 'ReactJS',

    title: 'What is event delegation in React?',

    answer: 'Event delegation is a technique where a single event listener is added to a parent element instead of multiple listeners on child elements. This improves performance and simplifies event handling.',

  },

  {

    id: 'react-36',

    category: 'ReactJS',

    title: 'What is the purpose of the key prop in React?',

    answer: 'The key prop is used to uniquely identify elements in a list. It helps React optimize rendering by allowing it to track which items have changed, been added, or removed.',

  },

  {

    id: 'react-37',

    category: 'ReactJS',

    title: 'What is the purpose of the ref attribute in React?',

    answer: 'The ref attribute is used to access DOM elements or React components directly. It allows you to interact with the underlying DOM node or component instance without using state.',

  },

  {

    id: 'react-38',

    category: 'ReactJS',

    title: 'What is the difference between class components and functional components?',

    answer: 'Class components are ES6 classes that extend React.Component and can hold state and lifecycle methods. Functional components are simpler and are defined as functions. With the introduction of hooks, functional components can now manage state and side effects.',

  },

  {

    id: 'react-39',

    category: 'ReactJS',

    title: 'What is the purpose of the useContext hook?',

    answer: 'The useContext hook allows you to access the value of a context directly in functional components. It simplifies consuming context without needing to wrap components in a Context.Consumer.',

    codeExample: `const value = useContext(MyContext);`

  },

  {

    id: 'react-40',

    category: 'ReactJS',

    title: 'What is the purpose of the useImperativeHandle hook?',

    answer: 'The useImperativeHandle hook customizes the instance value that is exposed when using ref in parent components. It allows you to control what is exposed to parent components when they use refs.',

  },

  {

    id: 'react-41',

    category: 'ReactJS',

    title: 'What is the purpose of the useDebugValue hook?',

    answer: 'The useDebugValue hook is used to display a label for custom hooks in React DevTools. It helps in debugging by providing additional information about the hook’s state.',

  },

  {

    id: 'react-42',

    category: 'ReactJS',

    title: 'What is the purpose of the useTransition hook?',

    answer: 'The useTransition hook is used to mark updates as non-urgent, allowing React to keep the UI responsive while rendering updates in the background.',

  },

  {

    id: 'react-43',

    category: 'ReactJS',

    title: 'What is the purpose of the useDeferredValue hook?',

    answer: 'The useDeferredValue hook allows you to defer updating a value until the browser is idle, improving performance for high-priority updates.',

  },

  {

    id: 'react-44',

    category: 'ReactJS',

    title: 'Whatis the purpose of the useId hook?',

    answer: 'The useId hook generates a unique ID that can be used for accessibility purposes, such as associating labels with form elements. It ensures that the ID is stable across renders.',

  },

  {

    id: 'react-45',

    category: 'ReactJS',

    title: 'What is the purpose of the useLayoutEffect hook?',

    answer: 'The useLayoutEffect hook is similar to useEffect but runs synchronously after all DOM mutations. It is useful for reading layout from the DOM and synchronously re-rendering.',

  },

  {

    id: 'react-46',

    category: 'ReactJS',

    title: 'What is the purpose of the useDebugValue hook?',

    answer: 'The useDebugValue hook is used to display a label for custom hooks in React DevTools. It helps in debugging by providing additional information about the hook’s state.',

  },

  {

    id: 'react-47',

    category: 'ReactJS',

    title: 'What is the purpose of the useTransition hook?',

    answer: 'The useTransition hook is used to mark updates as non-urgent, allowing React to keep the UI responsive while rendering updates in the background.',

  },

  {

    id: 'react-48',

    category: 'ReactJS',

    title: 'What is the purpose of the useDeferredValue hook?',

    answer: 'The useDeferredValue hook allows you to defer updating a value until the browser is idle, improving performance for high-priority updates.',

  },

  {

    id: 'react-49',

    category: 'ReactJS',

    title: 'What is the purpose of the useInsertionEffect hook?',

    answer: 'The useInsertionEffect hook is used to inject styles into the DOM before the browser has a chance to paint, ensuring that styles are applied immediately.',

  },

  {

    id: 'react-50',

    category: 'ReactJS',

    title: 'What is the purpose of the useSyncExternalStore hook?',

    answer: 'The useSyncExternalStore hook allows components to subscribe to external stores and ensures that the component re-renders when the store changes.',

  },

  {

    id: 'react-51',

    category: 'ReactJS',

    title: 'What is the purpose of the useMutableSource hook?',

    answer: 'The useMutableSource hook allows components to subscribe to mutable sources, enabling them to read and update values without causing unnecessary re-renders.',

  },

  {

    id: 'react-52',

    category: 'ReactJS',

    title: 'What is the purpose of the useDeferredValue hook?',

    answer: 'The useDeferredValue hook allows you to defer updating a value until the browser is idle, improving performance for high-priority updates.',

  },

  {

    id: 'react-53',

    category: 'ReactJS',

    title: 'What is the purpose of the useTransition hook?',

    answer: 'The useTransition hook is used to mark updates as non-urgent, allowing React to keep the UI responsive while rendering updates in the background.',

  },

  {

    id: 'react-54',

    category: 'ReactJS',

    title: 'What is the purpose of the useId hook?',

    answer: 'The useId hook generates a unique ID that can be used for accessibility purposes, such as associating labels with form elements. It ensures that the ID is stable across renders.',

  },

  {

    id: 'react-55',

    category: 'ReactJS',

    title: 'What is the purpose of the useImperativeHandle hook?',

    answer: 'The useImperativeHandle hook customizes the instance value that is exposed when using ref in parent components. It allows you to control what is exposed to parent components when they use refs.',

  },

  {

    id: 'react-56',

    category: 'ReactJS',

    title: 'What is the purpose of the useDebugValue hook?',

    answer: 'The useDebugValue hook is used to display a label for custom hooks in React DevTools. It helps in debugging by providing additional information about the hook’s state.',

  },

  {

    id: 'react-57',

    category: 'ReactJS',

    title: 'What is the purpose of the useLayoutEffect hook?',

    answer: 'The useLayoutEffect hook is similar to useEffect but runs synchronously after all DOM mutations. It is useful for reading layout from the DOM and synchronously re-rendering.',

  },

  {

    id: 'react-58',

    category: 'ReactJS',

    title: 'What is the purpose of the useTransition hook?',

    answer: 'The useTransition hook is used to mark updates as non-urgent, allowing React to keep the UI responsive while rendering updates in the background.',

  },

  {

    id: 'react-59',

    category: 'ReactJS',

    title: 'What is the purpose of the useDeferredValue hook?',

    answer: 'The useDeferredValue hook allows you to defer updating a value until the browser is idle, improving performance for high-priority updates.',

  },

  {

    id: 'react-60',

    category: 'ReactJS',

    title: 'What is the purpose of the useInsertionEffect hook?',

    answer: 'The useInsertionEffect hook is used to inject styles into the DOM before the browser has a chance to paint, ensuring that styles are applied immediately.',

  },

  {

    id: 'react-61',

    category: 'ReactJS',

    title: 'What is the purpose of the useSyncExternalStore hook?',

    answer: 'The useSyncExternalStore hook allows components to subscribe to external stores and ensures that the component re-renders when the store changes.',

  },

  {

    id: 'react-62',

    category: 'ReactJS',

    title: 'What is the purpose of the useMutableSource hook?',

    answer: 'The useMutableSource hook allows components to subscribe to mutable sources, enabling them to read and update values without causing unnecessary re-renders.',

  },

  {

    id: 'react-63',

    category: 'ReactJS',

    title: 'What is the purpose of the useDeferredValue hook?',

    answer: 'The useDeferredValue hook allows you to defer updating a value until the browser is idle, improving performance for high-priority updates.',

  },

  {

    id: 'react-64',

    category: 'ReactJS',

    title: 'What is the purpose of the useTransition hook?',

    answer: 'The useTransition hook is used to mark updates as non-urgent, allowing React to keep the UI responsive while rendering updates in the background.',

  },

  {

    id: 'react-65',

    category: 'ReactJS',

    title: 'What is the purpose of the useId hook?',

    answer: 'The useId hook generates a unique ID that can be used for accessibility purposes, such as associating labels with form elements. It ensures that the ID is stable across renders.',

  },

  {

    id: 'react-66',

    category: 'ReactJS',

    title: 'What is the purpose of the useImperativeHandle hook?',

    answer: 'The useImperativeHandle hook customizes the instance value that is exposed when using ref in parent components. It allows you to control what is exposed to parent components when they use refs.',

  },

  {

    id: 'react-67',

    category: 'ReactJS',

    title: 'What is the purpose of the useDebugValue hook?',

    answer: 'The useDebugValue hook is used to display a label for custom hooks in React DevTools. It helps in debugging by providing additional information about the hook’s state.',

  },

  {

    id: 'react-68',

    category: 'ReactJS',

    title: 'What is the purpose of the useLayoutEffect hook?',

    answer: 'The useLayoutEffect hook is similar to useEffect but runs synchronously after all DOM mutations. It is useful for reading layout from the DOM and synchronously re-rendering.',

  },

  {

    id: 'react-69',

    category: 'ReactJS',

    title: 'What is the purpose of the useTransition hook?',

    answer: 'The useTransition hook is used to mark updates as non-urgent, allowing React to keep the UI responsive while rendering updates in the background.',

  },

  {

    id: 'react-70',

    category: 'ReactJS',

    title: 'What is the purpose of the useDeferredValue hook?',

    answer: 'The useDeferredValue hook allows you to defer updating a value until the browser is idle, improving performance for high-priority updates.',

  },

  {

    id: 'react-71',

    category: 'ReactJS',

    title: 'What is the purpose of the useInsertionEffect hook?',

    answer: 'The useInsertionEffect hook is used to inject styles into the DOM before the browser has a chance to paint, ensuring that styles are applied immediately.',

  },

  {

    id: 'react-72',

    category: 'ReactJS',

    title: 'What is the purpose of the useSyncExternalStore hook?',

    answer: 'The useSyncExternalStore hook allows components to subscribe to external stores and ensures that the component re-renders when the store changes.',

  },

  {

    id: 'react-73',

    category: 'ReactJS',

    title: 'What is the purpose of the useMutableSource hook?',

    answer: 'The useMutableSource hook allows components to subscribe to mutable sources, enabling them to read and update values without causing unnecessary re-renders.',

  },

  {

    id: 'react-74',

    category: 'ReactJS',

    title: 'What is the purpose of the useDeferredValue hook?',

    answer : 'The useDeferredValue hook allows you to defer updating a value until the browser is idle, improving performance for high-priority updates.',

  },

  {

    id: 'react-75',

    category: 'ReactJS',

    title: 'What is the purpose of the useTransition hook?',

    answer: 'The useTransition hook is used to mark updates as non-urgent, allowing React to keep the UI responsive while rendering updates in the background.',

  },

  {

    id: 'react-76',

    category: 'ReactJS',

    title: 'What is the purpose of the useId hook?',

    answer: 'The useId hook generates a unique ID that can be used for accessibility purposes, such as associating labels with form elements. It ensures that the ID is stable across renders.',

  },

  {

    id: 'react-77',

    category: 'ReactJS',

    title: 'What is the purpose of the useImperativeHandle hook?',

    answer: 'The useImperativeHandle hook customizes the instance value that is exposed when using ref in parent components. It allows you to control what is exposed to parent components when they use refs.',

  },

  {

    id: 'react-78',

    category: 'ReactJS',

    title: 'What is the purpose of the useDebugValue hook?',

    answer: 'The useDebugValue hook is used to display a label for custom hooks in React DevTools. It helps in debugging by providing additional information about the hook’s state.',

  },

  {

    id: 'react-79',

    category: 'ReactJS',

    title: 'What is the purpose of the useLayoutEffect hook?',

    answer: 'The useLayoutEffect hook is similar to useEffect but runs synchronously after all DOM mutations. It is useful for reading layout from the DOM and synchronously re-rendering.',

  },

  {

    id: 'react-80',

    category: 'ReactJS',

    title: 'What is the purpose of the useTransition hook?',

    answer: 'The useTransition hook is used to mark updates as non-urgent, allowing React to keep the UI responsive while rendering updates in the background.',

  },

  {

    id: 'react-81',

    category: 'ReactJS',

    title: 'What is the purpose of the useDeferredValue hook?',

    answer: 'The useDeferredValue hook allows you to defer updating a value until the browser is idle, improving performance for high-priority updates.',

  },

  {

    id: 'react-82',

    category: 'ReactJS',

    title: 'What is the purpose of the useInsertionEffect hook?',

    answer: 'The useInsertionEffect hook is used to inject styles into the DOM before the browser has a chance to paint, ensuring that styles are applied immediately.',

  },

  {

    id: 'react-83',

    category: 'ReactJS',

    title: 'What is the purpose of the useSyncExternalStore hook?',

    answer: 'The useSyncExternalStore hook allows components to subscribe to external stores and ensures that the component re-renders when the store changes.',

  },

  {

    id: 'react-84',

    category: 'ReactJS',

    title: 'What is the purpose of the useMutableSource hook?',

    answer: 'The useMutableSource hook allows components to subscribe to mutable sources, enabling them to read and update values without causing unnecessary re-renders.',

  },

  {

    id: 'react-85',

    category: 'ReactJS',

    title: 'What is the purpose of the useDeferredValue hook?',

    answer: 'The useDeferredValue hook allows you to defer updating a value until the browser is idle, improving performance for high-priority updates.',

  },

  {

    id: 'react-86',

    category: 'ReactJS',

    title: 'What is the purpose of the useTransition hook?',

    answer: 'The useTransition hook is used to mark updates as non-urgent, allowing React to keep the UI responsive while rendering updates in the background.',

  },

  {

    id: 'react-87',

    category: 'ReactJS',

    title: 'What is the purpose of the useId hook?',

    answer: 'The useId hook generates a unique ID that can be used for accessibility purposes, such as associating labels with form elements. It ensures that the ID is stable across renders.',

  },

  {

    id: 'react-88',

    category: 'ReactJS',

    title: 'What is the purpose of the useImperativeHandle hook?',

    answer: 'The useImperativeHandle hook customizes the instance value that is exposed when using ref in parent components. It allows you to control what is exposed to parent components when they use refs.',

  },
];