
// Add burgers to select
var burgersSelectedTotal = [];
document.getElementById("testing").innerHTML = burgersSelectedTotal;


function addBurgersCheckout(name) {
    burgersSelectedTotal.push(name);
    document.getElementById("testing").innerHTML = burgersSelectedTotal;
}

function remove(array, element) {
    const index = array.indexOf(element);
  
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

function removeBurgersCheckout(name) {
    remove(burgersSelectedTotal,name)
    document.getElementById("testing").innerHTML = burgersSelectedTotal;
}





// Change burgers to selected in "JSON"-file
function changeInJSON(index, name, checked) {
    var burgersSelectedTotal = {};

    if (checked) {
        food.burgers[index].checked = true;
        addBurgersCheckout(name);
    }
       
    else {
        food.burgers[index].checked = false;
        removeBurgersCheckout(name);
    }
}



// For burger checkboxes
function selectBurger(burgerPressed) {
   
    var checked;
    var index = burgerPressed.split('submit-').pop()[0];

    var checkbox = document.getElementById(burgerPressed);
    var burgerSelected = burgerPressed.replace('submit', 'hamburger');
    var burger = document.getElementById(burgerSelected);
    var burgerContainer = burger.parentElement;

    if (checkbox.checked === true) {
        burgerContainer.classList.toggle('selectedBurgerCard');
        burgerContainer.classList.replace('removeBurgerCard', 'selectedBurgerCard');
        checked = true
    }
    else {
        burgerContainer.classList.replace('selectedBurgerCard', 'removeBurgerCard');
        checked = false;
    }

    
    str = burger.innerHTML;
    var name = str.split('<div class="box burger-heading">').pop().split('</div>')[0];
    changeInJSON(index, name, checked);
}



// Handle the for to order burger
function processFormData() {

    var name = order_name.value.replace(/^\s+|\s+$/g, '');
    var email = order_mail.value.replace(/^\s+|\s+$/g, '');
    var street = order_street.value.replace(/^\s+|\s+$/g, '');
    var house_number = order_house_nr.value.replace(/^\s+|\s+$/g, '');
    var recipient = order_recipiant.value.replace(/^\s+|\s+$/g, '');
    var gender = document.querySelector('input[name = "gender"]:checked').value;



    var error_message = 'The following fields had errors in them: \n\n';
    var data = 'You entered the following information: \n\n';

    var error_flag = false;


    // Check name
    if (name == '') {
        error_message += 'Please enter your name\n';
        error_flag = true;
    } else {
        data += 'Name: ' + name + '\n';
    }

    // Check mail
    if (!checkEmail(email)) {
        error_message += 'Please enter a valid email address\n';
        error_flag = true;
    } else {
        data += 'Email: ' + email + '\n';
    }

    // Check street
    if (street == '') {
        error_message += 'Please enter a valid street name\n';
        error_flag = true;
    } else {
        data += 'Street: ' + street + '\n';
    }


    // Check house number
    if (house_number == '') {
        error_message += 'Please enter a valid house number\n';
        error_flag = true;
    } else {
        data += 'House number: ' + house_number + '\n';
    }



    if (recipient == '') {
        error_message += 'Please enter a payment option\n';
        error_flag = true;
    } else {
        data += 'Payment option: ' + recipient + '\n';
    }



    if (gender == '') {
        error_message += 'Please specify your gender\n';
        error_flag = true;
    } else {
        data += 'Gender: ' + gender + '\n';
    }




    if (error_flag) {
        alert(error_message);
        // document.getElementById("dat").innerHTML = 'dasdasdasdasdasd';
        
    } else {
        alert(data);
    }



    
    // var finalInfo = document.getElementById("customerConfirmation");
    // var inf = finalInfo.getElementsByTagName("p");


}













function loadJSON(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Here the callback gets implemented
                object = JSON.parse(xhr.responseText);
                callback();
            } else {

            }
        }
    };

    xhr.open("GET", path, true);
    xhr.send();
    return xhr.onreadystatechange();
}

loadJSON('js/menu.json', function printJSONObject(){
          console.log(object);
    });
