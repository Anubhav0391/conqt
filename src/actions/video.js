import axios from "axios";

const backend_url = import.meta.env.VITE_BACKEND_URL;

export const getLurnyById = async (lurnyId) => {
  // Define common request options for fetching data
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
    },
    body: JSON.stringify({ lurnyId }),
  };

  try {
    // Fetch full list of Lurnies from the backend
    const response = await fetch(`${backend_url}/api/lurny/get-by-id`, options);

    if (response.ok) {
      const lurny = await response.json();

      return lurny;
    }
  } catch (error) {
    console.log(error);
  }
};

export const initialiseCostumization =
  (itemId, itemType) => async (dispatch) => {
    try {
      const response = await axios.post(
        `${backend_url}/api/initialise-customization`,
        { itemId, itemType }
      );

      if (response.status === 200) {
        const channels = await response.data;
        // dispatch(setUPSCChannels(channels));
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
