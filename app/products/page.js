"use client";
import { useEffect, useState } from "react";
import { useProductContext } from "../context/Context";

import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

import Product from "@/components/Product";
import Loading from "@/components/Loading";
import ProductWithVariety from "@/components/ProductWithVariety";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [isDataReady, setIsDataReady] = useState(null);
  const { selectValue, setSelectValue } = useProductContext();

  function getLowestPrice(item) {
    if (item.hasVariety) {
      let minPrice = Infinity;
      item.type.forEach((type) => {
        if (type.price < minPrice) {
          minPrice = type.price;
        }
      });
      return minPrice;
    } else {
      return item.price;
    }
  }

  const fetchProducts = async (brand) => {
    try {
      const snapshot = await getDocs(collection(db, brand));
      const data = snapshot.docs.map((doc) => doc.data());

      const sortedData = data.sort((a, b) => getLowestPrice(a) - getLowestPrice(b));

      // console.log({
      //   beforeSort: data,
      //   afterSort: data.sort((a, b) => getLowestPrice(a) - getLowestPrice(b)),
      // });

      setProducts(sortedData);
      setIsDataReady(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProducts(selectValue);
  }, [selectValue]);

  if (!isDataReady) return <Loading />;

  return (
    <>
      {products.length < 1 ? (
        <p className="w-[80%] h-[50vh] text-center mx-auto flex items-center justify-center text-[#001a9d] font-semibold text-lg">Produk tidak ditemukan, coba keyword lain...</p>
      ) : (
        <div className="flex flex-wrap justify-around">{products.map((product) => (product.hasVariety ? <ProductWithVariety key={product.name} data={product} /> : <Product key={product.name} data={product} />))}</div>
      )}
    </>
  );
}
