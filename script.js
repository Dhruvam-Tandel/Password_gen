function generatePass() {
    let ans = document.querySelector("#out")
    let le = document.getElementById("nu").value;
    let upp = document.getElementById("u").checked;
    let low = document.getElementById("l").checked;
    let nue = document.getElementById("n").checked;
    let spa = document.getElementById("s").checked;

    let pass = '';
    let strA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let stra = 'abcdefghijklmnopqrstuvwxyz'
    let str1 = '0123456789'
    let str_ = '!@#$%^&*()~?/[]{}'

    if (upp == true && low == true && nue == true && spa ==true) {
        for (let i = 1; i <= le; i++) {
            let str=strA+stra+str1+str_;
            let char = Math.floor(Math.random()* str.length + 1);
            console.log(char);
            pass =pass.concat(str.charAt(char))
            console.log(pass);
        }
    }
    else if (upp == true && low == true &&nue==true) {
        for (let i = 1; i <= le; i++) {
            let str=strA+stra+str1;
            let char = Math.floor(Math.random()* str.length + 1);
            pass =pass.concat(str.charAt(char))
        }
    }
    else if (upp == true  && nue==true) {
        for (let i = 1; i <= le; i++) {
            let str=strA+str1;
            let char = Math.floor(Math.random()* str.length + 1);
            pass =pass.concat(str.charAt(char))
        }
    }
    else if (upp == true && spa==true) {
        for (let i = 1; i <= le; i++) {
            let str=strA+str_;
            let char = Math.floor(Math.random()* str.length + 1);
            pass =pass.concat(str.charAt(char))
        }
    }
    else if (upp == true && low == true) {
        for (let i = 1; i <= le; i++) {
            let str=strA+stra;
            let char = Math.floor(Math.random()* str.length + 1);
            pass =pass.concat(str.charAt(char))
        }
    }
    else if (upp == true ) {
        for (let i = 1; i <= le; i++) {
            let str=strA;
            let char = Math.floor(Math.random()* str.length + 1);
            pass =pass.concat(str.charAt(char))
        }
    }
    console.log(pass)
    document.getElementById("out").value=pass
}

let bu = document.querySelector("button")
bu.addEventListener("click", generatePass);