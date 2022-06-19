import { css } from 'styled-components'

export const setColor = {
  primaryColor: "#234515",
  secondaryColor: "#575859",
  footerColor: "#8c8e91",
  iconColor: "#2C6415",
};

// export const setFont = {
// 	main: "font-family: 'Ubuntu', sans-serif;",
// 	slanted: "font-family: 'Ubuntu:ital', sans-serif;",
// }

export const setRem = (number = 16) => {
	return `${number / 16}rem`
}
