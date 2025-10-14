function sendSOS() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const message = encodeURIComponent(
          `🚨 SOS! I need help. My location: https://www.google.com/maps?q=${latitude},${longitude}`
        );
        
        const url = `https://wa.me/?text=${message}`;
        window.open(url, '_blank');

      },
      (error) => {
        alert('Unable to retrieve your location. Please allow location access.');
      }
    );
  } else {
    alert('Geolocation is not supported by your browser.');
  }
