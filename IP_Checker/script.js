window.addEventListener('load', function() {
  // Get the user's IP address from ipify API
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      var ipAddress = data.ip;
      document.getElementById('ip-address').textContent = ipAddress;

      // Get the user's country from WhatIsMyIPAddress.com API
      fetch('https://ipwhois.app/json/' + ipAddress)
        .then(response => response.json())
        .then(data => {
          var country = data.country;
          document.getElementById('country').textContent = country;

          // Get the country flag image from restcountries API
          fetch('https://restcountries.com/v2/name/' + country)
            .then(response => response.json())
            .then(data => {
              var flag = data[0].flag;
              document.getElementById('country-image').setAttribute('src', flag);
            });
        });
    });
});
