var wakeUp = function(callback){
    console.log("I'm waking up!")
    callback()
}

var checkPhone = function(callback){
    console.log("Checking phone....")
    callback()
}

var eatBreakfast = function(callback){
    console.log("I'm eating breakfast...")
    if(callback){
        if(typeof callback=='function'){
            callback()
        }
    }
}

// wakeUp()
// checkPhone()
// eatBreakfast() 

wakeUp(function(){
    checkPhone(function(){
        eatBreakfast();
    })
})

