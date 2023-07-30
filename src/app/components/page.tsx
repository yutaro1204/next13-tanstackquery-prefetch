import { fetchPokemons } from "../api/index"
import Pokemons from "./pokemons/page"
import { setTimeout } from 'timers/promises'

export default async function Pokemon() {
  // await setTimeout(5000)
  const initialData = await fetchPokemons()

  return <Pokemons pokemons={initialData} />
}
