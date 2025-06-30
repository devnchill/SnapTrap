interface IBBObj {
  image_url: string;
}
export default async function fetchBBImg(noOfCards: number): Promise<string[]> {
  const res = await fetch("/data/characters.json");
  const characters = await res.json();

  const urls = characters
    .map((char: IBBObj) => char.image_url)
    .filter(Boolean)
    .sort(() => Math.random() - 0.5)
    .slice(0, noOfCards);

  return urls;
}
