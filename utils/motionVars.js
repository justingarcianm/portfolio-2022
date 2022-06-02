export const pageVariant = {
  out: {
    opacity: 0,
    y: '5vh'
  },
  in: {
    opacity: 1,
    y: 0
  }
}

export const listingVariant = {
  out: {
    opacity: 0,
    x: '-100vw'
  },
  in: {
    opacity: 1,
    x: 0
  }
}

export const pageTransition = {
  duration: 1,
  ease: 'anticipate',
  type: 'tween'
}

export const delayAmt = index => 0.5 + index * 0.3
