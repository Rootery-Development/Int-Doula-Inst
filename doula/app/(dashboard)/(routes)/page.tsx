import {Button} from "@/components/ui/button"
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-extrabold text-sky-600" >Wussup BITCHESSS~</p>
      
      <Button variant="destructive"> 
        Touch Me
      </Button>
    </div>
  )
}
