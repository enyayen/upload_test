const myName = 'abc '// '美女' //'恩雅'
/*
// if else 判斷式
// if ( 條件 ) { 執行 } else { 執行 }
// 條件 == > < 
// 多行註解快捷鍵:command+/ , (雙數次執行則取消註解)

if (myName == '恩雅') {
    console.log('答對了！')
} else if (myName == '美女'){
    console.log('過獎了')
} else {
    console.log('答錯了！')
}
// number compare
let tom = 9
let Ken = 8
if(tom>Ken){
    console.log('yes')
} else {
    console.log('no')
}

// for迴圈
// 第一個初始值，第二個結束條件，第三個中間流程
for(i=0;i<5;i++){
    console.log(i)
}
// for with array
let myBag=['蘋果','荔枝','木瓜','榴槤']
for(j=0;j<myBag.length;j++){
    console.log(j,' is ',myBag[j]) // combine with ',' then output has 1 blank, e.g.2 ' is ' '木瓜'，用於debug輸出
    //console.log(j+' is '+myBag[j]) // combine with '+' then output has no 1 blank, e.g.0 is 蘋果 , 建議用於字串
}

// 隨機 random
let r = Math.random() // between 0~1, >=0, <0 
// console.log(r)

// 結合random和if else
if(r<0.25){
    console.log('今天運氣滿分')
} else {
    console.log('今天運氣不好~')
}

// 4 condition
if(r<0.25){
    console.log('韓國')
} else if(r<0.5){
    console.log('維也納')
} else if(r<0.75){
    console.log('捷克')
} else if(r<1){
    console.log('英格蘭')
}

// 實務：發票兌獎檢查
const prize = 36822639
const myReceipt = [12343221,56234123,21245212,36822639,56234123,21245212,36822639]
myReceipt.forEach((receipt)=>{
    if(receipt==prize){
        console.log('恭禧中獎')
    }
})
// solve-2
let checkNum = 0
for(i=1;i<myReceipt.length;i++){
    if(prize==myReceipt[i]){
        checkNum = checkNum + 1
        console.log('congratulation')
    }
}
console.log('You got ',checkNum)

// 函數 function，()裡面是參數，命名叫什麼都可以，也可以不帶
// {}裡面為執行內容
// 之後要使用時，function_name()即可 
function test(name,age){
    console.log('您的大名為',name,'，年齡是',age,'歲')
}
test('Enya',99)
test('Kaiola',77)

// 定時 setTimeOut setinterval 
// 做一次 setTimeout( function(){ 執行 }, 毫秒 );
// 重複做 setinterval( function(){ 執行 }, 毫秒 );
// 中斷重複為ctrl+c
setTimeout(function(){
    console.log('連線逾時hahaha')
},3000)
// test interval
let cnt = 0
setInterval(function(){
    cnt = cnt + 1
    console.log('each 2 sec running',cnt)
},2000)
*/

//牛刀小試
//1.利用random隨機產生一組數字
//2.利用if else來判斷<0.2就顯示中獎，其餘顯示沒中獎(中獎機率20%)。
//3-1.利用setInterval，每5秒開一次獎。
//3-2.利用for迴圈連續開三次。
let r2 = Math.random()
console.log(r2)
if(r2<0.2){
  console.log('中獎')
} else {
  console.log('沒中獎')
}
// 3.1
let cnt2 = 1
setInterval(function(){
    cnt2 = cnt2 + 1
    let r3 = Math.random()
    console.log(cnt2+'-th is ..'+r3)
    if(r3<0.2){
        console.log(r3,' 中獎')
    }
},5000)
// 3.2
// for(i2=0;i2<3;i2++){
//     console.log(i2+1+'-th is ... '+Math.random()) 
// }


