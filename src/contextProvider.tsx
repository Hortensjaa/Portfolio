import React, { ReactNode, createContext, useContext, useState } from 'react';
import { hashtag } from './repository';

// Define the context
export const SharedStateContext = createContext<{
    filtersState: hashtag[];
    setFilters: React.Dispatch<React.SetStateAction<hashtag[]>>;
  }>({
    filtersState: [],
    setFilters: () => {},
  });
  
  // Create a component to provide the context
  export const SharedStateProvider = ({ children }: { children: ReactNode }) => {
    const [filtersState, setFilters] = useState<hashtag[]>([]); // Initialize state
  
    return (
      <SharedStateContext.Provider value={{ filtersState, setFilters }}>
        {children}
      </SharedStateContext.Provider>
    );
  };
  
  // Use the shared state context within components
  export const useSharedState = () => {
    const context = useContext(SharedStateContext);
    if (!context) {
      throw new Error('useSharedState must be used within a SharedStateContextProvider');
    }
    return context;
  };