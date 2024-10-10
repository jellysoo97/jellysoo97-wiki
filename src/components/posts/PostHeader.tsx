import { IFrontmatter } from 'src/types'

import Title from '@/components/common/Title'
import { tagLabel } from '@/constants/index'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'

type Props = {
  frontmatter: IFrontmatter
}

const PostHeader = ({ frontmatter }: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center gap-x-1">
        <p className="mr-2 text-secondary text-size-small">
          {formatDate(frontmatter.date, DateFormatTypeEnum.DateOnlyWithDot)}
        </p>
      </div>

      <Title>
        [{tagLabel[frontmatter.tag]}] {frontmatter.title}
      </Title>
      <p className="text-secondary text-size-small">
        {frontmatter.description}
      </p>
    </div>
  )
}

export default PostHeader
