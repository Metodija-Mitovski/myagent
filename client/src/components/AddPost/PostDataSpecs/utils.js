import axios from "axios";

// get center city location
export const updateGeoMapCenterView = async (city) => {
  const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    city
  )}.json?proximity=-122.3995752,37.7881856&access_token=${
    process.env.REACT_APP_GEO_CODING_KEY
  }`;

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

export function cyr_to_lat(aText) {
  aText = aText.replace(/љ/g, "lj");
  aText = aText.replace(/Љ/g, "Lj");

  aText = aText.replace(/њ/g, "nj");
  aText = aText.replace(/Њ/g, "Nj");

  aText = aText.replace(/џ/g, "dž");
  aText = aText.replace(/Џ/g, "Dž");

  aText = aText.replace(/а/g, "a");
  aText = aText.replace(/б/g, "b");
  aText = aText.replace(/ц/g, "c");
  aText = aText.replace(/ч/g, "č");
  aText = aText.replace(/ћ/g, "ć");
  aText = aText.replace(/д/g, "d");
  aText = aText.replace(/ђ/g, "đ");
  aText = aText.replace(/е/g, "e");
  aText = aText.replace(/ф/g, "f");
  aText = aText.replace(/г/g, "g");
  aText = aText.replace(/х/g, "h");
  aText = aText.replace(/и/g, "i");
  aText = aText.replace(/ј/g, "j");
  aText = aText.replace(/к/g, "k");
  aText = aText.replace(/л/g, "l");
  aText = aText.replace(/м/g, "m");
  aText = aText.replace(/н/g, "n");
  aText = aText.replace(/о/g, "o");
  aText = aText.replace(/п/g, "p");
  aText = aText.replace(/р/g, "r");
  aText = aText.replace(/с/g, "s");
  aText = aText.replace(/ш/g, "š");
  aText = aText.replace(/т/g, "t");
  aText = aText.replace(/у/g, "u");
  aText = aText.replace(/в/g, "v");
  aText = aText.replace(/з/g, "z");
  aText = aText.replace(/ж/g, "ž");

  aText = aText.replace(/А/g, "A");
  aText = aText.replace(/Б/g, "B");
  aText = aText.replace(/Ц/g, "C");
  aText = aText.replace(/Ч/g, "Č");
  aText = aText.replace(/Ћ/g, "Ć");
  aText = aText.replace(/Д/g, "D");
  aText = aText.replace(/Ђ/g, "Đ");
  aText = aText.replace(/Е/g, "E");
  aText = aText.replace(/Ф/g, "F");
  aText = aText.replace(/Г/g, "G");
  aText = aText.replace(/Х/g, "H");
  aText = aText.replace(/И/g, "I");
  aText = aText.replace(/Ј/g, "J");
  aText = aText.replace(/К/g, "K");
  aText = aText.replace(/Л/g, "L");
  aText = aText.replace(/М/g, "M");
  aText = aText.replace(/Н/g, "N");
  aText = aText.replace(/О/g, "O");
  aText = aText.replace(/П/g, "P");
  aText = aText.replace(/Р/g, "R");
  aText = aText.replace(/С/g, "S");
  aText = aText.replace(/Ш/g, "Š");
  aText = aText.replace(/Т/g, "T");
  aText = aText.replace(/У/g, "U");
  aText = aText.replace(/В/g, "V");
  aText = aText.replace(/З/g, "Z");
  aText = aText.replace(/Ж/g, "Ž");

  return aText;
}
