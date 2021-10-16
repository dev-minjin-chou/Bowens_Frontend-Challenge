import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// Create context
export const GlobalContext = createContext(initialState);

//Provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // Actions
  const markMovieAsWatched = (movie) => {
    dispatch({ type: "WATCHED_MOVIES", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{ watched: state.watched, markMovieAsWatched }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
