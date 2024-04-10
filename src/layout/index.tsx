import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

const Layout = () => {
  return (
    <div className="relative w-screen h-screen">
        <Navbar />
        <div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full h-full overflow-y-auto">
			<Outlet />
		</div>
    </div>
  )
}

export default Layout
