import * as React from  "react";
import {mount} from "cypress/react";


describe('<Home>', () => {

  beforeEach(()=>{
    cy.visit( 'http://localhost:3000');
  });


  const modalClos=()=>{
    cy.wait(1000);
    cy.get('.clear-btn').click();
    expect(true).to.not.equal('modal-container');
  }

  const modalCartPage=()=>{

    cy.get('.product-btn').eq(0).click();
    cy.wait(1000);
    cy.get('.confirm-btn').click();
    cy.url().should('include','http://localhost:3000/Cart');

  }

  it('Home render 테스트',()=>{
    cy.get('.home-container').should('be.visible');
  });

  //

  it('Home 버튼 클릭 테스트',()=>{
    cy.get('#nav-title').click();
    cy.get('.App').should('be.visible');
  });


  it('Home 상품 정상적으로 배치되는지 테스트',()=>{
      cy.get('.product').should(($list)=>{
        expect($list).to.have.length(3);
        expect($list.eq(0)).to.contain('상품 추가하기').contain('상품 삭제');
        expect($list.eq(1)).to.contain('상품 추가하기').contain('상품 삭제');
        expect($list.eq(2)).to.contain('상품 추가하기').contain('상품 삭제');
      });
  });

  it('장바구니 페이지 버튼 누르면 이동 테스트',()=>{
    cy.get('.bac-count').click();
    cy.url().should('include','http://localhost:3000/Cart');
  });



  it('모달창 테스트',()=>{
    cy.get('.product-btn').eq(0).click();
    cy.get('.modal-container').should('be.visible');

    modalClos();
    cy.wait(1000);
    modalCartPage();
  });



  it('url 다를경우 예외처리 테스트',()=>{
   cy.visit('http://localhost:3000/hello');
   cy.get(".not-fount-container").invoke("text").should("eq", "404 Error");
  });



})