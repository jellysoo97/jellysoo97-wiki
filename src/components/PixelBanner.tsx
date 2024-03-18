'use client'

import { Post } from 'contentlayer/generated'
import { useEffect, useRef } from 'react'

import { cn } from '@/utils/cn'

type Props = {
  img: string
  pixelSize: number
  posts: Post[]
  bannerSize?: { width: number; height: number }
}

const PixelBanner = ({
  img,
  pixelSize,
  posts,
  bannerSize = { width: 300, height: 300 },
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const pickPixelColor = (x: number, y: number) => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      const pixel = ctx?.getImageData(x, y, 1, 1)
      const colorData = pixel?.data
      const [red, green, blue, alpha] = colorData || []

      return `rgb(${red} ${green} ${blue} / ${alpha / 255})`
    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      const backgroundImage = new Image()
      backgroundImage.src = img
      backgroundImage.onload = () => {
        ctx?.drawImage(
          backgroundImage,
          0,
          0,
          bannerSize.width,
          bannerSize.height
        )
        backgroundImage.style.display = 'none'
      }
    }
  }, [])

  return (
    <div
      className={cn('relative', `hidden md:block`)}
      style={{
        width: `${bannerSize.width}px`,
        height: `${bannerSize.height}px`,
      }}
    >
      <canvas
        ref={canvasRef}
        width={bannerSize.width}
        height={bannerSize.height}
      />

      <table className={cn('absolute top-0 left-0', 'w-full h-full')}>
        <tbody>
          {new Array(pixelSize).fill('').map((_, rowIndex) => (
            <tr key={rowIndex}>
              {new Array(pixelSize).fill('').map((_, colIndex) => {
                const isPostPixel =
                  rowIndex * pixelSize + colIndex < posts.length
                const pixelWidth = Math.floor(bannerSize.width / pixelSize)
                const x = colIndex * pixelWidth
                const y = rowIndex * pixelWidth

                return (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className={cn(
                      'relative',
                      isPostPixel
                        ? pickPixelColor(x, y)
                        : 'bg-black bg-opacity-80'
                    )}
                  />
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PixelBanner
