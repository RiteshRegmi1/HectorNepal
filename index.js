
let enterNumber = document.getElementById("numberField");
let convertButton = document.getElementById("convertButton").addEventListener("click", convertFunction)
let lengthconverttxt = document.getElementById("lengthconvert")
let volumeconvert = document.getElementById("volumeconvert")
let inputValue = 0;
let bigghaValue = 0;


function convertFunction() {
    inputValue = enterNumber.value
    // console.log(inputValue)
    convertIntoLength()
    // console.log(bigghaValue)

}

function convertIntoLength() {
    // 20 meters = 65.616 feet | 20 feet = 6.096 meters
    let fll = Math.floor(inputValue / 338.632)

    if (fll < 20) {
        //katha section
        let kathaActualValue = inputValue/338.632
        let kathaFloorValue = Math.floor(kathaActualValue)

        //dhor section
        let dhorRawValue = kathaActualValue- kathaFloorValue
        let dhorActualValue = (dhorRawValue*20).toFixed(2)

        lengthconverttxt.innerHTML = `${inputValue} वर्ग मिटर =  ${kathaFloorValue} कट्ठा  ${dhorActualValue} धुर `
        
    } else if (fll >= 20) { 
        //biggha section
       let  biggaRawValue = inputValue/338.632 
        //biggha conterting ritesh
         bigghaActualValue = biggaRawValue/20;
         bigghafloorvalue = Math.floor(bigghaActualValue)
         //katha converting ritesh
         let kathaRawValue = bigghaActualValue - bigghafloorvalue
         let kathaActualValue = kathaRawValue*20;
         let KathaFloorValue = Math.floor(kathaActualValue)
        // dhor converting ritesh
        let dhorRawValue = kathaActualValue - KathaFloorValue
        let dhorActualValue = dhorRawValue*20;
        //showing the output in the dom
        lengthconverttxt.innerHTML = `${inputValue} वर्ग मिटर = ${bigghafloorvalue} बिघा  ${KathaFloorValue} कट्ठा  ${(dhorActualValue).toFixed(2)} धुर `
    }

}

enterNumber.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("convertButton").click();
    }
  });





