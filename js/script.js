// var i = 1;

// function add(obj) {
//     console.log (obj.value);
//     if (obj.value !== '') {
        
//         var div = document.createElement("div");
//         div.setAttribute('id', 'div_id' + i);
//         div.setAttribute('onclick', 'countClick()');

//         div.style = "position:absolute;height: 50px;width: 50px;background: black; ";
//         div.style.top = Math.floor(Math.random()*60) + "px";
//         div.style.left = Math.floor(Math.random()*60)+ "px";


//         const content = document.querySelector(".container");
//         content.appendChild(div);


//         obj.value = '';
      

//         i = i + 1;

        

//     }
//     else{
//         alert('Please type something');
//     }
// }

//Div 1
var div1 = document.createElement("div");
div1.id='div1';
div1.style = "position:absolute;height: 50px;width: 50px;background: red; ";
// div1.style.top = Math.floor(Math.random()*90) + "px";
// div1.style.left = Math.floor(Math.random()*90)+ "px";
const content1 = document.querySelector(".container");
content1.appendChild(div1);

//Div 2
var div2 = document.createElement("div");
div2.id='div2';
div2.style = "position:absolute;height: 50px;width: 50px;background: black; ";
div2.style.top = Math.floor(Math.random()*60) + "px";
div2.style.left = Math.floor(Math.random()*60)+ "px";
const content2 = document.querySelector(".container");
content2.appendChild(div2);

//Div 3
var div3 = document.createElement("div");
div3.id='div3' 
div3.style = "position:absolute;height: 50px;width: 50px;background: grey; ";
div3.style.top = Math.floor(Math.random()*80) + "px";
div3.style.left = Math.floor(Math.random()*80)+ "px";
const content3 = document.querySelector(".container");
content3.appendChild(div3);


//Div 4
var div4 = document.createElement("div");
div4.id='div4'
div4.style = "position:absolute;height: 50px;width: 50px;background: white; ";
div4.style.top = Math.floor(Math.random()*50) + "px";
div4.style.left = Math.floor(Math.random()*50)+ "px";
const content4 = document.querySelector(".container");
content4.appendChild(div4);






function movement1(){
    const box_1 = document.getElementById('div1');
    var positionX = 0;
    var positionY = 200;

    
    var fst = setInterval(First, 1);
    function First(){
    
    positionX += 1;
    positionY +=1;
    box_1.style.left = positionX + "px";
    box_1.style.top = positionY + "px";
    // console.log(positionX);
    if (positionX == 215 && positionY == 415 ){  //&& positionY == 415
        clearInterval(fst);
        
       var  y =  setInterval(Move,1); //415
        function Move(){
            positionX += 1;
            positionY -=1;
            box_1.style.left = positionX + "px";
            box_1.style.top = positionY + "px";
            if (positionX == 415){
                clearInterval(y);
                
                var x = setInterval(X_Move, 1); //630
                function X_Move(){
                    positionX -= 1;
                    positionY -= 1;
                    box_1.style.left = positionX + "px";
                    box_1.style.top = positionY + "px";
                    if (positionX == 200){
                        clearInterval(x);
                        var xy = setInterval(top_Move, 1); //630
                        
                        function top_Move(){
                            positionX -= 1;
                            positionY += 1;
                            box_1.style.left = positionX + "px";
                            box_1.style.top = positionY + "px";
                            if (positionX == 0 && positionY == 200){
                                clearInterval(xy); 
                            }
                        }     
                    }  
                }  
            } 
    }
    } 
} 
}

setInterval(movement1, 3340);



