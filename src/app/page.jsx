import SearchTopBar from "@/components/Home/SearchTopBar"
import LocationSelector from "@/components/Home/LocationSelector"
import ProductsSelector from "@/components/Home/ProductsSelector"

export default function Home() {
  return (<>
    <SearchTopBar />
    {/* La imgen debe tener 1300 x 300 */}
    <LocationSelector imageSrc={`https://picsum.photos/1300/300`} />
    <ProductsSelector />
  </>)
} 