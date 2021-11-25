import React, {useRef} from 'react'

const IncomeForm = ( {income,setIncome} ) => {  
    const desc = useRef()
    const price = useRef()
    const date = useRef()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if( desc.current.value === '' || price.current.value === '' || date.current.value ==='' ){
            return alert('It can not be empty.');
        }

        setIncome( [...income,{ 
            desc: desc.current.value,
            price : price.current.value,
            date : date.current.value 
        }])
        

        desc.current.value = '';
        price.current.value = null;
        date.current.value = null 
    }


    return (
        <form className="income-form" onSubmit={onSubmitHandler}>
            <div className="form-inner">
                <input type="text" ref={desc} name="desc" id="desc" placeholder="Add description" />
                <input type="number" ref={price} name="price" id="price" placeholder="Add price" />
                <input type="date" ref={date} name="date" id="date"/>
                <input type="submit" value="Add Income" />
            </div>
        </form>
    )
}

export default IncomeForm
