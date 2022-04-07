import React, { createContext, useState } from 'react';
import { useRouter } from 'next/router';
export const Context = createContext();
export default function ContextProvider({ children }) {
  const [type, setType] = useState(null);
  const [isFilter, setFilters] = useState(false);
  const [isActive, setIsActive] = useState(null);
  const [isPushIntro, setIsPushIntro] = useState(false);

  const [introduceTpye, setIntroduceType] = useState(null);
  const router = useRouter();

  const handleTypeProjects = (type) => {
    setFilters(true);
    setType(type);
    setIsActive(type);
  };
  const handleClickMenuIntroduce = (idNav, link, type) => {
    // if (isPushIntro === true) {
    //   router.push('/gioi-thieu');
    //   setIsPushIntro(false);
    // }
    if (link === '/du-an') {
      router.push(`/du-an`);
    }
    setIntroduceType(idNav);
    setFilters(true);
    setType(type);
    setIsActive(type);
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
    setIsActive,
    setIsPushIntro,
    isPushIntro,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
