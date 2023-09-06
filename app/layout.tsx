import type { Metadata } from 'next'
import { mukta } from './font'
import './globals.css'

interface Props {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'AntBuilder',
  description: 'Our vision is to build softwares fast, efficiently, in an iterative manner and collaborative with the help of the every body needed to achieve results as fast as possible and sticking with the change in the technology space.',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={mukta.className}>
        {children}
      </body>
    </html>
  )
}
