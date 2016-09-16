(function () {

    //Optional parameters
    //Add city and state display capabilities
    function buildAddressOptional(address1: string, address2?: string) {
        var addr2 = (address2) ? ' Address2: ' + address2 : '';
        displayAddress(address1 + addr2 + ', ');
    }

    //Default parameters
    //Add city and state display capabilities
    function buildAddressDefault(address1: string, address2 = 'N/A') {
        displayAddress('Address: ' + address1 + ' Address2: ' + address2);
    }

    //Rest parameters
    function buildAddressRest(...restOfAddress: string[]) {
        var address = '';
        restOfAddress.forEach((addr) => {
          if (addr) address += addr + ', '; 
        });
        displayAddress(address);
    }

    function displayAddress(msg: string) {
        result.innerHTML = msg;
    }

    var $ = (id) => document.getElementById(id);

    var addressButton: HTMLButtonElement = <HTMLButtonElement>$('addressButton'),
        address: HTMLInputElement = <HTMLInputElement>$('address'),
        address2: HTMLInputElement = <HTMLInputElement>$('address2'),
        
        //retrieve city value
        
        //retrieve state value
        
        result = $('result');

    //Call function with optional parameter
    //addressButton.addEventListener('click',(e) => buildAddressOptional(address.value, city.value));

    //Call function with default parameter
    //addressButton.addEventListener('click',(e) => buildAddressDefault(address.value, city.value));

    //Call function with Rest parameters
    addressButton.addEventListener('click',(e) => buildAddressRest(address.value, address2.value));

} ());