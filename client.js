// Using the stored information, calculate monthly costs and append this to the to DOM. 
// If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

// For Base mode, delete button does **not** need to remove that Employee's salary from the reported total.

// ## Stretch Mode
// Add styling or extra functionality that fits with the theme of this assignment.
// Once the employee is deleted, update the _Total Monthly Cost_ section on the page to reflect the employee's removal. 
// _HINT:_ You will need to figure out which employee was removed, in order to subtract their salary from the total. 
// Consider using `.text()` as a getter, or look into jQuery's `.data()` function. This is tricky! 

$(document).ready(readyNow);

// Global Variables
let employeeList = [
    {   empFirstName: 'Jen',
        empLastName: 'Barber',
        empId: 4521,
        empTitle: 'Team Lead',
        empAnnualSalary: 80000},
    {   empFirstName: 'Maurice',
        empLastName: 'Moss',
        empId: 8724,
        empTitle: 'Quality Assurance',
        empAnnualSalary: 58000},
    {   empFirstName: 'Roy',
        empLastName: 'Smith',
        empId: 9623,
        empTitle: 'Quality Assurance',
        empAnnualSalary: 48000}
];
let annualTotalValue = 0;

function readyNow() {
    console.log("DOM is loaded!");
    $('#addEmpBtn').on('click', addEmp);
    $('#empTable').on('click', '.delete-btn', removeEmp);
// render();
} // end readyNow

function calcMonthlyCost (){
    let sum = 0;
    array.forEach(emp.empAnnualSalary); {
        sum += ((emp.empAnnualSalary[annualSalary]) / 12) ?? 0;
    };
    return sum;

    $('#calcId').append(`${sum}`);
} // end calMonthlyCost

function checkInputs(){
    let formComplete = $("#empIdInput").length;
    // ADD THE REST OF THE INPUTS

    if (formComplete > 0){
        return true
    } else
         //ERROR MESSAGE: NEED TO COMPLETE ALL FIELDS OF FORM
        return false
} // end checkInputs

function addEmp() {
    checkInputs();
    console.log('Attempting to add employee');

    if (checkInputs() === true){
        let emp = {
            empFirstName: $('#empFirstNameInput').val(),
            empLastName: $('#empLastNameInput').val(),
            empId: $('#empIdInput').val(),
            empTitle: $('#empTitleInput').val(),
            empAnnualSalary: $('#empAnnualSalaryInput').val()
        };
        employeeList.push(emp);
        console.log(employeeList);

        render();
    
        $('#empFirstNameInput').val("");
        $('#empLastNameInput').val("");
        $('#empIdInput').val("");
        $('#empTitleInput').val("");
        $('#empAnnualSalaryInput').val("");
    }
} // end addEmp

function render() {
    console.log('rendering');
    if (employeeList.length > 0){
        $('#empTable').empty();

    for (let emp of employeeList){
        $('#empTable').append(`
            <tr>
                <td>${emp.empFirstName}</td>
                <td>${emp.empLastName}</td>
                <td>${emp.empId}</td>
                <td>${emp.empTitle}</td>
                <td>${emp.empAnnualSalary}</td>
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
        if (emp.empId !== empToRemove.empId){
            newEmployeeList.push(emp);
        }
    }

    employeeList = newEmployeeList;
    console.log('New Employee List is:', newEmployeeList);

    render();
} // end removeEmp