export const TransactionHistory = ({ items }) => {

    return (
        <table className="transaction-history">
              <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
             <tbody>
               {items.map(operation => (

    <tr key={operation.id}>
      <td>{operation.type}</td>
      <td>{operation.amount}</td>
      <td>{operation.currency}</td>
    </tr>

               ))}  
                </tbody>
         </table>
   
    )

}