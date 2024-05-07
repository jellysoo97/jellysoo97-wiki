import Divider from '../common/Divider'

const Experience = () => {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-8">
      {/* work experience */}
      <div>
        <h2 className="font-serif-bold text-size-xlarge mb-2">
          Work Experience
        </h2>
        <Divider />
        <div className="mt-6">
          <h3 className="font-serif-bold text-size-large text-yellow mb-4">
            프리디소프트{' '}
            <span className="font-serif text-size-base text-secondary">
              (2022.08 - 2023.11)
            </span>
          </h3>
          <ul className="parent-ul">
            <li>유찜 비즈니스</li>
            <ul className="child-ul">
              <li>ㅇ</li>
            </ul>
          </ul>
        </div>
      </div>

      {/* projects */}
      <div>
        <h2 className="font-serif-bold text-size-xlarge mb-2">Projects</h2>
        <Divider />
      </div>
    </div>
  )
}

export default Experience
