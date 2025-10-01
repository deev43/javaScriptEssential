let counter= 0;

function increaseCount(){
    counter++;
    displayCount();
    checkCounterValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = counter;
}

function checkCounterValue(){
    if(counter === 10){
        alert("Your Instagram got 10 followers, well done!")
    }else if(counter === 20){
        alert("Your Instagram got 20 followers, well done!")
    }
}

