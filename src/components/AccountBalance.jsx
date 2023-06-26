import React from "react";
import Transactions from "./Transactions/Transactions";

const AccountBalance = ({ debits, credits }) => {
    console.log(Transactions.lost);
    const balance = (credits + Transactions.gain) - (debits + Transactions.lost);
    return (
        <div>
            <h3>Your Account Balance: ${balance}</h3>
        </div>
    );
}

export default AccountBalance;