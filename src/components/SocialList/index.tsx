import Link from "next/link";

interface socialListProps {
  title: string
  target?: string
  href: string
  children: any
}
export default function SocialList(props: socialListProps) {
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