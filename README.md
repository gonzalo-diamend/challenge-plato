Test task: QA

1. Automated tests — documentation site
Write three automated tests for https://very-important.vercel.app/
The link is to a website with documentation that may soon grow to hundreds of pages in
size.

1. Create a project using Playwright (preferably), Selenium, or another similar
framework
2. Write three automated tests
3. Write down the bugs you find and questions you have in a markdown file

We accept submissions implemented in JavaScript, TypeScript, Go, Python, or Java.
2. Test design — HTTP API
Here is the OpenAPI specification for internal employee management service:
http-ems.yml

Test task: QA 2

openapi: 3.0.0
info:
title: Employee management system
version: '1.0'
contact:
url: project-plato.com
name: Project Plato
description: Extremely complex internal system
servers: []
paths:
'/employee/{employeeId}':
parameters:
- schema:
type: string
format: uuid
name: employeeId
in: path
required: true
get:
summary: employee
tags:
- employee
responses:
'200':
description: Employee Info
content:
application/json:
schema:
$ref: '#/components/schemas/Employee'
examples: {}
operationId: get-employee-info
description: Get information about an Employee
/employee:
post:
summary: create
tags:
- employee
responses:
'201':
description: Created
content:
application/json:
schema:
type: object
properties:
employeeId:
type: string
format: uuid
operationId: add-employee
description: Create an Employee
requestBody:
content:

Test task: QA 3

application/json:
schema:
$ref: '#/components/schemas/Employee'
examples:
example:
value:
name: John Smith
salary: 2000
department: IT

components:
schemas:
Employee:
title: Employee
type: object
description: ''
properties:
fullName:
type: string
minLength: 2
maxLength: 128
salary:
type: integer
minimum: 900
maximum: 9000
department:
type: string
maxLength: 32

Write five test cases for this service.
Only test cases are needed, you do not need to automate them.
Notes
You need to complete both tasks in 4 hours
If you realize that you do not meet this time, you can complete the task partially.
In that case, indicate what you did and what you decided not to do.
You can use https://editor.swagger.io/ to visualize the attached specification
