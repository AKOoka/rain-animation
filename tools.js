function randomInRange (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function inRange (x1, y1, size1, x2, y2, size2) {
  let collizionHor = false
  let collizionVer = false

  if (x1 <= x2 && x1 + size1 >= x2) {
    collizionHor = true
  } else if (x1 <= x2 + size2 && x1 + size1 >= x2 + size2) {
    collizionHor = true
  }

  if (y1 <= y2 && y1 + size1 >= y2) {
    collizionVer = true
  } else if (y1 <= y2 + size2 && y1 + size1 >= y2 + size2) {
    collizionVer = true
  }

  return collizionHor && collizionVer
}

function collision (pool, x, y, size) {
  for (const item of pool) {
    if (inRange(item.x - item.size / 2, item.y, item.size, x - size / 2, y, size)) {
      return true
    }
  }

  return false
}

export { randomInRange, collision }
