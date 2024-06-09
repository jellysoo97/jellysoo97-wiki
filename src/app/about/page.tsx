'use client'

import { useState } from 'react'

import Divider from '@/components/common/Divider'
import Title from '@/components/common/Title'
import Tooltip from '@/components/common/Tooltip'
import { siteConfig } from '@/constants/config'
import { useTimeOut } from '@/hooks/use-time-out'

const COPIED_TOOLTIP_CONTENT = 'Copied!'

const AboutPage = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  useTimeOut(isCopied, 2000, () => setIsCopied(false))

  const handleCopy = () => {
    setIsCopied((prev) => !prev)
  }

  return (
    <div className="w-full flex flex-col gap-y-8">
      <section className="flex flex-col gap-y-2">
        <Title>박소연</Title>
        <p className="text-secondary">Web Frontend Developer</p>

        <Divider />
      </section>

      <section className="flex flex-col gap-y-2">
        <div className="flex gap-x-2">
          <p className="inline-block w-[50px]">Github</p> |
          <a
            href={siteConfig.url.author}
            target="_blank"
            className="underline underline-offset-2"
            rel="noreferrer"
          >
            {siteConfig.url.author}
          </a>
        </div>
        <div className="flex gap-x-2">
          <p className="inline-block w-[50px]">Blog</p> |
          <a
            href={siteConfig.url.blog}
            target="_blank"
            className="underline underline-offset-2"
            rel="noreferrer"
          >
            {siteConfig.url.blog}
          </a>
        </div>
        <div className="flex gap-x-2">
          <p className="inline-block w-[50px]">Email</p> |
          <Tooltip content={isCopied ? COPIED_TOOLTIP_CONTENT : ''}>
            <span
              className="underline underline-offset-2 cursor-pointer"
              onClick={handleCopy}
            >
              {siteConfig.author.email}
            </span>
          </Tooltip>
        </div>
      </section>

      <section className="flex flex-col gap-y-2">
        <strong className="font-serif-bold">
          서비스가 어떻게 동작하는 지 알고 설계대로 동작하게 만드는 개발을
          지향합니다.
        </strong>
        <p>
          근거 있는 선택을 하려고 노력합니다. 최선의 선택을 위해 고민한 과정과
          느낀점을 동료들에게 공유하고 피드백을 주고받는 과정을 즐깁니다.
        </p>
        <br />
        <strong className="font-serif-bold">
          기본기를 중요하게 생각합니다.
        </strong>
        <p>
          빠르게 변하는 프론트엔드 생태계에 유연하게 적응하고 다양한 도메인
          경험을 쌓기 위해 로우 레벨에 관심을 가지고 공부하고 있습니다.
        </p>
      </section>
    </div>
  )
}

export default AboutPage
