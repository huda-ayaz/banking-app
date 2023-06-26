import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Transactions.css";
import NewTransaction from "./NewTransaction";

const Transactions = ({ debitCredit }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState(0);
    const [debitLog, setDebitLog] = useState([]);
    const [creditLog, setCreditLog] = useState([]);
    const [lost, setLost] = useState(0);
    const [gain, setGain] = useState(0);
    // const [debitOrCredit, setDebitOrCredit] = useState("");

    const handleAdd = (event) => {
        event.preventDefault();
        setDesc(event.target.desc.value);
        console.log(desc);
        setAmount(event.target.amount.value);
        console.log(amount);
        if (debitCredit==="debit") {
            return debitLog.push(<NewTransaction desc={desc} amount={amount}/>);
        } else {
            return creditLog.push(<NewTransaction desc={desc} amount={amount}/>);
        }
    }

    const checkLog = () => {
        if (debitCredit==="debit"){
            debitLog.map(transaction => (
                transaction,
                setLost(lost + transaction.amount)
            ))
        } else {
            creditLog.map(transaction => (
                transaction,
                setGain(gain + transaction.amount)
            ))
        }
    }
    
    return (
        <div>
            <h3>Your Transactions</h3>
            <div>
                <form className="add">
                    <label for="desc">Description:</label>
                    <input type="text" id="desc" name="desc"/>
                    <label for="amount">Amount:</label>
                    <input type="number" id="amount" name="amount"/>
                    <input onClick={handleAdd} type="submit" class="btn-submit" value="Add Transaction"/>
                </form>
            </div>
            <div>
                <table className="tb">
                    <tr>
                        <td>Description</td>
                        <td>Amount</td>
                        <td>Date</td>
                    </tr>
                    {checkLog}
                </table>
            </div>
        </div>
    );
}

{/*                 <tr>
                        <td>Starbucks coffee purchase</td>
                        <td>$7.00</td>
                        <td>06/19/2023</td>
                    </tr> */}

                    // <tr>
                    //     <td>Stipend from work</td>
                    //     <td>$345</td>
                    //     <td>06/18/2023</td>
                    // </tr>

export default Transactions;