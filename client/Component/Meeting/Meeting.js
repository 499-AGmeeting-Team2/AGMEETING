import React, { useEffect, useState } from "react";
import numeral from "numeral";
import { subDays, subHours } from "date-fns";
import {
    Avatar,
    Box,
    Button,
    Card,
    Checkbox,
    Divider,
    IconButton,
    InputAdornment,
    Link,
    Modal,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Tabs,
    TextField,
    Typography,
} from "@mui/material";
import Scrollbar from "../../Scrollbar";
import ArrowRightIcon from "../../icons/ArrowRight";
import PencilAltIcon from "../../icons/PencilAlt";
import Plus from "../../icons/Plus";
import SearchIcon from "../../icons/Search";
import { meetingService } from "../../../server/services/meeting.service";
import validator from "validator";
import {userService} from "../../../server/services/user.service";
import axios from "axios";
import {authenticationService} from "../../../server/services/authentication.service";


// From Material UI
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const sortOptions = [
    {
        label: "Last update (newest)",
        value: "updatedAt|desc",
    },
    {
        label: "Last update (oldest)",
        value: "updatedAt|asc",
    },
    {
        label: "Total orders (highest)",
        value: "orders|desc",
    },
    {
        label: "Total orders (lowest)",
        value: "orders|asc",
    },
];

const Meeting = () => {
    const [meetings, setMeetings] = useState([]);
    const currentUser = authenticationService.currentUserValue;

    useEffect(async () => {
        await meetingService
            .getAll()
            .then((filesList) => {
                //console.log(filesList)
                setMeetings(filesList);
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: "background.default",
                p: 3,
            }}
        >
            <Card>
                <Divider />
                <Box
                    sx={{
                        alignItems: "center",
                        display: "flex",
                        flexWrap: "wrap",
                        m: -1,
                        p: 2,
                    }}
                >
                    <Box
                        sx={{
                            m: 1,
                            maxWidth: "100%",
                            width: 350,
                        }}
                    >
                        <TextField
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Search File Name"
                            variant="outlined"
                        />
                    </Box>
                    <Box
                        sx={{
                            m: 1,
                            width: 240,
                        }}
                    >
                        <TextField
                            label="Sort By"
                            name="sort"
                            select
                            SelectProps={{ native: true }}
                            variant="outlined"
                        >
                            {sortOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Box>
                    <Button
                        color="primary"
                        startIcon={<Plus fontSize="small" />}
                        sx={{ m: 1 }}
                        variant="contained"
                    >
                        Add Meeting
                        <EditModal id={customer.id} />
                    </Button>
                </Box>
                <Scrollbar>
                    <Box sx={{ minWidth: 700 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox color="primary" />
                                    </TableCell>
                                    <TableCell>Meeting ID</TableCell>
                                    <TableCell>Mod User ID</TableCell>
                                    <TableCell>Admin User ID</TableCell>
                                    <TableCell>Company ID</TableCell>
                                    <TableCell>Time Start</TableCell>
                                    <TableCell>Time End</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {meetings.map((meeting) => (
                                    <TableRow hover key={meeting.id}>
                                        <TableCell padding="checkbox">
                                            <Checkbox color="primary" />
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    alignItems: "center",
                                                    display: "flex",
                                                }}
                                            >
                                                <Box sx={{ ml: 1 }}>
                                                    <Link color="inherit" variant="subtitle2">
                                                        {meeting.id}
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Typography color="textSecondary" variant="body2">
                                                {meeting.mod_id}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography color="textSecondary" variant="body2">
                                                {meeting.admin_id}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography color="textSecondary" variant="body2">
                                                {meeting.company_id}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography color="textSecondary" variant="body2">
                                                {meeting.time_start}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography color="textSecondary" variant="body2">
                                                {meeting.time_end}
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="right" >
                                            <Button variant="outlined" onClick={() => {
                                                addUserMeeting(meeting.id, currentUser.id);
                                            }}>Join</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </Scrollbar>
                <TablePagination
                    component="div"
                    count={meetings.length}
                    onPageChange={() => {}}
                    onRowsPerPageChange={() => {}}
                    page={0}
                    rowsPerPage={5}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Card>
        </Box>
    );
};

function addUserMeeting(meetingId, userId) {
    meetingService.addUserMeeting(meetingId, userId).then(response => {
        alert(response);
    });
}

export default Meeting;
