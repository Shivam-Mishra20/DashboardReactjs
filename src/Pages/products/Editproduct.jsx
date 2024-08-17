/* eslint-disable react/prop-types */
import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Swal from "sweetalert2";
import { db } from "../../Firebase/FirebaseConfig";
import { doc, updateDoc, getDocs, collection } from 'firebase/firestore';

import { useAppStore } from "../../AppStore";
import '../../App.css';

const categories = [
    { value: 'Mobile', label: 'Mobile' },
    { value: 'Laptop', label: 'Laptop' },
    { value: 'Tablet', label: 'Tablet' },
    { value: 'Electronics', label: 'Electronics' },
];

const EditProduct = ({ handleClose, productId }) => {

    const [productData, setProductData] = useState({
        name: '',
        price: '',
        category: '',
        brand: ''
    });

    const setRows = useAppStore((state) => state.setRows);

    useEffect(() => {
        if (productId) {

            setProductData({
                name: productId.name || '',
                price: productId.price || '',
                category: productId.type || '',
                brand: productId.brand || '',
            });
        }
        else {

            Swal.fire({
                title: 'Error!',
                text: 'Product not found.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#d33',
            });
            handleClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const updateProduct = async () => {

        const userDoc = doc(db, "products", productId.id);
        const newfields = {
            name: productData.name,
            price: productData.price,
            type: productData.category,
            brand: productData.brand,
        }
        await updateDoc(userDoc, newfields);
        await getProducts();
        handleClose();
        Swal.fire({
            title: 'Product Updated  Successfully!',
            text: 'Your new product has been edit to the database.',
            icon: 'success',
            confirmButtonText: 'Great!',
            confirmButtonColor: '#3085d6',
            imageUrl: 'https://media.giphy.com/media/ESgYN7LGXgIO4/giphy.gif', // New GIF URL
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Success GIF',
            customClass: {
                container: 'my-custom-swal',
                title: 'my-custom-title',
                text: 'my-custom-text',
                image: 'my-custom-image',
            }
        });



    };

    const getProducts = async () => {
        // Fetch updated product list
        try {
            const data = await getDocs(collection(db, "products"));
            setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    return (
        <>
            <Box sx={{ m: 2 }} />
            <Typography variant="h5" align="center">
                Edit Product
            </Typography>
            <IconButton
                style={{ position: "absolute", top: "0", right: "0" }}
                onClick={handleClose}
            >
                <CloseIcon />
            </IconButton>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        onChange={handleChange}
                        name="name"
                        value={productData.name}
                        label="Name"
                        variant="outlined"
                        required
                        size="small"
                        sx={{ minWidth: "100%", marginY: "10px" }}
                    />
                </Grid>

                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            onChange={handleChange}
                            name="price"
                            value={productData.price}
                            label="Price"
                            size="small"
                            variant="outlined"
                            type="number"
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">$</InputAdornment>
                                ),
                            }}
                            sx={{ minWidth: "100%" }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            onChange={handleChange}
                            name="category"
                            required
                            select
                            value={productData.category}
                            label="Category"
                            size="small"
                            variant="outlined"
                            sx={{ minWidth: "100%" }}
                        >
                            {categories.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        onChange={handleChange}
                        name="brand"
                        value={productData.brand}
                        label="Brand"
                        variant="outlined"
                        size="small"
                        required
                        sx={{ minWidth: "100%", marginY: "10px" }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography textAlign={"center"} marginTop={2}>
                        <Button variant="contained" onClick={updateProduct}>
                            Submit
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default EditProduct;
