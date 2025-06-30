interface IRAMObj {
  image: string;
}
export default async function fetchRAMImg(
  noOfCards: number,
): Promise<string[]> {
  const id = Array.from({ length: noOfCards }, (_, i) => i + 1);
  const URL = `https://rickandmortyapi.com/api/character/${id}`;
  const res = await fetch(URL);
  const body = await res.json();
  return body.map((el: IRAMObj) => el.image);
}
