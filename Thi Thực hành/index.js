const express = require("express")
const expressSession = require("express-session")
const bodyParser = require("body-parser")
const app = express()
const port = 3000
const exphbs = require("express-handlebars")
const cookieParser = require("cookie-parser")
const { info } = require("console")
const { application } = require("express")

app.use(express.static("./public"))

app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.json())

const hbs = exphbs.create({
	extName: ".hbs",
	layoutsDir: "views/layouts/",
	defaultLayout: "main.hbs",
})

app.engine(".hbs", hbs.engine)
app.set("view engine", "hbs")
app.set("views", "./views")

app.use(cookieParser())
app.use(
	expressSession({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
	}),
)
app.use((req, res, next) => {
	req.session.logged
		? (res.locals.logged = true)
		: (res.locals.logged = false)
	next()
})
app.get("/", (req, res) => {
	data = {
		notification:
			req.session.notification || "Please register so we can serve you",
	}
	delete req.session.notification
	res.render("home", data)
})
app.post("/", (req, res) => {
	console.log(req.body)
	res.redirect("/")
})
app.get("/register", (req, res) => {
	res.render("register")
})
app.post("/register", (req, res) => {
	console.log(req.body)
	req.session.notification = "Thank you for the information"
	req.session.logged = true
	res.redirect("/")
})
app.get("/logout", (req, res) => {
	req.session.logged = false
	res.redirect("/")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
