import { GameCanvas } from './GameCanvas.tsx'

// The board and battle render in Phaser (SA-0002); everything around it stays
// React's territory for menus, HUD and everything else (D-04).
function App() {
  return (
    <main>
      <h1>Smiling Shiba</h1>
      <div style={{ width: '100%', height: '400px' }}>
        <GameCanvas />
      </div>
    </main>
  )
}

export default App
