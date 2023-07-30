import { fetchPokemons } from "../api/index"
import Pokemons from "./pokemons/page"

export default async function Pokemon() {
  const initialData = await fetchPokemons()

  return <Pokemons pokemons={initialData} />
}
