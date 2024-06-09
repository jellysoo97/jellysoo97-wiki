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
        <div className="flex justify-between items-center">
          <p className="text-secondary">Web Frontend Developer</p>
          <div className="flex gap-x-2">
            <Tooltip content={siteConfig.url.author}>
              <a
                href={siteConfig.url.author}
                target="_blank"
                className="underline underline-offset-2"
                rel="noreferrer"
              >
                Github
              </a>
            </Tooltip>
            |
            <Tooltip
              content={
                isCopied ? COPIED_TOOLTIP_CONTENT : siteConfig.author.email
              }
            >
              <span
                className="underline underline-offset-2 cursor-pointer"
                onClick={handleCopy}
              >
                Email
              </span>
            </Tooltip>
            |
            <Tooltip content={siteConfig.url.blog}>
              <a
                href={siteConfig.url.blog}
                target="_blank"
                className="underline underline-offset-2"
                rel="noreferrer"
              >
                Blog
              </a>
            </Tooltip>
          </div>
        </div>

        <Divider />
      </section>

      <section className="flex flex-col gap-y-2">
        <Title>About</Title>
        <Divider />
        <p>
          <strong>서비스</strong>
        </p>

        <h2 className="text-lg font-serif-bold">Skills</h2>
        <ul className="parent-ul">
          <li>TypeScript, React, Next.js</li>
          <li>styled-components, Emotion, TailwindCSS</li>
          <li>Node.js, Express</li>
        </ul>
      </section>

      <section className="flex flex-col gap-y-2">
        <Title>Work Experience</Title>
        <Divider />
        <div className="grid grid-cols-[200px_minmax(500px,_1fr)]">
          <p className="text-secondary">2022.09 ~ 2023.11</p>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-lg font-serif-bold text-yellow">
              프리디소프트
            </h2>
            <p>1. 유찜 프로젝트</p>
            <ul>
              <li></li>
            </ul>
            <p>2. 하모니 프로젝트</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-y-2">
        <Title>Projects</Title>
        <Divider />
      </section>
    </div>
  )
}

export default AboutPage
