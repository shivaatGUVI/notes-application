import { createContext, useState } from "react";

export const NotesContext = createContext();

export const optionsObject = {
  os: "Operating System",
  linux: "Linux",
  next: "Next.js",
};

export const optionsArray = ["os", "linux", "next"];

export default function NotesContextProvider({ children }) {
  const [state, setState] = useState(optionsArray[0]);

  const changeState = (value) => {
    setState(value);
  };

  return (
    <NotesContext.Provider value={{ state, changeState }}>
      {children}
    </NotesContext.Provider>
  );
}