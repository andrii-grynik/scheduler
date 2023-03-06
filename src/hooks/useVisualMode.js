import { useState } from 'react';
// take in an initial mode
// set the mode state with the initial mode provided
// return an object with a mode property

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  // eslint-disable-next-line
  const [history, setHistory] = useState([initial]);

  // allows to transition to a new mode
  const transition = (newMode, replace = false) => {
    if (replace) {
      setMode(newMode)
      
      setHistory((prev) => {
        let replaceHistory = [...prev];
        replaceHistory[replaceHistory.length - 1] = mode;
       return replaceHistory
      });
      
    } else {
      setMode(newMode);
  
      setHistory((prev) => {
        let newHistory = [...prev];
        newHistory.push(newMode);
        return newHistory
      });
    }
  };

  // allows to call back to return to previous mode
  const back = () => {
    setHistory((prev) => { 
      let replaceHistory = [...prev];
      replaceHistory.pop()
      if (replaceHistory.length >= 1) {
        setMode(replaceHistory[(replaceHistory.length - 1)]);
      }
      return replaceHistory;
    });
    
  };

  return { mode, transition, back }
}

export default useVisualMode;