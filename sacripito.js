
    let button = document.querySelector("#btn");
  
    button.addEventListener("click", calculateSalary);

  
function calculateSalary() { //Function start here
  
    let salary = parseInt(document
            .querySelector("#salary").value);
  
    let hours = parseInt(document
            .querySelector("#hoursperweek").value);
  
    let result = document.querySelector("#result");
  
  if (salary === "" || isNaN(salary)) 
        result.innerHTML = "Missing salary amount!";
  
  else if (hours === "" || isNaN(hours)) 
        result.innerHTML = "Missing work hours amount!";
  
   
  else {
  
        let hourlywage = ((salary * 12 / 52 ) / hours).toFixed(0); //(X per month * 12 / 52 weeks) / Y hours per week = Z
        
        //Result
        if (hourlywage > 0) result.innerHTML =
        result.innerHTML =
        `Your hourly wage is <span>${hourlywage}</span>฿ per hour`;

        //Broken down for unknown reason
        else result.innerHTML =
        `Boop Boop Beep Boop?`;
    }
}