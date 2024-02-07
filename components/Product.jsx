import { useState } from "react";

export default function Product(props) {
  const { name, price, ramStorage, image, capital } = props.data;
  const [showCapital, setShowCapital] = useState(false);

  const handleCheckboxClick = () => {
    setShowCapital(!showCapital);
  };

  return (
    <div className="w-[80%] h-[60vh] lg:h-[80vh] mt-4 p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="h-[65%] flex justify-center items-center ">
        <img className="p-8 mx-auto w-[100%] h-[100%] rounded-t-lg object-contain" src={image} alt="skdfla" />
      </div>

      <div className="px-5 pb-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] mt-0">
        <h5 className="text-xl font-bold p-2 tracking-tight text-gray-900">{name}</h5>

        <div className="flex items-center justify-between mt-2">
          <span className="bg-blue-100 text-blue-800 text-sm sm:text-md md:text-md lg:text-base font-semibold p-2 rounded">{ramStorage}</span>
          <p className="text-lg font-bold">Rp. {Intl.NumberFormat("id-ID").format(price)}</p>
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
            <p className="text-lg font-bold">Rp. {Intl.NumberFormat("id-ID").format(capital)}</p>
          ) : (
            // <button onClick={() => console.log(showCapital)}>test</button>}
            <p className="text-lg font-bold text-slate-300 bg-slate-300 rounded">Rp. {Intl.NumberFormat("id-ID").format(price)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
