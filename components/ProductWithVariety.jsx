import React, { useState, useEffect } from "react";

export default function ProductWithVariety(props) {
  const { image, name, type } = props.data;
  const [selectedRamStorage, setSelectedRamStorage] = useState(type[0].ramStorage);
  const [selectedTypePrice, setSelectedTypePrice] = useState(type[0]);
  const [showCapital, setShowCapital] = useState(false);

  const handleCheckboxClick = () => {
    setShowCapital(!showCapital);
  };

  useEffect(() => {
    const selectedType = type.find((e) => e.ramStorage === selectedRamStorage);
    if (selectedType) {
      setSelectedTypePrice(selectedType);
    }
  }, [selectedRamStorage, type]);

  const handleRamStorageChange = (e) => {
    setSelectedRamStorage(e.target.value);
  };

  return (
    <div className="w-[80%] h-[55vh] lg:h-[80vh] mt-4 p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="h-[65%] flex justify-center items-center">
        <img className="p-8 mx-auto w-[100%] h-[100%] rounded-t-lg object-contain" src={image} alt="skdfla" />
      </div>

      <div className="px-5 pb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] mt-0">
        <h5 className="text-xl font-semibold p-2 tracking-tight text-gray-900">{name}</h5>

        <div className="flex items-center justify-between mt-2">
          <select className="select select-bordered select-sm w-[50%] max-w-xs" onChange={handleRamStorageChange} value={selectedRamStorage}>
            {type.map((e, index) => (
              <option key={index} value={e.ramStorage}>
                {e.ramStorage}
              </option>
            ))}
          </select>
          <p className="text-md font-bold">Rp. {Intl.NumberFormat("id-ID").format(selectedTypePrice.price)}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <label className="swap swap-flip text-md">
            <input type="checkbox" onClick={handleCheckboxClick} />
            <div className="swap-on">
              <span className="bg-blue-100 text-blue-800 text-sm sm:text-md md:text-md lg:text-base font-semibold p-2 rounded">Hide</span>
            </div>
            <div className="swap-off">
              <span className="bg-blue-100 text-blue-800 text-sm sm:text-md md:text-md lg:text-base font-semibold p-2 rounded">Show</span>
            </div>
          </label>

          {showCapital ? (
            <p className="text-md font-bold">Rp. {Intl.NumberFormat("id-ID").format(selectedTypePrice.capital)}</p>
          ) : (
            <p className="text-md font-bold text-slate-300 bg-slate-300 rounded">Rp. {Intl.NumberFormat("id-ID").format(selectedTypePrice.capital)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
