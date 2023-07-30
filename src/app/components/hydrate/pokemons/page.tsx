'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchPokemons } from '../../../api/index'

export default function Pokemons() {
  // サーバーコンポーネント側でプリフェッチしたデータを即座に利用できる
  const { data } = useQuery({ queryKey: ['pokemons'], queryFn: fetchPokemons })

  // 以下の方法でもデータを取得することができるが、クライアントでレンダリングされるまでフェッチは実行されない
  // const { data: otherData } = useQuery({
  //   queryKey: ['pokemons-2'],
  //   queryFn: fetchPokemons,
  // })

  // data の中からデータを取得する
  return (
    <section className="w-[400px]">
      <p>Hydrate によるプリフェッチ</p>
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
