import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>Hello world news page</h1>
      <ul>
        <li>
          <Link href="/news/Gustavo">Gustavo</Link>
        </li>
        <li>
          <Link href="/news/Iasmin">Iasmin</Link>
        </li>
      </ul>
    </>
  );
}
