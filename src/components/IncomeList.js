import React from 'react'
import IncomeItem from './IncomeItem'


const IncomeList = ({income,setIncome}) => {

    const removeItem = i => {
        let temp = income.filter( (v,index) => (index !== i))
        setIncome(temp)
    }

    return (
        <div className='income-list'>
            {income.map( (value,index) => (
                 <IncomeItem 
                 income={value} 
                 key={index} 
                 index={index} 
                 removeItem={removeItem} />
             ))}
        </div>
    )
}


export default IncomeList
