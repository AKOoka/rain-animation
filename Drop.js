import { Unit } from './Unit.js'

class Drop extends Unit {
  draw (ctx) {
    // draw drop
    const halfSize = this.size / 2

    ctx.beginPath()

    ctx.fillStyle = this.color

    ctx.moveTo(this.x, this.y)
    ctx.bezierCurveTo(this.x - halfSize, this.y + this.size, this.x + halfSize, this.y + this.size, this.x, this.y)

    ctx.fill()
  }

  // draw (ctx) {
  //   // draw some shape
  //   super.draw()
  //   const halfSize = this.size / 2

  //   ctx.beginPath()

  //   ctx.fillStyle = this.color

  //   ctx.moveTo(this.x, this.y)
  //   ctx.lineTo(this.x - halfSize, this.y + halfSize)
  //   ctx.quadraticCurveTo(this.x, this.y + this.size, this.x + halfSize, this.y + halfSize)
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

export { Drop }
