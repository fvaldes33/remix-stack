import { atom } from "jotai";

export const atomWithLocalStorage = <T>(key: string, initialValue: T) => {
  const getInitialValue = () => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const item = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item) as T;
    }
    return initialValue;
  };
  const baseAtom = atom<T>(getInitialValue());
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update: ((next: T) => T) | T) => {
      const nextValue =
        typeof update === "function"
          ? (update as (next: T) => T)(get(baseAtom))
          : update;
      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    }
  );
  return derivedAtom;
};
