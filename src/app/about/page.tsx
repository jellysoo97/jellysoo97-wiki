import Title from '@/components/common/Title'

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Title className="mb-8">About</Title>
      <p>
        안녕하세요. 박소연{' '}
        <span className="text-size-small text-secondary">Soyeon Park</span>{' '}
        입니다.
      </p>
    </div>
  )
}

export default AboutPage
