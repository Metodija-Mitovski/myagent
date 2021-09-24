import axios from "axios";

// get center city location
const updateGeoMapCenterView = async (city) => {
  const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    city
  )}.json?proximity=-122.3995752,37.7881856&access_token=pk.eyJ1IjoibWl0b3Zjb2Rpbmc3NyIsImEiOiJja3R2emxqaXgyZmRlMnBwbm9hZDI3OGRuIn0.pHJZqIX5wcTd-7sc3wRQPA`;

  try {
    const res = await axios.get(geoUrl);

    if (res.status === 200) {
      const locationDataArr = res.data.features.filter((item) => {
        return item.place_name.includes("North Macedonia");
      });

      if (locationDataArr.length > 0) {
        const lat = locationDataArr[0].center[1];
        const lng = locationDataArr[0].center[0];

        return { lat, lng };
      } else {
        throw new Error();
      }
    }
  } catch (error) {
    console.log("Location Center Zoom not available");
  }
};

export default updateGeoMapCenterView;
