const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const cors = require('cors')

const app = express() 

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  allowedHeaders: ['Authorization', 'Content-Type'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
}));

app.use(session({
  secret: 'ecoleaf_secret',
  resave: false,
  saveUninitialized: true,
  store: new FileStore({
    logFn: function() {},
    path: require('path').join(require('os').tmpdir(), 'sessions'),
  }),
  cookie: {
    secure: false,
    sameSite: false,
    maxAge: 360000,
    expires: new Date(Date.now() + 360000),
    httpOnly: true
  }
}));


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