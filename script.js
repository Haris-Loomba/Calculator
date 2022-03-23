//  Writing Numbers In The Output Area
function cal(val){
    document.getElementById("number-box").value+=val;
}
// Clearing The Output
function cler(){
 document.getElementById("number-box").value = " "
}
// Solving The Input
function sol(){
    let x = document.getElementById("number-box").value
    y=eval(x)
    document.getElementById("number-box").value=y
}
// SQRT Function
function sqrt(){
    let x = document.getElementById("number-box").value
    y=Math.sqrt(x)
    document.getElementById("number-box").value=y
}
// Del
function del(){
    let c = document.getElementById("number-box").value
    let d = c.slice(0,1)
    document.getElementById("number-box").value = d
}
