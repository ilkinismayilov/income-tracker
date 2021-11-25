import React from 'react'

const IncomeItem = ({income,index, removeItem}) => {
    const removeHandler = (i) =>{
        console.log("ssss");
        removeItem(i);
    }
    return (
        <div className="income-item">
            <button className="remove-item" onClick={ () => removeHandler(index)}>x</button>
            <div className="desc">{income.desc}</div>
            <div className="price">{income.price} ₼ </div>
            <div className="date">{income.date}</div>
        </div>
    )
}

export default IncomeItem
