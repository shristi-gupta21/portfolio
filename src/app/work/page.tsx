import { type Metadata } from 'next'
import Image, { type ImageProps } from 'next/image'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoGyanDhan from '@/images/logos/gyandhan.svg'
import logoPeopleLink from '@/images/logos/peoplelink.png'
import logoFarAlpha from '@/images/logos/faralpha.jpeg'
import logoAiseberg from '@/images/logos/aiseberg_logo.jpeg'

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Aiseberg',
      title: 'Frontend Engineer',
      logo: logoAiseberg,
      start: 'January 2025',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'FarAlpha Technologies',
      title: 'Software Developer',
      logo: logoFarAlpha,
      start: 'June 2024',
      end: {
        label: 'January 2025',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'GyanDhan',
      title: 'Frontend Developer (Freelancer)',
      logo: logoGyanDhan,
      start: 'June 2023',
      end: 'December 2023',
    },
    {
      company: 'PeopleLink Unified Communications',
      title: 'Associate Software Engineer',
      logo: logoPeopleLink,
      start: 'July 2022',
      end: 'April 2023',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <a href="/assets/resume.pdf" download>
        <Button variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </a>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Showcasing my journey and contributions as a frontend developer',
}

export default async function WorkIndex() {
  return (
    <SimpleLayout
      title="Building Digital Experiences as a Frontend Developer"
      intro="Showcasing my journey and contributions as a frontend developer in dynamic companies, where I’ve worked on creating responsive user interfaces, implementing cutting-edge technologies, and delivering scalable web solutions that enhance business impact and user satisfaction."
    >
      <div className="flex max-w-7xl flex-col space-y-16">
        <div className="space-y-10">
          <Resume />
        </div>
      </div>
    </SimpleLayout>
  )
}
