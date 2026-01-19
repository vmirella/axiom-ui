import { useState } from 'react'
import { Button } from '@components/button/Button'

export function Playground() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <div style={{ padding: 24 }}>
      <Button onClick={toggleTheme}>Toggle {theme === 'light' ? 'Dark' : 'Light'}</Button>

      <br />
      <br />

      <Button variant="primary" size="md">
        Primary Button
      </Button>
    </div>
  )
}
