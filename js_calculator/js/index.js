document.getElementById("id_num2").value = "";
document.getElementById("id_sum").value="";

/** textbox */
var ans = document.getElementById("id_sum");
var num = document.getElementById("id_num2");

/** buttons */
var btn1 = document.getElementById("id_btn_1");
var btn2 = document.getElementById("id_btn_2");
var btn3 = document.getElementById("id_btn_3");
var btn4 = document.getElementById("id_btn_4");
var btn5 = document.getElementById("id_btn_5");
var btn6 = document.getElementById("id_btn_6");
var btn7 = document.getElementById("id_btn_7");
var btn8 = document.getElementById("id_btn_8");
var btn9 = document.getElementById("id_btn_9");
var btn0 = document.getElementById("id_btn_0");
var btn_add = document.getElementById("id_btn_add");
var btn_div = document.getElementById("id_btn_div");
var btn_mul = document.getElementById("id_btn_mul");
var btn_sub = document.getElementById("id_btn_sub");
var btn_equal = document.getElementById("id_btn_equal");
var btn_dot = document.getElementById("id_btn_dot");

/**var */
var sum;

btn1.onclick=function(){
    num.value="1";
}
btn2.onclick=function(){
    num.value="2";
}
btn3.onclick=function(){
    num.value="3";
}
btn4.onclick=function(){
    num.value="4";
}
btn5.onclick=function(){
    num.value="5";
}
btn6.onclick=function(){
    num.value="6";
}
btn7.onclick=function(){
    num.value="7";
}
btn8.onclick=function(){
    num.value="8";
}
btn9.onclick=function(){
    num.value="9";
}
btn0.onclick=function(){
    num.value="0";
}

btn_add.onclick=function(){
    ans.value=num.value+"+";
    sum = parseInt(num.value);
}
btn_mul.onclick=function(){
    ans.value=num.value+"*";
    sum = parseInt(num.value);
}
btn_sub.onclick=function(){
    ans.value=num.value+"-";
    sum = parseInt(num.value);
}
btn_div.onclick=function(){
    ans.value=num.value+"/";
    sum = parseInt(num.value);
}
btn_equal.onclick=function(){
    ans.value=ans.value+num.value;
    num.value=eval(ans.value);  
}

/** disable num inc dec on wheel */
num.onwheel=function(){
    num.blur();
}


// var btn = document.getElementsByTagName("button");


/*
// var add = document.getElementById("btn_add");
// var sub = document.getElementById("btn_sub");
// var mul = document.getElementById("btn_mul");
// var div = document.getElementById("btn_div");


// // var num1,num2;
// // function onClk()
// // {
// //     alert("hello3");
// //     num1 = parseInt(document.getElementById("id_num1").value);
// //     num2 = parseInt(document.getElementById("id_num2").value);
// // };

// // add.onclick = function(){
// //     alert("hello2");
// //     onClk();
// //     alert("hello4");
// //     document.getElementById("id_ans").value = num1+num2;
// // };

// // sub.onclick = function () {
// //     onClk();
// //     document.getElementById("id_ans").value = num1-num2;
// // };

// // mul.onclick = function () {
// //     onClk();
// //     document.getElementById("id_ans").value = num1*num2;
// // };

// // div.onclick = function () {
// //     onClk();
// //     document.getElementById("id_ans").value = num1/num2;
// // };


// 
// function fun_add()
// {
//     onClk();
//     document.getElementById("id_ans").value = num1+num2;
// };

// function fun_sub()
// {
//     onClk();
//     document.getElementById("id_ans").value = num1-num2;
// };

// function fun_mul()
// {
//     onClk();
//     document.getElementById("id_ans").value = num1*num2;
// };

// function fun_div()
// {
//     onClk();
//     document.getElementById("id_ans").value = num1/num2;
// };
//
*/