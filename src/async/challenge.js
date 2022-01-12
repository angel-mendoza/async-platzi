const fetchData = require("../utils/fetchData");
const api = "https://rickandmortyapi.com/api/character/";

const getData = async (api) => {
  try {
    const data = await fetchData(api);
    const  character = await fetchData(`${api}${data.results[0].id}`);
    const  origin = await fetchData(character.origin.url);

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);

  } catch (error) {
    console.error(error);
  }
}

getData(api);