'use client'

import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { useRef, useState } from 'react'

import { useTimeOut } from '@/hooks/use-time-out'

import CheckIcon from '../icons/CheckIcon'
import CopyIcon from '../icons/CopyIcon'
import IconButton from './IconButton'

type Props = {
  code: string
}

const img = ({ src, alt }: React.ComponentProps<'img'>) => {
  return <Image src={src || ''} alt={alt || 'image'} fill objectFit="contain" />
}

const pre = ({ children }: React.ComponentProps<'pre'>) => {
  const preRef = useRef<HTMLPreElement>(null)
  const [isCopied, setIsCopied] = useState<boolean>(false)

  useTimeOut(isCopied, 1500, () => setIsCopied(false))

  const handleCodeCopy = async () => {
    const code = preRef.current?.querySelector('code')?.innerText

    if (!code) {
      return
    }

    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
    } catch (err) {
      console.log(err)
      alert('코드 복사에 실패했습니다.')
    }
  }

  return (
    <pre ref={preRef} className="relative">
      <IconButton className="absolute top-1 right-1" onClick={handleCodeCopy}>
        {isCopied ? (
          <CheckIcon className="w-6 h-6 text-green-700" />
        ) : (
          <CopyIcon className="w-6 h-6 text-neutral-250 dark:text-neutral-600" />
        )}
      </IconButton>

      {children}
    </pre>
  )
}

const MDXComponents = {
  img,
  pre,
}

const MDXContent = ({ code }: Props) => {
  const Component = useMDXComponent(code)

  return (
    <article className="prose prose-neutral w-full max-w-full dark:prose-dark">
      <Component components={MDXComponents} />
    </article>
  )
}

export default MDXContent
