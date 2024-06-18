import Image from 'next/image'
import {Button} from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-extrabold text-sky-600" >hi</p>
      <Button variant="destructive"> 
        oh wussup
      </Button>
    </div>
  )
}
