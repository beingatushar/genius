import { Button } from '@/components/ui/button'
import React from 'react'
import Link from "next/link"
type Props = {}

const LandingPage = (props: Props) => {
    return (
        <>

            <div>LandingPage (Unprotected) </div>
            <div>
                <Link href="sign-in"  >
                    <Button>Sign In</Button>
                </Link>
            </div>
            <div>
                <Link href="sign-up"  >
                    <Button>Sign Up</Button>
                </Link>
            </div>
        </>
    )
}

export default LandingPage