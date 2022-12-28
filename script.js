//your code here
let  itemInput = document.getElementById('item-name-input');
let priceInput = document.getElementById('item-price-input');
let button = document.getElementById('add');
let table = document.getElementById('table');
let total = document.getElementById('total');

// let priceArr = [];
let sum =0;
function addItem(){

total.innerText=2;
let item = itemInput.value;
let price = priceInput.value;

if(item !=='' && price !==""){
 
 let row = document.createElement('tr');
 // row.innerText='';
 // priceArr.push(Number(price));
 sum+=Number(price);
 // console.log(priceArr);
 

row.innerHTML =`<td>${item} </td> <td>${price}</td>`

// for(let i=0;i < priceArr.length;i++){
//   sum += priceArr[i];
// }
console.log(sum);
table.append(row);
total.innerText = sum;

itemInput.value='';
priceInput.value='';


}



}
button.onclick=addItem;