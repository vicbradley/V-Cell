"use client";
import ProductForm from "@/components/ProductForm";
import { useProductContext } from "../context/Context";

import Login from "@/components/Login";
import { useEffect } from "react";

export default function Admin() {
  const { isLogin } = useProductContext();

  const checkLocalStorage = () => (localStorage.getItem("isLogin") ? true : false);

  useEffect(() => {
    checkLocalStorage();
  }, [isLogin]);

  if (!checkLocalStorage()) return <Login />;

  return (
    <div className="w-screen h-[60vh] flex justify-center items-center p-6">
      <ProductForm />
    </div>
  );
}
