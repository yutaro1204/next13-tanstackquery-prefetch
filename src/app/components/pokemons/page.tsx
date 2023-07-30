'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from "../../api/index"

export default function Pokemons(props: { pokemons: any }) {
  const { data } = useQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
    initialData: props.pokemons,
  })

  // data の中からデータを取得する
  return (
    <section className="w-[400px]">
      <p>initialData によるプリフェッチ</p>
      {
        data.results.map((result: { name: string }) => (
          <dl key={result.name} className="h-[120px]">
            <dt>
              <p>{result.name}</p>
            </dt>
            <dd>DESCRIPTION</dd>
          </dl>
        ))
      }
    </section>
  )
}
