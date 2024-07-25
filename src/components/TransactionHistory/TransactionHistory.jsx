import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
return (
	<table>
		<thead>
			<tr>
				<th className={css.tableHead}>Type</th>
				<th className={css.tableHead}>Amount</th>
				<th className={css.tableHead}>Currency</th>
			</tr>
		</thead>
		<tbody>
			{items.map((item) => (
				<tr key={item.id}>
					<td>{item.type}</td>
					<td>{item.amount}</td>
					<td>{item.currency}</td>
				</tr>
			))}
		</tbody>
	</table>
);
};

export default TransactionHistory;

