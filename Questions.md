##### Difference Between Component and PureComponent

- Difference is in re-rendering of component. Pure Component have `shouldCompo0nentUpdate` by default integrated
and PureComponent does. So when parent re-renders Component follow up re-render of parent and also do same.
But Pure Component follows if state or props is changed and if it is, then does re-render which is big performance boost
and much safer thing to do, because of unexpected behaviours (infinite loop, parent component issues etc.)
If there is Component that receives an object as a prop, and the object's reference doesn't change even when its content changes. PureComponent comparison of props would consider it unchanged and not trigger a re-render. This can lead to errors if the component relies on the updated object's content.
---
##### Context + ShouldComponentUpdate might be dangerous. Why is that?

- Because `shouldComponentUpdate` does not consider changes in context by default. If a component relies on context data for rendering decisions but `shouldComponentUpdate` returns `false`, it won't re-render even if the context has changed, it will lead to outdated UI.
---
##### Describe 3 ways to pass information from a component to its PARENT.
- Callback - Pretty common javascript thing, callback function received as props in child, and on f.e. button click event trigger function is called
- Context API 
- Props - Almost same as callback, function can be sent as props, with state of parent where on child can be called f.e. `setItem(item)` where item is state of child
---
##### Give 2 ways to prevent components from re-rendering.
- `useMemo` hook in functional components or `shouldComponentUpdate` in class components to prevent re-rendering when the component's output is the same for the given inputs.
---
##### What is a fragment and why do we need it? Give an example where it might break my app.
Fragment is used to group multiple children elements. It is used when you need to return JSX elements without a parent container.

It can break app if CSS selector relies on specific parent-child relationships. If Fragment is used, the absence of a parent container could break UI.

---

##### Give 3 examples of the HOC pattern.

- HOC for Authentication: Wrapping component with HOC, and if user is not logged in, redirects it to other page
- HOC for logging: Logging information of component events for debugging
- HOC for data fetching: A higher-order component that handles data fetching and provides the fetched data as props to the wrapped component. As `redux` do...
- HOC for styling: Component with predefined styles.
---
##### What's the difference in handling exceptions in promises, callbacks and async...await?
- Promises: Promises provide a straightforward way to handle asynchronous errors.

- Callbacks: Callbacks is using error-first callback patterns, where the first argument of the callback function is reserved for an error object.

- async...await: Synchronous-like error handling approach. You can use a try...catch block around await statements to catch and handle exceptions.
---
##### How many arguments does setState take and why is it async.
`setState` takes two arguments:
- An object that represents the new state or a function that returns such an object.
- callback function that is executed after the state update is applied 
When you call setState, React may batch multiple updates and apply them in a single render. 
Also, you can pass prop `prevState` to updated previous state with new one, and avoid infinite loop.
---
##### List the steps needed to migrate a Class to Function Component.
- Move the render method content to the functional component's return statement.
- Convert class component state to `useState` hooks.
- Replace lifecycle methods with appropriate hooks.
- Refactor event handlers to use `useState` and `useEffect`.
- Update any other class-specific syntax (e.g., `this.props` to function arguments or `props`).
---
##### List a few ways styles can be used with components.
- Inline Styles
- CSS Classes
- CSS in Javascript: Using libraries like `styled-components` or `Emotion`.
- CSS Modules: When using `webpack`
---
##### How to render an HTML string coming from the server.
- `dangerouslySetInnerHTML` - not so much safe because of XSS attacks
- React Libraries for Rich Text Content: There are third-party React libraries designed for rendering rich text content, `react-html-render`, `react-sanitized-html`, and `draft-js`.