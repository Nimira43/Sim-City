import { createScene } from './createScene.js'

window.onload = () => {
  console.log('Window loaded') // Log when the window is loaded
  window.scene = createScene()
  console.log('Scene created') // Log when the scene is created
  window.scene.start()
  console.log('Scene started') // Log when the scene starts
}

