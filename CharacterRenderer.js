import { IRenderer } from './IRenderer.js'

class CharacterRenderer extends IRenderer {
  update () {
    for (const character of this.scene) {
      character.y = (character.y + character.speed) % this.context.canvas.height
    }
  }

  draw () {
    for (const character of this.scene) {
      this.context.canvasCtx.fillStyle = character.color

      this.context.canvasCtx.font = `${character.fontStyle} ${character.size}px ${character.fontFamily}`

      this.context.canvasCtx.fillText(character.character, character.x, character.y)
    }
  }
}

export { CharacterRenderer }
