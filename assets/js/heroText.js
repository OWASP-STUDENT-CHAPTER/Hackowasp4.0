document
  .querySelector('h7')
  .addEventListener('mousemove', ({target, clientX, clientY}) => {
    const {x,y} = getQuadrants(target, clientX, clientY)

    target.attributeStyleMap.set('--x-quadrant', `${x}`)
    target.attributeStyleMap.set('--y-quadrant', `${y}`)
  })

const getQuadrants = (element, clientX, clientY) => {
  const { x, y, width, height } = element.getBoundingClientRect()
  
  const quadX = clientX - (x + 0.5 * width)
  const quadY = clientY - (y + 0.5 * height)
  
  return {
    x: quadX >= 0 ? 1 : -1, 
    y: quadY >= 0 ? 1 : -1,
  }
}