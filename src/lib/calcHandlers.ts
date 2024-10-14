import _ from "lodash";

const cpiUsingPrice = ({ price, competitorsPrice }: { price: number; competitorsPrice: number }): number => {
	return _.round((price / competitorsPrice) * 100, 2) || 0;
};

const marginUsingPrice = ({
	price,
	cost,
	salesTaxPercentage,
	expansesPercentage,
}: {
	price: number;
	cost: number;
	salesTaxPercentage: number;
	expansesPercentage: number;
}) => {
	const result = _.round(((price - price * ((salesTaxPercentage + expansesPercentage) / 100) - cost) / price) * 100, 2);
	const isInfinite = result === Infinity || result === -Infinity;
	const isNan = Number.isNaN(result);
	if (isInfinite || isNan) return 0;
	return result;
};

export default {
	cpiUsingPrice,
	marginUsingPrice,
};
