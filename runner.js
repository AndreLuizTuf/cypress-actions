const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjkxZDQ0MTkwLTY2OGItNDhjYi05YjcwLTJjZWRkYzQ1ZmMxYi0xNjg1MTMyNDk3ODk2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOTRjZmY1YjUtOGUxNC00MjhmLWE4YWItNTMxMDIyYTQ5YWIwIiwidHlwZSI6InQifQ.UUL_cMqDLaTEq92Y9iqtmWPzNUD-KtUDEJdWCo83u2I' 

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
