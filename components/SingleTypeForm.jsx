import { useState } from "react";

import { db } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import { Text, TextField, Flex, Dialog, Button } from "@radix-ui/themes";

export default function SingleTypeForm({ name, category, image, setName, setCategory, setImage }) {
  const [price, setPrice] = useState("");
  const [ramStorage, setRamStorage] = useState("");
  const [capital, setCapital] = useState("");

  const handleOnSubmit = async () => {
    // Add a new document with a generated id.
    await addDoc(collection(db, category), {
      name,
      ramStorage,
      price: parseInt(price),
      capital: parseInt(capital),
      image,
      hasVariety: false,
    });

    setName("");
    setCategory("");
    setImage("");
    setPrice("");
    setRamStorage("");
    setCapital("");

    alert("Product successfully added to the database");
  };

  return (
    <>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          RAM & Storage
        </Text>
        <TextField.Input value={ramStorage} onChange={(e) => setRamStorage(e.target.value)} />
      </label>

      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Price
        </Text>
        <TextField.Input value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>

      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Capital
        </Text>
        <TextField.Input value={capital} onChange={(e) => setCapital(e.target.value)} />
      </label>

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
