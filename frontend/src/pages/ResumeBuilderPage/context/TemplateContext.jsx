import { createContext, useContext, useState } from 'react';

// Create a context object
const TemplateContext = createContext();

// Custom hook to use the context
export const useTemplate = () => useContext(TemplateContext);

// Context provider component
export const TemplateProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <TemplateContext.Provider value={{ selectedTemplate, setSelectedTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};
