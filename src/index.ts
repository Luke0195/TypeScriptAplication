import  * as express  from 'express'

const app = express();


app.get('/', (request, response) =>{
  return response.json({message: 'Texto'})
})

app.listen(3331, () =>{
  console.log('O servidor está rodando na porta http://localhost:3331');
});