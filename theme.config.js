/** *************************************************************
 * Please refer to the Theme Options section in documentation   *
 ****************************************************************/

/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import { SiKakaotalk } from 'react-icons/si'
import { TfiHome, TfiPencilAlt } from 'react-icons/tfi'
import { SlUser, SlBriefcase, SlBookOpen, SlRocket } from 'react-icons/sl'

/**
 * Main Menu Items
 */

export const menu = [
  {
    name: '홈',
    slug: '/',
    Icon: TfiHome,
  },
  {
    name: '사나이 프로젝트',
    slug: '/projects',
    Icon: SlRocket,
  },
  {
    name: '크루 모집',
    slug: '/about',
    Icon: SlUser,
  },
  {
    name: '상담 및 문의',
    slug: '/contact',
    Icon: TfiPencilAlt,
  },
]

/**
 * Social Links under the Main Menu
 */

export const social = [
  {
    name: '카카오톡',
    url: 'http://pf.kakao.com/_QAxnxmxj/chat',
    Icon: SiKakaotalk,
  }
]

/**
 * General configurations
 */

export const config = {
  dateLocale: 'ko',
  dateOptions: {
    // dateOptions is passed to JavaScript's toLocaleDateString()
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  },
  convertKit: {
    tipUrl: 'https://sanai.club',
  },
  contactForm: {
    inputs: require('./content/contact-form.json'),
    recipient: 'sanai_help@naver.com',
    sender: 'sanai_help@naver.com',
    subject: 'EMAIL NOTIFICATION SUBJECT',
  },
}

/**
 * MDX/Markdown configurations
 */

export const mdxConfig = {
  publicDir: 'public',
  pagesDir: 'content',
  fileExt: '.md',
  collections: ['/blog', '/projects'],
  remarkPlugins: [],
  rehypePlugins: [],
}

/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000',
  authorName: '사나이클럽',
  siteName: '사나이클럽',
  defaultTitle: '사나이클럽 주식회사',
  titleTemplate: '사나이클럽 | %s',
  description: '사나이클럽으로 초대합니다',
  email: 'sanai_help@naver.com',
  locale: 'ko',
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}