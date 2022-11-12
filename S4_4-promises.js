//module Q giúp làm phẳng khối code chứa các hàm có tham số là 1 callback
// VD
// step1 ( function ( value1 )  { 
//     step2 ( value1 , function ( value2 ) {  
//         step3 ( value2 , function ( value3 ) {  
//             step4 ( value3 , function ( value4 ) {  
//                 //  Làm điều gì đó với value4
//             } ) ;
//         } ) ;
//     } ) ;
// } ) ;
//Giả sử function step1 chạy phát sinh ra lỗi hoặc không trả về giá trị value1 thích hợp thì khối code trên vẫn chạy hết các step2,step3,step4
//Để dừng lại ngay sau khi step1 lỗi thì ta có thể biến nó thành 1 promises để bắt được lỗi nếu có
//Sử dụng module Q ta có thể quy đổi đoạn code trên thành
// Q.fcall(promisedStep1)
// .then(promisedStep2)
// .then(promisedStep3)
// .then(promisedStep4)
// .then(function (value4) {
//     // Do something with value4
// })
// .catch(function (error) {
//     // Handle any error from all above steps
// })
// .done();

const Q = require('q')

const addNumberPromise = function(x,y){
    var deferred = Q.defer()
    addNumbers(x,y,function(err,data){
        if(err){
            deferred.reject(err)
        }else{
            deferred.resolve(data)
        }
    })
    return deferred.promise
}

function addNumbers(x,y,callback) {
    if(typeof x !== 'number'){
        callback(new Error('The number must be a number'))
    }if(typeof y !== 'number'){
        callback(new Error('The number must be a number'))
    }
    let result = x + y
    callback(null,result)
}

addNumberPromise(1,2)
.then(function(result){
    return addNumberPromise(result,3)
})
.then(function(result){
    return  addNumberPromise(result,4)
})
.then(function(result){
    console.log('Result = '+ result)
})
.catch(function(err){
    console.log(err)
})


