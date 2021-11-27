import { useState } from 'react/cjs/react.development';
import './ExpenseForm.css';

const ExpenseForm = props => {

    const [userInput, setUserInput] = useState({ title: '', amount: '', date: '' });

    const titleChangeHandler = event => setUserInput(prevState => { return { ...prevState, title: event.target.value } })
    const amountChangeHandler = event => setUserInput(prevState => { return { ...prevState, amount: event.target.value } })
    const dateChangeHandler = event => setUserInput(prevState => { return { ...prevState, date: event.target.value } })


    const formSubmitHandler = event => {
        event.preventDefault();
        const date = new Date(userInput.date);
        const newExpense = { ...userInput, date }
        console.log(newExpense);
        props.onSaveExpenseData(newExpense);
        setUserInput({ title: '', amount: '', date: '' });
    }


    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={userInput.amount} min="0" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={userInput.date} min="2019-01-01" max="2022-12-01" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;