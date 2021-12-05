import { createContext, useContext } from "react";
import DataStore from "./dataStore";

interface Store{
    dataStore: DataStore
}

export const store: Store = {
    dataStore : new DataStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}