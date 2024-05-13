import { asyncHandler } from "../utils/asyncHandler.js";
import { Apierror } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import Jwt from "jsonwebtoken"
import mongoose from "mongoose";

// method for generaing token
const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
      const user = await User.findById(userId);
      const accessToken = user.generateAccessToken();
      const refreshToken = user.generateRefreshToken();
  
      user.refreshToken = refreshToken;
      await user.save({ validateBeforeSave: false });
  
      return {
        userId: user._id,
        accessToken,
        refreshToken,
      };
    } catch (error) {
      throw new Apierror(
        500, //error.message||//
        "something Went wrong while grnerating the token"
      );
    }
  };

  
// user registration

const registerUser = asyncHandler(async (req, res) => {
  
    const { fullname, email, username, password, accountType } = req.body;
  
    if (
      [fullname, email, username, password, accountType].some((field) => field?.trim() === "")
    ) {
      throw new Apierror(400, "All fields are required");
    }
  
    //    validation from db
    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    });
  
    if (existedUser) {
      throw new Apierror(409, "User already exist");
    }

  
    // // make entry on DB as object
  
    const user = await User.create({
      fullname,
      email,
      password,
      username,
      role:  accountType === 'admin' ? 'admin' : 'employee',
    });
    // // check user is created or not by finding him and remove password and refresh token
  
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
  
    if (!createdUser) {
      throw new Apierror(500, "user is not created");
    }
  
    // // return response
  
    res
      .status(200)
      .json(new apiResponse(200, createdUser, "User Created successfully"));
  });
  

//   Login User 
const loginUser = asyncHandler(async (req, res) => {
  
    const { email, password } = req.body;
  
    if (! email) {
      throw new Apierror(400, " email is required");
    }
  
    // find the user based on the credentials
  
    const user = await User.findOne({
      $or: [ { email }],
    });
  
    // if user is not found throw error
  
    if (!user) {
      throw new Apierror(400, "User not found");
    }
  
    const isPasswordValid = await user.isPasswordCorrect(password);
  
    if (!isPasswordValid) {
      throw new Apierror(401, "invalid password");
    }
  
    // get access tken and refresh token from the method
  
    const { accessToken, refreshToken  } =
      await generateAccessTokenAndRefreshToken(user._id);
  
    // make user logged in and logout
    // const loggedInUser = User.findById(user._id);
    const userResponse = {
      _id: user._id,
      username: user.username,
      email: user.email,
      fullname: user.fullname,
      role:user.role
      // Add any other fields you need
    };
    console.log("UserResponse",user)
    // send cookies
    const option = {
      httpOnly: true,
      secure: true,
    };
  
    // return response
    return res
      .status(200)
      .cookie("accessToken", accessToken, option)
      .cookie("refreshToken", refreshToken, option)
      .json(
        new apiResponse(
          200,
          {
            user: userResponse,
            accessToken,
            refreshToken,
          },
          "user logged In successfully"
        )
      );
  });

//   logged out 

const loggedOutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $unset: {
          refreshToken: 1,
        },
      },
      {
        new: true,
      }
    );
  
    const option = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .clearCookie("accessToken", option)
      .clearCookie("refreshToken", option)
      .json(new apiResponse(200, {}, "User logged out"));
  });
  



  export {
    registerUser,
    loginUser,
    loggedOutUser

  };