import { siteConfig } from '@/constants/config'
import { DateFormatTypeEnum, formatDate, today } from '@/utils/format-date'

const Footer = () => {
  return (
    <footer className="h-[var(--height-footer)] flex justify-center items-center">
      <span>
        Copyright © {formatDate(today, DateFormatTypeEnum.YearOnly)}{' '}
        {siteConfig.author.name}
      </span>
    </footer>
  )
}

export default Footer
