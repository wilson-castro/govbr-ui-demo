import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GovBR UI Demo',
  description:
    'Página demonstrativa dos componentes shadcn com o design system gov.br',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' className='h-full antialiased'>
      <head>
        <link href='https://fonts.cdnfonts.com/css/rawline' rel='stylesheet' />
      </head>
      <body className='min-h-full flex flex-col'>
        <a
          href='#conteudo-principal'
          className={[
            'sr-only focus:not-sr-only',
            'focus:absolute focus:left-4 focus:top-4 focus:z-50',
            'focus:rounded-govbr-sm focus:bg-primary',
            'focus:px-4 focus:py-2 focus:font-semibold focus:text-primary-foreground',
            'focus-govbr',
          ].join(' ')}
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  )
}
