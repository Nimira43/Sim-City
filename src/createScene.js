import * as THREE from 'three'

export function createScene() {
  const gameWindow = document.getElementById('render-target')
   
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x777777)
  
  const camera = new THREE.PerspectiveCamera(75, gameWindow.offsetWidth / gameWindow.offsetHeight, 0.1, 1000)
  
  let cameraRadius = 20
  let cameraAzimuth = 0
  let cameraElevation = 0
  let isMouseDown = false
  let prevMouseX = 0
  let prevMouseY = 0


  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(gameWindow.offsetWidth, gameWindow.offsetHeight)
  gameWindow.appendChild(renderer.domElement)

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  function draw() {
    mesh.rotation.x += 0.01 
    mesh.rotation.y += 0.01
    renderer.render(scene, camera)
  }

  function start() {
    renderer.setAnimationLoop(draw)
  }
  
  function stop() {
    renderer.setAnimationLoop(null)
  }

  function onMouseDown() {
    console.log('mousedown')
    isMouseDown = true
  }

  function onMouseUp() {
    console.log('mouseup')
    isMouseDown = false
  }
  
  function onMouseMove(event) {
    console.log('mousemove')
    if (isMouseDown) {
      cameraAzimuth += -((-event.clientX - prevMouseX) * 0.5)
      cameraElevation += ((event.clientY - prevMouseY) * 0.5)
      cameraElevation = Math.min(90, Max.max(0, cameraElevation))
    }
  }

  return {
    start,
    stop,
    onMouseDown,
    onMouseUp,
    onMouseMove
  }
}
