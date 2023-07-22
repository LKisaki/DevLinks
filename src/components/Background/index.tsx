import { bgObjs } from "./BackgroundObject"

type backgroundProps = {
  width?: string
  height?: string
  vertical?: string
  horizontal?: string
  widthLg?: string
  heightLg?: string
  verticalLg?: string
  horizontalLg?: string
  animationDelay?: string
  color?: string
}

export default function Background(props: backgroundProps) {
  const bgObjects = bgObjs.map(bgObj =>
    <div
      key={bgObj.id}
      className={`select-none -z-10 absolute rounded-full mix-blend-multiply filter blur-[70px] lg:blur-[110px] animate-blob animation-delay-${bgObj.animationDelay} w-${bgObj.width} h-${bgObj.height} ${bgObj.vertical} ${bgObj.horizontal} lg:w-${bgObj.widthLg} lg:h-${bgObj.heightLg} lg:${bgObj.verticalLg} lg:${bgObj.horizontalLg} bg-${bgObj.color}`}></div>
  )
  return (<>{bgObjects}</>)
}