import {userService}  from "../services/index.js";
import { httpUtils } from "../utils/index.js";
import { encryptField } from "../models/user.js";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "huskyflexfitness@gmail.com",
        pass: "krcb nhtv kmuy rbxk"
    }
});

export const post = async (request, response) =>{
    try {
        const payload = request.body;
        const user = await userService.save(payload);
        const options = {
            from: "huskyflexfitness@gmail.com",
            to: request.body.email,
            subject: "Welcome to FITVIBE!",
            text: "Dear "+request.body.firstName+", your time to flex has arrived!"
        };

        transporter.sendMail(options, function (err, info) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("sent :" + info.response);
        })
        httpUtils.setSuccessResponse({"isSignedUp": true, "message": "user signed up"}, response);
    } catch (error) {
        httpUtils.setConflictResponse({"isSignedUp": false, "message" : "username already exists"}, response);
    }
}

export const login = async (request, response) =>{
    try {
        const uuid = request.params.uuid
        const pwd = request.body.password;
        const user = await userService.login(uuid, pwd);
        httpUtils.setSuccessResponse(user, response);
    } catch (error) {
        httpUtils.setUnauthorizedResponse({"authenticated": false, "message" : "No user found"}, response);
    }
}

/**
 * Verifies correctness of security answer
 * @param {*} request 
 * @param {*} response 
 */
export const verifySecurityAnswer = async (request, response) =>{
    try {
        const uuid = request.params.uuid;
        const secQuestion = request.query.securityQuestion;
        const secAnswer = request.query.securityAnswer;
        const user = await userService.verifySecurityAnswer(uuid, secQuestion,secAnswer);
        if(user){
            httpUtils.setSuccessResponse({ "isUserCorrectDetails": true, "message": "correct user details" }, response);
        }else{
            httpUtils.setErrorResponse({ "isUserCorrectDetails": false, "message": "Incorrect user details" }, response);
        }
        
    } catch (error) {
        httpUtils.setErrorResponse({"isUserCorrectDetails": false, "message" : "Incorrect user details"}, response);
    }
}

/**
 * Updates a particular user
 * @param {*} request 
 * @param {*} response 
 */
export const updateUser = async (request, response) => {
    try {
        const uuid = request.params.uuid;
        const updatedUser = request.body;
        const user = await userService.updateUser(uuid, updatedUser);
        httpUtils.setSuccessResponse({ "userUpdated": true, "user": user }, response);
    } catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}
export const getAllUsers = async (req, res) => {
    try {
      const users = await userService.getUsers(); // Replace YourUserModel with your actual user model
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
/**
 * Fetches a particular user
 * @param {*} request 
 * @param {*} response 
 */
export const getUserById = async (request, response)=>{
    try {
        const uuid = request.params.uuid;
        const user = await userService.getUserById(uuid);
        httpUtils.setSuccessResponse(user, response);
    } catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}
export const deleteUser = async (request, response) => {
    try {
        const uuid = request.params.uuid;
        const deletedUser = await userService.deleteUser(uuid); // Ensure deleteUser function returns the deleted user or some confirmation

        if (!deletedUser) {
            throw new Error('User not found');
        }

        httpUtils.setSuccessResponse({ message: "User successfully deleted" }, response);
    } catch (error) {
            httpUtils.setErrorResponse({ message: error.message }, response);
        }
    }


/**
 * Fetch users
 * @param {*} request 
 * @param {*} response 
 */
export const getUsers = async (request, response)=>{
    try {
        const users = await userService.getUsers();
        httpUtils.setSuccessResponse(users, response);
    } catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}