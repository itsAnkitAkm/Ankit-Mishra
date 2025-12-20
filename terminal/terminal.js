const output = document.getElementById("output");
const typed = document.getElementById("typed");

let buffer= "";

document.addEventListener("keydown", (e)=>{

    if(e.key === "Backspace"){
        buffer = buffer.slice(0,-1);
        typed.textContent= buffer;
        return;
    }

        if(e.key === "Enter"){
        printLine(`ankit@dev:~/portfolio$ ${buffer}`)
        buffer = "";
        typed.textContent= "";
        return;
    }

    if(e.key.length === 1){
        buffer+= e.key;
        typed.textContent= buffer;
    }
});

function printLine(text){
    const div = document.createElement("div");
    div.className= "line";
    div.textContent= text;
    output.appendChild(div);

    output.scrollTop = output.scrollHeight;
}