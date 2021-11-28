import { useState } from 'react/cjs/react.development';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense = props => {

    const saveExpenseDataHandler = FormData => {

        const expenseData = {
            ...FormData,
            id: Math.random().toString()
        }
        console.log(expenseData, 'recevied');

        props.onNewExpense(expenseData);
    }

    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = () => {
        setIsEditing(prevState=>!prevState)
    }
    return (
        <div className="new-expense" >
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={startEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );

}

export default NewExpense;