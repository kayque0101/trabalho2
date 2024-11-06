  // Iniciar o mapa
  let map;
  let marker;

  function initMap() {
      const initialPosition = { lat: -23.55052, lng: -46.633308 }; // São Paulo

      // Criar o mapa
      map = new google.maps.Map(document.getElementById("map"), {
          center: initialPosition,
          zoom: 12,
      });

      // Criar o marcador
      marker = new google.maps.Marker({
          position: initialPosition,
          map: map,
          draggable: true,
      });

      // Quando o marcador for movido, atualize o campo de localização
      google.maps.event.addListener(marker, "dragend", function() {
          const position = marker.getPosition();
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ location: position }, function(results, status) {
              if (status === "OK" && results[0]) {
                  document.getElementById("location").value = results[0].formatted_address;
              }
          });
      });

      // Adicionar funcionalidade de autocompletar ao campo de localização
      const input = document.getElementById("location");
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo("bounds", map);

      autocomplete.addListener("place_changed", function() {
          const place = autocomplete.getPlace();
          if (!place.geometry) return;

          // Atualizar a posição do mapa e do marcador com base no lugar escolhido
          if (place.geometry.location) {
              map.setCenter(place.geometry.location);
              map.setZoom(15);
              marker.setPosition(place.geometry.location);
          }
      });
  }

  // Submissão do formulário
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const location = document.getElementById('location').value;

      console.log('Nome:', name);
      console.log('Telefone:', phone);
      console.log('E-mail:', email);
      console.log('Localização:', location);

      document.getElementById('successMessage').style.display = 'block';

      document.getElementById('contactForm').reset();
  });

  // Carregar o Google Maps
  function loadScript(src) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
  }

  var mapaURL

  var iframe = document.createElement('iframe');
  iframe.src = mapaURL;
  iframe.allowFullscreen = true;
  iframe.style.width = "100%";
  iframe.style.height = "480px";
  iframe.style.border = "0";

  document.getElementById('mapa').append(iframe);