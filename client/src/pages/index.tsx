import Head from "next/head";
import Main_page from "./components/Main_page";
export default function Home() {
  return (
    <>
      <Head>
        <title>Recipe App</title>
      </Head>
      <Main_page />
    </>
  );
}
