$(document).ready(function(){//waits for DOM to completely load
  $('#submitNewEmployee').on('click', function(){ // event listener on submitNewEmployee button.
//declaring variables & retrieving values from input boxes.
   var firstName = $('#firstName').val();
   var lastName = $('#lastName').val();
   var idNumber = $('#idNumber').val();
   var jobTitle = $('#jobTitle').val();
   var annualSalary = $('#annualSalary').val();

// add new employee row to the DOM
   $('#employeeTableBody').append(
   '<tr>' +
     '<td>' + firstName + '</td>' +
     '<td>' + lastName + '</td>' +
     '<td>' + idNumber + '</td>' +
     '<td>' + jobTitle + '</td>' +
     '<td>' + annualSalary + '</td>' +
     '<td><button class="deleteEmployeeButton">Delete '+ firstName + '</button></td>' +
   '</tr>'
 );
// add monthly salary expenses to the DOM
 var newEmployeeMonthlyExpenses = annualSalary / 12;
 var previousMonthlyExpenses = $('#monthlyExpenses').text();
 var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + newEmployeeMonthlyExpenses;
 $('#monthlyExpenses').text(totalMonthlyExpenses);

 // clear our input boxes
 $('.employeeFormInput').val('');

 });

// adding event listener for clicking delete button
 $('#employeeTableBody').on('click', '.deleteEmployeeButton', function(){
   //removing employee salary from total.
   var deletedEmployeeSalary = $(this).parent().prev().text();
   var deletedEmployeeMonthlySalary = deletedEmployeeSalary / 12
   var previousMonthlyExpenses = $('#monthlyExpenses').text();
   var updatedMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeMonthlySalary; //does not need parseFloat because of type coercion. 
   $('#monthlyExpenses').text(updatedMonthlyExpenses);
  //  seleting and deleting employee row from table.
   $(this).closest('tr').remove();

 })
});
