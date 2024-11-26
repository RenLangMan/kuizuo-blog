import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import type { BlogPost } from '@docusaurus/plugin-content-blog'
import { usePluginData } from '@docusaurus/useGlobalData'
import { cn } from '@site/src/lib/utils'
import Image from '@theme/IdealImage'
import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'
import { Section } from '../Section'

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size))

const BLOG_POSTS_COUNT = 6
const BLOG_POSTS_PER_ROW = 2

export function BlogItem({ post }: { post: BlogPost }) {
  const {
    metadata: { permalink, frontMatter, title, description, date, tags },
  } = post
  const truncatedDescription = description.length > 100 ? `${description.slice(0, 100)}...` : description

  return (
    <motion.li
      className={cn('card', 'margin-bottom--md flex w-full bg-blog shadow-blog')}
      key={permalink}
      initial={{ y: 100, opacity: 0.001 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      viewport={{ once: true }}
      style={{
        border: '1px solid #ccc', // 默认边框样式
        borderRadius: '12px', // 圆角边框
        overflow: 'hidden',
      }}
    >
      {frontMatter.image && (
        // 如果frontMatter.image存在，则创建一个Link组件，指向permalink，并设置className为cursor-pointer overflow-hidden
        <Link href={permalink} className="w-full cursor-pointer overflow-hidden">
          <Image
            // 创建一个Image组件，src为frontMatter?.image，alt为title，img为空字符串，className为object-cover w-full h-auto，style为maxHeight: '150px'
            src={frontMatter?.image}
            alt={title}
            img={''}
            className="h-auto w-full object-cover"
            style={{ maxHeight: '150px' }}
          />
        </Link>
      )}
      <div className={'card__body p-2'} style={{ padding: '8px' }}>
        {/* // 设置card__body的样式，包括内边距为8px */}
        <h4 className="text-base" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <Link href={permalink} className="relative hover:no-underline">
            {title}
          </Link>
        </h4>
        <p className="text-sm" style={{ marginBottom: '4px' }}>
          {truncatedDescription}
        </p>
        {/* 创建时间 */}
        <div className='mt-2 flex items-center justify-between'>
          <p className='text-gray-500 text-xs'>{`创建时间: ${new Date(date).toLocaleDateString()}`}</p>
          {/* 标签 */}
          <div className="flex flex-wrap gap-1">
            {tags.map(tag => (
              <span key={tag.label} className='rounded bg-gray-200 px-2 py-1 text-gray-700 text-xs'>
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.li>
  )
}

export default function BlogSection(): JSX.Element {
  const blogData = usePluginData('docusaurus-plugin-content-blog') as {
    posts: BlogPost[]
    postNum: number
    tagNum: number
  }

  const posts = chunk(blogData.posts.slice(0, BLOG_POSTS_COUNT), BLOG_POSTS_PER_ROW)

  const ref = React.useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20], {
    clamp: false,
  })

  if (blogData.postNum === 0) {
    return <>作者还没开始写博文哦...</>
  }

  return (
    <Section title={<Translate id="homepage.blog.title">近期博客</Translate>} icon="ri:quill-pen-line" href={'/blog'}>
      <div ref={ref} className="flex flex-col gap-4 overflow-hidden rounded-card p-3 md:grid md:grid-cols-12">
        {posts.map((postGroup, index) => (
          // 设置列跨度为6，在大型设备上为4
          <div className="col-span-6 lg:col-span-4" key={index}>
            {postGroup.map((post, i) => (
              <motion.div style={{ y: i / 2 ? y : 0 }} key={i}>
                <BlogItem key={post.id} post={post} />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  )
}
