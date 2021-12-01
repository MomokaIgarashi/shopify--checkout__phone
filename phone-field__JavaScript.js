// Get the html id of original phone field
var phone_original_area = document.getElementById("checkout_shipping_address_phone");

// Clone the original phone field and make additional 2 phone fields
var clone_element1 = phone_original_area.cloneNode(true);
clone_element1.id = "checkout_shipping_address_phone_first";
clone_element1.getAttribute("name");
clone_element1.name = "checkout[shipping_address][phone1]";
phone_original_area.after(clone_element1)

var clone_element2 = phone_original_area.cloneNode(true);
clone_element2.id = "checkout_shipping_address_phone_second";
clone_element2.getAttribute("name");
clone_element2.name = "checkout[shipping_address][phone2]";
phone_original_area.after(clone_element2)

// Hide the original phone field
phone_original_area.style.display ="none";

// Add CSS style to additional fields
clone_element1.style.width ="300px";
clone_element2.style.marginTop = "1%";

// Change the input type of additional fields
clone_element1.type = 'text';
clone_element2.type = 'text';

parseInt(clone_element2, 10)

setTimeout(function () {
  clone_element2.placeholder = "Phone Area code(Please don't put 0 at first) [Ex: 180 123 4567] *";
  clone_element1.placeholder = "Phone Country code   [Ex: 0049] *";
  var countrycode = sessionStorage.getItem('phone');
  if (countrycode) {
    clone_element2.value = countrycode;
  }
  var phone = sessionStorage.getItem('countrycode');
  if (phone) {
    clone_element1.value = phone;
  }
}, 10);


function inputChange(event){
  phone_original_area.value = countrycodeAdd.value + phoneAdd.value
  sessionStorage.setItem('contrycode', countrycodeAdd.value)
  sessionStorage.setItem('phone', phoneAdd.value)
}

let countrycodeAdd = document.getElementById("checkout_shipping_address_phone_first");
countrycodeAdd.addEventListener('input', inputChange);

let phoneAdd = document.getElementById("checkout_shipping_address_phone_second");
phoneAdd.addEventListener('input', inputChange);