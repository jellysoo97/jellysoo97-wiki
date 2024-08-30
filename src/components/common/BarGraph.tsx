import { CSSProperties } from 'react'

import { cn } from '@/utils/cn'

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
  const sortedData = data
    .filter((data) => data.percentage > 0)
    .sort((a, b) => b.percentage - a.percentage)

  return (
    <div className="flex flex-col gap-y-3">
      <div className={cn(width, height, 'flex', 'overflow-hidden rounded-lg')}>
        {sortedData.map((data, index) => (
          <div
            key={data.item}
            className={cn(
              'h-full',
              index < sortedData.length - 1 &&
                data.percentage > 0 &&
                data.percentage < 100 &&
                'border-r-2 border-r-neutral-200 dark:border-r-neutral-800'
            )}
            style={{
              width: `${data.percentage}%`,
              backgroundColor: data.color,
            }}
          />
        ))}
      </div>

      <ul className="flex flex-wrap items-center gap-3">
        {sortedData.map((data) => (
          <li key={data.item} className="flex items-center">
            <div
              className={cn('h-3 w-3 rounded-full', 'mr-1')}
              style={{ backgroundColor: data.color }}
            />
            <span className="mr-1 text-size-small">{data.item}</span>
            <span className="text-xs text-secondary">
              {data.percentage.toFixed(1)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BarGraph
