// import Pokemon from "./components/page" // initialData によるプリフェッチ
import Pokemon from './components/hydrate/page' // <Hydrate> によるプリフェッチ

export default function Home() {
  return (
    <main className="p-[20px] flex justify-center">
      <Pokemon />
    </main>
  )
}
