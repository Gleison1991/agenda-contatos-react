/// <reference types="cypress" /> 

describe('Testes de Contato', () => {
    it('deve adicionar um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/') 
        cy.get('input[placeholder="Nome"').type('Gleison') 
        cy.get('input[placeholder="Telefone"').type('020202020') 
        cy.get('input[placeholder="E-mail"').type('Teste01@email.com')
        cy.get('.adicionar').click() 
    })

    it('deve alterar um contato existente', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/') 
        cy.get('input[placeholder="Nome"').clear()
        cy.get('input[placeholder="Nome"').type('Ana') 
        cy.get('input[placeholder="Telefone"').clear()
        cy.get('input[placeholder="Telefone"').type('010101010') 
        cy.get('input[placeholder="E-mail"').clear()
        cy.get('input[placeholder="E-mail"').type('teste2@email.com')
        cy.get('.edit').click({multiple: true})
    })

    it('deve remover um contato existente', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.delete').each(($el) => {
            cy.wrap($el).click()
        })
        cy.contains('Nome do Contato').should('not.exist')
    })
})

