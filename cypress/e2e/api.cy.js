describe("Api Test", () => {
  /* it('should get all task(empty Tasks) ', () => {
        cy.request({
            method: 'GET',
            url:'http://localhost:5000/api/v1/tasks',
           // url:Cypress.env('urlBackend')+'/auth/login',
          
        }).then((resp=>{
           expect(resp.status).to.equal(200);
           console.log('Tasks',resp.body.model);
           expect(resp.body.model).to.have.lengthOf(0);
        }))
       
     
        }) */
  let saveTask = {};
  let saveTaskUpdated = {};
  it("should add task", () => {
    const data = {
      title: "Amine Bouzidi",
      duration: 62,
    };

    cy.request({
      method: "POST",
      url: "http://localhost:5000/api/v1/tasks",
      body: data,
      // url:Cypress.env('urlBackend')+'/auth/login',
    }).then((resp) => {
      expect(resp.status).to.equal(200);
      console.log("Tasks", resp.body.model);
      expect(resp.body.model.title).to.eq(data.title);
      expect(resp.body.model.duration).to.eq(data.duration);
      expect(resp.body.model._id).to.exist;
      saveTask = resp.body.model;
    });
  });

  it("should get all task ", () => {
    const data = {
        title: "Amine Bouzidi updated",
        duration: 55,
      };
    cy.request({
      method: "GET",
      url: "http://localhost:5000/api/v1/tasks",
     
      // url:Cypress.env('urlBackend')+'/auth/login',
    }).then((resp) => {
      expect(resp.status).to.equal(200);
     
      const index = resp.body.model.findIndex(
        (obj) => obj._id === saveTask._id 
      );
      expect(index).to.not.equal(-1);
    });
  });

  it("should update the task added ", () => {
    const data = {
        title: "Amine Bouzidi updated",
        duration: 55,
      };
      console.log("saveTask in update",saveTask);
    cy.request({
      method: "PUT",
      url: "http://localhost:5000/api/v1/tasks/"+saveTask._id,
      body: data,
      // url:Cypress.env('urlBackend')+'/auth/login',
    }).then((resp) => {
     
     
      expect(resp.status).to.equal(200);
      console.log("Tasks", resp.body.model);
      expect(resp.body.model.title).to.eq(data.title);
      expect(resp.body.model.duration).to.eq(data.duration);
      saveTaskUpdated = resp.body.model;
       
    });
  });
  it("GEt by id ", () => {
    
    cy.request({
      method: "GET",
      url: "http://localhost:5000/api/v1/tasks/"+saveTaskUpdated._id,
     
      // url:Cypress.env('urlBackend')+'/auth/login',
    }).then((resp) => {
     
     
      expect(resp.status).to.equal(200);
  
      expect(resp.body.model.title).to.eq(saveTaskUpdated.title);
      expect(resp.body.model.duration).to.eq(saveTaskUpdated.duration);
       
    });
  });
  it("Delete the task already added  ", () => {
    
    cy.request({
      method: "DELETE",
      url: "http://localhost:5000/api/v1/tasks/"+saveTaskUpdated._id,
     
      // url:Cypress.env('urlBackend')+'/auth/login',
    }).then((resp) => {
     
     
      expect(resp.status).to.equal(200);
  
     
    });
    cy.request({
        method: "GET",
        url: "http://localhost:5000/api/v1/tasks",
       
        // url:Cypress.env('urlBackend')+'/auth/login',
      }).then((resp) => {
        expect(resp.status).to.equal(200);
       
        const index = resp.body.model.findIndex(
          (obj) => obj._id === saveTask._id 
        );
        expect(index).to.equal(-1);
      });

  });
  it("GEt by id after delete", () => {
    
    cy.request({
      method: "GET",
      url: "http://localhost:5000/api/v1/tasks/"+saveTaskUpdated._id,
      failOnStatusCode: false
      // url:Cypress.env('urlBackend')+'/auth/login',
    }).then((resp) => {
     
     
      expect(resp.status).to.equal(404);
      expect(resp.body.message).to.equal("Task doesn't exist!");
  
      
    });
  });
  it("GEt users", () => {
    
    cy.request({
      method: "GET",
      url: "http://localhost:5000/api/v1/users/",
      failOnStatusCode: false
      // url:Cypress.env('urlBackend')+'/auth/login',
    }).then((resp) => {
     
     
      expect(resp.status).to.equal(401);
       
  
      
    });
  });
});
