let color="black";

function setsize(size){
    let board=document.querySelector(".board");
    let squares=board.querySelectorAll("div");
    squares.forEach((div)=>div.remove());
    let amount=size*size;
    board.style.gridTemplateColumns=`repeat(${size},1fr)`;
    board.style.gridTemplateRows=`repeat(${size},1fr)`;
    for(let i=0;i<amount;i++){
        let square=document.createElement("div");
        square.addEventListener("mouseover",colorSquare);
        square.style.backgroundColor="white"; 
        board.insertAdjacentElement("beforeend",square);
        /** them element vao dom o vi tri chi dinh
         * "beforebegin": Trước Element. Chỉ hợp lệ nếu phần tử nằm trong DOM và có parent element.
            "afterbegin": Bên trong Element, trước first child của nó.
            "beforeend": Bên trong Element, sau last child của nó.
            "afterend": Sau Element. Chỉ hợp lệ nếu phần tử nằm trong DOM và có parent element.
         */
    } 
}
setsize(16);

function changeSize(input){
    if(input>0&&input <=100){
        setsize(input); 
        currentSize=input;
        
    }
    else{
        alert("DONT FUCKING DO THAT");
    }
}

function colorSquare(){
    if(color==='random'){
        this.style.backgroundColor=`hsla(${Math.random() * 360}, 100%, 50%, 1)`;
    }
    else 
    { this.style.backgroundColor=color;
    }
}

function changeColor(choice){
    color=choice;
}