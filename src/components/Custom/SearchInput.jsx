import Image from "next/image"
export default function SearchInput() {
    return (
    <div className="w-full px-4">
        <input className="text-center w-full pl-4 pr-12 py-1 bg-transparent border-2 rounded-lg outline-0" type="text" placeholder={`Busca lo que quieras...`} />
        <button>
            <Image className="absolute top-7 right-8" src={`/magnifying-glass.png`} width={20} height={20} />
        </button>
    </div>
    )
  }  