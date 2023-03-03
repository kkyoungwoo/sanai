import React from 'react'
import Link from 'next/link'
import classNames from 'clsx'
import Image from '@/components/Image'
import Icon from '@/components/Icon'
import Tag from '@/components/Tag'

const ProjectCardHorizontal = ({
  title,
  logo,
  images,
  slug,
  tags,
  description,
  attributes,
  index,
}) => (
  <div
    href={slug.join('/')}
    aria-label={title}
    className={classNames(
      'group grid items-center transition-all duration-200 md:grid-cols-2 md:gap-10',
      'dark:bg-gradient-omega-900 prose prose-zinc bg-white dark:prose-invert dark:md:shadow-lg'
    )}
  >
    {images && (
      <Link
        href={slug.join('/')}
        aria-label={title}
        className="not-prose relative block h-80 w-full p-4"
      >
        {images[0] && (
          <>
            <Image
              src={images[0].src}
              alt={images[0].alt || title}
              animation="fade-in mask-left"
              wrapperClassName="transition-transform md:group-hover:scale-105 duration-300 ease-out"
              className="object-contain object-left"
              sizes="(min-width: 768px) 540px, 100vw"
              priority={index === 0}
              fill
            />
            {images[0].overlay && (
              <div className="absolute top-0 right-4 z-10 h-full w-full">
                <Image
                  src={images[0].overlay.src}
                  alt={images[0].overlay.alt || title}
                  animation="fade-in"
                  wrapperClassName="transition-transform md:group-hover:scale-105 origin-right duration-500 ease-out drop-shadow-2xl"
                  className="object-contain object-right"
                  sizes="(min-width: 768px) 540px, 100vw"
                  priority={index === 0}
                  fill
                />
              </div>
            )}
          </>
        )}
      </Link>
    )}
    <div className="p-4 md:p-10 md:pl-0">
      <Link href={slug.join('/')} aria-label={title}>
        {logo?.src ? (
          <div className="h-10">
            <Icon {...logo} className="h-full w-36 fill-current text-omega-400" />
          </div>
        ) : (
          <h6 className="text-omega-400">{logo.alt}</h6>
        )}
        <h4 className="mt-6 transition-colors group-hover:text-accent dark:group-hover:text-alpha">
          {title}
        </h4>
        <small className="mt-6 block">{description}</small>
      </Link>
      {tags && (
        <>
          <div className="mt-2">
          <div className="mb-2 mt-6 font-bold dark:text-accent-400">Sanai Blog &#x2935;</div>
            {tags?.map((tag) => (
              <Tag key={tag.title} slug={tag.slug} className="m-0.5 font-mono text-sm lg:mr-2">
                {tag.title}
              </Tag>
            ))}
          </div>
        </>
      )}
    </div>
  </div>
)

export default ProjectCardHorizontal
