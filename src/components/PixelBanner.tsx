'use client'

import { Post } from 'contentlayer/generated'
import { MouseEvent, useEffect, useRef, useState } from 'react'

import { cn } from '@/utils/cn'
import { convertRgbToHex } from '@/utils/convert-rgb-to-hex'

type Props = {
  img: string
  pixelSize: number
  posts: Post[]
  bannerSize?: { width: number; height: number }
}

const BORDER_WIDTH = 0.3

const PixelBanner = ({
  img,
  pixelSize,
  posts,
  bannerSize = { width: 300, height: 300 },
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)
  const pixelWidth = Math.floor(bannerSize.width / pixelSize)

  const changePixelBgColor = (
    e: MouseEvent<HTMLTableCellElement>,
    x: number,
    y: number
  ) => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      const pixel = ctx?.getImageData(x, y, 1, 1)
      const colorData = pixel?.data
      const [red, green, blue] = colorData || []

      e.currentTarget.style.backgroundColor = convertRgbToHex({
        red,
        green,
        blue,
      })
    }
  }

  const revertPixelBgColor = (e: MouseEvent<HTMLTableCellElement>) => {
    e.currentTarget.style.backgroundColor = 'transparent'
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
        setIsImageLoaded(true)
      }
    }
  }, [])

  return (
    <div
      className="relative"
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

      {isImageLoaded && (
        <table className={cn('absolute top-0 left-0', 'w-full h-full')}>
          <tbody>
            {new Array(pixelSize).fill('').map((_, rowIndex) => (
              <tr key={rowIndex}>
                {new Array(pixelSize).fill('').map((_, colIndex) => {
                  const isPostPixel =
                    rowIndex * pixelSize + colIndex < posts.length
                  const x = (colIndex + 1) * (pixelWidth - BORDER_WIDTH)
                  const y = (rowIndex + 1) * (pixelWidth - BORDER_WIDTH)

                  return (
                    <td
                      key={`${rowIndex}-${colIndex}`}
                      className={cn(
                        'relative',
                        isPostPixel
                          ? `bg-transparent hover:scale-150 cursor-pointer`
                          : `bg-black bg-opacity-80`
                      )}
                      onMouseOver={(e) =>
                        isPostPixel && changePixelBgColor(e, x, y)
                      }
                      onMouseLeave={(e) => isPostPixel && revertPixelBgColor(e)}
                    />
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default PixelBanner
