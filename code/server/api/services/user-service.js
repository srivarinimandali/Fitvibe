import User from '../models/user.js';
import * as userHealthService from '../services/userHealth-service.js';



/**
 * Function to add a new user
 * @param {*} newUser 
 * @returns created user object
 */
export const save = async(newUser)=>{
    try {
        console.log("New user : "+newUser)
        const user = new User(newUser);
        let res = await userHealthService.addDefaultHealthForUser(newUser.uuid);
        if(res){
            return user.save();
        }
        else{
            return {};
        }
    } catch(error){
        console.log("error ",error);
        throw error
    }
    
}

/**
 * Checks for user presence and password match
 * @param {*} uuid 
 * @param {*} pwd 
 * @returns status of login and the user
 */
export const login = async (uuid, pwd)=>{
    try {
    const user = await User.findOne({uuid:uuid});
    const res = await user.comparePwd(pwd);
    if(res){
        return { authenticated: res, user: user };
    }else{
        return { authenticated: res, message: 'Incorrect Password!'};
    }
    
    } catch (error) {
        throw error
    }
    
}

/**
 * Service method to compare security answers and return the result
 * @param {*} uuid 
 * @param {*} answer 
 * @returns boolean value of whether the answers match
 */
export const verifySecurityAnswer = async (uuid,question, answer)=>{
    try {
    const user = await User.findOne({uuid:uuid});
    
    if(user !== null){
        const res1 = await user.compareSecQuestion(question);
        const res2 = await user.compareSecAns(answer);
        return (res1 && res2);
    }else{
        return false;
    }
    } catch (error) {
        throw error
    } 
}

/**
 * Service method to check if user is unique in the system
 * @param {*} uuid 
 * @returns boolean value of uniqueness
 */
export const isUnique = async (uuid)=>{
    try {
        const user = await User.findOne({uuid:uuid});
        if(user){
            return false;
        }
        else{
            return true;
        }
    } catch (error) {
        throw error;
    }
}


/**
 * Service method to update a user
 * @param {*} uuid 
 * @param {*} updatedUser 
 * @returns updated user
 */
export const updateUser = async (uuid, updatedUser) => {
    try {
        // Encrypt password if it's provided
        if(updatedUser.password) {    
            updatedUser.password = await encryptField(updatedUser.password);
        }
        // Encrypt security answer if it's provided
        if(updatedUser.securityAnswer) {    
            updatedUser.securityAnswer = await encryptField(updatedUser.securityAnswer);
        }
        // Update the user in the database
        const user = await User.findOneAndUpdate({uuid: uuid}, updatedUser, { new: true }); // 'new: true' returns the updated document
        return user;
    } catch (error) {
        throw error;
    }
}
export const deleteUser = async (uuid) => {
    try {
        const result = await User.deleteOne({ uuid: uuid });
        if (result.deletedCount === 0) {
            // If no document was deleted, it means the user was not found
            return null; // Return null to indicate that no user was deleted
        }
        return { message: 'User successfully deleted', deleted: true }; // Return a confirmation object
    } catch (error) {
        throw error; // Propagate the error to be handled by the caller
    }
}

/**
 * Gets all users of the application
 * @returns all users
 */
export const getUsers = async () => {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw error;
    }
}

/**
 * Returns user based on id
 * @param {*} uuid 
 * @returns user
 */
export const getUserById = async (uuid) => {
    try {
        const user = await User.findOne({uuid: uuid});
        return user;
    } catch (error) {
        throw error;
    }
}