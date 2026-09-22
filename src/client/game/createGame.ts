import Phaser from 'phaser'
import { BoardScene } from './BoardScene.ts'

/** Creates the Phaser game inside `parent`. Caller owns the lifetime: call `game.destroy(true)` to tear it down. */
export function createGame(parent: HTMLElement): Phaser.Game {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent,
    backgroundColor: '#1b1a1f',
    scale: {
      mode: Phaser.Scale.RESIZE,
      width: parent.clientWidth,
      height: parent.clientHeight,
    },
    scene: [BoardScene],
  })
}
