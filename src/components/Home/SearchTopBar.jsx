import UserButton from "../Custom/UserButton"
import SearchInput from "../Custom/SearchInput"

export default function SearchTopBar() {
    return (
    <div className="mt-4 h-12 flex">
        <div className="w-2/12 flex items-center justify-center">
            <UserButton size={`lg`}/>
        </div>
        <div className="w-10/12 flex items-center justify-center">
            <SearchInput />
        </div>
        
        
    </div>
    )
} 