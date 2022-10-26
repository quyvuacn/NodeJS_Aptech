## Lỗi và cách fix :

### Video : S2-Video 2-Mapping Requests
    1.path.exists không còn hỗ trợ thay bằng fs.exists
    2.mime.lockup => Dành cho version 1. Thay bằng mime.getType. Muốn dùng thì phải cài bản ver1 : npm install mime@^1
### Video : S2-Video 3-Dynamic Web Applications
    1.app.del không còn dùng nữa => app.delete
    2.res.send => res.sendStatus
    3.app.use(express.bodyParser()) => app.use(express.urlencoded())
      hoặc cài gói bodyParser để sử dụng riêng npm install body-parser 
[video tham khảo - F8](https://www.youtube.com/watch?v=LlfdqnK28Cg&list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3&index=16)
    4.app.use(express.logger()) => logger không còn đóng gói chung với express 
      app.use(express.logger()) thay bằng app.use(morgan('combined')) (npm i morgan)
[video tham khảo - F8](https://youtu.be/seI--u0hSeg?list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3)
            
