// function that takes in a string and returns all the first initial to be in uppercases

String.prototype.toProperCase = function(){
    return this.split(" ").map(items=>{
        return items.charAt(0).toUpperCase() + items.slice(1)
    }).join(" ")
}