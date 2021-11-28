import { useState } from "react/cjs/react.development";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
    const [year, setYear] = useState('2019');

    const filteredList = props.expenses.filter(expense => new Date(expense.date).getFullYear().toString() === year);
    const yearFilterHandler = year => {
        setYear(year);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onYearChange={yearFilterHandler} />
            <ExpensesChart expenses={filteredList} />
            <ExpensesList items={filteredList} />
        </Card>
    )

}

export default Expenses;