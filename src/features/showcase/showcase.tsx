'use client'

import {
  ChevronDown,
  Download,
  Info,
  LogOut,
  Pencil,
  Plus,
  Settings,
  Trash2,
  User,
} from 'lucide-react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Autocomplete } from '@/components/ui/autocomplete'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Empty } from '@/components/ui/empty'
import { FieldHint, FieldMessage } from '@/components/ui/field'
import { Flex } from '@/components/ui/flex'
import { Col, Row } from '@/components/ui/grid'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Layout } from '@/components/ui/layout'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Skeleton, SkeletonText } from '@/components/ui/skeleton'
import { Space } from '@/components/ui/space'
import { Spinner } from '@/components/ui/spinner'
import { Splitter } from '@/components/ui/splitter'
import { Stepper } from '@/components/ui/stepper'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Link, Paragraph, Text, Title } from '@/components/ui/typography'

const GovbrWebcomponents = dynamic(
  () => import('@/features/showcase/components/webcomponents-showcase'),
  { ssr: false },
)

const tableData = [
  { key: 1, nome: 'Maria Oliveira', cargo: 'Deputada estadual', uf: 'SC' },
  { key: 2, nome: 'Maria Firmina dos Reis', cargo: 'Escritora', uf: 'MA' },
  { key: 3, nome: 'Carolina Maria de Jesus', cargo: 'Escritora', uf: 'MG' },
  { key: 4, nome: 'Enedina Alves Marques', cargo: 'Engenheira', uf: 'PR' },
]

