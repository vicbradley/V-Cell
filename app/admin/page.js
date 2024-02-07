"use client";
import ProductForm from "@/components/ProductForm";
import { useProductContext } from "../context/Context";
import Login from "@/components/Login";
import { useEffect } from "react";

export default function Admin() {
  const { isLogin, setIsLogin } = useProductContext();

  useEffect(() => {
    const checkLocalStorage = () => {
      if (typeof window !== "undefined") {
        setIsLogin(localStorage.getItem("isLogin"));
      }
    };

    checkLocalStorage();
  }, []); // Perubahan dependensi di sini, tidak perlu isLogin

  if (!isLogin) return <Login />;

  return (
    <div className="w-screen h-[60vh] flex justify-center items-center p-6">
      <ProductForm />
    </div>
  );
}
