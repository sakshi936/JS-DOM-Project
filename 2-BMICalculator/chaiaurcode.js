
const form = document.querySelector('form');
// console.log(form);

//  this use case will give empty value 
// const height=   parseInt(document.querySelector('#height').value);
                                    
form.addEventListener('submit', (e)=>{ 
    e.preventDefault();
    const height=   parseInt(document.querySelector('#height').value);
    const weight=   parseInt(document.querySelector('#weight').value);
    const results=  document.querySelector('#results');


    // console.log(height);
    // console.log(weight);
    if(height ===' ' || height <0 || isNaN(height)){
        results.innerHTML=`Plases give a valid height ${height}`;
    }
    else  if(weight ===' ' || weight <0 || isNaN(weight)){
        results.innerHTML=`Plases give a valid weight ${weight}`;
    }
    else {
        const BMI = (weight / ((height*height)/10000)).toFixed(2);

       if(BMI < 18.6){
        results.innerHTML = `<span> ${BMI}  Under Weight</span>`;
       }
       else if(BMI > 18.6 && BMI < 24.9){
        results.innerHTML = `<span> ${BMI}  Normal Weight</span>`;
       }
       else {
        results.innerHTML = `<span> ${BMI}  Overweight</span>`;
       }
        
        // console.log("working");

    }
    
    });
