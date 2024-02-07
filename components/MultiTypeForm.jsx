import React, { useState } from "react";

import { db } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import { Text, TextField, Flex, Dialog, Button } from "@radix-ui/themes";

export default function MultiTypeForm({ name, category, image, setName, setCategory, setImage }) {
  const [labelCount, setLabelCount] = useState(2); // Initial count of labels
  const [inputValues, setInputValues] = useState(
    Array(labelCount)
      .fill()
      .map(() => ({ ramStorage: "", price: "", capital: "" }))
  );

  const increment = () => {
    setLabelCount((prevCount) => prevCount + 1);
    setInputValues((prevValues) => [...prevValues, { ramStorage: "", price: "", capital: "" }]);
  };

  const decrement = () => {
    setLabelCount((prevCount) => Math.max(prevCount - 1, 1));
    setInputValues((prevValues) => prevValues.slice(0, -1));
  };

  const handleInputChange = (index, field, value) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index][field] = value;
      return newValues;
    });
  };

  const handleOnSubmit = async () => {
    // Mengonversi nilai price dan capital menjadi integer
    const updatedInputValues = inputValues.map((item) => ({
      ...item,
      price: parseInt(item.price),
      capital: parseInt(item.capital),
    }));

    // Menambahkan dokumen baru dengan id yang dihasilkan.
    await addDoc(collection(db, category), {
      name,
      image,
      hasVariety: true,
      type: updatedInputValues,
    });

    // Mengosongkan nilai input
    setName("");
    setCategory("");
    setImage("");
    setInputValues(
      Array(labelCount)
        .fill()
        .map(() => ({ ramStorage: "", price: "", capital: "" }))
    );

    alert("Product successfully added to the database");
  };

  return (
    <>
      {[...Array(labelCount)].map((_, index) => (
        <div key={index} className="mb-2">
          <p>Type {index + 1}</p>
          <div className="divider -mt-2"></div>

          <label key={index}>
            <Text as="div" size="2" mb="1" weight="bold">
              RAM & Storage
            </Text>
            <TextField.Input value={inputValues[index].ramStorage} onChange={(e) => handleInputChange(index, "ramStorage", e.target.value)} />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Price
            </Text>
            <TextField.Input value={inputValues[index].price} onChange={(e) => handleInputChange(index, "price", e.target.value)} />
          </label>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Capital
            </Text>
            <TextField.Input value={inputValues[index].capital} onChange={(e) => handleInputChange(index, "capital", e.target.value)} />
          </label>
        </div>
      ))}

      <div>
        <p>Add type</p>
        <button className="btn btn-sm btn-square" onClick={increment}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
          </svg>
        </button>

        <p>Remove type</p>
        <button className="btn btn-sm btn-square" onClick={decrement}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
          </svg>
        </button>
      </div>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Cancel
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button onClick={handleOnSubmit}>Save</Button>
        </Dialog.Close>
      </Flex>
    </>
  );
}
