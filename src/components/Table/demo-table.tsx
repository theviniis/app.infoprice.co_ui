import { IMaskCurrencyInput, InputCurrency, ReactCurrencyInputField, ReactNumberFormat } from "../form";
import { useDemoTable } from "./use-demo-table";

const props = {
	selectOnFocus: true,
	precision: 2,
	thousandSeparator: ".",
	decimalSeparator: ",",
	allowEmpty: false,
};

export const DemoTable = () => {
	const { data, handlePriceChange } = useDemoTable();
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>InfoInput</th>
						<th>ReactNumberFormat</th>
						<th>ReactCurrencyInputField</th>
						<th>IMaskCurrencyInput</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row) => (
						<tr key={row.id}>
							<td>
								<InputCurrency
									data-column-type="info-input-currency"
									value={row["info-input-currency"]}
									onChangeValue={(float) => handlePriceChange(float)("info-input-currency", row)}
									{...props}
								/>
							</td>
							<td>
								<ReactNumberFormat
									data-column-type="react-number-format"
									value={row["react-number-format"]}
									onChangeValue={(float) => handlePriceChange(float)("react-number-format", row)}
									{...props}
								/>
							</td>
							<td>
								<ReactCurrencyInputField
									data-column-type="react-currency-input-field"
									value={row["react-currency-input-field"]}
									onChangeValue={(float) => handlePriceChange(float)("react-currency-input-field", row)}
									{...props}
								/>
							</td>
							<td>
								<IMaskCurrencyInput
									data-column-type="imask-currency-input"
									value={row["imask-currency-input"]}
									onChangeValue={(float) => handlePriceChange(float)("imask-currency-input", row)}
									{...props}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
