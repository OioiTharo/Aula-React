import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {

  const resposta = await fetch("http://localhost:3000/api/boasVindas")
  const dados = await resposta.json();


  return (
    <main className={styles.main}>
      <p>{dados.msg}</p>
      <Link href="/sobre">Pagina sobre</Link>
    </main>
  );
}
