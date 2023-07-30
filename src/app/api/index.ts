export async function fetchPokemons() {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon',
    { headers: {'Content-Type': 'application/json'} }
  )
  const data = await res.json()

  return data
}
