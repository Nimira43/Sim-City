import * as THREE from 'three'

export function createScene() {
  console.log('Creating scene') // Log at the start of scene creation

  const gameWindow = document.getElementById('render-target')
  if (!gameWindow) {
    console.error('No element with ID "render-target" found') // Log if the element is not found
    return
  }
  
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x777777)
  
  const camera = new THREE.PerspectiveCamera(75, gameWindow.offsetWidth / gameWindow.offsetHeight, 0.1, 1000)
  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(gameWindow.offsetWidth, gameWindow.offsetHeight)
  gameWindow.appendChild(renderer.domElement)

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  function draw() {
    mesh.rotation.x += 0.01 // Add rotation for visual effect
    mesh.rotation.y += 0.01
    renderer.render(scene, camera)
  }

  function start() {
    console.log('Starting animation loop') // Log when starting the animation loop
    renderer.setAnimationLoop(draw)
  }
  
  function stop() {
    console.log('Stopping animation loop') // Log when stopping the animation loop
    renderer.setAnimationLoop(null)
  }

  return {
    start,
    stop
  }
}
