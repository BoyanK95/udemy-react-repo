import { Fragment } from "react";
import Link from "next/link";
//domain.com/news

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-great">Next Is A Great Framework</Link>
        </li>
        <li>
        <Link href='/news/downfall-of-crypto'>Downfall of crypto</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
