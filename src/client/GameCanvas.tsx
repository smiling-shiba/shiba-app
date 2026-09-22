import { useEffect, useRef } from 'react'
import { createGame } from './game/createGame.ts'

/**
 * Mounts Phaser into a container div and tears it down on unmount. This is the
 * one seam between React (menus, HUD, everything around the board) and Phaser
 * (the board itself) — see D-04. Pausing the game while a menu is open, so the
 * two don't fight for CPU or input, is a separate concern (SA-0014).
 */
export function GameCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const game = createGame(container)
    return () => game.destroy(true)
  }, [])

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
}
