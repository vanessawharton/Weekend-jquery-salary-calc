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


function readyNow() {
    console.log("DOM is loaded!");
    $('#addEmpBtn').on('click', addEmp);
    $('#empTable').on('click', '.delete-btn', removeEmp);
} // end readyNow

function totalMonthlySalaries() {
    let total = 0;
    for (let i = 0; i< employeeList.length; i++){
        total = (total + employeeList[i].empAnnualSalary) / 12;
    }
    return total;
}

function calcMonthlyCost (){
    for (let key of employeeList){
        console.log(key, employeeList[key]);
    }
// $('#h3').append(`"Total Monthly $" ${sum}`);
} // end calMonthlyCost

function overBudget(){
    if (sum > 20000){
        $(document).css('background-color', 'red');
    }
} // end overBudget

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
    calcMonthlyCost();
    totalMonthlySalaries();
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