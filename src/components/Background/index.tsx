import { bgObjs } from "./BackgroundObject"

type backgroundProps = {
  id?: number
  width?: string
  height?: string
  vertical?: string
  horizontal?: string
  widthLargeScreen?: string
  heightLargeScreen?: string
  verticalLargeScreen?: string
  horizontalLargeScreen?: string
  animationDelay?: string
  color?: string
}

export default function Background(props: backgroundProps) {
  const bgObjects = bgObjs.map(bgObj =>
    <div
      key={bgObj.id}
      className={`absolute -z-10 rounded-full mix-blend-multiply filter blur-[70px] lg:blur-[120px] animate-blob
        animation-delay-${bgObj.animationDelay} w-${bgObj.width} h-${bgObj.height} ${bgObj.vertical} ${bgObj.horizontal} lg:w-${bgObj.widthLargeScreen} lg:h-${bgObj.heightLargeScreen} lg:${bgObj.verticalLargeScreen} lg:${bgObj.horizontalLargeScreen} bg-${bgObj.color}`}
    ></div>

  )
  return (
    <>
      {bgObjects}
    </>
    )
}