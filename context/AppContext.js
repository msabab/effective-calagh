import { createContext, useContext, useMemo, useReducer, useEffect } from "react";
import { AppReducer, initialState } from "./AppReducer";

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state]);


    useEffect(() => {
        if (JSON.parse(localStorage.getItem("state"))) {
            dispatch({
                type: "initial_from_localstorage",
                value: JSON.parse(localStorage.getItem("state")),
            });
        }
    }, []);

    useEffect(() => {
        if (state !== initialState) {
            localStorage.setItem("state", JSON.stringify(state));
        }
    }, [state]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}