'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Footer, FooterCategory, FooterItem } from '@/components/layout/footer'
import { Header, HeaderLink, HeaderList } from '@/components/layout/header'
import { Loading } from '@/components/ui/loading'
import { Pagination } from '@/components/ui/pagination'

export default function GovbrWebcomponents() {
  const [page, setPage] = useState(1)

  return (
    <section className='space-y-6'>
      <h2 className='text-2xl font-bold text-primary'>
        Webcomponents oficiais do gov.br
      </h2>
      <p className='text-sm text-muted-foreground'>
        Estes componentes instanciam os custom elements do pacote
        @govbr-ds/webcomponents via wrappers React.
      </p>

      <div className='grid gap-gutter md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Loading</CardTitle>
            <CardDescription>Spinner e barra de progresso</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-wrap items-center gap-8'>
            <Loading label='Carregando...' size='medium' />
            <Loading mode='progress' value={65} className='min-w-40' />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pagination</CardTitle>
            <CardDescription>Página atual: {page}</CardDescription>
          </CardHeader>
          <CardContent>
            <Pagination
              current={page}
              total={12}
              onPageChange={(event) => setPage(event.detail.page)}
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Header</CardTitle>
          <CardDescription>Cabeçalho institucional gov.br</CardDescription>
        </CardHeader>
        <CardContent>
          <Header
            caption='Plataforma de Serviços'
            signature='Demonstração dos componentes'
            subcaption='Órgão X'
          >
            <HeaderList slot='links'>
              <HeaderLink href='#'>Órgãos do Governo</HeaderLink>
              <HeaderLink href='#'>Acesso à Informação</HeaderLink>
              <HeaderLink href='#'>Legislação</HeaderLink>
            </HeaderList>
          </Header>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Footer</CardTitle>
          <CardDescription>Rodapé institucional gov.br</CardDescription>
        </CardHeader>
        <CardContent>
          <Footer theme='dark'>
            <FooterCategory label='Institucional'>
              <FooterItem href='#'>Sobre a plataforma</FooterItem>
              <FooterItem href='#'>Perguntas frequentes</FooterItem>
            </FooterCategory>
            <FooterCategory label='Serviços'>
              <FooterItem href='#'>Simuladores</FooterItem>
              <FooterItem href='#'>Produtos de dados</FooterItem>
            </FooterCategory>
          </Footer>
        </CardContent>
      </Card>
    </section>
  )
}
