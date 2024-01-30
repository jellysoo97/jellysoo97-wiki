import dayjs from 'dayjs'

export enum DateFormatTypeEnum {
  DateAndTime = 'yyyy-MM-dd HH:mm:ss',
  DateOnly = 'yyyy-MM-dd',
  TimeOnly = 'HH:mm:ss',
  YearOnly = 'yyyy',
  MonthAndDay = 'MM-dd',
}

export const today = dayjs().format()

export const formatDate = (
  inputDate: string | Date,
  type?: DateFormatTypeEnum
) => {
  const date = dayjs(inputDate)

  switch (type) {
    case DateFormatTypeEnum.DateAndTime:
      return date.format('yyyy-MM-dd HH:mm:ss')
    case DateFormatTypeEnum.DateOnly:
      return date.format('yyyy-MM-dd')
    case DateFormatTypeEnum.TimeOnly:
      return date.format('HH:mm:ss')
    case DateFormatTypeEnum.YearOnly:
      return date.get('y')
    case DateFormatTypeEnum.MonthAndDay:
      return date.format('MM-dd')
  }
}
