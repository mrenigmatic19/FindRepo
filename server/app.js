const express=require('express')
const http=require('http')
const path=require('path')
const ejs=require('ejs')
const session=require('express-session')
const flash= require('connect-flash')


app=express()
app.use(express.json())
app.use(flash())
app.use(express.static("../public"))
app.use(express.urlencoded({extended:false}))
app.use(session({
    secret:"FindRepo",
    resave:true,
    saveUninitialized:true,
}))


const templatepath=path.join(__dirname,'../public')
app.set("view engine","ejs") 
app.set("views",templatepath)

const indexRouter=require('./router/indexRouter')
const resultRouter=require('./router/resultRouter')

app.use('/',indexRouter)
app.use('/result',resultRouter)

app.get('/testing',async (req,res)=>{
    res.render("result")
})
const port=process.env.PORT||3001
app.listen(port,()=>{
    console.log('server on');
})