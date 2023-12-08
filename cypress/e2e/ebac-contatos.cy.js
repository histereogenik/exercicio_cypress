/// <reference types="cypress" />

describe('Testes para agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve renderizar corretamente', () => {
        cy.get('header').should('have.class', 'sc-jTrPJq bgKOAx')
    })

    it('Testando a inclusão de um contato', () => {
        cy.get('[type="text"]').type('papito')
        cy.get('[type="email"]').type('perfeito@gmail.com')
        cy.get('[type="tel"]').type('68992532665')
        cy.get('.adicionar').click()
        cy.get('.sc-eDDNvR > li').last().should('have.text', 'perfeito@gmail.com')
    })

    it('Testando a alteração de um contato', () => {
        cy.get('.edit').last().click()
        cy.get('[type="text"]').clear().type('ai papito')
        cy.get('[type="email"]').clear().type('ntaoperfeitosqn@gmail.com')
        cy.get('[type="tel"]').clear().type('999999999')
        cy.get('.alterar').click()
        cy.get('.sc-eDDNvR > li').last().should('have.text', 'ntaoperfeitosqn@gmail.com')
    })

    it('Testando a remoção de um contato', () => {
        cy.get('.delete').last().click()
        cy.get('.sc-eDDNvR > li').last().should('not.contain.text', 'ntaoperfeitosqn@gmail.com')
    })
})