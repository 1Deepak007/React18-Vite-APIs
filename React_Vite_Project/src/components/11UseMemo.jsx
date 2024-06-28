import React from 'react'
import { useMemo , useState} from 'react';

const UseMemo = () => {

    //=====> Example 1
    // This function is expensive and we don't want to run it on every render
    const expensiveCalculation = (number) => {
        // console.log('Calculating...');
        return number * 2;
    };

    const num=1000;
    // useMemo will only recompute when `num` changes
    const result = useMemo(() => expensiveCalculation(num), [num]);
    

    //=====> Example 2
    const [selectedDate, setSelectDate] = useState(new Date());
    let value = useMemo(()=>{
        return AgeCalculator(selectedDate);
    },[selectedDate]);

    const [mytext, setmytext] = useState("");

  return (
    <div>
        <h2 className='text-center'>UseMemo Hook</h2>
        <p>The useMemo hook in React is used to optimize the performance of your application by memoizing(cache) expensive calculations. </p>
        
        <ul>
            <li>Expensive Calculation: Imagine you have a function that takes a lot of time or resources to compute something.</li>
            <li>Recomputing: If you call this function frequently, it can slow down your app because it keeps recalculating the same result.</li>
            <li>Memoization: useMemo saves (or memoizes) the result of this function so that it doesn't have to recalculate it every time.</li>
            <li>Dependency Array: You tell useMemo when to recompute the result by providing a list of dependencies. If none of these dependencies change, useMemo returns the saved result instead of running the function again.</li>
        </ul>

        <h2>Result: {result}</h2>

        <p>===========================================================</p>

        <h2>Age Calculator</h2>
        <input type="date" value={selectedDate} onChange={(e)=>setSelectDate(e.target.value)}/>
        <input type="text" onChange={(e)=>setmytext(e.target.value)}/>

    </div>  
  )
}

export default UseMemo


function AgeCalculator(selectDate){
    const currentDate = new Date()
    const dt = new Date(selectDate)
    let age = currentDate.getFullYear() - dt.getFullYear()
}