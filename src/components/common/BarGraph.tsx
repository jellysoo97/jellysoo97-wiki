import { CSSProperties } from 'react'

import { cn } from '@/utils/cn'

import CircleIcon from '../icons/CircleIcon'

export type BarGraphData = {
  item: string
  percentage: number
  color: string
}

type Props = {
  data: BarGraphData[]
  width?: CSSProperties['width']
  height?: CSSProperties['height']
}

const BarGraph = ({ data, width = 'w-full', height = 'h-2' }: Props) => {
  const sortedData = data.sort((a, b) => b.percentage - a.percentage)

  return (
    <div className="flex flex-col gap-y-3">
      <div className={cn(width, height, 'flex', 'rounded-lg overflow-hidden')}>
        {sortedData.map((data, index) => (
          <div
            key={data.item}
            className={cn(
              'h-full',
              index < sortedData.length - 1 &&
                'border-r-2 border-r-neutral-200 dark:border-r-neutral-800'
            )}
            style={{
              width: `${data.percentage}%`,
              backgroundColor: data.color,
            }}
          />
        ))}
      </div>

      <ul className="flex flex-wrap items-center gap-2">
        {sortedData.map((data) => (
          <li key={data.item} className="flex items-center">
            <CircleIcon
              className="w-3 h-3 mr-1 stroke-neutral-300 dark:stroke-neutral-400"
              fill={data.color}
            />
            <span className="font-serif-bold text-size-small mr-1">
              {data.item}
            </span>
            <span className="text-secondary text-size-small">
              {data.percentage.toFixed(1)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BarGraph
