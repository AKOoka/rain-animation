import { Unit } from './Unit.js'
import { randomInRange } from './tools.js'

class Character extends Unit {
  constructor ({ character, fontStyle, fontFamily, x, y, speed, size, color }) {
    super({ x, y, speed, size, color })

    this.character = character
    this.fontStyle = fontStyle
    this.fontFamily = fontFamily
  }

  draw (ctx) {
    ctx.fillStyle = this.color

    ctx.font = `${this.fontStyle} ${this.size}px ${this.fontFamily}`

    ctx.fillText(this.character, this.x, this.y)
  }

  static generate (canvas) {
    const characterPool = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÄÅÆÇÈËÌÏÐÑÒÕÖ×ØÙÜÝÞßàäåæçèëìïðñòö÷øùüýþÿАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя'

    const unit = super.generate(canvas)

    unit.character = characterPool[randomInRange(0, characterPool.length - 1)]
    unit.fontStyle = 'normal'
    unit.fontFamily = 'sans-serif'

    return unit
  }
}

export { Character }
