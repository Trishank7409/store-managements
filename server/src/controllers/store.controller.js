import { asyncHandler } from "../utils/asyncHandler.js";
import { Apierror } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import Store from "../models/store.model.js";
import { User } from "../models/user.model.js";

// Create the store 
const createStore = asyncHandler(async (req, res) => {
  const  userID = req.params.id;
  const { name, employees,slots, openTime, closeTime } = req.body;
console.log("userId",userID)
  try {
    // Find the user based on userID
    const user = await User.findById(userID);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Check if the user's role is admin
    if (user.role !== 'admin') {
      return res.status(403).json(new Apierror(403,"! Only Admin are allowed to create store"));
    }

    // Create a new store
    const newStore = new Store({
      name,
      employees,
      openTime,
      closeTime,
      slots,
      createdBy: user.username,
    });

    // Save the new store
    const savedStore = await newStore.save();
    // user.store = savedStore._id;
    user.store.push(savedStore)
    await user.save();

    res.status(201).json(
      new apiResponse(200,savedStore, "Stores created successfully" )
  );
  } catch (error) {
    console.error("Error creating store:", error);
    res.status(500).json({ message: "Failed to create store." });
  }
});

// Get all the store based on the user id
  const getStoresById = asyncHandler(async (req, res) => {

    const userId= req.params.id
    try {
      // Find the user based on userID
      const user = await User.findById(userId);
  
      // Check if user exists
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      const stores = await Store.find({ createdBy: user.username });

      res.status(200).json(
        new apiResponse(200 ,stores, "Stores retrieved successfully" )
     );
  
      }
      catch (error) {
        res.status(500).json(new Apierror(500,error,"Error in fetching store"));
      }

  });   

// Delete the particular store 

const deleteStoreById= asyncHandler(async(req,res)=>{
  
  // const userId= req.params.id
  const storeId = req.params.id;
  try {
    const store = await Store.findById(storeId);
    if (!store) {
      return res.status(404).json({ message: "Store not found." });
    }
    await Store.findByIdAndDelete(storeId);;
    const stores = await Store.find({ createdBy: store.createdBy });
    console.log("Store is here ",stores)
    res.status(200).json(
      new apiResponse(200,stores, "Store deleted successfully" )
    );

    const UserId= await store.createdBy
    if(!UserId){
      return res.status(403).json({ message: "UserId not found." });
    }
    const user = await User.findById(UserId);
    const index = user.store.indexOf(storeId);
    if (index > -1) {
      user.store.splice(index, 1);
    }
    await user.save();

  } catch (error) {
    console.error("Error deleting store:", error);
    res.status(500).json({ message: "Failed to delete store." });
  }
})

const getAllStore= asyncHandler(async(req,res)=>{
  try {
    const stores = await Store.find();
    res.status(200).json(
      new apiResponse(200,stores, "Stores retrieved successfully" )
    );
  } catch (error) {
    console.error("Error detecting store:", error);
    res.status(500).json({ message: "Failed to deletect store." });
  }
})

  export {
    createStore,
    getStoresById,
    deleteStoreById,
    getAllStore
  }