export default async function fetchBBImg(noOfCards: number): Promise<string[]> {
  const res = await fetch("/data/characters.json");
  const characters = await res.json();

  const seen = new Set<string>();
  const uniqueUrls: string[] = [];

  for (const char of characters) {
    const url = char.image_url;
    if (url && !seen.has(url)) {
      seen.add(url);
      uniqueUrls.push(url);
    }
  }

  const shuffled = uniqueUrls.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, noOfCards);
}
