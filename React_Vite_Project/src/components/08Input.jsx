import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function InputBox({
    lebel,amount,onAmountChange,
    currencyOptions=[],selectCurrency="usd",
    amountDisabled=false,currencyDisable=false,
    className="",
}) {
  return (
    <div className='container'>
        <label>{lebel}</label> 
        <InputGroup className={`mt-4 ${className}`}>                                       {/* && means if no def val of onAmountChange */}
            <input type='number' disabled={amountDisabled} value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} className="form-control" placeholder='Enter Amount' aria-label="" aria-describedby="basic-addon1" />
            <Button variant="outline-secondary" id="button-addon1"> Button </Button>
        </InputGroup>

        



    </div>
  )
}
