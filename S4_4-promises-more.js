function addnumbers(x,y){
    return new Promise(function(resolve,reject){
        if(typeof x !== 'number'){
            reject(new Error('The number must be a number'))
        }
        if(typeof y !== 'number'){
            reject(new Error('The number must be a number'))
        }
        let result = x+y
        resolve(result)
    })
}

addnumbers(3,4)
.then(function(result){
    return addnumbers(result,5)
})
.then(function(result){
    return addnumbers(result,6)
})
.then(function(result){
    console.log(result)
})
.catch(function(err){
    console.log(err)
})