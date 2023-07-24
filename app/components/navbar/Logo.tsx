'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();

    return (
        <Link href={'https://charlie-nine.vercel.app/'}>
            <Image 
                alt='Logo'
                className='hidden md:block cursor-pointer'
                height='100'
                width='100'
                src='/images/logo1.png'
            />
        </ Link>
    )
}

export default Logo;