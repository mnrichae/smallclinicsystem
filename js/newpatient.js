function validEntry(){

    //valid entries
    let checkedGender = document.querySelector('input[name = "gender"]:checked');
    // let gender = document.getElementById('gender');
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let address = document.getElementById('address').value;
    let bdate = document.getElementById('bdate').value;
    let cnum = document.getElementById('cnum').value;
    
    const fieldArrValidation = [
    checkedGender || false,
    checkRequired('errorFname', fname, 'first name'),
    checkRequired('errorLname', lname, 'last name'),
    checkRequired('errorAddress', lname, 'address'),
    checkRequired('errorBdate', bdate, 'birthdate'),
    checkRequired('errorCnum', cnum, 'contact number'),
    checkGender(),
    checkCnum(cnum),
    checkDOB(bdate)
    ];

    console.log('fieldArrValidation', fieldArrValidation)

    const isInvalidArr = fieldArrValidation.filter(field => field === false)
    console.log('isInvalidArr', isInvalidArr)
    if(isInvalidArr.length > 0) {
        alert(`Please enter required field/s`);
        
    } else {
         
        alert('Form submitted successfully');
    }
   
}

function checkRequired(errorDiv, fieldInput, fieldEntry) {
    console.log(`check update:`, fieldInput, fieldEntry)
    if(fieldInput.length > 0) {
        document.getElementById(errorDiv).innerHTML = ''
        console.log(`check required() successful`);
        return true;
    } else {
        console.log(`check required() detects unsuccessful entry`);
        document.getElementById(errorDiv).innerHTML = `<i class="bi bi-exclamation-circle-fill text-danger"></i> Please provide ${fieldEntry}.`
        
        return false;
    }
}

function checkGender() {    
    let getSelectedValue = document.querySelector('input[name="gender"]:checked');   
        
    if(getSelectedValue != null) {   
        document.getElementById("errorGender").innerHTML = ''
        return true;
    }   
    else {   
        document.getElementById("errorGender").innerHTML = '<i class="bi bi-exclamation-circle-fill text-danger"></i> Please provide gender.'
    }   
}    
function checkDOB(bdate) {
    console.log('function checkDOB', bdate)
    if(bdate === ''){
        return false
        
    }
    var myDate = new Date(bdate);
    var today = new Date();
    if ( myDate > today ) { 
        document.getElementById('errorBdate').innerHTML = '<i class="bi bi-exclamation-circle-fill text-danger"></i> Please provide birthdate not later than today.'
        console.log(`error`);
        return false;
    } else {
        document.getElementById('errorBdate').innerHTML = '';
        return true;
    }
}

//copy-pasted the format of regular expression from the site below:
//https://www.w3resource.com/javascript/form/phone-no-validation.php
//modified the {} in accordance for the format
function checkCnum(cnum){
    console.log('function cnum', cnum);
    console.log(typeof(cnum));
    if (cnum === ''){
        return false;
    }
    
    let regEx = /^\(?([0-9]{4})\)?[-]?([0-9]{4})[-]?([0-9]{3})$/;
    if(cnum.match(regEx))
        {
        console.log('cnum true')
        return true;
        
        }
    else
        {
        document.getElementById('errorCnum').innerHTML = '<i class="bi bi-exclamation-circle-fill text-danger"></i> Please provide in this format: 0987-6543-210'
        console.log('cnum false')
        return false;
        }

}

