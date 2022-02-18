import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { experimentalStyled } from "@mui/material";

// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import ReceiptIcon from '@material-ui/icons/Receipt';
// import useAuth from '../../hooks/useAuth';
// ReceiptIcon
import BriefcaseIcon from "../../icons/Briefcase";
import CalendarIcon from "../../icons/Calendar";
import ChartPieIcon from "../../icons/ChartPie";
import ChartSquareBarIcon from "../../icons/ChartSquareBar";
import ChatAltIcon from "../../icons/ChatAlt";
import ClipboardListIcon from "../../icons/ClipboardList";
import FolderOpenIcon from "../../icons/FolderOpen";
import MailIcon from "../../icons/Mail";
import ShareIcon from "../../icons/Share";
import ShoppingBagIcon from "../../icons/ShoppingBag";
import ShoppingCartIcon from "../../icons/ShoppingCart";
import UserIcon from "../../icons/User";
import UsersIcon from "../../icons/Users";
import HomeIcon from "../../icons/Home";
import Logo from "../../Logo";
import NavSection from "../../NavSection";
import Scrollbar from "../../Scrollbar";
// import { Receipt } from '@material-ui/icons';

const sections = [
  {
    title: "Tables",
    items: [
      {
        title: "List of Users",
        path: "/dashboard/table",
        icon: <FolderOpenIcon fontSize="small" />,
      },
    ],
  },
  {
    title: 'Events',
    items: [
      {
        title: 'New Event',
        path: '/dashboard/event-manage',
        icon: <ClipboardListIcon fontSize="small" />
      },
      {
        title: 'Event Management',
        path: '/dashboard/list',
        icon: <ClipboardListIcon fontSize="small" />
      }
    ]
  },
  {
    title: "Interaction",
    items: [
      {
        title : 'Send Messages',
        path: '/dashboard/ContentMessage',
        icon: <MailIcon fontSize="small" />
      },
      {
        title: 'Chat',
        path: '/dashboard/chat',
        icon: <ChatAltIcon fontSize="small" />
      },
      {
        title: 'Calendar',
        path: '/dashboard/calendar',
        icon: <CalendarIcon fontSize="small" />
      }
    ]
  },
  {
    title: 'General',
    items: [
      {
        title: 'Session',
        path: '/',
        icon: <ChartSquareBarIcon fontSize="small" />
      },
      {
        title: 'Agenda',
        path: '/agenda',
        icon: <ChartPieIcon fontSize="small" />
      },
      {
        title: 'Vault',
        path: '/Vault',
        icon: <ShoppingBagIcon fontSize="small" />
      },
      // {
      //   title: 'Account',
      //   path: '/dashboard/account',
      //   icon: <UserIcon fontSize="small" />
      // }
    ]
  },

  {
    title: 'Management',
    items: [
      {
        title: 'Users',
        path: '/LoggedinUsers',
        icon: <UsersIcon fontSize="small"/>,
        children: [
          {
            title: 'Logged In Users',
            path: '/loggedinUsers'
          },
          {
            title: 'Registered Users',
            path: '/registeredusers'
          },
          {
            title: 'Stats',
            path: '/stats'
          },
          // {
          //   title: 'Edit',
          //   path: '/dashboard/customers/1/edit'
          // }
        ]
      },
      {
        title: 'General Settings',
        path: '/settings',
        icon: <ShoppingBagIcon fontSize="small"/>
      },
    ],
  },
];

const DashboardSidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  // const { user } = useAuth();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box
          sx={{
            display: {
              lg: "none",
              xs: "flex",
            },
            justifyContent: "center",
            p: 2,
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                height: 40,
                width: 40,
              }}
            />
          </RouterLink>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "background.default",
              borderRadius: 1,
              display: "flex",
              overflow: "hidden",
              p: 2,
            }}
          >
            <RouterLink to="/dashboard/account">
              {/* <Avatar
                src={user.avatar}
                sx={{
                  cursor: 'pointer',
                  height: 48,
                  width: 48
                }}
              /> */}
              Avatar
            </RouterLink>
            <Box sx={{ ml: 2 }}>
              <Typography color="textPrimary" variant="subtitle2">
                {/* {user.name} */} User Name
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                "& + &": {
                  mt: 3,
                },
              }}
              {...section}
            />
          ))}
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography color="textPrimary" variant="subtitle2">
            Need Help?
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Check our docs
          </Typography>
          <Button
            color="primary"
            component={RouterLink}
            fullWidth
            sx={{ mt: 2 }}
            to="/docs"
            variant="contained"
          >
            Documentation
          </Button>
        </Box>
      </Scrollbar>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "background.paper",
            height: "calc(100% - 64px) !important",
            top: "64px !Important",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onMobileClose}
      open={openMobile}
      PaperProps={{
        sx: {
          backgroundColor: "background.paper",
          width: 280,
        },
      }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default DashboardSidebar;
