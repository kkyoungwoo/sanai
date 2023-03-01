import React from 'react'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'

const Companies = ({ title, list }) => (
  <div className="prose prose-invert flex h-12 flex-wrap items-center justify-between">
    {title && <h4 className="mb-4 w-full lg:mb-0 lg:w-auto">{title}</h4>}
    {list &&
      list.map(({ name, icon }, i) => (
        <Link key={i} href={icon.link} target="_blank" rel="noopener noreferrer">
          <Reveal as="a" animation="fade-in zoom-in" delay={i * 250} onClick={() => {}}>
            {icon && <Icon {...icon} className="h-12 w-36 fill-current text-omega-500" />}
          </Reveal>
        </Link>
      ))}
  </div>
)

export default Companies