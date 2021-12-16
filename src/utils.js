const emptyMon = {
  name: '',
  sprites: { other: { "official-artwork": { front_default: '' }}},
  id: '',
  types: [{ type: { name: '' } }],
  weight: '',
  stats: [
    { base_stat: '' },
    { base_stat: '' },
    { base_stat: '' },
    { base_stat: '' },
    { base_stat: '' },
    { base_stat: '' }
  ],
}

export const captureMon = async (name) => {
  if (!name) { return Promise.resolve(emptyMon); }
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  if (!response.ok) { throw new Error('Pokemon could not be found.'); }
  return response.json();
}

export const capitalize = (str) => {
  const firstLetter = str.slice(0, 1);
  const result = firstLetter.toUpperCase() + str.slice(1);
  return result;
}