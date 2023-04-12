import React from "react";


const Blog = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl pb-10">Blog</h1>
      <div className="border p-5">
        <h3 className="text-2xl font-medium text-cyan-900 py-4">
          When should we use context API?
        </h3>
        <p>
          The Context API provides a way to pass data through the component tree
          without having to pass props down manually at every level. This can be
          useful in situations where we have data that needs to be shared
          between multiple components, but not necessarily all components in the
          application. Another situation where you might use Context API is when
          you have a global state that needs to be managed across the entire
          application. In this case, you can create a context that provides
          access to this global state, and any component in the tree can access
          it by using the useContext hook.
        </p>
      </div>
      <div className="border p-5">
        <h3 className="text-2xl font-medium text-cyan-900 py-4">
          What is a custom hook?
        </h3>
        <p>
          A custom hook is a JavaScript function that starts with the word "use"
          and allows you to reuse stateful logic across multiple components in a
          React application. Custom hooks are a way to abstract and share logic
          between components, allowing us to write reusable code. Custom hooks
          are created by composing built-in hooks (like useState, useEffect,
          useContext, etc.) and other custom hooks, and can be used to
          encapsulate complex logic that is independent of the specific UI
          components. For example, if you have a component that needs to fetch
          data from an API and manage the loading and error states, you can
          create a custom hook that handles the data fetching and return the
          loading and error states along with the data. You can then use this
          custom hook in multiple components that need to fetch data from that
          API. Custom hooks can also be used to manage forms, animations, and
          other reusable logic that is not specific to any one component. By
          creating a custom hook, you can simplify our component code and make
          it more reusable, maintainable, and scalable.
        </p>
      </div>
      <div className="border p-5">
        <h3 className="text-2xl font-medium text-cyan-900 py-4">
          What is useRef?
        </h3>
        <p>
          useRef is a built-in hook in React that provides a way to keep a
          mutable reference to a value in a functional component. useRef returns
          a mutable ref object that has a current property, which can be used to
          store a value. The primary use case for useRef is to access DOM nodes
          or other mutable values in a functional component. We can create a ref
          object using useRef and then attach it to a DOM element using the ref
          attribute. We can also use useRef to store any other mutable value,
          such as a timer ID or a previous state value. One of the unique
          features of useRef is that the value it stores persists across
          re-renders, unlike a variable defined inside a function. This makes
          useRef useful for storing values that need to be accessed across
          renders, but that don't affect the rendering of the component. For
          example, we might use useRef to store the previous value of a prop or
          state value, and then compare it to the current value to determine if
          a certain action needs to be taken. Or, we might use useRef to store a
          reference to a setInterval or setTimeout timer so that we can clear it
          on unmount.
        </p>
      </div>
      <div className="border p-5">
        <h3 className="text-2xl font-medium text-cyan-900 py-4">
          What is useMemo?
        </h3>
        <p>
          useMemo is a built-in hook in React that provides a way to memoize the
          result of a function so that it is only recomputed when its
          dependencies change. Memoization is a technique for optimizing
          expensive computations by caching the result of a function and
          returning the cached result when the same input is provided again.
          This can be useful when we have a computationally expensive function
          that needs to be called frequently with the same input. In React,
          useMemo can be used to memoize the result of a function that is passed
          as a prop to a child component. This can prevent unnecessary
          re-renders of the child component when the parent component updates,
          but the input to the function has not changed.
        </p>
      </div>
    </div>
  );
};

export default Blog;
