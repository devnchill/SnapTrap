export default async function fetchPokemonImg(
  noOfCards: number,
): Promise<string[]> {
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=${noOfCards}`;

  interface IPokeResponse {
    sprites: {
      front_default: string;
    };
  }

  async function makePromise(url: string): Promise<IPokeResponse> {
    const res = await fetch(url);
    const body = await res.json();
    return { sprites: { front_default: body.sprites.front_default } };
  }

  const res = await fetch(URL);
  const data = await res.json();

  const urls = data.results.map((el: { url: string }) => el.url);
  const promises = urls.map((url: string) => makePromise(url));
  const results = await Promise.all(promises);

  return results.map((r) => r.sprites.front_default);
}
