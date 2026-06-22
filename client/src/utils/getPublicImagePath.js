const getPublicImagePath = (image) => {
  if (!image || typeof image !== 'string') {
    return null
  }

  const trimmed = image.trim()

  if (!trimmed) {
    return null
  }

  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`
}

export default getPublicImagePath
