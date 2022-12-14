const express = require("express")
const expressSession = require("express-session")
const app = express()
const port = 3000
const exphbs = require("express-handlebars")
const cookieParser = require("cookie-parser")

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

app.get("/greeting", (req, res) => {
	const data = {
		message: "Hello, world!",
		color: req.query.color,
		colors: req.session.colors,
		name: req.cookies.name,
	}
	res.render("ex", data)
})

app.get("/set-colors", (req, res) => {
	req.session.colors = ["red", "green", "yellow", "blue"]
	res.redirect("/greeting")
})
app.get("/set-name", (req, res) => {
	res.cookie("name", "Vũ Viết Quý")
	res.redirect("/greeting")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
