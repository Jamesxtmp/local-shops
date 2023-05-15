import Image from "next/image"
import Link from "next/link"

export default function UserButton({size}) {
    const sizes = {
        xxl: 60, xl: 50, lg: 40, md: 30, sm: 20, xs: 10
    }
    return (
    <div>
        <Link href={`/`}>
            <Image src={`/user.png`} width={sizes[size]} height={sizes[size]}></Image>  
        </Link>
    </div>
    )
  }  