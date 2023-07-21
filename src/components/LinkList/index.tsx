import Link from "next/link"
import { lilinks } from "../LinkList/Links"

interface liLinksProps {
  href?: string
  text?: string
}

export default function LiLinks(props: liLinksProps) {
  const listLinks = lilinks.map(lilink =>
    <li key={lilink.id} className="hover:contrast-50">
      <Link
        className=' flex items-center justify-center px-6 py-4 rounded-lg bg-black/[.1] border border-solid border-black/[.1]  dark:border-white/[.1] dark:bg-white/[.1] font-medium'
        href={lilink.href}
        target="blank"
      >
        {lilink.text}
      </Link>
    </li>
  );
  return (<>{ listLinks }</>)
}