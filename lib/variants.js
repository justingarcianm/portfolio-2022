const pageVariant = {
  out: {
    opacity: 0,
    y: '5vh'
  },
  in: {
    opacity: 1,
    y: 0
  }
}
const pageTransition = {
  duration: 1,
  ease: 'anticipate',
  type: 'tween'
}

export { pageVariant, pageTransition }
