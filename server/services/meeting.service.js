import {authHeader} from "../helpers/auth-header";
import axios from "axios";

export const meetingService = {
    getAll,
    getByUserId,
    addUserMeeting,
    addMeeting
};

async function getAll() {
    let meetings = [];
    await axios.get("http://localhost:3000/api/v1/meetings", {
        headers: authHeader()
    }).then(meetingsList => {
        meetings.push(...meetingsList.data.meetings);
    }).catch((err)=> {
        console.log("Error: ", err);
    })

    return meetings;
}

async function getByUserId(id) {
    let meetings = [];
    await axios.get("http://localhost:3000/api/v1/meetings/user/" + id, {
        headers: authHeader()
    }).then(meetingsList => {
        meetings.push(...meetingsList.data.meetings);
    }).catch((err)=> {
        console.log("Error: ", err);
    })
    return meetings;
}

async function addUserMeeting(meetingId, userId) {
    let message;
    await axios.get("http://localhost:3000/api/v1/meetings/add/" + meetingId + "/" + userId, {
        headers: authHeader()
    }).then(response => {
        message = response.data.message;
    }).catch((err)=> {
        console.log("Error: ", err);
        message = "An error occurred in the frontend. Please try again later."
    })

    return message;
}

async function addMeeting(modId, adminId, companyId, timeStart, timeEnd) {
    let message;
    await axios.post("http://localhost:3000/api/v1/meetings/add", {modId, adminId, companyId, timeStart, timeEnd}, {
        headers: authHeader()
    }).then(response => {
        message = response.data.message;
    }).catch((err)=> {
        console.log("Error: ", err);
        message = "An error occurred in the frontend. Please try again later."
    })

    return message;
}