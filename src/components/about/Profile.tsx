'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { siteConfig } from '@/constants/config'
import { useTimeOut } from '@/hooks/use-time-out'
import { cn } from '@/utils/cn'

import Divider from '../common/Divider'
import IconButton from '../common/IconButton'
import Tooltip from '../common/Tooltip'
import Trapezoid from '../common/Trapezoid'
import CheckIcon from '../icons/CheckIcon'
import EmailIcon from '../icons/EmailIcon'
import GithubIcon from '../icons/GithubIcon'

const Profile = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  useTimeOut(isCopied, 1500, () => {
    setIsCopied(false)
  })

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(siteConfig.author.email)
    setIsCopied(true)
  }

  return (
    <div
      className={cn(
        'w-full h-full',
        'flex justify-center items-center',
        'md:bg-secondary'
      )}
    >
      <div className="relative grid grid-cols-1 place-items-center md:grid-cols-2 md:gap-4">
        {/* trapezoid */}
        <Trapezoid
          className="hidden md:block md:w-40 md:h-full md:top-0 md:left-0"
          style={{ clipPath: 'polygon(0% 0%, 65% 0%, 100% 100%, 0% 100%)' }}
        />
        {/* profile image */}
        <div className="relative w-40 h-40 mb-8 overflow-hidden rounded-2xl md:w-3/5 md:h-4/5 md:m-0">
          <Image
            src={siteConfig.author.profile}
            alt="profile"
            fill
            className="object-fill"
          />
        </div>

        {/* about */}
        <div className="w-fit">
          <Divider className="h-[1.5px] bg-yellow" />
          <div className="flex flex-col px-6 py-10 font-serif-bold">
            <h2 className="text-size-large">
              안녕하세요,
              <br />
              프론트엔드 개발자 <strong className="text-yellow">박소연</strong>
              입니다.
            </h2>
            <br />
            <h2 className="text-size-large">
              HI,
              <br />I{"'"}M <strong className="text-yellow">SOYEON PARK</strong>
              .<br />
              FRONTEND DEVELOPER
            </h2>
            <br />
            <p className="font-serif">서비스가 어떻게 돌아가는지 이해하고,</p>
            <p className="font-serif">서비스를 만들고자 합니다.</p>
          </div>
          <Divider className="h-[1.5px] bg-yellow" />
          <div className="flex justify-center items-center mt-4 gap-x-4">
            <Link
              href={siteConfig.author.github}
              target="_blank"
              className="w-8 h-8 flex justify-center items-center scale-sm"
            >
              <GithubIcon className="w-8 h-8 text-secondary" />
            </Link>
            <Tooltip content={siteConfig.author.email} position="bottom">
              <IconButton onClick={handleEmailCopy}>
                {isCopied ? (
                  <CheckIcon
                    className={cn('w-8 h-8', isCopied && 'text-green-500')}
                  />
                ) : (
                  <EmailIcon className="w-8 h-8" />
                )}
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
