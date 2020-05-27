class App {
  constructor (canvasId) {
    const canvas = document.getElementById(canvasId)

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    this.context = {
      canvas,
      canvasCtx: canvas.getContext('2d')
    }

    this.renderers = []

    this.animate = true
  }

  init () {}

  setKeyDownEvent (callback) {
    document.onkeydown = callback
  }

  setResizeEvent (callback) {
    window.onresize = callback
  }

  addRenderer (renderer) {
    renderer.setContext(this.context)

    this.renderers.push(renderer)
  }

  run () {
    this.init()

    const anime = () => {
      if (this.animate) {
        this.context.canvasCtx.fillStyle = 'rgba(0, 0, 0, 0.4)'
        this.context.canvasCtx.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height)

        for (const renderer of this.renderers) {
          renderer.update()
          renderer.draw()
        }
      }

      requestAnimationFrame(anime)
    }

    anime()
  }
}

export { App }
