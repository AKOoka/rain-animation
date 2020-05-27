import { randomInRange } from './tools.js'

class Unit {
  constructor ({ x, y, speed, size, color }) {
    this.x = x
    this.y = y
    this.speed = speed
    this.size = size
    this.color = color
  }

  draw (ctx) {}

  update (ctx, canvas) {
    this.y = (this.y + this.speed) % canvas.height

    this.draw(ctx)
  }

  static generate (canvas) {
    const x = randomInRange(0, canvas.width)
    const y = randomInRange(-25, canvas.height)
    const size = randomInRange(10, 25)
    const speed = randomInRange(1, 5)

    const red = randomInRange(0, 255)
    const green = randomInRange(0, 255)
    const blue = randomInRange(0, 255)

    const color = `rgb(${red}, ${green}, ${blue})`

    return { x, y, size, speed, color }
  }
}

export { Unit }
