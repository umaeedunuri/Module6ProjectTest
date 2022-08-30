let validate = () => {
    let firstNameInput = document.getElementById("first-name").value;
    let lastNameInput = document.getElementById("last-name").value;
    let emailInput = document.getElementById("email").value;
    let phoneInput = document.getElementById("phone").value;
    let batchInput = document.getElementById("batch").value;
    let moduleInput = document.getElementById("module").value;
    let tncInput = document.getElementById("tnC").checked;

    let flag = false;                             // switch for all the validations (if any validation gives error, then flag = true)

    // Validation check No. 1 (first name)
    if(firstNameInput && firstNameInput.length >= 3 && isNaN(firstNameInput)){
        document.getElementById('first-name-valid').style.display = 'block';
		document.getElementById('first-name-invalid').style.display = 'none';
    } else {
        document.getElementById('first-name-valid').style.display = 'none';
		document.getElementById('first-name-invalid').style.display = 'block';
        flag = true;
    }

    // Validation check No. 2 (last name)
    if(lastNameInput && lastNameInput.length >= 3 && isNaN(lastNameInput)){
        document.getElementById('last-name-valid').style.display = 'block';
		document.getElementById('last-name-invalid').style.display = 'none';
    } else {
        document.getElementById('last-name-valid').style.display = 'none';
		document.getElementById('last-name-invalid').style.display = 'block';
        flag = true;
    }

    // Validation check No. 3 (Email)
    if(emailInput && emailInput.includes("@") && emailInput.includes(".") && emailInput.lastIndexOf(".") <= emailInput.length - 3 && emailInput.indexOf('@') !== 0){
        document.getElementById('email-valid').style.display = 'block';
		document.getElementById('email-invalid').style.display = 'none';
    } else {
        document.getElementById('email-valid').style.display = 'none';
		document.getElementById('email-invalid').style.display = 'block';
        flag = true;
    }

    // Validation check No. 4 (Phone No.)
    if(phoneInput && phoneInput.length === 10 && parseInt(phoneInput)){
        document.getElementById('phone-valid').style.display = 'block';
		document.getElementById('phone-invalid').style.display = 'none';
    } else {
        document.getElementById('phone-valid').style.display = 'none';
		document.getElementById('phone-invalid').style.display = 'block';
        flag = true;
    }

    // Validation check No. 5 (Batch No.)
    if(batchInput == 'None'){
        document.getElementById('batch-valid').style.display = 'none';
		document.getElementById('batch-invalid').style.display = 'block';
        flag = true;
    } else {
        document.getElementById('batch-valid').style.display = 'block';
		document.getElementById('batch-invalid').style.display = 'none';
    }
    
    // Validation check No. 6 (Module No.)
    if(moduleInput == 'None'){
        document.getElementById('module-valid').style.display = 'none';
		document.getElementById('module-invalid').style.display = 'block';
        flag = true;
    } else {
        document.getElementById('module-valid').style.display = 'block';
		document.getElementById('module-invalid').style.display = 'none';
    }

    // Validation check No. 7 (checkbox)
    if(tncInput) {
		document.getElementById("tnC-invalid").style.display = "none";
		document.getElementById("tnC-valid").style.display = "block";
	} else {
		document.getElementById("tnC-invalid").style.display = "block";
		document.getElementById("tnC-valid").style.display = "none";
		flag = true
	}

    // Clear/ Reset all the fields.
    if(!flag){
        alert('Your details have been saved successfully!');

        document.getElementById("first-name").value = '';
        document.getElementById("last-name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("phone").value = '';
        document.getElementById("batch").value = 'None';
        document.getElementById("module").value = 'None';
        document.getElementById("tnC").checked = false;

        document.getElementById('first-name-valid').style.display = 'none';
        document.getElementById('last-name-valid').style.display = 'none';
        document.getElementById('email-valid').style.display = 'none';
        document.getElementById('phone-valid').style.display = 'none';
        document.getElementById('batch-valid').style.display = 'none';
        document.getElementById('module-valid').style.display = 'none';
        document.getElementById("tnC-valid").style.display = "none";

    }

}

// Event handlers for all the input fields (onkeyup() - whenever someone presses a button in these inputs display of valid=block, invalid=none)
function firstNameEvent () {
	document.getElementById('first-name-valid').style.display = 'block';
	document.getElementById('first-name-invalid').style.display = 'none';
}

function lastNameEvent () {
	document.getElementById('last-name-valid').style.display = 'block';
	document.getElementById('last-name-invalid').style.display = 'none';
}

function emailEvent () {
	document.getElementById('email-valid').style.display = 'block';
	document.getElementById('email-invalid').style.display = 'none';
}

function phoneEvent () {
	document.getElementById('phone-valid').style.display = 'block'
	document.getElementById('phone-invalid').style.display = 'none'
}