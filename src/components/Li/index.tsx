import Link from "next/link"

interface lilinkProps {
  href: string
  text: string
}

export default function Lilink(props: lilinkProps) {
  return (
    <li className="hover:contrast-50">
      <Link 
        className=' flex items-center justify-center px-6 py-4 rounded-lg bg-black/[.1] border border-solid border-black/[.1]  dark:border-white/[.1] dark:bg-white/[.1] font-medium'
        href={props.href}
        target="blank"
      >
        {props.text}
      </Link>
    </li>
  )
}