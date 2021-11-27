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
    return (
        <div className="new-expense" >
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );

}

export default NewExpense;