import { SetStateAction, useEffect, useState } from "react";

function useLocalStorage(
  key: string,
  initialState: string
): [state: string, setState: React.Dispatch<SetStateAction<string>>] {
  const [state, setState] = useState<string>(initialState || "");

  useEffect(() => {
    let savedValue = localStorage.getItem(key);
    if (savedValue) {
      return setState(JSON.parse(savedValue));
    }
    localStorage.setItem(key, JSON.stringify(state));
  }, []);

  function updateLocalStorage(value: any) {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  return [state, updateLocalStorage];
}

export default useLocalStorage;
