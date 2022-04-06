import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router';
export const Context = createContext();
export default function ContextProvider({ children }) {
  const [type, setType] = useState(null);
  const [isFilter, setFilters] = useState(false);
  const [isActive, setIsActive] = useState(1);
  const [introduveTpye, setIntroduceType] = useState(null);
  const router = useRouter();

  const handleTypeProjects = (type, id) => {
    // router.push("/du-an")
    setFilters(true);
    setType(type);
    setIsActive(id);
  };
  const handleClickMenuIntroduce = () => {
    router.push('/gioi-thieu');
  };

  const value = {
    type,
    handleTypeProjects,
    setType,
    isFilter,
    isActive,
    handleClickMenuIntroduce,
    setIntroduceType,
    introduveTpye,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
