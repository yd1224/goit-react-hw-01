import css from './TransactionHistory.module.css'
export const TransactionHistory = ({ items }) => {

    return (
        <table className={css.transactionHistory}>
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
      <td className={css.text}>{operation.type}</td>
      <td className={css.text}>{operation.amount}</td>
      <td className={css.text}>{operation.currency}</td>
    </tr>

               ))}  
                </tbody>
         </table>
   
    )

}