//Div 2 movement
function movement2(){
    const box_1 = document.getElementById('div2');
    var positionX = 0;
    var positionY = 200;

    
    var fst = setInterval(First, 1);
    function First(){
    
    positionX += 1;
    positionY +=1;
    box_1.style.left = positionX + "px";
    box_1.style.top = positionY + "px";
    // console.log(positionX);
    if (positionX == 215 && positionY == 415 ){  //&& positionY == 415
        clearInterval(fst);
        
       var  y =  setInterval(Move,1); //415
        function Move(){
            positionX += 1;
            positionY -=1;
            box_1.style.left = positionX + "px";
            box_1.style.top = positionY + "px";
            if (positionX == 415){
                clearInterval(y);
                
                var x = setInterval(X_Move, 1); //630
                function X_Move(){
                    positionX -= 1;
                    positionY -= 1;
                    box_1.style.left = positionX + "px";
                    box_1.style.top = positionY + "px";
                    if (positionX == 200){
                        clearInterval(x);
                        var xy = setInterval(top_Move, 1); //630
                        
                        function top_Move(){
                            positionX -= 1;
                            positionY += 1;
                            box_1.style.left = positionX + "px";
                            box_1.style.top = positionY + "px";
                            if (positionX == 0 && positionY == 200){
                                clearInterval(xy); 
                            }
                        }     
                    }  
                }  
            } 
    }
    } 
} 
}

setInterval(movement2, 3000);


//Div 3 movement
function movemet3(){
    const box_1 = document.getElementById('div3');
    var positionX = 0;
    var positionY = 200;

    
    var fst = setInterval(First, 1);
    function First(){
    
    positionX += 1;
    positionY +=1;
    box_1.style.left = positionX + "px";
    box_1.style.top = positionY + "px";
    // console.log(positionX);
    if (positionX == 215 && positionY == 415 ){  //&& positionY == 415
        clearInterval(fst);
        
       var  y =  setInterval(Move,1); //415
        function Move(){
            positionX += 1;
            positionY -=1;
            box_1.style.left = positionX + "px";
            box_1.style.top = positionY + "px";
            if (positionX == 415){
                clearInterval(y);
                
                var x = setInterval(X_Move, 1); //630
                function X_Move(){
                    positionX -= 1;
                    positionY -= 1;
                    box_1.style.left = positionX + "px";
                    box_1.style.top = positionY + "px";
                    if (positionX == 200){
                        clearInterval(x);
                        var xy = setInterval(top_Move, 1); //630
                        
                        function top_Move(){
                            positionX -= 1;
                            positionY += 1;
                            box_1.style.left = positionX + "px";
                            box_1.style.top = positionY + "px";
                            if (positionX == 0 && positionY == 200){
                                clearInterval(xy); 
                            }
                        }     
                    }  
                }  
            } 
    }
    } 
} 
}

setInterval(movemet3, 3500);



//Div 4 movement
function movemet4(){
    const box_1 = document.getElementById('div4');
    var positionX = 0;
    var positionY = 200;

    
    var fst = setInterval(First, 1);
    function First(){
    
    positionX += 1;
    positionY +=1;
    box_1.style.left = positionX + "px";
    box_1.style.top = positionY + "px";
    // console.log(positionX);
    if (positionX == 215 && positionY == 415 ){  //&& positionY == 415
        clearInterval(fst);
        
       var  y =  setInterval(Move,1); //415
        function Move(){
            positionX += 1;
            positionY -=1;
            box_1.style.left = positionX + "px";
            box_1.style.top = positionY + "px";
            if (positionX == 415){
                clearInterval(y);
                
                var x = setInterval(X_Move, 1); //630
                function X_Move(){
                    positionX -= 1;
                    positionY -= 1;
                    box_1.style.left = positionX + "px";
                    box_1.style.top = positionY + "px";
                    if (positionX == 200){
                        clearInterval(x);
                        var xy = setInterval(top_Move, 1); //630
                        
                        function top_Move(){
                            positionX -= 1;
                            positionY += 1;
                            box_1.style.left = positionX + "px";
                            box_1.style.top = positionY + "px";
                            if (positionX == 0 && positionY == 200){
                                clearInterval(xy); 
                            }
                        }     
                    }  
                }  
            } 
    }
    } 
} 
}

setInterval(movemet4, 4000);