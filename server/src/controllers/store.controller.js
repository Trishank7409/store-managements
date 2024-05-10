import { asyncHandler } from "../utils/asyncHandler.js";
import { Apierror } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import Store from "../models/store.model.js";
import { User } from "../models/user.model.js";

const createStore = asyncHandler(async (req, res) => {
   
    const{userID}=req.params
    const { name, employees, openTime, closeTime } = req.body;
 
    // Find the user based on userID
    const user = await User.findById(userID);
  
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
  
    // Check if the user's role is admin
    if (user.role !== 'admin') {
      return res.status(403).json({ message: "Only admins are allowed to create stores." });
    }
  
    // Create a new store
    const newStore = new Store({
      name,
      employees,
      openTime,
      closeTime,
    });
  
    // Save the new store
    const savedStore = await newStore.save();
  
    // Update the user's store field with the ID of the newly created store
    user.store = savedStore._id;
    await user.save();
  
    res.status(201).json({
      message: "Store created successfully",
      store: savedStore,
    });
  });
  
  
  const getStores = asyncHandler(async (req, res) => {
    const stores = await Store.find();
  
    res.status(200).json({
      message: "Stores retrieved successfully",
      stores
    });
  });   

  export {
    createStore,
    getStores,
  }