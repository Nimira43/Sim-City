import * as THREE from 'three'

export function createCamera(gameWindow) {
  const DEG2RAD = Math.PI / 180
  const LEFT_MOUSE_BUTTON = 0
  const MIDDLE_MOUSE_BUTTON = 1
  const RIGHT_MOUSE_BUTTON = 2
  const MIN_CAMERA_RADIUS = 2
  const MAX_CAMERA_RADIUS = 10
  const Y_AXIS = new THREE.Vector3(0, 1, 0)
 
  const camera = new THREE.PerspectiveCamera(
    75,
    gameWindow.offsetWidth / gameWindow.offsetHeight,
    0.1,
    100
  )
  let cameraRadius = 4
  let cameraAzimuth = 0
  let cameraElevation = 0
  let isLeftMouseDown = false
  let isMiddleMouseDown = false
  let isRightMouseDown = false
  let prevMouseX = 0
  let prevMouseY = 0
  updateCameraPosition()

  function onMouseDown(event) {
    if (event.button === LEFT_MOUSE_BUTTON) {
      isLeftMouseDown = true
    }
    if (event.button === MIDDLE_MOUSE_BUTTON) {
      isMiddleMouseDown = true
    }
    if (event.button === RIGHT_MOUSE_BUTTON) {
      isRightMouseDown = true
    }
  }

  function onMouseUp(event) {
    if (event.button === LEFT_MOUSE_BUTTON) {
      isLeftMouseDown = false
    }
    if (event.button === MIDDLE_MOUSE_BUTTON) {
      isMiddleMouseDown = false
    }
    if (event.button === RIGHT_MOUSE_BUTTON) {
      isRightMouseDown = false
    }
  }

  function onMouseMove(event) {
    const deltaX = (event.clientX - prevMouseX)
    const deltaY = (event.clientY - prevMouseY)

    if (isLeftMouseDown) {
      cameraAzimuth += -(deltaX * 0.5)
      cameraElevation += (deltaY * 0.5)
      cameraElevation = Math.min(90, Math.max(0, cameraElevation))
      updateCameraPosition()
    }
    
    if (isMiddleMouseDown) {
      const forward = new THREE.Vector3(0, 0, 1).applyAxisAngle(Y_AXIS, cameraAzimuth * DEG2RAD) 
      const left = new THREE.Vector3(1, 0, 0).applyAxisAngle(Y_AXIS, cameraAzimuth * DEG2RAD) 
      updateCameraPosition()
    }
    
    if (isRightMouseDown) {
      cameraRadius += deltaY * 0.02
      cameraElevation = Math.min(MAX_CAMERA_RADIUS, Math.max(MIN_CAMERA_RADIUS, cameraElevation))
      updateCameraPosition()
    }
    prevMouseX = event.clientX
    prevMouseY = event.clientY
  }

  function updateCameraPosition() {
    camera.position.x = cameraRadius * Math.sin(cameraAzimuth * DEG2RAD) * Math.cos(cameraElevation * DEG2RAD)
    
    camera.position.y = cameraRadius * Math.sin(cameraElevation * DEG2RAD)
    
    camera.position.z = cameraRadius * Math.cos(cameraAzimuth * DEG2RAD) * Math.cos(cameraElevation * DEG2RAD)

    camera.lookAt(0, 0, 0)
    camera.updateMatrix()
  }

  return {
    camera,
    onMouseDown,
    onMouseUp,
    onMouseMove
  }
}