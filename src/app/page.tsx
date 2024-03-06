import Card from '@/components/common/Card'
import Title from '@/components/common/Title'
import TagIcon, { TagEnum } from '@/components/icons/TagIcon'
import { recentPosts } from '@/constants/posts'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-8 mt-8">
      <section className="flex h-40 bg-slate-400">graph section</section>

      <section className="flex justify-between items-center">
        <Title className="mb-0">All</Title>
        <span>-&gt;</span>
      </section>

      <section className="flex flex-col">
        <Title>Recent</Title>
        <div className="grid gap-4">
          {recentPosts.map((post) => (
            <Card
              key={post.title}
              title={post.title}
              thumbnail={<TagIcon tag={post.tags[0] as TagEnum} />}
              url={post.url}
              description={post.description}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col">
        <Title>Series</Title>
      </section>
    </div>
  )
}
