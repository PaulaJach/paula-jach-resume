import { css } from 'styled-components'

export const setColor = {
	primaryColor: 'black',
	secondaryColor: 'blue',
}

export const setFont = {
	main: "font-family: 'Ubuntu', sans-serif;",
	slanted: "font-family: 'Ubuntu:ital', sans-serif;",
}

export const setRem = (number = 16) => {
	return `${number / 16}rem`
}
