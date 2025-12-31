import { Button } from '@components'

export function Playground() {
  return (
    <div style={{ padding: '24px' }}>
      <h2>Axiom UI Playground</h2>

      <Button>Primary Button</Button>

      <Button variant="secondary" size="lg">
        Secondary Button
      </Button>

      <Button variant="ghost" size="sm">
        Ghost Button
      </Button>
    </div>
  )
}
