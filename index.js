
let enterNumber = document.getElementById("numberField");
let convertButton = document.getElementById("convertButton").addEventListener("click", convertFunction)
let addButton = document.getElementById("addButton").addEventListener("click", addFunction)
let lengthconverttxt = document.getElementById("lengthconvert")
let volumeconvert = document.getElementById("volumeconvert")
let intValue = 0;


function convertFunction() {
    inputValue = enterNumber.value
    // console.log(inputValue)
    convertIntoLength()
    // console.log(bigghaValue)


}

function addFunction() {
    
    let xVl = enterNumber.value
 
    if(xVl === ""){
    }else{
        intValue += parseInt(xVl)
    lengthconverttxt.innerHTML =   `Total Square Meter : ${intValue}`
    enterNumber.value =""
    return intValue;
    }
}

function convertIntoLength() {
    // 20 meters = 65.616 feet | 20 feet = 6.096 meters
    if (intValue === 0) {
        console.log("hey")
        
        let  fll = (inputValue / 338.632)

        if (fll < 20) {
            //katha section
            let kathaActualValue = fll
            console.log(kathaActualValue)
            let kathaFloorValue = Math.floor(kathaActualValue)

            //dhor section
            let dhorRawValue = kathaActualValue - kathaFloorValue
            let dhorActualValue = (dhorRawValue * 20).toFixed(2)

            lengthconverttxt.innerHTML = `${inputValue} Square Meter =  ${kathaFloorValue} Kattha  ${dhorActualValue} Dhur `

            enterNumber.value =""
        } else if (fll >= 20) {
            //biggha section
            let biggaRawValue = fll
            //biggha conterting ritesh
            bigghaActualValue = biggaRawValue / 20;
            bigghafloorvalue = Math.floor(bigghaActualValue)
            //katha converting ritesh
            let kathaRawValue = bigghaActualValue - bigghafloorvalue
            let kathaActualValue = kathaRawValue * 20;
            let KathaFloorValue = Math.floor(kathaActualValue)
            // dhor converting ritesh
            let dhorRawValue = kathaActualValue - KathaFloorValue
            let dhorActualValue = dhorRawValue * 20;
            //showing the output in the dom
            lengthconverttxt.innerHTML = `${inputValue}  Square Meter = ${bigghafloorvalue} Biggha  ${KathaFloorValue} Kattha  ${(dhorActualValue).toFixed(2)} Dhur `
            enterNumber.value =""

        }

    } else {
        console.log(intValue)
       let  fll = (intValue / 338.632)

        if (fll < 20) {
            //katha section
            let kathaActualValue = fll
            let kathaFloorValue = Math.floor(kathaActualValue)

            //dhor section
            let dhorRawValue = kathaActualValue - kathaFloorValue
            let dhorActualValue = (dhorRawValue * 20).toFixed(2)

            lengthconverttxt.innerHTML = `${intValue} Square Meter =  ${kathaFloorValue} Kattha  ${dhorActualValue} Dhur `
            enterNumber.value =""

        } else if (fll >= 20) {
            //biggha section
            let biggaRawValue = fll
            //biggha conterting ritesh
            bigghaActualValue = biggaRawValue / 20;
            bigghafloorvalue = Math.floor(bigghaActualValue)
            //katha converting ritesh
            let kathaRawValue = bigghaActualValue - bigghafloorvalue
            let kathaActualValue = kathaRawValue * 20;
            let KathaFloorValue = Math.floor(kathaActualValue)
            // dhor converting ritesh
            let dhorRawValue = kathaActualValue - KathaFloorValue
            let dhorActualValue = dhorRawValue * 20;
            //showing the output in the dom
            lengthconverttxt.innerHTML = `${intValue} Square Meter = ${bigghafloorvalue} Biggha  ${KathaFloorValue} Kattha  ${(dhorActualValue).toFixed(2)} Dhur `
            enterNumber.value =""

        }

    }

    intValue = 0
}

enterNumber.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("convertButton").click();
    }

});


