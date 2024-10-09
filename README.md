# Vanilla Context and Reducer Example

A port of React's [Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context) final example to vanilla web code.

Part of the [Plain Vanilla Web](https://plainvanillaweb.com) project.

This version uses [Element.closest()](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) to provide the context.
There is a [separate branch](https://github.com/jsebrech/vanilla-context-and-reducer/tree/tiny-context) that uses the [tiny-context library](https://github.com/jsebrech/tiny-context) instead which is the recommended way to implement context for larger scale vanilla web applications.

## Running

Run the `vanilla` folder as a static site and browse to it:

```sh
npx http-server vanilla
```

The `react` folder contains the original example's source code for comparison.
