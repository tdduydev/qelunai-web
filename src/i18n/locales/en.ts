import type { Locale } from '../types';

export default {
  code: 'en',
  htmlLang: 'en',
  ogLocale: 'en_US',
  nativeName: 'English',
  order: 0,
  script: 'latin',

  seo: {
    title: 'Qelunai: Eastern wisdom & AI, Tử vi, Bát tự, I Ching and lunar calendar',
    description:
      'Qelunai is a calm mobile app for Tử vi (Zi Wei Dou Shu), Bát tự (Four Pillars), the lunar calendar, I Ching, Feng Shui and numerology, explained plainly as tools for reflection. In development.',
    keywords:
      'Qelunai, Tu vi, Zi Wei Dou Shu, Bat tu, Four Pillars, BaZi, I Ching, lunar calendar, feng shui, numerology, eastern wisdom app',
  },

  nav: { modules: 'Modules', principles: 'Principles', faq: 'Questions', action: 'Get notified', language: 'Language', skip: 'Skip to content' },

  hero: {
    line1: 'Eastern',
    line2: 'wisdom',
    sub: 'Qelunai is a calm app for Tử vi, Bát tự, the lunar calendar and the I Ching, told plainly as tools for reflection.',
    pictureAlt: 'A night sky with a golden astrolabe above misty mountains and a still lake',
  },

  intro: {
    lines: ['Twelve palaces,', 'four pillars,', 'sixty-four hexagrams,', 'one lunar year,', 'read slowly.'],
    note: 'Heritage to reflect with, never a verdict on your life.',
    pictureAlts: ['A twelve-point golden wheel on a starry night', 'Moon phases arcing over a calm sea'],
  },

  features: {
    heading: 'What it does, in plain sentences',
    on: 'On',
    off: 'Off',
    items: [
      { text: 'Read your chart as twelve palaces', detail: 'Twelve palaces laid out from Mệnh, each with its stars and a plain explanation. In development.', on: true },
      { text: 'Follow the lunar year day by day', detail: 'Twenty-four solar terms, leap months and the can chi of each day, computed for UTC+7. In development.' },
      { text: 'Cast a hexagram when you feel stuck', detail: 'Sixty-four hexagrams, six lines each, with the classic text and a modern reading. In development.' },
      { text: 'Ask the AI advisor, only if you agree', detail: 'The advisor is off by default. Nothing leaves your phone until you say yes.', on: true },
      { text: 'Use it in light or dark', detail: 'Ivory by day, midnight by night, with the same calm gold throughout.' },
    ],
  },

  modules: {
    heading: 'Six systems, one app',
    status: 'In development',
    items: {
      tuvi: { name: 'Tử vi', summary: 'Zi Wei Dou Shu: a birth chart of twelve palaces and over a hundred stars.', fact: '12 palaces' },
      batu: { name: 'Bát tự', summary: 'Four Pillars of Destiny: year, month, day and hour as heavenly stems and earthly branches.', fact: '4 pillars, 8 characters' },
      phongthuy: { name: 'Phong thủy', summary: 'Feng Shui: directions, the Bát trạch house types and the five elements around your home.', fact: '8 directions' },
      kinhdich: { name: 'Kinh Dịch', summary: 'I Ching: cast a hexagram and read its judgement and changing lines.', fact: '64 hexagrams' },
      licham: { name: 'Lịch âm', summary: 'The lunisolar calendar: lunar dates, solar terms, good and bad days.', fact: '24 solar terms' },
      thansohoc: { name: 'Thần số học', summary: 'Numerology: life path and core numbers from your name and birth date.', fact: '9 core numbers' },
    },
  },

  about: {
    line1: 'Heritage,',
    line2: 'not prophecy.',
    blocks: [
      { title: 'Methods stated plainly', body: 'Every chart says which school and which rules it follows, so you can check the working instead of trusting a black box.' },
      { title: 'Your data stays yours', body: 'Birth data is stored on your phone. No account is needed, and the AI advisor is something you turn on, not something that watches.' },
    ],
    action: 'Get notified at launch',
    pictureAlt: 'Stacked stones by a lake under a pale full moon',
  },

  faq: {
    heading: 'Questions people ask',
    items: [
      { q: 'Is Qelunai fortune-telling?', a: 'No. It presents traditional Eastern systems as cultural heritage and a prompt for reflection. It does not predict your future or tell you what to decide.' },
      { q: 'Can I use it today?', a: 'Not yet. Qelunai is in development for Android and iOS. Leave your email below and we will write once, at launch.' },
      { q: 'Which languages will it support?', a: 'Vietnamese and English at launch, with Chinese and Korean planned. This site is already available in all four.' },
      { q: 'Does the AI read my data?', a: 'Only if you turn the advisor on and agree to share a specific chart. It is off by default and can be turned off again at any time.' },
      { q: 'Where do the methods come from?', a: 'From classical texts and widely used schools of Tử vi, Bát tự, Feng Shui and the I Ching. Each feature names its sources inside the app.' },
    ],
  },

  cta: {
    line1: 'Begin',
    line2: 'quietly.',
    sub: 'One email at launch. Nothing else.',
    dialogTitle: 'Tell me when Qelunai is ready',
    emailLabel: 'Your email',
    emailPlaceholder: 'you@example.com',
    platformLabel: 'Your phone',
    button: 'Send request',
    mailSubject: 'Notify me when Qelunai launches',
    mailBody: 'Please let me know when Qelunai is available.\n\nEmail: {email}\nPlatform: {platform}',
  },

  footer: {
    notes: ['Qelunai is in development. No predictions, no paid readings.', 'Coming to Android and iOS.'],
    top: 'Back to top',
    contactLabel: 'Write to us',
    credits: 'Illustrations made for Qelunai',
    rights: 'All rights reserved.',
  },

  notFound: { title: 'This page wandered off', body: 'The page you were looking for does not exist.', home: 'Back to Qelunai' },
} satisfies Locale;
