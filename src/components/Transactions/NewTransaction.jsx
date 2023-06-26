import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const NewTransaction = ({ desc, amount }) => {
    return (
        <div>
            <tr>
                <td>{desc}</td>
                <td>{amount}</td>
                <td>{new Date()}</td>
            </tr>
        </div>
    );
}

export default NewTransaction;