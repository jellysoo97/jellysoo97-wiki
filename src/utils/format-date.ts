import dayjs from 'dayjs'

export enum DateFormatTypeEnum {
  DateAndTime = 'YYYY-MM-DD HH:mm:ss',
  DateOnly = 'YYYY-MM-DD',
  DateOnlyWithDot = 'YYYY.MM.DD',
  TimeOnly = 'HH:mm:ss',
  YearOnly = 'YYYY',
  MonthAndDay = 'MM-DD',
  MonthAndDayWithDot = 'MM.DD',
}

export const today = dayjs().format()

export const formatDate = (
  inputDate: string | Date,
  type?: DateFormatTypeEnum
) => {
  const date = dayjs(inputDate)

  switch (type) {
    case DateFormatTypeEnum.DateAndTime:
      return date.format(DateFormatTypeEnum.DateAndTime)
    case DateFormatTypeEnum.DateOnly:
      return date.format(DateFormatTypeEnum.DateOnly)
    case DateFormatTypeEnum.DateOnlyWithDot:
      return date.format(DateFormatTypeEnum.DateOnlyWithDot)
    case DateFormatTypeEnum.TimeOnly:
      return date.format(DateFormatTypeEnum.TimeOnly)
    case DateFormatTypeEnum.YearOnly:
      return date.get('y')
    case DateFormatTypeEnum.MonthAndDay:
      return date.format(DateFormatTypeEnum.MonthAndDay)
    case DateFormatTypeEnum.MonthAndDayWithDot:
      return date.format(DateFormatTypeEnum.MonthAndDayWithDot)
    default:
      return date.format(DateFormatTypeEnum.DateOnly)
  }
}
