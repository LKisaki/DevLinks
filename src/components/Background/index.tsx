
export default function Background() {
  return (
    <div>
        <div className="absolute -z-10 rounded-full mix-blend-luminosity filter blur-[70px] lg:blur-[120px] animate-blob
    animation-delay-1 w-40 h-40 top-56 right-10 lg:w-80 lg:h-80 lg:top-36 lg:right-96 bg-fuchsia-500 "></div>
        <div className="absolute -z-10 rounded-full mix-blend-luminosity filter blur-[70px] lg:blur-[120px] animate-blob
    animation-delay-3 w-40 h-40 top-80 left-14 lg:w-72 lg:h-72 lg:top-0 lg:left-96 bg-[#ffff00]"></div>
        <div className="absolute -z-10 rounded-full mix-blend-luminosity filter blur-[70px] lg:blur-[120px] animate-blob
    animation-delay-2 w-40 h-40 top-0 right-80 lg:w-72 lg:h-72 lg:top-80 lg:left-96 bg-cyan-400"></div>
    </div>
    )
}