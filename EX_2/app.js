const express = require("express")
const engine = require("express-handlebars")

const app = express()
const port = 3000

app.use(express.static("./public"))

const hbs = engine.create({
	extName: ".hbs",
	layoutsDir: "views/layouts/",
	defaultLayout: "main.hbs",
})

app.engine(".hbs", hbs.engine)
app.set("view engine", "hbs")
app.set("views", "./views")

const holidays = [
	{
		name: "Tết",
		content: `"Tết Nguyên Đán là dịp lễ đầu năm mới theo âm lịch của các nước Đông Á như Trung Quốc, Đài Loan, bán đảo Triều Tiên, Nhật Bản và các nước Đông Nam Á như Singapore, Malaysia, Indonesia và Việt Nam. Tại Việt Nam trước ngày Tết còn có phong tục như "cúng Táo Quân" và "cúng Tất Niên"`,
		image: "/image/tet.png",
		link: "tet",
	},
	{
		name: "Noel",
		content: `Lễ Giáng Sinh là lễ hội kỷ niệm sự ra đời của Chúa Giêsu, được tổ chức chủ yếu vào ngày 25 tháng 12 hằng năm như một lễ kỷ niệm tôn giáo và văn hóa của hàng tỷ người trên thế giới.`,
		image: "/image/noel.png",
		link: "noel",
	},
	{
		name: "Tết Trung thu",
		content:
			"Tết Trung thu 、còn được gọi là Tết trông Trăng hay Tết hoa đăng theo Âm lịch là ngày Rằm tháng 8 hằng năm, là một lễ hội truyền thống được kỉ niệm ở văn hóa của Việt Nam. Một văn hoá lâu đời từ Trung Quốc nhưng đến hiện tại đã phát triển thành ngày trẻ em của Việt Nam",
		image: "/image/tettrungthu.png",
		link: "tettrungthu",
	},
]

app.get("/", (req, res) => {
	const data = {
		title: "Holidays",
		holidays,
	}
	res.render("index", data)
})

app.get("/:holiday", (req, res) => {
	let holidayName = req.params.holiday
	let data = holidays.find((holiday) => holiday.link == holidayName)
	data.title = data.name
	res.render("tet", data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
