import { Box, } from "@mui/material"
import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"

import ListTab from "./Setting/ListTab"
const Setting = () => {
    return (
        <>
            <Navbar />

            <Box height={60} />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <ListTab />


                </Box>



            </Box>


        </>
    )
}

export default Setting