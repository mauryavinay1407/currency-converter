import { useState } from "react";
import { IoSwapVerticalOutline } from "react-icons/io5";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import InputBox from "./InputBox";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="max-w-lg w-full bg-white/20 rounded-xl backdrop-blur-lg p-8 text-black shadow-[0_0_10px_white]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        {/* From Amount */}
        <div className="w-full mb-4">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectedCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
        </div>

        {/* Swap Button */}
        <div className="relative my-6 flex justify-center">
          <button
            type="button"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:scale-105 transform transition"
            onClick={swap}
          >
            <IoSwapVerticalOutline size={24} />
          </button>
        </div>

        {/* To Amount */}
        <div className="w-full mb-6">
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisable
          />
        </div>

        {/* Convert Button */}
        <button
          type="submit"
          className="w-full py-3 text-lg font-medium bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-700 text-white rounded-lg shadow-md hover:bg-opacity-90 transform hover:scale-105 transition"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default CurrencyConverter;
