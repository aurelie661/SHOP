// String.prototype.toJson = function(){
//     let result;
//     try{
//         result = JSON.parse(this);
//     }
//     catch(error){
//         console.log(error, this);
//     }
//     return result;
// }

// JSON.tryParse = function(text){
//     let result;
//     try{
//         result = JSON.parse(text);
//     }
//     catch(error){
//         console.log(error, text);
//     }
//     return result;
// }

// Date.prototype.toShortDateString = function(sep = '/'){
//     let date = this.toJSON().slice(0,10);
//     return date.slice(8, 10) + sep 
//             + date.slice(5, 7) + sep 
//             + date.slice(0, 4);
// }

// String.prototype.capitalize = function () {
//     let result;
//     try {
//         result = this.charAt(0).toUpperCase() + this.slice(1)
//     } catch (error) {
//         console.log(error, this)
//     }
//     return result;
// }

// Array.prototype.first = function(){
//     return [...this].shift();
// }
// Array.prototype.last = function(){
//     return [...this].pop();
// }

// String.prototype.remove = function(pattern) {
//     return this.replace(pattern, "");
// }
// String.prototype.splitCamelCase = function(){
//     return this.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
// }

// Array.prototype.toString = function(){
//     if(this.some(it => typeof it != "string")){
//         return this.join(',');
//     }
//     return this.reduce((acc,cur) => {
//         return acc + cur;
//     })
// }