function percentage(){
    let name = prompt("enter your name");
    let stdobtmarks = document.querySelector("#ob1").value;
    let stdtotmarks = document.querySelector("#tot1").value;
    let res =(stdobtmarks/stdtotmarks)*100;
    document.querySelector("#changeit").innerHTML=("your result is "+res+"%");
}