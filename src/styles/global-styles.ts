import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
${reset}

*,
*::before,
*::after {
	box-sizing: inherit;
}

html {
	box-sizing: border-box;
	font-size: 62.5%;

}

a {
	text-decoration: none;
	color: inherit;
}

`

export default GlobalStyles
