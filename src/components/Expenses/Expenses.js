import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css';

const Expenses = (props) => {
  const expenses = props.expenses;

  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
