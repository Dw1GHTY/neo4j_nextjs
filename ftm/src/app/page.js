import Image from "next/image";
import NeoTest from "./components/NeoTest";
import { read, getManagers } from "../../lib/neo4j";


export default function Home() {

  getManagers("Jose")

  return (
    <main className="flex min-h-screen">
      <NeoTest />
    </main>
  );

}
