import { useCallback, useMemo, useState } from "react";

import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Swal from "sweetalert2";
import { db } from "../../Firebase/FirebaseConfig";
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useAppStore } from "../../AppStore";
import '../../App.css';


// eslint-disable-next-line react/prop-types
const AddProduct = ({ handleclose }) => {

    const categories = useMemo(() => [
        { value: 'Mobile', label: 'Mobile' },
        { value: 'Laptop', label: 'Laptop' },
        { value: 'Tablet', label: 'Tablet' },
        { value: 'Electronics', label: 'Electronics' },
    ], []);

    const [productData, setProductData] = useState({
        name: '',
        price: '',
        category: '',
        brand: ''
    });

    const setRows = useAppStore((state) => state.setRows);
    const productsCollectionRef = collection(db, "products");

    const createProduct = async () => {
        // Validation check
        if (!productData.name || !productData.price || !productData.category || !productData.brand) {
            Swal.fire({
                title: 'Error!',
                text: 'All fields are required. Please fill out all fields.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#d33',
            });
            return; // Prevent form submission
        }

        try {
            await addDoc(productsCollectionRef, {
                name: productData.name,
                price: Number(productData.price),
                type: productData.category,
                brand: productData.brand
            });
            await fetchProducts(); // Update the product list
            handleclose(); // Close the form
            setProductData({
                name: '',
                price: '',
                category: '',
                brand: ''
            }); // Reset form fields
            Swal.fire({
                title: 'Product Added Successfully!',
                text: 'Your new product has been added to the database.',
                icon: 'success',
                confirmButtonText: 'Great!',
                confirmButtonColor: '#3085d6',
                imageUrl: 'https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif',
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
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'There was an error adding the product.',
                icon: 'error',
                confirmButtonText: 'Try Again',
                confirmButtonColor: '#d33',
            });
        }
    };

    const fetchProducts = async () => {
        try {
            const data = await getDocs(productsCollectionRef);
            setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    };

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    }, [productData]);

    return (
        <>
            <Box sx={{ m: 2 }} />
            <Typography variant="h5" align="center">
                Add Product
            </Typography>
            <IconButton
                style={{ position: "absolute", top: "0", right: "0" }}
                onClick={handleclose}
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
                        <Button variant="contained" onClick={createProduct}>
                            Submit
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default AddProduct;
