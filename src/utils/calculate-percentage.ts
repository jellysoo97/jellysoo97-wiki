type Props = {
  value: number
  total: number
  toFixed?: number
}

export const calculatePercentage = ({ value, total, toFixed = 1 }: Props) => {
  return Number(((value / total) * 100).toFixed(toFixed))
}
