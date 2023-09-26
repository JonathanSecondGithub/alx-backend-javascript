function getCurrentYear() {
	  const date = new Date();
	  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
	const budget = {
		income,
		gdp,
		capita:capita
	}

	return budget;
}
