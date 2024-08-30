import { IMetadata } from 'src/types'

import Title from '@/components/common/Title'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'

type Props = {
  metadata: IMetadata
}

const PostHeader = ({ metadata }: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center gap-x-1">
        <p className="mr-2 text-secondary text-size-small">
          {formatDate(metadata.date, DateFormatTypeEnum.DateOnlyWithDot)}
        </p>
      </div>

      <Title>{metadata.title}</Title>
      <p className="text-secondary text-size-small">{metadata.description}</p>
    </div>
  )
}

export default PostHeader
