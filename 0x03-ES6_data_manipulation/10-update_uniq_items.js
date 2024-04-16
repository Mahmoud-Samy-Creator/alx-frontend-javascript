export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');

  for (const [key, value] of map) {
    if (map.get(key) === 1) {
      map.set(key, 100);
    } else {
      map.set(key, value);
    }
  }

  return map;
}
