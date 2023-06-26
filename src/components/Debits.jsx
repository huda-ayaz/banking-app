import React, { useEffect, useState } from "react";
import App from "../App";
import "./Transactions.css"

const Debits = ({ accountBalance, debitAdd, debitLog }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);

  const handleAdd = (event) => {
    event.preventDefault();
    debitAdd({desc, amount});
    setDesc("");
    setAmount(0);
}
  return (
    <div>
        <h2>Debits</h2>
        <div>
            <h3>Your Account Balance: ${accountBalance}</h3>
        </div>
        <div>
            <div>
                <form className="add">
                    <label for="desc">Description:</label>
                    <input type="text" id="desc" name="desc" value={desc} onChange={(event) => setDesc(event.target.value)}/>
                    <label for="amount">Amount:</label>
                    <input type="number" id="amount" name="amount" value={amount} onChange={(event) => setAmount(event.target.value)}/>
                    <input onClick={handleAdd} type="submit" class="btn-submit" value="Add Debit"/>
                </form>
            </div>
            <div>
                <table className="tb">
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                    {debitLog.map((item) => (
                    <tr>
                        <td>{item.desc}</td>
                        <td>{item.amount}</td>
                        <td>{new Date().toLocaleDateString()}</td>
                    </tr>
                    ))}
                </table>
            </div>
        </div>
    </div>
  );
}

export default Debits;