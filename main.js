import { Drop } from './Drop.js'
import { Character } from './Character.js'
import { collision } from './tools.js'

const canvas = document.getElementById('rain-animation')
const ctx = canvas.getContext('2d')

const bgColor = '0, 0, 0'

let pool = []

let animate = false

function onKeydownEvent (event) {
  if (event.key === 'Escape') {
    animate = false
  } else if (event.key === 'Enter' && !animate) {
    animate = true

    anime()
  }
}

function onResizeEvent (event) {
  pool = []

  init(canvas, ctx, pool, bgColor)
}

function init (canvas, ctx, pool) {
  document.onkeydown = onKeydownEvent
  window.onresize = onResizeEvent

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  for (let i = 0; i < 400; i++) {
    const drop = Drop.generate(canvas)
    const character = Character.generate(canvas)

    // if (collision(pool, drop.x, drop.y, drop.size)) {
    //   console.log('collide')
    //   i--
    //   continue
    // }

    pool.push(new Character(character))
    pool.push(new Drop(drop))
  }

  ctx.fillStyle = `rgb(${bgColor})`
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function anime () {
  if (!animate) {
    return
  }

  ctx.fillStyle = `rgba(${bgColor}, 0.4)`
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  pool.forEach(item => { item.update(ctx, canvas) })

  requestAnimationFrame(anime)
}

init(canvas, ctx, pool)

animate = true

anime()