export function Showcase() {
  const [step, setStep] = useState(2)
  const [showAlert, setShowAlert] = useState(true)

  return (
    <TooltipProvider>
      <main
        id='conteudo-principal'
        tabIndex={-1}
        className='container-govbr space-y-10 py-6 md:py-10 focus:outline-none'
      >
        <header className='space-y-2'>
          <h1 className='text-3xl font-bold text-primary'>GovBR UI Demo</h1>
          <p className='text-muted-foreground'>
            Componentes no padrão shadcn com o visual do design system gov.br —
            base Radix/Tailwind, com webcomponents oficiais em pontos
            específicos.
          </p>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Componentes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Demonstração</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Grid e breakpoints</CardTitle>
            <CardDescription>
              Grid oficial do DS: 4 colunas no mobile, 8 no tablet (≥576px) e 12
              no desktop (≥1280px), com gutter de 16/24/40px. Breakpoints: sm
              576 · md 992 · lg 1280 · xl 1600.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='grid-govbr'>
              {Array.from({ length: 12 }, (_, index) => (
                <div
                  key={index}
                  className='flex h-10 items-center justify-center bg-accent text-xs font-semibold text-accent-foreground'
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className='grid-govbr text-xs font-semibold text-primary-foreground'>
              <div className='col-span-2 flex h-10 items-center justify-center bg-primary sm:col-span-4 lg:col-span-6'>
                1/2
              </div>
              <div className='col-span-2 flex h-10 items-center justify-center bg-[#0c326f] sm:col-span-4 lg:col-span-6'>
                1/2
              </div>
            </div>
          </CardContent>
        </Card>

        <div className='grid gap-gutter md:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>Botões</CardTitle>
              <CardDescription>Variantes e tamanhos</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex flex-wrap items-center gap-3'>
                <Button>Primário</Button>
                <Button variant='secondary'>Secundário</Button>
                <Button variant='tertiary'>Terciário</Button>
                <Button variant='destructive'>Excluir</Button>
                <Button variant='link'>Link</Button>
              </div>
              <div className='flex flex-wrap items-center gap-3'>
                <Button size='sm'>Pequeno</Button>
                <Button size='lg'>Grande</Button>
                <Button disabled>Desabilitado</Button>
                <Button size='icon' aria-label='Adicionar'>
                  <Plus />
                </Button>
                <Button variant='secondary'>
                  <Download /> Baixar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Formulário</CardTitle>
              <CardDescription>Input, Select, Textarea e Label</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div>
                <Label htmlFor='nome'>Nome completo</Label>
                <Input id='nome' placeholder='Digite seu nome' />
                <FieldHint>Como consta no seu documento oficial.</FieldHint>
              </div>
              <div>
                <Label htmlFor='cpf'>CPF</Label>
                <Input
                  id='cpf'
                  placeholder='000.000.000-00'
                  defaultValue='123'
                  aria-invalid
                  aria-describedby='cpf-erro'
                />
                <FieldMessage id='cpf-erro' state='danger'>
                  CPF inválido. Verifique os números digitados.
                </FieldMessage>
              </div>
              <div>
                <Label>Unidade federativa</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Selecione um estado' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='sc'>Santa Catarina</SelectItem>
                    <SelectItem value='ma'>Maranhão</SelectItem>
                    <SelectItem value='mg'>Minas Gerais</SelectItem>
                    <SelectItem value='pr'>Paraná</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor='obs' optional>
                  Observações
                </Label>
                <Textarea id='obs' placeholder='Escreva aqui...' />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Seleção</CardTitle>
              <CardDescription>Checkbox, Radio e Switch</CardDescription>
            </CardHeader>
            <CardContent className='space-y-5'>
              <div className='flex items-center gap-2'>
                <Checkbox id='aceito' defaultChecked />
                <Label htmlFor='aceito' className='mb-0'>
                  Aceito os termos de uso
                </Label>
              </div>
              <RadioGroup defaultValue='sim' className='flex gap-6'>
                <div className='flex items-center gap-2'>
                  <RadioGroupItem value='sim' id='r-sim' />
                  <Label htmlFor='r-sim' className='mb-0'>
                    Sim
                  </Label>
                </div>
                <div className='flex items-center gap-2'>
                  <RadioGroupItem value='nao' id='r-nao' />
                  <Label htmlFor='r-nao' className='mb-0'>
                    Não
                  </Label>
                </div>
              </RadioGroup>
              <div className='flex items-center gap-2'>
                <Switch id='notif' defaultChecked />
                <Label htmlFor='notif' className='mb-0'>
                  Receber notificações
                </Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sobreposições</CardTitle>
              <CardDescription>Dialog, Dropdown e Tooltip</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-wrap items-center gap-3'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant='secondary'>Abrir modal</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirmar envio</DialogTitle>
                    <DialogDescription>
                      Os dados serão enviados para análise. Deseja continuar?
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant='secondary'>Cancelar</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button>Confirmar</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='tertiary'>
                    Ações <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='start'>
                  <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <User /> Perfil
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings /> Configurações
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut /> Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size='icon'
                    variant='tertiary'
                    aria-label='Informações'
                  >
                    <Info />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Tooltip no estilo gov.br</TooltipContent>
              </Tooltip>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Stepper</CardTitle>
            <CardDescription>
              Fluxo em etapas (equivalente ao BrStep)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Stepper
              steps={['Identificação', 'Endereço', 'Documentos', 'Confirmação']}
              value={step}
              onStepChange={setStep}
            />
          </CardContent>
          <CardFooter className='gap-3'>
            <Button
              variant='secondary'
              size='sm'
              disabled={step === 1}
              onClick={() => setStep((current) => current - 1)}
            >
              Voltar
            </Button>
            <Button
              size='sm'
              disabled={step === 4}
              onClick={() => setStep((current) => current + 1)}
            >
              Avançar
            </Button>
          </CardFooter>
        </Card>

        <div className='grid gap-gutter md:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>Mensagens</CardTitle>
              <CardDescription>Equivalente ao BrMessage</CardDescription>
            </CardHeader>
            <CardContent className='space-y-3'>
              {showAlert && (
                <Alert variant='info' onClose={() => setShowAlert(false)}>
                  <AlertTitle>Informação</AlertTitle>
                  <AlertDescription>
                    Este alerta pode ser fechado no botão ao lado.
                  </AlertDescription>
                </Alert>
              )}
              <Alert variant='success'>
                <AlertDescription>Registro salvo com sucesso.</AlertDescription>
              </Alert>
              <Alert variant='warning'>
                <AlertDescription>Há pendências no cadastro.</AlertDescription>
              </Alert>
              <Alert variant='danger'>
                <AlertDescription>
                  Não foi possível concluir a operação.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tabs, Avatar e Separator</CardTitle>
              <CardDescription>Navegação e identidade</CardDescription>
            </CardHeader>
            <CardContent className='space-y-5'>
              <Tabs defaultValue='dados'>
                <TabsList>
                  <TabsTrigger value='dados'>Dados</TabsTrigger>
                  <TabsTrigger value='docs'>Documentos</TabsTrigger>
                  <TabsTrigger value='hist'>Histórico</TabsTrigger>
                </TabsList>
                <TabsContent value='dados'>
                  Conteúdo da aba de dados pessoais.
                </TabsContent>
                <TabsContent value='docs'>
                  Conteúdo da aba de documentos.
                </TabsContent>
                <TabsContent value='hist'>
                  Conteúdo da aba de histórico.
                </TabsContent>
              </Tabs>

              <Separator />

              <div className='flex items-center gap-4'>
                <Avatar>
                  <AvatarImage src='https://i.pravatar.cc/80?img=47' alt='' />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <Separator orientation='vertical' className='h-10' />
                <div className='text-sm'>
                  <p className='font-semibold'>Maria Oliveira</p>
                  <p className='text-muted-foreground'>Usuária da plataforma</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Accordion</CardTitle>
            <CardDescription>Equivalente ao Collapse</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type='single' collapsible defaultValue='item-1'>
              <AccordionItem value='item-1'>
                <AccordionTrigger>O que é esta plataforma?</AccordionTrigger>
                <AccordionContent>
                  Uma demonstração dos componentes construídos no padrão shadcn
                  com o visual do design system do governo federal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>
                  Como os componentes são construídos?
                </AccordionTrigger>
                <AccordionContent>
                  A maioria usa Radix + Tailwind; os componentes estruturais
                  usam os webcomponents oficiais do gov.br.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tabela</CardTitle>
            <CardDescription>Tabela shadcn com o visual gov.br</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Atuação</TableHead>
                  <TableHead>UF</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.key}>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.cargo}</TableCell>
                    <TableCell>{row.uf}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className='gap-2'>
            <Button variant='tertiary' size='sm'>
              <Pencil /> Editar
            </Button>
            <Button variant='tertiary' size='sm' className='text-destructive'>
              <Trash2 /> Remover
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Componentes utilitários</CardTitle>
            <CardDescription>
              Novos utilitários no padrão shadcn com o visual gov.br e API
              inspirada no antd: Typography, Space, Flex, Grid, Skeleton,
              Spinner, Autocomplete, Empty, Layout e Splitter.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-8'>
            <section className='space-y-3'>
              <Title level={5} className='text-primary'>
                Typography
              </Title>
              <Title level={2}>Título nível 2</Title>
              <Title level={4}>Título nível 4</Title>
              <Paragraph>
                Parágrafo com <Text strong>texto forte</Text>,{' '}
                <Text italic>itálico</Text>, <Text underline>sublinhado</Text>,{' '}
                <Text del>riscado</Text> e <Text code>código</Text>. Também há{' '}
                <Text type='success'>sucesso</Text>,{' '}
                <Text type='warning'>aviso</Text>,{' '}
                <Text type='danger'>erro</Text> e{' '}
                <Text type='secondary'>secundário</Text>.{' '}
                <Link href='#'>Isto é um link</Link>.
              </Paragraph>
            </section>

            <Separator />

            <section className='space-y-3'>
              <Title level={5} className='text-primary'>
                Space e Flex
              </Title>
              <Space>
                <Button size='sm'>Salvar</Button>
                <Button size='sm' variant='secondary'>
                  Cancelar
                </Button>
                <Button size='sm' variant='tertiary'>
                  Ajuda
                </Button>
              </Space>
              <Space
                split={<Separator orientation='vertical' className='h-4' />}
              >
                <Link href='#'>Início</Link>
                <Link href='#'>Serviços</Link>
                <Link href='#'>Contato</Link>
              </Space>
              <Flex justify='space-between' align='center' gap='middle' wrap>
                <div className='flex h-10 items-center bg-accent px-4 text-sm text-accent-foreground'>
                  Início
                </div>
                <div className='flex h-10 items-center bg-accent px-4 text-sm text-accent-foreground'>
                  Meio
                </div>
                <div className='flex h-10 items-center bg-accent px-4 text-sm text-accent-foreground'>
                  Fim
                </div>
              </Flex>
            </section>

            <Separator />

            <section className='space-y-3'>
              <Title level={5} className='text-primary'>
                Grid (Row / Col)
              </Title>
              <Row gutter={[16, 16]}>
                <Col span={24} md={12} lg={8}>
                  <div className='flex h-12 items-center justify-center bg-primary text-sm font-semibold text-primary-foreground'>
                    24 · md 12 · lg 8
                  </div>
                </Col>
                <Col span={24} md={12} lg={8}>
                  <div className='flex h-12 items-center justify-center bg-primary text-sm font-semibold text-primary-foreground'>
                    24 · md 12 · lg 8
                  </div>
                </Col>
                <Col span={24} md={24} lg={8}>
                  <div className='flex h-12 items-center justify-center bg-primary text-sm font-semibold text-primary-foreground'>
                    24 · md 24 · lg 8
                  </div>
                </Col>
              </Row>
            </section>

            <Separator />

            <section className='space-y-4'>
              <Title level={5} className='text-primary'>
                Skeleton e Spinner
              </Title>
              <div className='flex items-start gap-4'>
                <Skeleton className='size-12 rounded-full' />
                <SkeletonText lines={3} />
              </div>
              <Flex align='center' gap='large' wrap>
                <Spinner size='sm' />
                <Spinner size='md' />
                <Spinner size='lg' label='Carregando…' />
              </Flex>
            </section>

            <Separator />

            <div className='grid gap-gutter md:grid-cols-2'>
              <section className='space-y-3'>
                <Title level={5} className='text-primary'>
                  Autocomplete
                </Title>
                <Autocomplete
                  placeholder='Digite um estado…'
                  options={[
                    'Santa Catarina',
                    'São Paulo',
                    'Sergipe',
                    'Maranhão',
                    'Minas Gerais',
                    'Mato Grosso',
                    'Paraná',
                  ]}
                />
              </section>

              <section className='space-y-3'>
                <Title level={5} className='text-primary'>
                  Empty
                </Title>
                <Empty
                  title='Nenhum registro'
                  description='Cadastre o primeiro item para começar.'
                >
                  <Button size='sm'>
                    <Plus /> Novo registro
                  </Button>
                </Empty>
              </section>
            </div>

            <Separator />

            <section className='space-y-3'>
              <Title level={5} className='text-primary'>
                Layout
              </Title>
              <Layout className='min-h-48 overflow-hidden rounded-sm border border-solid border-border'>
                <Layout.Header>Cabeçalho</Layout.Header>
                <Layout hasSider>
                  <Layout.Sider width={140} className='p-4 text-sm'>
                    Menu lateral
                  </Layout.Sider>
                  <Layout.Content className='p-4 text-sm'>
                    Conteúdo principal da página.
                  </Layout.Content>
                </Layout>
                <Layout.Footer>Rodapé institucional</Layout.Footer>
              </Layout>
            </section>

            <Separator />

            <section className='space-y-3'>
              <Title level={5} className='text-primary'>
                Splitter
              </Title>
              <div className='h-48'>
                <Splitter>
                  <Splitter.Panel defaultSize={35}>
                    <div className='p-4 text-sm'>
                      Painel esquerdo. Arraste a barra para redimensionar.
                    </div>
                  </Splitter.Panel>
                  <Splitter.Panel>
                    <div className='p-4 text-sm'>Painel direito.</div>
                  </Splitter.Panel>
                </Splitter>
              </div>
            </section>
          </CardContent>
        </Card>

        <GovbrWebcomponents />
      </main>
    </TooltipProvider>
  )
}
