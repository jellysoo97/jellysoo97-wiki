'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import { useRef, useState } from 'react'

import { useTimeOut } from '@/hooks/use-time-out'

import IconButton from './common/IconButton'
import CheckIcon from './icons/CheckIcon'
import CopyIcon from './icons/CopyIcon'

type Props = {
  code: string
}

const img = ({ src, alt, ...props }: React.ComponentProps<'img'>) => {
  return <img src={src || ''} alt={alt || 'image'} {...props} />
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
      <IconButton className="absolute top-2 right-2" onClick={handleCodeCopy}>
        {isCopied ? (
          <CheckIcon className="w-6 h-6 text-green-700" />
        ) : (
          <CopyIcon className="w-6 h-6 text-secondary" />
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
    <article className="prose prose-neutral w-full py-4 max-w-full dark:prose-dark">
      <Component components={MDXComponents} />
    </article>
  )
}

export default MDXContent
