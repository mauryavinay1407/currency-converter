import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-900 via-stone-900 to-sky-900">
      <h1 className="text-5xl mb-10 text-white font-semibold ">
        Welcome to Currency Converter!
      </h1>
      <CurrencyConverter />
    </div>
  );
}

export default App;
