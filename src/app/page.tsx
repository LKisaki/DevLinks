import Image from 'next/image';
import avatar from '../assets/avatar_.png';
import Switch from '@/components/Switch';
import LiLinks from '@/components/LinkList/index';
import SocialLinks from '@/components/SocialLinks';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { SiBuymeacoffee, SiLinktree } from 'react-icons/si';
import Link from 'next/link';
import Background from '@/components/Background';

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
          <SocialLinks title={'Github'} href={'https://github.com/LKisaki'} >
            <FaGithub />
          </SocialLinks>
          <SocialLinks title={'Linkedin'} href={'https://linkedin.com/in/luankisaki/'} >
            <FaLinkedin />
          </SocialLinks>
          <SocialLinks title={'Instagram'} href={'https://instagram.com/luankisaki.dev/'} >
            <FaInstagram />
          </SocialLinks>
          <SocialLinks title={'Lintkree'} href={'https://linktr.ee/luankisaki'} >
            <SiLinktree />
          </SocialLinks>
          <SocialLinks title={'Buymeacoffee'} href={'https://buymeacoffee.com/luankisaki'} >
            <SiBuymeacoffee />
          </SocialLinks>
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
