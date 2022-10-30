$(document).ready(readyNow);

// Global Variables
let employeeList = [];
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
        <h4>All form entries must be complete in order to submit!<h4>`)
    }    
    else {
        // add employee to array
        employeeList.push(emp);
        console.log(employeeList);
        
        // add to DOM
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

    // clearing out past data
    $('#tableData').empty();
    annualSalary = 0;

    // loop to pull properties of all employee objects
    for (let emp of employeeList){
        $('#tableData').append(`
            <tr>    
                <td>${emp.empFirstName}</td>
                <td>${emp.empLastName}</td>
                <td>${emp.empId}</td>
                <td>${emp.empTitle}</td>
                <td>$${emp.empAnnualSalary}</td>
                <td>    
                    <button class="delete-btn">Delete</button>
                </td>
            </tr>
        `);

        // calculating total annual salaries based on looped array
        annualSalary += Number(emp.empAnnualSalary);
        console.log('Annual Salary is:', annualSalary);
    }
    // find monthly cost and update to DOM
    calcMonthlyCost();
} // end render

function calcMonthlyCost (){
    // resetting total and formatting
    $('.sumContainer').empty();
    $('footer').css('background-color', 'white');

    // setting variable to round up to nearest dollar to account for months in year
    let monthlySalary = Math.round(annualSalary/12);

    // moving the total to DOM
    $('.sumContainer').append(`
        <h3>Total Monthly: $${monthlySalary}</h3>`);

    // if budget is met, formatting to call out
    if (monthlySalary > 20000){
        $('footer').css('background-color', 'red');
    }
    console.log('calculating monthly cost:', monthlySalary);
} // end calcMonthlyCost

function removeEmp(){ 
    // setting employee object based on click
    let empToRemove = $(this).parent().siblings().text();

    // removing employee object from array
    for (let i=0; i < employeeList.length; i++){
        if (empToRemove === `${employeeList[i].empFirstName}${employeeList[i].empLastName}${employeeList[i].empId}${employeeList[i].empTitle}$${employeeList[i].empAnnualSalary}`){
            employeeList.splice(i, 1);
        }
    }

    render();
} // end removeEmp