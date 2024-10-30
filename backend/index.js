const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const cors = require('cors')

const app = express() 

app.use(
  session({
    name: 'session',
    secret: 'ecoleaf_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function() {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true
    }
}))

app.use((req, res, next) => {
  if(req.session.userid){
    res.locals.session = req.session
  }
  
  next()
})

app.use(cors({
  origin: '*',
  allowedHeaders: ['Authorization', 'Content-Type'], 
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
}))

app.use(express.static('public'))
app.use(express.json())

const UserRoutes = require("./routes/UserRoutes")
const PlantRoutes = require("./routes/PlantRoutes")
const PostRoutes = require("./routes/PostRoutes")
app.use('/plantas', PlantRoutes)
app.use('/users', UserRoutes)
app.use('/blog', PostRoutes)

app.listen(3000, () => {
  console.log('>> server on')
})