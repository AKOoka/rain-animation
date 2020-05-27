import { IRenderer } from './IRenderer.js'

class RainRenderer extends IRenderer {
  update () {
    for (const drop of this.scene) {
      drop.y = (drop.y + drop.speed) % this.context.canvas.height
    }
  }

  draw () {
    for (const drop of this.scene) {
      // draw drop
      this.context.canvasCtx.beginPath()

      this.context.canvasCtx.fillStyle = drop.color

      this.context.canvasCtx.moveTo(drop.x, drop.y)
      this.context.canvasCtx.bezierCurveTo(
        drop.x - drop.halfSize, drop.y + drop.size,
        drop.x + drop.halfSize, drop.y + drop.size,
        drop.x, drop.y
      )

      this.context.canvasCtx.fill()
    }

    // draw (ctx) {
    //   // draw some shape
    //   super.draw()

    //   ctx.beginPath()

    //   ctx.fillStyle = this.color

    //   ctx.moveTo(this.x, this.y)
    //   ctx.lineTo(this.x - this.size / 2, this.y + this.size / 2)
    //   ctx.quadraticCurveTo(this.x, this.y + this.size, this.x + this.size / 2, this.y + this.size / 2)
    //   ctx.lineTo(this.x, this.y)

    //   ctx.fill()
    // }

    // draw (ctx) {
    //   // draw rectangle
    //   super.draw()
    //   ctx.beginPath()

    //   ctx.fillStyle = this.color

    //   ctx.fillRect(this.x - this.size / 2, this.y, this.size, this.size)
    // }
  }
}

export { RainRenderer }
