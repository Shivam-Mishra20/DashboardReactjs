
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddHomeIcon from '@mui/icons-material/AddHome';

import SettingsIcon from '@mui/icons-material/Settings'
import { NavLink } from 'react-router-dom';
import { useAppStore } from '../AppStore';
import { useColorMode } from '../Context/Dark&LightMode';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { Mode } from '@mui/icons-material';
const drawerWidth = 160;



const drawerItems = [
    { id: 1, labelText: "Home", icon: <AddHomeIcon />, route: "/" },
    { id: 2, labelText: "Products", icon: < ProductionQuantityLimitsIcon />, route: "/product" },
    { id: 3, labelText: "Analtyics", icon: <AssessmentIcon />, route: "/analytics" },
    { id: 4, labelText: "Settings", icon: <SettingsIcon />, route: "/setting" },
];




export default function Sidebar() {
    const theme = useTheme();
    // const [open, setOpen] = React.useState(true);

    //Toggle Theme 
    const { mode } = useColorMode()


    const open = useAppStore((state) => state.dopen);   // Accessing the state from the AppStore using the zustendend


    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
        backgroundColor: `${mode === "dark" && '#121212'}`,
        color: `${mode === "dark" && "white"}`,

    });

    const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        backgroundColor: `${Mode === "dark" && '#121212'}`,
        color: `${Mode === "dark" && "white"}`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },  // Hide the drawer when the screen is less than 600px
    });

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        backgroundColor: `${Mode === "dark" && '#121212'}`,
    }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box height={30} />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton  >
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider />
                <List>
                    {drawerItems.map((item) => (
                        <NavLink
                            to={item.route}
                            key={item.id}
                            style={{ textDecoration: 'none' }}
                            activeClassName="active">

                            <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                            color: `${mode === 'dark' ? "white" : "black"}`
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.labelText} sx={{ opacity: open ? 1 : 0, color: `${mode === 'dark' ? "white" : "black"}` }} />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
                <Divider sx={{ borderColor: '#fff' }} />


            </Drawer>

        </Box>
    );
}
