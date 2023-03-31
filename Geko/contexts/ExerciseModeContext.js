import React, { createContext, useState } from 'react';

const ExerciseModeContext = createContext();

const ExerciseModeProvider = ({ children }) => {
  const [exerciseMode, setExerciseMode] = useState('walking');

  return (
    <ExerciseModeContext.Provider value={{ exerciseMode, setExerciseMode }}>
      {children}
    </ExerciseModeContext.Provider>
  );
};

export { ExerciseModeContext, ExerciseModeProvider };