const defaultCenter = { lat: -25.5313, lng: -49.2031 };

const fieldMap = {
  locality: "locality-input",
  administrative_area_level_1: "administrative_area_level_1-input",
  postal_code: "postal_code-input",
  country: "country-input",
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const waitForGoogleMaps = async (attempts = 50) => {
  for (let index = 0; index < attempts; index += 1) {
    if (window.google?.maps?.importLibrary) {
      return true;
    }
    await sleep(200);
  }
  return false;
};

const fillAddressFields = (place) => {
  const locationInput = document.querySelector("#location-input");
  const parts = {
    streetNumber: "",
    route: "",
  };

  Object.values(fieldMap).forEach((id) => {
    const input = document.querySelector(`#${id}`);
    if (input instanceof HTMLInputElement) {
      input.value = "";
    }
  });

  (place.address_components || []).forEach((component) => {
    const primaryType = component.types[0];

    if (primaryType === "street_number") {
      parts.streetNumber = component.long_name;
      return;
    }

    if (primaryType === "route") {
      parts.route = component.short_name;
      return;
    }

    const targetId = fieldMap[primaryType];
    if (!targetId) {
      return;
    }

    const input = document.querySelector(`#${targetId}`);
    if (input instanceof HTMLInputElement) {
      input.value = component.long_name;
    }
  });

  if (locationInput instanceof HTMLInputElement) {
    locationInput.value = `${parts.streetNumber} ${parts.route}`.trim();
  }
};

const updateMap = (place) => {
  const mapElement = document.querySelector("gmp-map");
  const markerElement = document.querySelector("gmp-advanced-marker");
  const location = place.geometry?.location;

  if (!mapElement || !markerElement || !location) {
    return;
  }

  mapElement.center = location;
  mapElement.zoom = 17;
  markerElement.position = location;
};

const initAddressSelection = async () => {
  const hasGoogleMaps = await waitForGoogleMaps();
  if (!hasGoogleMaps) {
    console.warn(
      "Google Maps API indisponível. Substitua YOUR_API_KEY_HERE por uma chave válida.",
    );
    return;
  }

  const locationInput = document.querySelector("#location-input");
  if (!(locationInput instanceof HTMLInputElement)) {
    return;
  }

  const mapElement = document.querySelector("gmp-map");
  const markerElement = document.querySelector("gmp-advanced-marker");

  if (mapElement) {
    mapElement.center = defaultCenter;
    mapElement.zoom = 12;
  }

  if (markerElement) {
    markerElement.position = defaultCenter;
  }

  const { Autocomplete } = await google.maps.importLibrary("places");

  const autocomplete = new Autocomplete(locationInput, {
    fields: ["address_components", "geometry"],
    types: ["address"],
  });

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }

    fillAddressFields(place);
    updateMap(place);
  });
};

window.addEventListener("DOMContentLoaded", () => {
  initAddressSelection().catch((error) => {
    console.error("Falha ao iniciar a seleção de endereço:", error);
  });
});
