function sendSOS() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const message = '' I need help! My live location: https://maps.google.com/?q=${lat},${lon}`;

      
      const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");
    },
    () => alert("Could not get location. Please enable GPS.")
  );
}
