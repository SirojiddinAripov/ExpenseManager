import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startRemoveExpense, startEditExpense } from '../actions/expenses'
export class EditExpensePage extends React.Component {
    render() {
        return (
            <div className="content-container">
                <h1>Editing: {this.props.expense.description}</h1>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={(expense) => {
                        this.props.startEditExpense(this.props.expense.id, expense)
                        this.props.history.push('/dashboard')
                    }}
                />
                <button
                    className="button__submit"
                    onClick={() => {
                        this.props.startRemoveExpense(this.props.expense.id)
                        this.props.history.push('/dashboard')
                    }}>Remove Expense</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)