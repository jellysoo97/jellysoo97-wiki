'use client'

import { Post } from 'contentlayer/generated'
import Link from 'next/link'
import { MouseEvent, useEffect, useRef, useState } from 'react'

import { allSortedPosts } from '@/constants/posts'
import { cn } from '@/utils/cn'
import { convertRgbToHex } from '@/utils/convert-rgb-to-hex'
import { convertSize } from '@/utils/convert-size'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'

import Tooltip from './common/Tooltip'

type Props = {
  img: string
  pixelSize: number
  posts: Post[]
  bannerSize?: { width: number; height: number }
}

const PIXEL_BORDER_WIDTH = 0.3

const PixelBanner = ({
  img,
  pixelSize,
  posts,
  bannerSize = { width: 300, height: 300 },
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false)
  const pixelWidth = bannerSize.width / pixelSize

  const handleMouseOver = (
    e: MouseEvent<HTMLDivElement>,
    rowIndex: number,
    colIndex: number
  ) => {
    if (canvasRef.current) {
      const x = (colIndex + 1) * (pixelWidth - PIXEL_BORDER_WIDTH)
      const y = (rowIndex + 1) * (pixelWidth - PIXEL_BORDER_WIDTH)
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

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
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
      className="relative hidden md:block"
      style={{
        width: convertSize(bannerSize.width),
        height: convertSize(bannerSize.height),
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
                  const postIndex = rowIndex * pixelSize + colIndex
                  const isPostPixel = postIndex < posts.length
                  const post = allSortedPosts[postIndex]

                  return (
                    <td key={`${rowIndex}-${colIndex}`} className="p-0">
                      {/* post pixel */}
                      {isPostPixel && (
                        <Tooltip
                          content={
                            <p>
                              {formatDate(
                                post.date,
                                DateFormatTypeEnum.DateOnlyWithDot
                              )}{' '}
                              |{' '}
                              <strong className="font-serif-bold">
                                {post.title}
                              </strong>
                            </p>
                          }
                        >
                          <div
                            className="w-full h-full hover:scale-[1.7]"
                            onMouseOver={(e) =>
                              handleMouseOver(e, rowIndex, colIndex)
                            }
                            onMouseLeave={(e) => handleMouseLeave(e)}
                          >
                            <Link
                              href={post.url}
                              className="w-full h-full block"
                            />
                          </div>
                        </Tooltip>
                      )}
                      {/* dark pixel */}
                      {!isPostPixel && (
                        <div className="w-full h-full bg-black bg-opacity-80" />
                      )}
                    </td>
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
