import React from 'react'

const HooksSummary = () => {
  return (
    <div className="pure-g">
      <div className="pure-u-1">
        <h2 className="text-center">Summary of React Hooks</h2>
      </div>
      <div className="pure-u-1">
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useState" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useState:</strong>
              <span className="layout-item-module layout-item-module-state"></span>
            </a> Adds state to a functional component.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useEffect" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useEffect:</strong>
              <span className="layout-item-module layout-item-module-effect"></span>
            </a> Performs side effects in a functional component.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useContext" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useContext:</strong>
              <span className="layout-item-module layout-item-module-util"></span>
            </a> Accesses context in a functional component.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useReducer" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useReducer:</strong>
              <span className="layout-item-module layout-item-module-state"></span>
            </a> Manages state with a reducer function.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useCallback" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useCallback:</strong>
              <span className="layout-item-module layout-item-module-perform"></span>
            </a> Memoizes a function so that it doesn't change between renders.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useMemo" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useMemo:</strong>
              <span className="layout-item-module layout-item-module-perform"></span>
            </a> Memoizes a value so that it doesn't change between renders.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useRef" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useRef:</strong>
              <span className="layout-item-module layout-item-module-util"></span>
            </a> Holds onto mutable values between renders.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useLayoutEffect" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useLayoutEffect:</strong>
              <span className="layout-item-module layout-item-module-effect"></span>
            </a> Similar to useEffect, but runs synchronously after all DOM mutations.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useImperativeHandle" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useImperativeHandle:</strong>
              <span className="layout-item-module layout-item-module-util"></span>
            </a> Exposes a parent component's ref to a child component.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useDebugValue" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useDebugValue:</strong>
              <span className="layout-item-module layout-item-module-util"></span>
            </a> Provides custom data to the React DevTools.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useDeferredValue" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useDeferredValue:</strong>
              <span className="layout-item-module layout-item-module-perform"/>
            </a> useDeferredValue is a React Hook that lets you defer updating a part of the UI.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useId" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useId:</strong>
              <span className="layout-item-module layout-item-module-util"/>
            </a> useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useInsertionEffect" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useInsertionEffect:</strong>
              <span className="layout-item-module layout-item-module-effect"/>
            </a> useInsertionEffect is a version of useEffect that fires before any DOM mutations.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useSyncExternalStore" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useSyncExternalStore:</strong>
              <span className="layout-item-module layout-item-module-util"/>
            </a> useSyncExternalStore is a React Hook that lets you subscribe to an external store.
          </li>
          <li className="pure-menu-item">
            <a href="https://react.dev/reference/react/useTransition" className="pure-menu-link" target="_blank" rel="noopener noreferrer">
              <strong>useTransition:</strong>
              <span className="layout-item-module layout-item-module-perform"/>
            </a> useTransition is a React Hook that lets you update the state without blocking the UI.
          </li>
        </ul>
      </div>
    </div>
  )
}

<HooksSummary/>
