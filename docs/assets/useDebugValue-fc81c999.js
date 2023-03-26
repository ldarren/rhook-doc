const e=`// https://thisweekinreact.com/articles/useSyncExternalStore-the-underrated-react-api#usesyncexternalstore-to-the-rescue
import React, {useSyncExternalStore, useDebugValue} from 'react'

function subscribe(callback) {
  window.addEventListener("scroll", callback);
  return () => {
    window.removeEventListener("scroll", callback);
  };
}

function useScrollY(selector = (id) => id) {
  useDebugValue("hey there")
  return useSyncExternalStore(
    subscribe,
    () => selector(window.scrollY),
    () => true
  );
}

function ScrollY() {
  const scrollY = useScrollY()
  return <div>{scrollY}</div>
}

<ScrollY/>
`;export{e as default};