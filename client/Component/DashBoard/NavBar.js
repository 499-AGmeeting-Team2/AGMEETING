import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { experimentalStyled } from "@mui/material";
import { Button, ButtonGroup } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import MenuIcon from '../../icons/Menu';
import MenuIcon from '../../icons/Menu';
// import AccountPopover from './AccountPopover';
// import ContactsPopover from './ContactsPopover';
// import ContentSearch from './ContentSearch';
// import LanguagePopover from './LanguagePopover';
// import Logo from '../Logo';
// import NotificationsPopover from './NotificationsPopover';

const DashboardNavbarRoot = experimentalStyled(AppBar)(({ theme }) => ({
    ...(theme.palette.mode === 'light' && {
        backgroundColor: theme.palette.primary.main,
        boxShadow: 'none',
        color: theme.palette.primary.contrastText
    }),
    ...(theme.palette.mode === 'dark' && {
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: 'none'
    }),
    zIndex: theme.zIndex.drawer + 100
}));

const NavBar = (props) => {
    const { onSidebarMobileOpen, ...other } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <DashboardNavbarRoot {...other}>
            <Toolbar sx={{ minHeight: 64 }}>
                <IconButton
                    color="inherit"
                    onClick={onSidebarMobileOpen}
                    sx={{
                        display: {
                            lg: 'none'
                        }
                    }}
                >
                    <MenuIcon fontSize="small" />
                </IconButton>
                <RouterLink to="/">
                    {/* <Logo
            sx={{
              display: {
                lg: 'inline',
                xs: 'none'
              },
              height: 40,
              width: 40
            }}
          /> */}
                </RouterLink>
                <Box
                    sx={{
                        flexGrow: 1,
                        ml: 2
                    }}
                />
                {/* <LanguagePopover /> */}
                <Box sx={{ ml: 1 }}>
                    {/* <ContentSearch /> */}
                </Box>
                <Box sx={{ ml: 1 }}>
                    {/* <ContactsPopover /> */}
                </Box>
                <Box sx={{ ml: 1 }}>
                    {/* <NotificationsPopover /> */}
                </Box>
                
                <Box sx={{ ml: 2 }}>
                    <div class="mui-dropdown">
                        <button id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <NotificationsNoneIcon fontSize="large"/>
                            <span class="mui-caret"></span>
                        </button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Hi, there.</MenuItem>
                            <MenuItem onClick={handleClose}>Hola, como estas?</MenuItem>
                            <MenuItem onClick={handleClose}>Bonjour， ca va?</MenuItem>
                        </Menu>
                    </div>
                    
                </Box>
                <Box sx={{ ml: 1 }}>
                    {/* <AccountPopover /> */}
                </Box>
                
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button href='/file'>File</Button>
                    <Button href='/edit'>Edit</Button>
                    <Button href='/view'>View</Button>
                    <Button href='/help'>Help</Button>
                    <Button href='/signin'>Login</Button>
                </ButtonGroup>
            </Toolbar>
        </DashboardNavbarRoot>
    );
};

NavBar.propTypes = {
    onSidebarMobileOpen: PropTypes.func
};

export default NavBar;
