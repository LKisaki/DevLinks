import Link from "next/link";
import SiBuymeacoffee from "react-icons/si"

interface socialLinksProps {
  title: string
  target?: string
  href: string
  children: any
}

export default function SocialLinks(props: socialLinksProps) {
  return (
    <Link
      target="_blank"
      href={props.href}
      title={props.title}
      className="transition-all rounded-full p-2 hover:bg-2 hover:bg-[#000]/[.1] dark:hover:bg-[#FEFEFE]/[.1]"
    >
      {props.children}
    </Link>
  )
}