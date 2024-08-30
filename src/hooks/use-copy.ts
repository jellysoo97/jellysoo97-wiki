import { useState } from 'react'
import { useTimeOut } from './use-time-out'

export const useCopy = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  useTimeOut(isCopied, 2000, () => setIsCopied(false))

  const handleCopy = async (text: string) => {
    if (!text) {
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
    } catch (err) {
      console.log(err)
      alert('코드 복사에 실패했습니다.')
    }
  }

  return { isCopied, handleCopy }
}
