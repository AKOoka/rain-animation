class IRenderer {
  constructor () {
    this.context = {}
    this.scene = []
  }

  setContext ({ canvas, canvasCtx }) {
    this.context = {
      canvas,
      canvasCtx
    }
  }

  setScene (scene) {
    this.scene = scene
  }

  update () {}

  draw () {}
}

export { IRenderer }
