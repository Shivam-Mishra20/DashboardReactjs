import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../../Firebase/FirebaseConfig";
import { useAppStore } from "../../AppStore";
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from '@mui/material/Modal';
import AddProduct from "./AddProduct";
import Editproduct from "./Editproduct";
import Skeleton from '@mui/material/Skeleton';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



export default function ProductList() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const setRows = useAppStore((state) => state.setRows)

    const rows = useAppStore((state) => state.rows)

    const empCollectionRef = collection(db, "products");

    //for modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //for edit form
    const [editformid, setEditformid] = useState(null);
    const [editopen, seteditopen] = useState(false);
    const handleeditopen = () => seteditopen(true);
    const handleeditclose = () => seteditopen(false);



    useEffect(() => {
        getProductList();
    }, []);

    //get products from firebase
    const getProductList = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const deleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                deleteApi(id);
            }
        });
    };

    //delete product from firebase

    const deleteApi = async (id) => {
        const userDoc = doc(db, "products", id);
        await deleteDoc(userDoc);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        getProductList();
    };

    //edit product
    const editUser = (id, name, price, type, brand) => {
        const data = {
            id: id,
            name: name,
            price: price,
            type: type,
            brand: brand,
        };

        setEditformid(data);
        handleeditopen()
    }


    const filterData = (v) => {
        if (v) {
            setRows([v]);
        } else {
            getProductList();
        }
    };

    return (


        <>

            <Modal
                open={open}

                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddProduct handleclose={handleClose} />
                </Box>
            </Modal>
            <Modal
                open={editopen}

                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    < Editproduct handleClose={handleeditclose} productId={editformid} />
                </Box>
            </Modal>
            {rows.length > 0 && (
                <Paper elevation={3} sx={{ width: "98%", minHeight: "80vh", overflow: "hidden", padding: "20px" }}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ padding: "20px" }}
                    >
                        Products List
                    </Typography>
                    <Divider />
                    <Box height={10} />
                    <Stack direction="row" spacing={2} className="my-2 mb-2">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={rows}
                            sx={{ width: 300 }}
                            onChange={(e, v) => filterData(v)}
                            getOptionLabel={(rows) => rows.name || ""}
                            renderInput={(params) => (
                                <TextField {...params} size="small" label="Search Products" />
                            )}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        ></Typography>
                        <Button variant="contained" onClick={handleOpen} endIcon={<AddCircleIcon />}>
                            Add
                        </Button>
                    </Stack>
                    <Box height={10} />
                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" style={{ minWidth: "100px" }}>
                                        Name
                                    </TableCell>
                                    <TableCell align="left" style={{ minWidth: "100px" }}>
                                        Price
                                    </TableCell>
                                    <TableCell align="left" style={{ minWidth: "80px" }}>
                                        Category
                                    </TableCell>
                                    <TableCell align="left" style={{ minWidth: "100px" }}>
                                        Brand
                                    </TableCell>
                                    <TableCell align="left" style={{ minWidth: "100px" }}>
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.code}
                                            >
                                                <TableCell align="left">{row.name}</TableCell>
                                                <TableCell align="left">{row.price}</TableCell>
                                                <TableCell align="left">{row.type}</TableCell>
                                                <TableCell align="left">{row.brand}</TableCell>
                                                <TableCell align="left">
                                                    <Stack spacing={2} direction="row">
                                                        <EditIcon
                                                            style={{
                                                                fontSize: "20px",
                                                                color: "blue",
                                                                cursor: "pointer",
                                                            }}
                                                            className="cursor-pointer"
                                                            onClick={() => editUser(row.id, row.name, row.price, row.type, row.brand)}
                                                        />
                                                        <DeleteIcon
                                                            style={{
                                                                fontSize: "20px",
                                                                color: "darkred",
                                                                cursor: "pointer",
                                                            }}
                                                            onClick={() => {
                                                                deleteUser(row.id);
                                                            }}
                                                        />
                                                    </Stack>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            )}

            {rows.length === 0 && (
                <Box sx={{ width: 80 }}>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </Box>
            )}
        </>
    );
}

