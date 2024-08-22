import express from 'express'
import publicRoutes from './router/public.js'
import privateRoutes from './router/private.js'
import auth from './middlewares/auth.js'

const app = express()
app.use(express.json())

app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)


 app.listen(8080,() => console.log("Servido está rondando"))


 //laurasantos0922
 //gOCtP0FCHtn00s9T
 //mongodb+srv://laurasantos0922:<password>@cluster0.pykxh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0