const readline = require('readline')
rl = readline.createInterface(process.stdin, process.stdout)
//Đặt kí tự mỗi khi dòng mới là --> (lời nhắc)
rl.setPrompt('--> ')
rl.prompt()

let toDoList = []

var commands = {
    ls:function(){
        console.log(toDoList)
    },
    add:function(item){
        toDoList.push(item)
    },
    rm:function(item){
        toDoList = toDoList.filter(el=>el!=item)
        console.log(`Bạn sẽ xóa phần tử ${item} khỏi toDoList`);
    }
}
//sự kiện line của rl là 1 sự kiện có sẵn của thư viện readline
rl.on('line',function(line){
    var words = line.split(' ')
    command = words.shift()
    argsStr = words.join(' ')
    commands[command](argsStr)
    rl.prompt()
})

//on => phát ra sự kiện, start 1 callback
//emit => kích hoạt sự kiện kèm tham số
