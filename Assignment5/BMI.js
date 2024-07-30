function calculate(){
    var heightInFeet=parseFloat(document.getElementById('heightInFeet').value);
    var heightInInches=parseFloat(document.getElementById('heightInInches').value);
    var weight=parseFloat(document.getElementById('weight').value);
    if(heightInFeet >= 0 && heightInInches>=0 && weight > 0){
        var totalHeight = (heightInFeet * 12) + heightInInches;
        var bmi=(weight/(totalHeight*totalHeight)*703).toFixed(2);
        var resultText = `
                    Height: ${heightInFeet} feet ${heightInInches} inches<br>
                    Weight: ${weight} pounds<br>
                    Your BMI is ${bmi}
                    `;
        document.getElementById('result').innerHTML=resultText;  
    }
    else{
        document.getElementById('result').innerText='Please enter valid height and weight'; 
    }
}