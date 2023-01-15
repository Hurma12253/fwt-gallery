import React from 'react'
import Button from 'components/button'
import { ReactComponent as LogoIcon } from 'assets/svg/logo.svg'
import { ReactComponent as ThemeIcon } from 'assets/svg/theme-icon.svg'

const Header: React.FC = () => {
	return (
		<header className="header">
			<a className="header__logo" href="/">
				<LogoIcon className="header__logo-icon" />
			</a>
			<Button variant='icon'>
				<ThemeIcon />
			</Button>
		</header>
	)
}

export default Header
