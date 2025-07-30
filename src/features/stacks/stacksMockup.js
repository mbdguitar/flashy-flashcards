export const mockupStacks = {
    stacks: {
        currentStackId: 'stack1',
        byId: {
            stack1: {
                id: 'stack1',
                name: 'JavaScript',
                flashcards: [
                    { id: 'fc1', title: "What is a closure?", text: "A closure is a function that retains access to its lexical scope even when the function is executed outside that scope." },
                    { id: 'fc2', title: "What is hoisting?", text: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution." },
                    { id: 'fc3', title: "What is the event loop?", text: "The event loop is the mechanism that handles asynchronous operations in JavaScript by placing them in a callback queue." },
                    { id: 'fc4', title: "Difference between == and ===?", text: "`==` compares values with type coercion. `===` compares both value and type without coercion." },
                    { id: 'fc5', title: "What is an IIFE?", text: "An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it is defined." },
                    { id: 'fc6', title: "What are promises?", text: "Promises are objects representing the eventual completion or failure of an asynchronous operation." },
                    { id: 'fc7', title: "What is a callback function?", text: "A callback is a function passed as an argument to another function and executed later." },
                    { id: 'fc8', title: "What is the spread operator?", text: "The spread operator (`...`) allows an iterable to be expanded in places where multiple arguments or elements are expected." },
                    { id: 'fc9', title: "What is destructuring?", text: "Destructuring is a syntax that allows unpacking values from arrays or properties from objects into distinct variables." },
                    { id: 'fc10', title: "What are template literals?", text: "Template literals use backticks and allow embedded expressions and multiline strings in JavaScript." },
                    { id: 'fc11', title: "Difference between null and undefined?", text: "`undefined` is a variable declared but not assigned. `null` is an assignment value meaning no value." },
                    { id: 'fc12', title: "What is a higher-order function?", text: "A higher-order function is a function that takes another function as an argument or returns a function." },
                    { id: 'fc13', title: "What is `this` in JavaScript?", text: "`this` refers to the object that is executing the current function." },
                    { id: 'fc14', title: "What is the use of `bind()`?", text: "`bind()` creates a new function with a specific `this` value." },
                    { id: 'fc15', title: "What is the difference between synchronous and asynchronous code?", text: "Synchronous code runs sequentially. Asynchronous code can execute without blocking the main thread." }
                ]
            },
            stack2: {
                id: 'stack2',
                name: 'React',
                flashcards: [
                    { id: 'fc16', title: "What is React?", text: "React is a JavaScript library for building user interfaces." },
                    { id: 'fc17', title: "What is JSX?", text: "JSX is a syntax extension that allows HTML to be written inside JavaScript." },
                    { id: 'fc18', title: "What is the virtual DOM?", text: "The virtual DOM is a lightweight representation of the real DOM used for efficient updates." },
                    { id: 'fc19', title: "What are components?", text: "Components are reusable, self-contained units that return JSX to define UI." },
                    { id: 'fc20', title: "Functional vs Class components?", text: "Functional components are simpler and use hooks; class components use lifecycle methods and `this`." },
                    { id: 'fc21', title: "What is state in React?", text: "State is a built-in object used to store dynamic data in components." },
                    { id: 'fc22', title: "What are props?", text: "Props are inputs to components that allow data to be passed from parent to child." },
                    { id: 'fc23', title: "What is `useState`?", text: "`useState` is a hook that allows you to add state to functional components." },
                    { id: 'fc24', title: "What is `useEffect`?", text: "`useEffect` is a hook for performing side effects like data fetching or DOM manipulation." },
                    { id: 'fc25', title: "What is lifting state up?", text: "Lifting state up means moving shared state to the nearest common ancestor component." },
                    { id: 'fc26', title: "What is Context API?", text: "Context allows sharing state globally without passing props through every level." },
                    { id: 'fc27', title: "What are keys in React lists?", text: "Keys help React identify and track list items to optimize rendering." },
                    { id: 'fc28', title: "What is React Router?", text: "React Router enables navigation between components via URLs in single-page applications." },
                    { id: 'fc29', title: "What are custom hooks?", text: "Custom hooks are user-defined functions that reuse hook logic across components." },
                    { id: 'fc30', title: "What is memoization in React?", text: "Memoization caches component render results to improve performance by avoiding re-renders." }
                ]
            },
            stack3: {
                id: 'stack3',
                name: 'Redux',
                flashcards: [
                    { id: 'fc31', title: "What is Redux?", text: "Redux is a predictable state container for JavaScript apps." },
                    { id: 'fc32', title: "What is a store in Redux?", text: "The store is an object that holds the application's state and provides methods to access and update it." },
                    { id: 'fc33', title: "What are actions?", text: "Actions are plain JavaScript objects with a `type` property that describe an intention to change state." },
                    { id: 'fc34', title: "What is a reducer?", text: "A reducer is a pure function that takes current state and action and returns new state." },
                    { id: 'fc35', title: "What is `combineReducers`?", text: "`combineReducers` merges multiple reducers into a single reducing function for the store." },
                    { id: 'fc36', title: "What is middleware?", text: "Middleware adds extra functionality to Redux like logging, crash reporting, or async support." },
                    { id: 'fc37', title: "What is Redux Thunk?", text: "Redux Thunk is a middleware that allows you to write action creators that return a function instead of an action." },
                    { id: 'fc38', title: "What is Redux Toolkit?", text: "Redux Toolkit is the official recommended way to write Redux code efficiently and with less boilerplate." },
                    { id: 'fc39', title: "What is `createSlice`?", text: "`createSlice` automatically generates action creators and action types based on reducer functions." },
                    { id: 'fc40', title: "What is a selector?", text: "A selector is a function that retrieves specific data from the state." },
                    { id: 'fc41', title: "Redux vs Context API?", text: "Context is simpler and better for light state; Redux is suited for complex state management." },
                    { id: 'fc42', title: "How to dispatch an action?", text: "You call `store.dispatch(action)` or use `useDispatch()` in React components." },
                    { id: 'fc43', title: "What is immutability in Redux?", text: "Reducers must return new state objects without mutating the existing state." },
                    { id: 'fc44', title: "What are Redux DevTools?", text: "Redux DevTools is a browser extension to inspect actions, state, and time-travel debugging." },
                    { id: 'fc45', title: "How is state updated in Redux?", text: "State is updated by dispatching actions that are handled by reducers." }
                ]
            },
        },
        allIds: ['stack1', 'stack2', 'stack3']
    }
}