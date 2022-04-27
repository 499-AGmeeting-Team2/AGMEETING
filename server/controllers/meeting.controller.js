const express = require("express");
const router = express.Router();
const meeting = require("../models/meeting");
const userMeetingJunction = require("../models/usermeetingjunction")
const jwt = require("jsonwebtoken");
const passport = require("passport");
const client = require("../models/client");

router.get("/meetings", passport.authenticate("jwt", {session: false} ),async(req, res) =>{

    const allMeetings = await meeting.findAll().catch((err)=> {
        console.log("Error: ", err);
    });

    if(!allMeetings){
        return res.json({message: "You have no meeting right now."})
    };

    return res.json({ meetings: allMeetings});

})

// Get meetings by userId
router.get("/meetings/user/:userId", passport.authenticate("jwt", {session: false} ),async(req, res) =>{

    // const meetingsByUser = await userMeetingJunction.findAll({
    //     where: { user_id: req.params.userId },
    // }).catch((err)=> {
    //     console.log("Error: ", err);
    // });

    const meetingsByUser = await client.findAll({
        where: { id: req.params.userId },
        include: {
            model: meeting,
        }
    }).catch((err)=> {
        console.log("Error: ", err);
    });



    if(!meetingsByUser){
        return res.json({message: "You have no meeting right now."})
    };

    return res.json({ meetings: meetingsByUser});

})

router.get("/meetings/add/:meetingId/:clientId", passport.authenticate("jwt", {session: false} ),async(req, res) =>{

    const clientId = req.params.clientId;
    const meetingId = req.params.meetingId;
    const meetingByUser = await userMeetingJunction.findOne({ where: { clientId: clientId, meetingId: meetingId}}).catch((err)=> {
        console.log("Error: ", err);
    });

    if(meetingByUser){
        return res.json({message: "You are already in this meeting."})
    }

    const newUserMeeting = new userMeetingJunction({meetingId: meetingId, clientId: clientId});
    console.log(newUserMeeting)
    const saved = await newUserMeeting.save().catch((err) => {
        console.log("Error: ", err);
        res.json({message: "Cannot join meeting at the moment."});
    });

    if(saved)
        res.json({message: "Successfully joined the meeting. Please go to Registered Meeting tab to see meetings that you have joined."});

})

router.post("/meetings/add", passport.authenticate("jwt", {session: false} ),async(req, res) =>{

    const {modId, adminId, companyId, timeStart, timeEnd} = req.body;

    const newMeeting = new meeting({mod_id: modId, admin_id: adminId, company_id: companyId, time_start: timeStart, time_end: timeEnd});
    console.log(newUserMeeting)
    const saved = await newMeeting.save().catch((err) => {
        console.log("Error: ", err);
        res.json({message: "Error when saving new meeting. Please try again later"});
    });

    if(saved)
        res.json({message: "Successfully create a new meeting."});

})

module.exports = router;