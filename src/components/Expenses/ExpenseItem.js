import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = props => {

    const expense = props.expense;
    const [title, setTitle] = useState(expense.title);

    const clickHandler = () => {
        setTitle(Math.random().toString());
    }
    return (
        <Card className="expense-item" >
            <ExpenseDate date={expense.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${expense.amount}</div>
            </div>
            <button onClick={clickHandler} >Change Title</button>
        </Card >
    )
}

export default ExpenseItem;