import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table'

describe('Table', () => {
  it('renderiza cabeçalho com scope=col e célula', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Ana</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    )
    expect(screen.getByRole('columnheader', { name: 'Nome' })).toHaveAttribute(
      'scope',
      'col',
    )
    expect(screen.getByRole('cell', { name: 'Ana' })).toBeInTheDocument()
  })
})
