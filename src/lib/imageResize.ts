import { IMAGE_QUALITY, MAX_IMAGE_DIM } from './config'

export async function resizeImage(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file)
  try {
    const ratio = Math.min(
      1,
      MAX_IMAGE_DIM / Math.max(bitmap.width, bitmap.height),
    )
    const w = Math.round(bitmap.width * ratio)
    const h = Math.round(bitmap.height * ratio)

    if (typeof OffscreenCanvas !== 'undefined') {
      const canvas = new OffscreenCanvas(w, h)
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(bitmap, 0, 0, w, h)
      return canvas.convertToBlob({
        type: 'image/jpeg',
        quality: IMAGE_QUALITY,
      })
    }

    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')!
    ctx.drawImage(bitmap, 0, 0, w, h)
    return await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (b) => (b ? resolve(b) : reject(new Error('canvas toBlob 실패'))),
        'image/jpeg',
        IMAGE_QUALITY,
      )
    })
  } finally {
    bitmap.close()
  }
}
