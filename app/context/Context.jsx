"use client";

import { createContext, useContext, useState } from "react";

const ProductContext = createContext({});

export const ProductContextProvider = ({ children }) => {
  const [selectValue, setSelectValue] = useState("Oppo");

  const [isLogin, setIsLogin] = useState(false);

  return <ProductContext.Provider value={{ selectValue, setSelectValue, isLogin, setIsLogin }}>{children}</ProductContext.Provider>;
};

export const useProductContext = () => useContext(ProductContext);
