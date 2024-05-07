'use client'

import Experience from '@/components/about/Experience'
import Profile from '@/components/about/Profile'

const AboutPage = () => {
  return (
    <div className="relative w-full flex flex-col gap-y-8">
      {/* TODO: navigator */}

      {/* first section */}
      <section className="min-h-[var(--height-main)]">
        <Profile />
      </section>

      {/* second section */}
      <section className="min-h-[var(--height-main)]">
        <Experience />
      </section>
    </div>
  )
}

export default AboutPage
