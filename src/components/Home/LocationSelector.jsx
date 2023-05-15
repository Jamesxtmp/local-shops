import Image from "next/image"

export default function LocationSelector({imageSrc}) {
    return (
        <div className="relative mt-2 h-24" >
            <Image src={imageSrc} width={1300} height={300} ></Image>
            <h2 className="relative pl-2 bottom-9 text-3xl bg-gradient-to-t from-black to-transparent" >Localitation Name</h2>
            <Image className="absolute bottom-5 right-4" src={`/place.png`} width={45} height={45}></Image>
        </div> 
    )
}  