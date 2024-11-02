import { useEffect } from "react";
import { useState } from "react";


const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(()=>{
  const getDate = new Date();
  const currentDate = getDate.toISOString().split('T')[0];
  console.log(currentDate);
    fetch(`https://${currentDate}.currency-api.pages.dev/v1/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(data)
  },[currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;