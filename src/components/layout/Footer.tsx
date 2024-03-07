import { siteConfig } from '@/constants/config'
import { DateFormatTypeEnum, formatDate, today } from '@/utils/format-date'

import Divider from '../common/Divider'

const Footer = () => {
  return (
    <footer className="layout-container">
      <Divider className="mt-8" />

      <div className="flex justify-center items-center py-4">
        <span>
          Copyright © {formatDate(today, DateFormatTypeEnum.YearOnly)}{' '}
          {siteConfig.author.name}
        </span>
      </div>
    </footer>
  )
}

export default Footer
