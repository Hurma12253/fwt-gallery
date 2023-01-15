import React from 'react'
import Button from 'components/button'
import { ReactComponent as LogoIcon } from 'assets/svg/logo.svg'
import { ReactComponent as ThemeIcon } from 'assets/svg/theme-icon.svg'
import { useTheme } from 'hooks/useTheme'

const Header: React.FC = () => {
	const [setTheme] = useTheme()

	const onThemeChangeHandler = () => {
		setTheme()
	}

	return (
		<header className="header">
			<a className="header__logo" href="/">
				<LogoIcon className="header__logo-icon" />
			</a>
			<Button variant="icon" onClick={onThemeChangeHandler}>
				<ThemeIcon className="header__theme-icon" />
			</Button>
		</header>
	)
}

export default Header
