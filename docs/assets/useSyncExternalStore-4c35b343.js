const e=`// https://thisweekinreact.com/articles/useSyncExternalStore-the-underrated-react-api#usesyncexternalstore-to-the-rescue
import React, {useSyncExternalStore} from 'react'

function subscribe(callback) {
  window.addEventListener("scroll", callback);
  return () => {
    window.removeEventListener("scroll", callback);
  };
}

function useScrollY(selector = (id) => id) {
  return useSyncExternalStore(
  	// ** subscribe to external event
    subscribe,
	// ** client side snapshot
    () => selector(window.scrollY),
	// ** server side snapshot
    () => true
  );
}

function ScrollY() {
  const scrollY = useScrollY()
  return <div>{scrollY}</div>
}

<ScrollY/>
`;export{e as default};
