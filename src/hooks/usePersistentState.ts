// usePersistentState.ts
import React from "react";

// This hook is used to manage a persistent state in localStorage.
export function usePersistentState<T>(key: string, initialValue: T): [T, (value: T) => void] {
    const [state, setState] = React.useState(() => {
        const stored = localStorage.getItem(key);
        return stored === null ? initialValue : JSON.parse(stored);
    });

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}
