import Link from 'next/link';
import Image from 'next/image';
import Switch from '@/components/Switch';
import avatar from '../assets/avatar_.png';
import { AiOutlineHeart } from 'react-icons/ai';
import SocialList from '@/components/SocialList';
import Background from '@/components/Background';
import LiLinks from '@/components/LinkList/index';
import { SiBuymeacoffee, SiLinktree } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center p-12 select-none">
      <Background />
        <div className='flex flex-col gap-2 items-center justify-center w-full'>
          <div className='flex items-center justify-center h-[112px]'>
            <Image
              src={avatar}
              alt='uma foto de avatar'
              objectFit='cover'
              width={112}
              height={112}
              priority={true}
            />
          </div>
          <div>
            <span className='font-medium text-base'>
              @luankisaki.dev
            </span>
          </div>
          <Switch />
          {/* Links */}
          <div className='p-6 gap-4 w-full overflow-x-auto scrollbar h-60 lg:w-1/3'>
            <ul className='flex flex-col h-full list-none gap-4'>
              <LiLinks />
            </ul>
          </div>
        </div>
        {/* Social Links */}
        <div className='flex items-center justify-around gap-4 py-6'>
          <SocialList title={'Github'} href={'https://github.com/LKisaki'} >
            <FaGithub />
          </SocialList>
          <SocialList title={'Linkedin'} href={'https://linkedin.com/in/luankisaki/'} >
            <FaLinkedin />
          </SocialList>
          <SocialList title={'Instagram'} href={'https://instagram.com/luankisaki.dev/'} >
            <FaInstagram />
          </SocialList>
          <SocialList title={'Lintkree'} href={'https://linktr.ee/luankisaki'} >
            <SiLinktree />
          </SocialList>
          <SocialList title={'Buymeacoffee'} href={'https://buymeacoffee.com/luankisaki'} >
            <SiBuymeacoffee />
          </SocialList>
        </div>
        {/* Footer */}
        <div className='flex items-center w-full justify-center py-6'>
          <h3 className='flex items-center '>Feito com&nbsp;<AiOutlineHeart color='red' />&nbsp;por&nbsp;
            <Link href={'https://linktr.ee/luankisaki'} className='underline decoration-1 transition-all hover:font-semibold'>
              Luan Kisaki
            </Link>
          </h3>
        </div>
      </main>
    </>
  )
}
