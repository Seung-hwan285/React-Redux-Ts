import * as React from  "react";
import { mount } from "cypress/react";
import Cart from "../../../src/components/Cart/Cart";

describe(`<Cart>`,()=>{

    const removeButtonTest=()=>{
        cy.get('.cart-items').children().should('have.length',1);
    }
    const clearButtonTest=()=>{
        cy.get('.cart-items').children().should('have.length',0);
    }

    const cartClickFlow=()=>{
        cy.get('#nav-title').click();
        cy.get('.product-btn').eq(0).click();
        cy.get('.clear-btn').click();
        cy.get('.product-btn').eq(1).click();

        cy.get('.clear-btn').click();
        cy.get('.nav-bag').click();
    }

    beforeEach(()=>{
        cy.visit('http://localhost:3000/Cart');
        cartClickFlow();
    });

    it('Cart render 테스트',()=>{
        cy.get('.cart-container').should('be.visible');
    });


    it('+,- 버튼 테스트',()=>{
        cy.get('.plus-btn').eq(0).click();
        cy.get('#cart-count').eq(0).should('have.text',2);
        cy.get('.minus-btn').eq(0).click();
        cy.get('#cart-count').eq(0).should('have.text',1);
    });

    it('장바구니 Remove 버튼 테스트',()=>{
        cy.get('.delete-btn button').eq(0).click();
        removeButtonTest();
    });


    it('장바구니 Clear 버튼 테스트',()=>{
        cy.get('.clear-btn button').click();
        clearButtonTest();
    });

    it('장바구니 nav 개수 증가 테스트',()=>{

        // cy.get('.bac-count span').then((count)=>{
        //
        //
        //     cy.wrap(count.text()).as('value')
        //
        //
        //     cy.get('@value').contains('2');
        //
        //
        // });
        cy.get('.bac-count span').should(($span)=>{
            expect($span.text().trim()).equal('2');
        });
    })
});