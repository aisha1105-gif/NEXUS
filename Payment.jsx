import React, { useState } from "react";

const Payment = () => {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([]);

  const handleTransaction = (type) => {
    const amount = 100;

    const newTransaction = {
      id: Date.now(),
      type,
      amount,
    };

    setTransactions([...transactions, newTransaction]);

    if (type === "Deposit") setBalance(balance + amount);
    if (type === "Withdraw") setBalance(balance - amount);
  };

  return (
    <div className="p-4">
      <h2>Wallet</h2>
      <p>Balance: ${balance}</p>

      <button onClick={() => handleTransaction("Deposit")}>Deposit</button>
      <button onClick={() => handleTransaction("Withdraw")}>Withdraw</button>

      <h3>Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.type} - ${t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payment;
