import Link from 'next/link'
export default function Home() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/about" as={'/about'}>
        <a>About</a>
      </Link>
    </div>
  )
}
