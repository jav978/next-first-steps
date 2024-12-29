import Link from 'next/link';

export default function HomePage() {
  return (
    
      <main className="flex flex-col items-center p-24">
         <h1 className="text-xl">Hola mundo</h1>
            <span className="text-5xl">
              <Link href={'/about'}> About Page</Link>
            </span>
      </main>
    
  );
}
