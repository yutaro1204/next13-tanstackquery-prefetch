import { dehydrate, Hydrate } from '@tanstack/react-query'
import getQueryClient from '../../getQueryClient'
import { fetchPokemons } from '../../api/index'
import Pokemons from './pokemons/page'

export default async function HydratedPosts() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['pokemons'], fetchPokemons)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <Pokemons />
    </Hydrate>
  )
}
