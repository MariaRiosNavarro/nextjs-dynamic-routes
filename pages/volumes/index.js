import Link from "next/link";
import { introduction } from "../../lib/data";
import Head from "next/head";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

export default function Volumes() {
  //first
  const router = useRouter();

  //Function for handleFunction
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // onClick function
  const handleRandomVolume = () => {
    const randomVolume = getRandomElement(volumes);
    // router.push (/) -  imperative routing
    router.push(`/volumes/${randomVolume.slug}`);
  };

  // function handleRandomBook(volumes) {
  //   return router.push(volumes[Math.floor(Math.random() * volumes.length)]);
  // }

  return (
    <>
      <Head>
        <title>The Lord of the Rings Volumes</title>
      </Head>
      <h1>The Lord of the Rings Volumes</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={handleRandomVolume}>Random Book</button>
    </>
  );
}
