function calculateTax() {
   // Retrieve values from input fields
   const income = parseFloat(document.getElementById("income").value);
   const age = document.getElementById("age").value;
   const deductions = parseFloat(document.getElementById("deductions").value);
   const otherIncome = parseFloat(document.getElementById("otherIncome").value);
   
    if(isNaN(income) || isNaN(deductions) ||isNaN(otherIncome)){
      alert('please enter all the fields  for income,deduction,and other income.')
      return;
    }
    if(age === "")
    {
      alert("please select your age.")
      return;
    }
   const totalIncome = income + otherIncome - deductions  ;
   let taxRate;
   if(totalIncome <=800000){
  taxRate=0;
   }
   else{
   if (age === '0-39') {
     taxRate = 0.3; // 30% deduction for age < 40
   } else if (age === '40-59') {
     taxRate = 0.4; // 40% deduction for age >= 40 & <= 60
   } else {
     taxRate = 0.1; // 10% deduction for age > 60
   }
  }
 
   
   
   // Calculate tax amount
   const taxAmount = totalIncome * taxRate;
  const overAllIncome  = totalIncome-taxAmount
   // Prepare content for modal
   let modalContent = `<h2> Your overall income will be <br>    &nbsp; ${overAllIncome.toFixed(2)}</h2>  <br>
          after tax deduction`;
 
   // Display modal with calculated values
   document.getElementById("modalContent").innerHTML = modalContent;
   $('#taxModal').modal('show'); // Show Bootstrap modal
 
 
  
   document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('taxForm');
  
    form.addEventListener('submit', function(event) {
      var ageSelect = document.getElementById('age');
  
      // Check if age field is empty
      if (!ageSelect.value) {
        ageSelect.classList.add('invalid');
        ageSelect.nextElementSibling.style.display = 'inline-block'; // Display error tooltip
        event.preventDefault(); // Prevent form submission
      }
    });
  
    // Reset the error state when the age field changes
    document.getElementById('age').addEventListener('change', function() {
      this.classList.remove('invalid');
      this.nextElementSibling.style.display = 'none'; // Hide error tooltip
    });
  });
  
}
 

 

 