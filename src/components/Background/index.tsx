export default function Background() {
  return (
    <div className='select-none -z-10'>
        <div className='absolute rounded-full mix-blend-multiply filter blur-[90px] dark:opacity-75 animate-blob w-40 h-40 top-56 right-10 lg:w-80 lg:h-80 lg:top-36 lg:right-96
        bg-fuchsia-300 dark:bg-fuchsia-500'></div>
        <div className='absolute rounded-full mix-blend-multiply filter blur-[90px] dark:opacity-75 animate-blob animation-delay-3 w-40 h-40 top-80 left-14 lg:w-72 lg:h-72 lg:top-0 lg:left-96 dark:bg-yellow-500 bg-yellow-300'></div>
        <div className='absolute rounded-full mix-blend-multiply filter blur-[90px] dark:opacity-75 animate-blob animation-delay-2 w-40 h-40 top-0 right-80
        lg:w-72 lg:h-72 lg:top-80 lg:left-96 dark:bg-cyan-500 bg-cyan-300'></div>
        <div className="flex flex-col items-center justify-center">
        </div>
      </div>
  )
}