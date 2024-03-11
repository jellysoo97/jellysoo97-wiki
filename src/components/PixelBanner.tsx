'use client'

import { useEffect, useRef } from 'react'

import { cn } from '@/utils/cn'

type Props = {
  img: string
  pixelSize: number
  postCount: number
}

const PixelBanner = ({ img, pixelSize, postCount }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctx = canvasRef.current?.getContext('2d')

  const pickColor = (x: number, y: number) => {
    const pixel = ctx?.getImageData(x, y, 1, 1)
    const data = pixel?.data
    const [red, green, blue, alpha] = data || []

    return `rgb(${red} ${green} ${blue} / ${alpha / 255})`
  }

  useEffect(() => {
    console.log(ctx)
    if (img && ctx) {
      const image = new Image()
      image.crossOrigin = 'anonymous'
      image.src = img

      ctx.drawImage(image, 0, 0)
      console.log(ctx)
      image.style.display = 'none'
    }
  }, [ctx])

  return (
    <div className="relative">
      <canvas ref={canvasRef} width={300} height={300} />

      <div
        className={cn(
          'absolute top-0 left-0',
          `grid grid-rows-[${pixelSize}] grid-cols-[${pixelSize}]`
        )}
      >
        {new Array(postCount).map((pixel, index) => (
          <div
            key={index}
            className={cn(
              `bg-[${pickColor(index, Math.floor(index / pixelSize))}]`
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default PixelBanner
