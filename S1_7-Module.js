function addUser(user){
    console.log('Thêm sinh viên '+user)
}

function rmUser(user){
    console.log('Xóa sinh viên '+user)
}

function lsUser(){
    console.log('Đây là listUser');
}

exports.addUser = addUser
exports.rmUser = rmUser
exports.lsUser =lsUser

// module.exports = {
//     addUser,
//     rmUser,
//     lsUser
// }