class MarvelService {
  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = () => {
    return this.getResource(
      "https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=e0fa35f3bf7bf6e8ad3520b4c9260946"
    );
  };

  getCharacter = (id) => {
    return this.getResource(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=e0fa35f3bf7bf6e8ad3520b4c9260946`
    );
  };
}

export default MarvelService;
