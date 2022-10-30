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
        empTitle: 'Support Team',
        empAnnualSalary: 58000},
    {   empFirstName: 'Roy',
        empLastName: 'Smith',
        empId: 9623,
        empTitle: 'Quality Assurance',
        empAnnualSalary: 48000}
];
let annualSalary = 0;
let totalAnnualSalaries = 0;

function readyNow() {
    console.log("DOM is loaded!");

    // click listeners
    $('#addEmpBtn').on('click', addEmp);
    $('.table').on('click', '.delete-btn', removeEmp);
} // end readyNow

function addEmp() {
    console.log('Attempting to add employee');
    $('.errorMsg').empty();

    // pull values from DOM to create employee object
    let emp = {
        empFirstName: $('#empFirstNameInput').val(),
        empLastName: $('#empLastNameInput').val(),
        empId: $('#empIdInput').val(),
        empTitle: $('#empTitleInput').val(),
        empAnnualSalary: $('#empAnnualSalaryInput').val()
    };

    // check to make sure each input on form is entered
    // error message if incomplete
    if (Object.values(emp).includes('')){
        console.log("Form not complete");
        $('.errorMsg').append(`
        <h4>All form entries must be added to submit<h4>`)
    }    
    else {
        // add employee to array
        employeeList.push(emp);
        console.log(employeeList);

        render();

        // clear inputs
        $('#empFirstNameInput').val("");
        $('#empLastNameInput').val("");
        $('#empIdInput').val("");
        $('#empTitleInput').val("");
        $('#empAnnualSalaryInput').val("");
    }
} // end addEmp

function render() {
    console.log('rendering');
    $('#tableData').empty();
    annualSalary = 0;

    for (let emp of employeeList){
        $('#tableData').append(`
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
        annualSalary += Number(emp.empAnnualSalary);
        console.log('Annual Salary is:', annualSalary);
    }

    calcMonthlyCost();
} // end render

function calcMonthlyCost (){
    let monthlySalary = Math.round(annualSalary/12);

    $('.sumContainer').append(`
        <h3>Total Monthly: $${monthlySalary}</h3>`);

    if (monthlySalary > 20000){
        $('#footer').css('background-color', 'red');
    }
    console.log('calculating monthly cost:', monthlySalary);
} // end calcMonthlyCost

function removeEmp(){ 
    console.log('removing employee from table ');

    let empToRemove = $(this)
        .parent()
        .siblings()
        .text();
    console.log(empToRemove);

    for (let i=0; i < employeeList.length; i++){
        if (empToRemove === `
            ${employeeList[i].empFirstName}
            ${employeeList[i].empLastName}
            ${employeeList[i].empId}
            ${employeeList[i].empTitle}
            ${employeeList[i].empAnnualSalary}`){

            employeeList.splice(i, 1);
        }
    }

    console.log('New Employee List is:', employeeList);

    render();
} // end removeEmp