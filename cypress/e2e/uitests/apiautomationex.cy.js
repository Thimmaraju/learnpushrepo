///<reference types="cypress"/>

describe('Automation - API Automatio - GET. PUT, POST and Delete Methods', function () {

    it.only('Cypress Test Case - Understanding GET Method', function () {
  
      cy.request('GET', 'https://reqres.in/api/users?page=2').then((response)=>{

        expect(response.status).equal(200);

        expect(response.body.data[1].id).equal(8);
        expect(response.body.data[2].last_name).equal("Funke");
        expect(response.body).to.have.property('total_pages');
        expect(response.body).to.have.property("page", 2)
        expect(response.body).to.have.property("total", 12)
      })
      
    })

    // it('Cypress Test Case - Understanding POST Method', function () {
  

    //     const payload ={
    //         "name": "Raju",
    //         "job": "Trainer"
    //     }
    //     cy.request('POST', 'https://reqres.in/api/users', payload).then((response)=>{
  
    //       expect(response.status).equal(201);
    //       expect(response.body).to.have.property("name", "Raju")
        
    //       expect(response.body).to.have.property("job", "Trainer")
    //     })
        
    //   })

    it.only('Cypress Test Case - Understanding POST Method', function () {

      
        const payload ={
            "name": "Raju",
            "job": "Trainer"
        }


        cy.request('POST', 'https://reqres.in/api/users', payload).then((response)=>{
  
          expect(response.status).equal(201);
          expect(response.body).to.have.property("name", "Raju")
        
          expect(response.body).to.have.property("job", "Trainer")

          let time = JSON.stringify(response.body.createdAt)
          let idvalue = JSON.stringify(response.body.id)

          cy.writeFile('cypress/fixtures/module1/test4.txt', time,{flag: 'a+'});

          cy.log(time)
          cy.log(idvalue)
        })
        
      })

      it.only('Cypress Test Case - Understanding PUT Method', function () {
  


        cy.request('PUT', 'https://reqres.in/api/users/2', {
            "name": "Raju",
            "job": "Consultant"
        }).then((response)=>{
  
          expect(response.status).equal(200);
          expect(response.body).to.have.property("name", "Raju")
        
          expect(response.body).to.have.property("job", "Consultant")
        })
        
      })


      it.only('Cypress Test Case - Understanding DELETE Method', function () {
  

        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response)=>{
  
          expect(response.status).equal(204);
         
        })
        
      })
       

  })