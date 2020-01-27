var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fifth");
var doc6 = document.getElementById("sixth");
var output = document.getElementById("output");
var big;
var small;

console.log(output);


function orderM(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(first,second,third,fourth,fifth,sixth);
    if(o1 === first){
        first = second;
        second = third;
        third = fourth
        fourth = fifth;
        fifth = sixth;
    }
    else if(o1 === second){
        first = first;
        second = third;
        third = fourth
        fourth = fifth;
        fifth = sixth;
    }
    else if(o1 === third){
        first = first;
        second = second;
        third = fourth
        fourth = fifth;
        fifth = sixth;
    }
    else if(o1 === fourth){
        first = first;
        second = second;
        third = third;
        fourth = fifth;
        fifth = sixth;
    }
    else if(o1 === fifth){
        first = first;
        second = second;
        third = third;
        fourth = fourth
        fifth = sixth;
    }

    o2 = Math.min(first,second,third,fourth,fifth);
    if(o2 === first){
        first = second;
        second = third;
        third = fourth
        fourth = fifth;
    }
    else if(o2 === second){
        first = first;
        second = third;
        third = fourth
        fourth = fifth;
    }
    else if(o2 === third){
        first = first;
        second = second;
        third = fourth
        fourth = fifth;
    }
    else if(o2 === fourth){
        first = first;
        second = second;
        third = third;
        fourth = fifth;
    }

    o3 = Math.min(first,second,third,fourth);
    if(o3 === first){
        first = second;
        second = third;
        third = fourth
    }
    else if(o3 === second){
        first = first;
        second = third;
        third = fourth
    }
    else if(o3 === third){
        first = first;
        second = second;
        third = fourth
    }

    o4 = Math.min(first,second,third);
    if(o4 === first){
        first = second;
        second = third;
    }
    else if(o4 === second){
        first = first;
        second = third;
    }
    
    o5 = Math.min(first,second);
    if(o5 === first){
        first = second;
    }
    
    o6 = Math.min(first);
    

    orderLB = o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5 + ", " + o6;
    output.innerHTML = orderLB;
    return orderLB
}

// function middleM(){

// }

function largestM(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    big = Math.max(first, second, third, fourth, fifth, sixth);
    output.innerHTML = big;
    return big;
}

function smallestM(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    small = Math.min(first, second, third, fourth, fifth, sixth);
    output.innerHTML = small;
    return small;
}

function meanM(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    var solveMode = (first + second + third + fourth + fifth + sixth)/6;
    output.innerHTML = solveMode;
    return solveMode;
}

function modeM(){
    orderLB();

    var middleS = orderLB;
    output.innerHTML = middleS;
    return middleS; 
}

function rangeM(){
    largestM();
    smallestM();
    var rangeSol = big - small;
    output.innerHTML = rangeSol;
    return rangeSol;
}

//ex there are 2 2
function duplicateM(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    //this will check if the first number has any duplicates
    if(first===second){
        o1++;
    }
    if(first===third){
        o1++;
    }
    if(first===fourth){
        o1++;
    }
    if(first===fifth){
        o1++;
    }
    if(first===sixth){
        o1++;
    }
    //this will check if the second number has any duplicates
    if(second===third){
        o2++;
    }
    if(second===fourth){
        o2++;
    }
    if(second===fifth){
        o2++;
    }
    if(second===sixth){
        o2++;
    }
    //this will check if the third number has any duplicates
    if(third===fourth){
        o3++;
    }
    if(third===fifth){
        o3++;
    }
    if(third===sixth){
        o3++;
    }
    //this will check if the fourth number has any duplicates

    if(fourth===fifth){
        o4++;
    }
    if(fourth===sixth){
        o4++;
    }
    //this will check if the fifth number has any duplicates
    if(fifth===sixth){
        o5++;
    }
    // you dont need to check the sixth number because you already did

    output.innerHTML = o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5;
}

//numbers that are not simaler
function uniqueM(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    //this will check if the first number has any duplicates
    if(first===second){
        o1++;
    }
    if(first===third){
        o1++;
    }
    if(first===fourth){
        o1++;
    }
    if(first===fifth){
        o1++;
    }
    if(first===sixth){
        o1++;
    }
    //this will check if the second number has any duplicates
    if(second===third){
        o2++;
    }
    if(second===fourth){
        o2++;
    }
    if(second===fifth){
        o2++;
    }
    if(second===sixth){
        o2++;
    }
    //this will check if the third number has any duplicates
    if(third===fourth){
        o3++;
    }
    if(third===fifth){
        o3++;
    }
    if(third===sixth){
        o3++;
    }
    //this will check if the fourth number has any duplicates

    if(fourth===fifth){
        o4++;
    }
    if(fourth===sixth){
        o4++;
    }
    //this will check if the fifth number has any duplicates
    if(fifth===sixth){
        o5++;
    }
    // you dont need to check the sixth number because you already did

    output.innerHTML = o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5;


    //this was me trying

    // if(first !== second && first !== third && first !== fourth && first !== fifth && first !== sixth){
    // output.innerHTML = first + ", " + second + ", " + third + ", " + fourth + ", " + fifth + ", " + sixth;;
    // }
    // else if(first === second && first !== third && first !== fourth && first !== fifth && first !== sixth){
    //     output.innerHTML = first + ", " + third + ", " + fourth + ", " + fifth + ", " + sixth;
    // }
    // if(first !== second && first === third && first !== fourth && first !== fifth && first !== sixth){
    //     output.innerHTML = first + ", " + second + ", " + fourth + ", " + fifth + ", " + sixth;;
    // }
    // if(first !== second && first !== third && first === fourth && first !== fifth && first !== sixth){
    //     output.innerHTML = first + ", " + second + ", " + third + ", " + fifth + ", " + sixth;;
    // }
    // if(first !== second && first !== third && first !== fourth && first === fifth && first !== sixth){
    //     output.innerHTML = first + ", " + second + ", " + third + ", " + fourth + ", " + sixth;;
    // }
    // else if(first === second && first !== third && first !== fourth && first !== fifth && first === sixth){
    //     output.innerHTML = first + ", " + third + ", " + fourth + ", " + fifth;
    // }
    // else if(first === second && first !== third && first !== fourth && first !== fifth && first !== sixth){
    //     output.innerHTML = first + ", " + third + ", " + fourth + ", " + fifth + ", " + sixth;
    // }
    // else if(first === second && first !== third && first !== fourth && first !== fifth && first !== sixth){
    //     output.innerHTML = first + ", " + third + ", " + fourth + ", " + fifth + ", " + sixth;
    // }
    // else if(first === second && first !== third && first !== fourth && first !== fifth && first !== sixth){
    //     output.innerHTML = first + ", " + third + ", " + fourth + ", " + fifth + ", " + sixth;
    // }
    // else if(first === second && first !== third && first !== fourth && first !== fifth && first !== sixth){
    //     output.innerHTML = first + ", " + third + ", " + fourth + ", " + fifth + ", " + sixth;
    // }
}