import { useEffect,useState } from 'react';

function useCurrencyInfo(currency){
    // Calling API when this hook is loaded (using useEffect)
    // useEffect will call api directly

    const[data,setdata] = useState({});
    useEffect(()=>{
        fetch(`https://www.jsdelivr.com/package/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
        console.log(data);
    }, [currency]);
    console.log(data);
    return  data;
}

export default useCurrencyInfo;
