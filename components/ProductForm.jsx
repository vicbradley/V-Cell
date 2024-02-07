import { useState } from "react";

import MultiTypeForm from "./MultiTypeForm";
import SingleTypeForm from "./SingleTypeForm";

import { Dialog, Button, Flex, Text, TextField } from "@radix-ui/themes";

export default function ProductForm() {
  const [hasMultipleType, setHasMultipleType] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  // Event handler untuk mengubah state ketika checkbox diubah
  const handleCheckboxChange = (event) => {
    setHasMultipleType(event.target.checked);
  };

  return (
    <div className="w-full h-[30vh] p-6 bg-white border border-gray-200 rounded-lg shadow mt-10 flex flex-col justify-center items-center">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Admin Page</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700">Add Product Here</p>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Add Product</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Add Product</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Fill The Form.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            {/* NAME */}
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Name
              </Text>
              <TextField.Input value={name} onChange={(e) => setName(e.target.value)} />
            </label>

            {/* CATEGORY */}
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Category
              </Text>
              <TextField.Input value={category} onChange={(e) => setCategory(e.target.value)} />
            </label>

            {/* IMAGE */}
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Image Link
              </Text>
              <TextField.Input value={image} onChange={(e) => setImage(e.target.value)} />
            </label>

            {/* HAS MULTIPLE TYPE */}
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Has Multiple Type</span>
                <input type="checkbox" className="checkbox" onChange={handleCheckboxChange} checked={hasMultipleType} required={true} />
              </label>
            </div>

            {hasMultipleType ? (
              // <p>Dicentang</p>
              <MultiTypeForm name={name} category={category} image={image} setName={setName} setCategory={setCategory} setImage={setImage} />
            ) : (
              <SingleTypeForm name={name} category={category} image={image} setName={setName} setCategory={setCategory} setImage={setImage} />
            )}
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
