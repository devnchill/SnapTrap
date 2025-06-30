interface IGOTObj {
  imageUrl: string;
}

export default async function fetchGOTImg(
  noOfCards: number,
): Promise<string[]> {
  const URL = "https://thronesapi.com/api/v2/Characters";
  const res = await fetch(URL);
  const body = await res.json();
  return body.slice(0, noOfCards).map((ch: IGOTObj) => ch.imageUrl);
}
