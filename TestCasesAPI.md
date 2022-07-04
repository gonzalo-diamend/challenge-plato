Test task: QA

2. Test design — HTTP API
Here is the OpenAPI specification for internal employee management service:
http-ems.yml

Test task: QA 2

Write five test cases for this service.
Only test cases are needed, you do not need to automate them.
Notes
You need to complete both tasks in 4 hours
If you realize that you do not meet this time, you can complete the task partially.
In that case, indicate what you did and what you decided not to do.
You can use https://editor.swagger.io/ to visualize the attached specification


1. Checking GET for employee information
Pre conditions:
        const body = {
            "url": testurl.com/employee/,
        }
        cy.response({
            method: 'GET',
            type: string
            format: uuid
            name: employeeId
            responses:'200':
        description: Employee Info
        }).then((response) => {
            expect(response.status).to.eq(200)

            A. Open tool where you want to test it
            B. Add Body and URL of the request
            C. Click on make a request
            
            Expected result: Request should response a 200 and Employees information

2. Checking POST for employee id
Pre conditions:
        const body = {
            "url": testurl.com/employee/{employeeId},
            "employeeId": 458456
        }
        cy.response({
            method: 'POST',
            name: employeeId
            summary: employee
        responses:'200':
        description: Employee Info
        }).then((response) => {
            expect(response.status).to.eq(200)

            A. Open tool where you want to test it
            B. Add Body and URL of the request
            C. Click on make a request
            
            Expected result: Request should response a 200 and Employee id

  3. Checking POST and assert schema validation
Pre conditions:
        const body = {
            "url": testurl.com/employee/{employeeId},
            "employeeId": 458456
        }
        cy.response({
            method: 'POST',
            name: employeeId
            summary: employee
            responses:'200':
            description: Employee Info
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.status).to.eq(integer)
            expect(employee.name).to.eq({name})
            expect(employee.name).to.eq({string})
            expect(employee.employeeId).to.eq({employeeId})
            expect(employee.name).to.eq({string})

            A. Open tool where you want to test it
            B. Add Body and URL of the request
            C. Click on make a request
            
            Expected result: Request should response a 200 and response schema     
               
4. GET information about an employee
Pre conditions:
        const body = {
            "url": testurl.com/components/schemas/Employee,
            
        }
        cy.response({
            method: 'GET',
            name: {name}
            salary: {salary}
            department: {department}
        responses:'201':
        description: Employee Info
        }).then((response) => {
            expect(response.status).to.eq(201)

            A. Open tool where you want to test it
            B. Add Body and URL of the request
            C. Click on make a request
            
            Expected result: Request should response a 201 and Employee information

  5. GET information about an employee schemas
  Pre conditions:
        const body = {
            "url": testurl.com/components/schemas/Employee,

        }
        cy.response({
            method: 'GET',
            name: {name}
            salary: {salary}
            department: {department}
             responses:'201':
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.status).to.eq(integer)
            expect(employee.name).to.eq({name})
            expect(employee.name).to.eq({string})
            expect(employee.salary).to.eq({salary})
            expect(employee.salary).to.eq({string})
            expect(employee.department).to.eq({department})
            expect(employee.department).to.eq({string})

            A. Open tool where you want to test it
            B. Add Body and URL of the request
            C. Click on make a request
            
            Expected result: Request should response a 201 and response schema     
               