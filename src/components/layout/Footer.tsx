import { siteConfig } from '@/constants/config'
import { DateFormatTypeEnum, formatDate, today } from '@/utils/format-date'

const Footer = () => {
  return (
    <footer>
      <div className="w-full border-t border-neutral-400">
        <div className="wrapper flex justify-center items-center py-4 text-sm">
          Copyright © {formatDate(today, DateFormatTypeEnum.YearOnly)}{' '}
          {siteConfig.author.name} All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
