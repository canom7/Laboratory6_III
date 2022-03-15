//SQUARE
var drawSquare = (num, char) =>{
    var row = "";
    //Columnas
    for (var i = 0; i < num; i++){
        row = row + char;
    }
    //Filas
    for (var x = 0; x < num; x++){
        console.log(row);
    }  
}
drawSquare(4, "*");

console.log("-----------------------");

//SQUARE WITH BORDER
var drawSquareWithBorder = (num, charBorder, charInner) =>{
    var rowInner = "";
    var rowBorder = "";
    for (var i = 0; i < num; i++){
        if (i === 0 || i === num-1){
            rowInner = rowInner + charBorder;
            rowBorder = rowBorder + charBorder;
        }else{
            rowInner = rowInner + charInner;
            rowBorder = rowBorder + charBorder;
        }
    }
    for (var x = 0; x < num; x++){
        if (x=== 0 || x === num -1){
            console.log(rowBorder);
        }else{
            console.log(rowInner);
        }
    }
}
drawSquareWithBorder(4, "B", "*");

console.log("-----------------------");

//SQUARE DIAGONAL LEFT-RIGHT
var drawSquareDiagonañLR = (num, charDiagonal, charUp, charDown) =>{
    var row = "";
    //FIRST ROW
    for (var i = 0; i < num; i++){
        if (i === 0){
            row = row + charDiagonal;
        }else{
            row = row + charUp;
        }
    }console.log(row);

    //MIDDLE ROWS
    var temp = 0;
    for (var z = 0; z < num-2; z++){
        temp++;
        for (var x = num -2; x < num -1; x++){
            var row = "";
            for (var i = 0; i < num; i++){
                if (i < temp){
                    row = row + charDown;
                }else if(i === temp){
                    row = row + charDiagonal;
                }else{
                    row = row + charUp;
                }
            }  
        }
        console.log(row);        
    }
    
    //LAST ROW
    row = "";
    for (var i = 1; i <= num; i++){
        if (i === num){
            row = row + charDiagonal;
        }else{
            row = row + charDown;
        }
    }console.log(row);
}
drawSquareDiagonañLR(7, "\\", "A", "B");

console.log("-----------------------");

//SQUARE DIAGONAL RIGHT-LEFT
var drawSquareDiagonañRL = (num, charDiagonal, charUp, charDown) =>{
    var row = "";
    //FIRST ROW
    for (var i = 1; i <= num; i++){
        if (i === num){
            row = row + charDiagonal;
        }else{
            row = row + charUp;
        }
    }console.log(row);

    //MIDDLE ROWS
    var temp = num-1;
    for (var z = 0; z < num-2; z++){
        temp--;
        for (var x = num -2; x < num -1; x++){
            var row = "";
            for (var i = 0; i < num; i++){
                if (i < temp){
                    row = row + charUp;
                }else if(i === temp){
                    row = row + charDiagonal;
                }else{
                    row = row + charDown;
                }
            }  
        }
        console.log(row);        
    }
    
    //LAST ROW
    row = "";
    for (var i = 0; i < num; i++){
        if (i === 0){
            row = row + charDiagonal;
        }else{
            row = row + charDown;
        }
    }console.log(row);
}
drawSquareDiagonañRL(10, "/", "A", "B");

console.log("-----------------------");

//HALF-DIAMOND
var drawHalfDiamond = (num, char) =>{
    for (var i = 0; i < num; i++){
        var row = "";
        for (var x = 0; x <= i; x++){
            row = row + char;           
        }console.log(row);  
    }
    for (var i = num; i > 0; i--){
        var row = "";
        for (var x = 1; x <= i; x++){
            row = row + char;           
        }console.log(row);  
    }   
}
drawHalfDiamond(5, "*");

console.log("-----------------------");

//PYRAMID
var drawPyramid = (num, char) => {
    for (var i = 1; i <= num; i++) {
        var rows = "";
        for (var x = 1; x <= num - i; x++) {
            rows = rows + " ";
        }
        for (var k = 0; k < i*2 - 1; k++) {
            rows = rows + char;
        }
        console.log(rows);
    }
  }
  drawPyramid(4, "*");

  console.log("-----------------------");

//DIAMONT
var drawDiamond = (num, char) => {
    for (var i = 1; i <= num; i++) {
        var rows = "";
        for (var x = 0; x < num - i; x++) {
            rows = rows + " ";
        }
        for (var k = 0; k < i*2 - 1; k++) {
            rows = rows + char;
        }
        console.log(rows);
    }
    for (var i = num; i > 0; i--) {
        var rows = "";
        for (var x = 0; x < num - i; x++) { 
            rows = rows + " ";
        }
        for (var k = 0; k < i*2 - 1; k++) {
            rows = rows + char;
        }
        console.log(rows);
    }
  }

  drawDiamond(5, "*");

  console.log("-----------------------");