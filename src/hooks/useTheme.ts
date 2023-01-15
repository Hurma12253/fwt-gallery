import { useLayoutEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(
		(localStorage.getItem('theme') as Theme) || 'light'
	)

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	return [toggleTheme]
}
