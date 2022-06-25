//working on asyn functions

const jeffBuysCake = cakeType=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(cakeType === 'Red forest'){
                resolve('black forest ckae')
            }else{
                reject('No cake 😁')
            }
        },1000)
    })
}
const promise = jeffBuysCake('black forest')
    .then(cake=> console.log(cake))
    .catch(nocake => console.log(nocake))
console.log(promise)