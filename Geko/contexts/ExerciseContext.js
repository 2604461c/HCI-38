import React, { createContext, useState } from 'react';

const ExerciseContext = createContext();

const ExerciseProvider = ({ children }) => {
  const [isExercising, setIsExercising] = useState(false);

  return (
    <ExerciseContext.Provider value={{ isExercising, setIsExercising }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseContext, ExerciseProvider };