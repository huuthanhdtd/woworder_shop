import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router';
export const Context = createContext();
export default function ContextProvider({ children }) {
  const [type, setType] = useState(null);
  const [isFilter, setFilters] = useState(false);
  const [isActive, setIsActive] = useState(1);
  const [introduceTpye, setIntroduceType] = useState(null);
  const router = useRouter();

  const handleTypeProjects = (type, id) => {
    // router.push("/du-an")
    setFilters(true);
    setType(type);
    setIsActive(id);
  };
  const handleClickMenuIntroduce = (idNav, thien) => {
    router.push('/gioi-thieu');
    setIntroduceType(idNav);
  };

  const value = {
    type,
    handleTypeProjects,
    setType,
    isFilter,
    isActive,
    handleClickMenuIntroduce,
    setIntroduceType,
    introduceTpye,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
