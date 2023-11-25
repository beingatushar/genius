import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className='flex items-center p-4 '>
            <Button variant="ghost" size="icon" className='md:hidden'>
                <Menu />
            </Button>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl='/' />
            </div>
        </nav>
    )
}

export default Navbar