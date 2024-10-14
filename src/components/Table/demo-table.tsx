import { InputCurrency } from "../form";
import { useDemoTable } from "./use-demo-table";

export const DemoTable = () => {
	const { data, handlePriceChange, handleSaveChangesOnBlur } = useDemoTable();
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Price</th>
						<th>CPI</th>
						<th>Margin</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row) => (
						<tr key={row.id}>
							<td>
								<InputCurrency
									data-column-type="price"
									value={row.price}
									onChangeValue={({ float }) => handlePriceChange(float)("price", row)}
									currency={{ precision: 2, decimalSeparator: ",", thousandSeparator: ".", allowEmpty: true }}
									selectOnFocus
									onBlur={() => handleSaveChangesOnBlur(row)}
								/>
							</td>
							<td>
								<InputCurrency
									data-column-type="cpi"
									value={row.cpi}
									onChangeValue={({ float }) => handlePriceChange(float)("cpi", row)}
									currency={{ precision: 1, decimalSeparator: ",", thousandSeparator: ".", allowEmpty: true }}
									selectOnFocus
									onBlur={() => handleSaveChangesOnBlur(row)}
								/>
							</td>
							<td>
								<InputCurrency
									data-column-type="margin"
									value={row.margin}
									onChangeValue={({ float }) => handlePriceChange(float)("margin", row)}
									currency={{ precision: 1, decimalSeparator: ",", thousandSeparator: ".", allowEmpty: true }}
									selectOnFocus
									onBlur={() => handleSaveChangesOnBlur(row)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
