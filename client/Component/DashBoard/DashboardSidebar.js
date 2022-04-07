import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, Divider, Drawer, Link, Typography, useMediaQuery } from '@mui/material';
import { experimentalStyled } from "@mui/material";

// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import ReceiptIcon from '@material-ui/icons/Receipt';
// import useAuth from '../../hooks/useAuth';
// ReceiptIcon
import BriefcaseIcon from '../../icons/Briefcase';
import CalendarIcon from '../../icons/Calendar';
import ChartPieIcon from '../../icons/ChartPie';
import ChartSquareBarIcon from '../../icons/ChartSquareBar';
import ChatAltIcon from '../../icons/ChatAlt';
import ClipboardListIcon from '../../icons/ClipboardList';
import FolderOpenIcon from '../../icons/FolderOpen';
import MailIcon from '../../icons/Mail';
import ShareIcon from '../../icons/Share';
import ShoppingBagIcon from '../../icons/ShoppingBag';
import ShoppingCartIcon from '../../icons/ShoppingCart';
import UserIcon from '../../icons/User';
import UsersIcon from '../../icons/Users';
import Logo from '../../Logo';
import NavSection from '../../NavSection';
import Scrollbar from '../../Scrollbar';
// import { Receipt } from '@material-ui/icons';
import { connect } from "react-redux";

import Modal from "./Interactions";
import {authenticationService} from "../../../server/services/authentication.service";
import Paper from "@mui/material/Paper";
const currentUser = authenticationService.currentUserValue;
const sectionsAdmin = [
  {
    title: "General",
    items: [
      {
        title: "Session",
        path: "/",
        icon: <ChartSquareBarIcon fontSize="small" />,
      },
      {
        title: "Agenda",
        path: "/agenda",
        icon: <ChartPieIcon fontSize="small" />,
      },
      {
        title: "Vault",
        path: "/Vault",
        icon: <ShoppingBagIcon fontSize="small" />,
      },
      // {
      //   title: 'Account',
      //   path: '/dashboard/account',
      //   icon: <UserIcon fontSize="small" />
      // }
    ],
  },

  {
    title: "Management",
    items: [
      {
        title: "Users",
        path: "/LoggedinUsers",
        icon: <UsersIcon fontSize="small" />,
        children: [
          {
            title: "Registered Users",
            path: "/registeredusers",
          },
          {
            title: "Add Users",
            path: "/addusers",
          },
          {
            title: "Stats",
            path: "/stats",
          },

          // {
          //   title: 'Edit',
          //   path: '/dashboard/customers/1/edit'
          // }
        ],
      },
      {
        title: "General Settings",
        path: "/settings",
        icon: <ShoppingBagIcon fontSize="small" />,
      },

      // {
      //   title: 'Products',
      //   path: '/dashboard/products',
      //   icon: <ShoppingCartIcon fontSize="small" />,
      //   children: [
      //     {
      //       title: 'List',
      //       path: '/dashboard/products'
      //     },
      //     {
      //       title: 'Create',
      //       path: '/dashboard/products/new'
      //     }
      //   ]
      // },
      // {
      //   title: 'Orders',
      //   icon: <FolderOpenIcon fontSize="small" />,
      //   path: '/dashboard/orders',
      //   children: [
      //     {
      //       title: 'List',
      //       path: '/dashboard/orders'
      //     },
      //     {
      //       title: 'Details',
      //       path: '/dashboard/orders/1'
      //     }
      //   ]
      // },
      // {
      //   title: 'Invoices',
      //   path: '/dashboard/invoices',
      //   icon: <FolderOpenIcon fontSize="small" />,
      //   children: [
      //     {
      //       title: 'List',
      //       path: '/dashboard/invoices'
      //     },
      //     {
      //       title: 'Details',
      //       path: '/dashboard/invoices/1'
      //     }
      //   ]
      // }
    ],
  },

  // {
  //   title: 'Platforms',
  //   items: [
  //     {
  //       title: 'Projects',
  //       path: '/dashboard/projects',
  //       icon: <BriefcaseIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'Browse',
  //           path: '/dashboard/projects/browse'
  //         },
  //         {
  //           title: 'Details',
  //           path: '/dashboard/projects/1'
  //         },
  //         {
  //           title: 'Create',
  //           path: '/dashboard/projects/new'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Social',
  //       path: '/dashboard/social',
  //       icon: <ShareIcon fontSize="small" />,
  //       children: [
  //         {
  //           title: 'Profile',
  //           path: '/dashboard/social/profile'
  //         },
  //         {
  //           title: 'Feed',
  //           path: '/dashboard/social/feed'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   title: 'Apps',
  //   items: [
  //     {
  //       title: 'Kanban',
  //       path: '/dashboard/kanban',
  //       icon: <ClipboardListIcon fontSize="small" />
  //     },
  //     {
  //       title: 'Mail',
  //       path: '/dashboard/mail',
  //       icon: <MailIcon fontSize="small" />
  //     },
  //     {
  //       title: 'Chat',
  //       path: '/dashboard/chat',
  //       icon: <ChatAltIcon fontSize="small" />
  //     },
  //     {
  //       title: 'Calendar',
  //       path: '/dashboard/calendar',
  //       icon: <CalendarIcon fontSize="small" />
  //     }
  //   ]
  // }

];

const sectionsClient = [
  {
    title: "General",
    items: [
      {
        title: "Session",
        path: "/",
        icon: <ChartSquareBarIcon fontSize="small" />,
      },
      {
        title: "Agenda",
        path: "/agenda",
        icon: <ChartPieIcon fontSize="small" />,
      },
      {
        title: "Vault",
        path: "/Vault",
        icon: <ShoppingBagIcon fontSize="small" />,
      },
      {
        title: "Message",
        path: "/Message",
        icon: <ChatAltIcon fontSize='small'/>,
      }
    ]
  }
];

const DashboardSidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  // const { user } = useAuth();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const currentUser = authenticationService.currentUserValue;

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  // Inter new
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  // temp
  const handleApplyModalOpen = () => {
    setIsApplicationOpen(true);
  };
  // temp
  const handleApplyModalClose = () => {
    setIsApplicationOpen(false);
  };

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
              <Avatar alt={currentUser?.client_name} src='../../../misc/img.png' />
            </RouterLink>
            <Box sx={{ ml: 2 }}>
              <Typography color="textPrimary" variant="subtitle2">
                 Welcome back {currentUser?.client_name} !
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Your plan:{" "}
                <Link color="primary" component={RouterLink} to="/pricing">
                  6 months
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {currentUser?.role === "admin" || currentUser?.role === "moderator" ?
              sectionsAdmin.map((section) => (
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
              ))
              : sectionsClient.map((section) => (
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
              ))
          
          }
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
            onClick={handleApplyModalOpen}
            fullWidth
            sx={{ mt: 2 }}
            to="#"
            variant="contained"
          >
            Interaction Panel
          </Button>
          <Modal
            onApply={handleApplyModalClose}
            onClose={handleApplyModalClose}
            open={isApplicationOpen}
          />
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
    <>
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
      <Modal
        onApply={handleApplyModalClose}
        onClose={handleApplyModalClose}
        open={isApplicationOpen}
      />
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default DashboardSidebar;
