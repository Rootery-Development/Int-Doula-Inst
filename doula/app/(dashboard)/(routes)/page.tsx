import Image from 'next/image'
import {Button} from "@/components/ui/button"
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-extrabold text-sky-600" >Wussup BITCHESSS~</p>
        <UserButton afterSignOutUrl='/sign-in'></UserButton>
      <Button variant="destructive"> 
        Touch Me
      </Button>
    </div>
  )
}
