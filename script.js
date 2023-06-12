window.addEventListener('load', function () {
  var loadingDiv = document.getElementById('loading');
  loadingDiv.style.display = 'block';

  // Get the user's IP address from ipify API
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      var ipAddress = data.ip;
      document.getElementById('ip-address').textContent = ipAddress;

      // Get the user's location from ip-api.com API
      fetch('https://ipapi.co/' + ipAddress + '/json/')
        .then(response => response.json())
        .then(data => {
          var location = `${data.city}, ${data.region}`;
          var country = data.country_name;
          document.getElementById('location').textContent = location;
          document.getElementById('country').textContent = country;

          // Get the country flag image from restcountries API
          fetch('https://restcountries.com/v2/name/' + country)
            .then(response => response.json())
            .then(data => {
              var flag = data[0].flag;
              document.getElementById('country-image').setAttribute('src', flag);
              loadingDiv.style.display = 'none';
            });
        });
    });
});
