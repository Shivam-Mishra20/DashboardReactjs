import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import MuiAppBar from '@mui/material/AppBar';
import { useAppStore } from '../AppStore';
import { useState } from 'react';
import MessageModal from './MessageModal';
import { Navigate, NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@mui/material';
import Swal from 'sweetalert2';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from '../Context/Dark&LightMode';


const AppBar = styled(MuiAppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);  // Modal state

    const { isAuthenticated, logout, user, } = useAuth0();
    const { toggleColorMode, mode } = useColorMode();

    // State to manage the badge count
    const [notificationsCount, setNotificationsCount] = useState(17);

    // Function to clear notifications
    const handleClearNotifications = () => {
        setNotificationsCount(0); // Clear the badge by setting count to 0


        Swal.fire({
            title: 'All notification are clear!',
            text: 'You will be redirected to the home page.',
            icon: 'success',
            confirmButtonText: 'Great!',
            confirmButtonColor: '#3085d6',

            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Success GIF',
            customClass: {
                container: 'my-custom-swal',
                title: 'my-custom-title',
                text: 'my-custom-text',
                image: 'my-custom-image',
            },
            didRender: () => {
                document.querySelector('.my-custom-swal').style.marginTop = '20px'; // Adjust margin as needed
            }
        });




    };



    const handleButtonClick = () => {
        if (isAuthenticated) {
            // Logout the user


            // Show a sweet alert with success message and redirect to login page

            Swal.fire({
                title: 'You have logged out successfully!',
                text: 'You will be redirected to the login page.',
                icon: 'success',
                confirmButtonText: 'Great!',
                confirmButtonColor: '#3085d6',
                imageUrl: "https://media.giphy.com/media/U6GixhwsEXOlZSYvqq/giphy.gif",
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: 'Success GIF',
                customClass: {
                    container: 'my-custom-swal',
                    title: 'my-custom-title',
                    text: 'my-custom-text',
                    image: 'my-custom-image',
                },
                didRender: () => {
                    document.querySelector('.my-custom-swal').style.marginTop = '20px'; // Adjust margin as needed
                }
            });


            setTimeout(() => {
                logout();

            }, 3000);


        } else {
            Navigate('/login'); // Navigate to Login.jsx
        }
    };


    const updateOpen = useAppStore((state) => state.updateOpen);
    const dopen = useAppStore((state) => state.dopen);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <NavLink
                to='/profile'
                style={{ textDecoration: 'none', color: 'gray' }}
            >
                <MenuItem>
                    <Typography sx={{ fontSize: '15px' }}>
                        Profile
                    </Typography>
                </MenuItem>
            </NavLink>

            <NavLink
                to='/setting'
                style={{ textDecoration: 'none', color: 'gray' }}
            >
                <MenuItem>
                    <Typography sx={{ fontSize: '15px' }}>
                        MY Account
                    </Typography>
                </MenuItem>
            </NavLink>
        </Menu >
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >


            <MenuItem onClick={() => setModalOpen(true)}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label={`show ${notificationsCount} new notifications`}
                    color="inherit"
                    onClick={handleClearNotifications}
                >
                    {/* Conditionally render Badge only if there are notifications */}
                    {notificationsCount > 0 ? (
                        <Badge badgeContent={notificationsCount} color="error">
                            <NotificationsIcon />
                        </Badge>
                    ) : (
                        <NotificationsIcon />
                    )}
                </IconButton>
                <p>Notification</p>

            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p >Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar variant='Danger' sx={{
                    bgcolor: mode === 'dark' ? '#212121' : '#3EECAC',

                    boxShadow: "10px 1px 10px gray",

                }} position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => updateOpen(!dopen)}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block', fontFamily: "monospace" } }}
                        >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
                                <span >MISHRATECH</span>
                                <img src='img/logo.svg' style={{ width: "40px" }} alt="" />

                            </div>

                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


                            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={() => setModalOpen(true)}>
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label={`show ${notificationsCount} new notifications`}
                                color="inherit"
                                onClick={handleClearNotifications}
                            >
                                {/* Conditionally render Badge only if there are notifications */}
                                {notificationsCount > 0 ? (
                                    <Badge badgeContent={notificationsCount} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                ) : (
                                    <NotificationsIcon />
                                )}
                            </IconButton>







                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>


                        </Box>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="mode"
                            onClick={toggleColorMode}
                            sx={{ mr: 0.6 }}
                        >
                            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>

                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}  >
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >

                                <AccountCircle />

                            </IconButton>
                            <Box sx={{ fontSize: 15, fontFamily: "monospace" }} > {user ? user.
                                nickname
                                : ""}</Box>
                        </div>

                        <Button variant='contained' sx={{ padding: "6px 8px", marginX: "10px", background: "#49A078" }} onClick={handleButtonClick} > {isAuthenticated ? "Logout" : "Login"} </Button>


                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box >

            {/* Message Modal */}
            < MessageModal
                open={modalOpen}
                handleClose={() => setModalOpen(false)
                }
                title="New Messages"
                message="You have 4 new messages."
            />
        </>
    );
}
