import { siteConfig } from '@/constants/config'
import { DateFormatTypeEnum, formatDate, today } from '@/utils/format-date'

const Footer = () => {
  return (
    <footer>
      <div className="w-full py-4">
        <div className="layout-container flex justify-center items-center text-sm">
          Copyright © {formatDate(today, DateFormatTypeEnum.YearOnly)}{' '}
          {siteConfig.author.name}
        </div>
      </div>
    </footer>
  )
}

export default Footer
