const firstInput = document.getElementById("Orphan");
const secondInput = document.getElementById("orphan_inp_2");
const thirdInput = document.getElementById("orphan_inp_3");

const firstHideFolder = document.getElementById("hide_input_1");
const secondHideFolder = document.getElementById("hide-inp-2");
const thirdHideFolder = document.getElementById("hide-inp-3");

function handleOnChange(value){
    if(value == "Yes"){
        firstHideFolder.style.display = "block";
    }else{
        firstHideFolder.style.display = "none";
    }
}

function handleSecondChange(value){
if(value == "Yes"){
    secondHideFolder.style.display = "block";
}else{
    secondHideFolder.style.display = "none";
}
}

function handleThirdChange(value){
    if(value == "Yes"){
        thirdHideFolder.style.display = "block";
    }else{
        thirdHideFolder.style.display = "none";
    }
}