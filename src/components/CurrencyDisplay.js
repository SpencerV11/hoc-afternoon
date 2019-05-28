import React from 'react'

const CurrencyDisplay = (props) => (
	<p>
		US Dollar ${props.amount} - {props.currency.name}{' '}
		{props.currency.symbol}
		{(props.amount * props.currency.rate)}
	</p>
)

export default CurrencyDisplay