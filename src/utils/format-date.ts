import { format } from 'date-fns'

export enum DateFormatTypeEnum {
  DateAndTime = 'yyyy-MM-dd HH:mm:ss',
  DateOnly = 'yyyy-MM-dd',
  DateOnlyWithDot = 'yyyy.MM.dd',
  TimeOnly = 'HH:mm:ss',
  YearOnly = 'yyyy',
  MonthAndDay = 'MM-dd',
  MonthAndDayWithDot = 'MM.dd',
}

export const today = new Date()

export const formatDate = (
  inputDate: string | Date,
  type: DateFormatTypeEnum
) => {
  const date = new Date(inputDate)

  switch (type) {
    case DateFormatTypeEnum.YearOnly:
      return date.getFullYear()
    default:
      return format(date, type)
  }
}
