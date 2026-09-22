import Phaser from 'phaser'

/**
 * Placeholder board scene (SA-0002). Nothing here is the real board yet —
 * just proof that Phaser is wired up and rendering inside the React shell.
 * The real board/battle rules come later, from a loaded policy (SA-0013+),
 * never hardcoded here.
 */
export class BoardScene extends Phaser.Scene {
  constructor() {
    super('board')
  }

  create(): void {
    const { width, height } = this.scale
    this.add
      .text(width / 2, height / 2, 'Board placeholder', {
        fontFamily: 'system-ui, sans-serif',
        fontSize: '24px',
        color: '#e5e4e7',
      })
      .setOrigin(0.5)
  }
}
