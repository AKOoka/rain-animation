import { App } from './App.js'
import { Unit } from './Unit.js'
import { Character } from './Character.js'
import { RainRenderer } from './RainRenderer.js'
import { CharacterRenderer } from './CharacterRenderer.js'

function generateScene (width, height) {
  const dropsCount = 400
  const characterCount = 100

  const dropsScene = []
  const characterScene = []

  for (let i = 0; i < dropsCount; i++) {
    const drop = Unit.generate(width, height)
    // const character = Character.generate(canvas)

    // if (collision(pool, drop.x, drop.y, drop.size)) {
    //   console.log('collide')
    //   i--
    //   continue
    // }

    // pool.push(new Character(character))
    dropsScene.push(new Unit(drop))
  }

  for (let i = 0; i < characterCount; i++) {
    const character = Character.generate(width, height)

    // if (collision(pool, drop.x, drop.y, drop.size)) {
    //   console.log('collide')
    //   i--
    //   continue
    // }

    characterScene.push(new Character(character))
  }

  return { dropsScene, characterScene }
}

class MyApp extends App {
  constructor () {
    super('rain-animation')
  }

  init () {
    const dropRenderer = new RainRenderer()
    const characterRenderer = new CharacterRenderer()
    const { dropsScene, characterScene } = generateScene(this.context.canvas.width, this.context.canvas.height)

    dropRenderer.setScene(dropsScene)
    characterRenderer.setScene(characterScene)

    this.addRenderer(dropRenderer)
    this.addRenderer(characterRenderer)

    this.setKeyDownEvent(event => {
      if (event.key === 'Escape') {
        this.animate = false
      } else if (event.key === 'Enter' && !this.animate) {
        this.animate = true
      }
    })

    this.setResizeEvent(event => {
      this.context.canvas.width = window.innerWidth
      this.context.canvas.height = window.innerHeight

      const { dropsScene, characterScene } = generateScene(this.context.canvas.width, this.context.canvas.height)

      dropRenderer.setScene(dropsScene)
      characterRenderer.setScene(characterScene)
    })
  }
}

export { MyApp }
