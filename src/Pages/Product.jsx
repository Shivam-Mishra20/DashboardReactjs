import { Box } from "@mui/material"
import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
import ProductList from "./products/ProductList"



const Product = () => {
    return (
        <div>
            <Navbar />

            <Box height={20} />
            <Box sx={{ display: 'flex', width: "100%", minWidth: "100vw", }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, }}>

                    <Box height={60} />
                    <ProductList />

                </Box>

            </Box>

        </div>
    )
}

export default Product
