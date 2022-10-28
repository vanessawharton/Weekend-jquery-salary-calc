
// A 'Submit' button should collect the form information, store the information to calculate monthly costs, 
// append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs 
// and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. 
// For Base mode, it does **not** need to remove that Employee's salary from the reported total.

// ## Stretch Mode
// Add styling or extra functionality that fits with the theme of this assignment.
// Once the employee is deleted, update the _Total Monthly Cost_ section on the page to reflect the employee's removal. 
// _HINT:_ You will need to figure out which employee was removed, in order to subtract their salary from the total. 
// Consider using `.text()` as a getter, or look into jQuery's `.data()` function. This is tricky! 

$(document).ready(readyNow);

let employeeList = [];
let annualTotalValue = 0;

// function calculateGarageValue (price, array){
//   let sum = 0;
//   array.forEach(car.carPrice); {
//     sum += car.carPrice[price] ?? 0;
//   };
//   return sum;
// };

function readyNow() {
    console.log("DOM is loaded!");
    $('#addEmpBtn').on('click', addEmp);
    $('#empTable').on('click', '.delete-btn', removeEmp);
    render();
} // end readyNow

function checkInputs(){
    let formComplete = $("#empIdIput").length;
    // ADD THE REST OF THE INPUTS

    if (formComplete !== 0){
        return true
    } else
        //ERROR MESSAGE: NEED TO COMPLETE ALL FIELDS OF FORM
        return false
} // end checkInputs

function addEmp() {
    checkInputs();
    console.log('Attempting to add employee');

    if (checkInputs === true){
        let emp = {
            empFirstName: $('#empFirstNameInput').val(),
            empLastName: $('#empLastNameInput').val(),
            empId: $('#empIdInput').val(),
            empTitle: $('#empTitleInput').val(),
            empAnnSalary: $('#empAnnualSalaryInput').val()
        };
    employees.push(emp);
    console.log(employees);

    render();
    
    $('#empFirstNameInput').val("");
    $('#empLastNameInput').val("");
    $('#empIdInput').val("");
    $('#empTitleInput').val("");
    $('#empAnnualSalaryInput').val("");
    }
} // end addEmp

function render() {
    if (employeeList.length !== 0){
        $('#empTable').empty();

    for (let emp of employeeList){
        $('#empTable').append(`
            <tr>
                <td>${car.carImg}</td>
                <td>${car.carYear}</td>
                <td>${car.carMake}</td>
                <td>${car.carModel}</td>
                <td>${car.carPrice}</td>
                <td>    
                    <button class="delete-btn">Delete</button>
                </td>
            </tr>
        `);
    }
    }
} // end render

function removeEmp(){ 
    console.log('in removeEmp');

    let empToRemove = $(this)
        .parent()
        .siblings()
        .last()
        .val();
    console.log(empToRemove);

    let newEmployeeList= [];

    for (let emp of employeeList){
        if (emp.empId !== empToRemove){
            newEmployeeList.push(emp);
        }
    }

    employeeList = newEmployeeList;
    console.log('New Employee List is:', newEmployeeList);

    render();
} // end removeEmp