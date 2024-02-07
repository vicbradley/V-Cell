import { useState } from "react";
import { useProductContext } from "@/app/context/Context";

export default function Select() {
  const { selectValue, setSelectValue } = useProductContext();

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <div className="flex justify-around items-center">
      <p>Change Brand</p>
      <select className="select select-bordered w-[50%] max-w-xs" value={selectValue} onChange={handleSelectChange}>
        <option>Oppo</option>
        <option>Vivo</option>
        <option>Samsung</option>
        <option>Xiaomi</option>
        <option>Itel</option>
        <option>Infinix</option>
        <option>Nokia & others</option>
        <option>Tab</option>
      </select>
    </div>
  );
}

// [
//   {
//     name: "hp 1",
//     category: "category 1",
//     image: "imagedklafj",
//     ramStorage: "ramStorage",
//     price: 1500000,
//     capital: 1410000,
//     hasVariety: false
//   },
//   {
//     name: "hp 2",
//     category: "category 2",
//     image: "image",
//     hasVariety: true,
//     type: [
//       {
//         price: 1400000,
//         capital: 1300000,
//         ramStorage: "ramStorage"
//       },
//       {
//         price: 1600000,
//         capital: 1500000,
//         ramStorage: "ramStorage"
//       },
//     ]

//   }
// ]
