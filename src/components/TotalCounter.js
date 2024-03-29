import React from 'react'
import { connect } from 'react-redux'
import getFilteredItems from '../selectors/expenses'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
export class TotalCounter extends React.Component {
    constructor(props) {
        super(props)
    }
    sum() {
        let sum = 0
        if (this.props.expenses) {
            this.props.expenses.map((expense) => {
                sum += parseFloat(expense.amount)
                console.log(expense)
            })
        }
        return sum
    }
    render() {
        return (
            <div className='page-header'>
                <div className='content-container'>
                    {this.props.expenses ? <h1 className='page-header__title'>Viewing {this.props.expenses.length} expense(s) with the total of {numeral(this.sum()).format('$0,0.00')}</h1> : <h1></h1>}
                    <Link to='/create' className='button__addExpense' >Add Expense</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: getFilteredItems(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(TotalCounter)