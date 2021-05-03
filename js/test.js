var i = 1;

function add(obj) {
    console.log (obj.value);
    if (obj.value !== '') {
        
        var div = document.createElement("div");
        div.setAttribute('id', 'div_id'+ i );
        div.setAttribute('onclick', 'countClick()');

        div.style = "position:absolute;height: 50px;width: 50px; ";
        div.style.top = Math.floor(Math.random()*100) + "px";
        div.style.left = Math.floor(Math.random()*100)+ "px";
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        div.style.background = "#" + randomColor;


        const content = document.querySelector(".container");
        content.appendChild(div);


        obj.value = '';
      

        i = i + 1;

        

    }
    else{
        alert('Please type something');
    }
}


// function movement1(){
   
//     const box_1 = document.getElementById('div_id');
//     var positionX = 0;
//     var positionY = 200;
   
    
//     var fst = setInterval(First, 1);
//     function First(){
    
//     positionX += 1;
//     positionY +=1;
//     box_1.style.left = positionX + "px";
//     box_1.style.top = positionY + "px";
//     // console.log(positionX);
//     if (positionX == 215 && positionY == 415 ){  //&& positionY == 415
//         clearInterval(fst);
        
//        var  y =  setInterval(Move,1); //415
//         function Move(){
//             positionX += 1;
//             positionY -=1;
//             box_1.style.left = positionX + "px";
//             box_1.style.top = positionY + "px";
//             if (positionX == 415){
//                 clearInterval(y);
                
//                 var x = setInterval(X_Move, 1); //630
//                 function X_Move(){
//                     positionX -= 1;
//                     positionY -= 1;
//                     box_1.style.left = positionX + "px";
//                     box_1.style.top = positionY + "px";
//                     if (positionX == 200){
//                         clearInterval(x);
//                         var xy = setInterval(top_Move, 1); //630
                        
//                         function top_Move(){
//                             positionX -= 1;
//                             positionY += 1;
//                             box_1.style.left = positionX + "px";
//                             box_1.style.top = positionY + "px";
//                             if (positionX == 0 && positionY == 200){
//                                 clearInterval(xy); 
//                             }
//                         }     
//                     }  
//                 }  
//             } 
//     }
//     } 
// } 
// }

// setInterval(movement1, 3340);
