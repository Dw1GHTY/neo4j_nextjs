import Image from "next/image";
import NeoTest from "./components/NeoTest";
import { read } from "../../lib/neo4j";


export default function Home() {

  read(
    'MATCH (n) return n'
  )
  return (
    <main className="flex min-h-screen">
      <NeoTest />
    </main>
  );

}
