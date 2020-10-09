import  express from 'express';

const app = express();

app.get('/', (request, response) =>{
  return response.json({message: ' Desenvolvimento de uma aplicação utilizando typeScript'})
})