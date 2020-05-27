import { randomInRange } from './tools.js'

class Unit {
  constructor ({ x, y, speed, size, color }) {
    this.x = x
    this.y = y
    this.speed = speed
    this.size = size
    this.halfSize = size / 2
    this.color = color
  }

  static generate (width, height) {
    const x = randomInRange(0, width)
    const y = randomInRange(-25, height)
    const size = randomInRange(10, 25)
    const speed = randomInRange(2, 5)

    const red = randomInRange(0, 255)
    const green = randomInRange(0, 255)
    const blue = randomInRange(0, 255)

    const color = `rgb(${red}, ${green}, ${blue})`

    return { x, y, size, speed, color }
  }
}

export { Unit }
