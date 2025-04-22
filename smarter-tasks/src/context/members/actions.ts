/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT } from "../../config/constants";

export const addMember = async (dispatch: any, args: any)=>{
  try{
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(args),
    });
    if (!response.ok) {
      throw new Error("Failed to add member");
    }
    const data = await response.json(); 

    if (data.errors && data.errors.length > 0) {
      return {ok: false, errors: data.errors[0].message};
    }
    dispatch({ type: "ADD_MEMBER_SUCCESS", payload: data.user });

    return {ok : true}
  }catch (error){
    console.error("Error adding member:", error);
    return {ok : false, error};
  }
}

export const deleteMember = async (dispatch: any, id: number) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return {ok: false, errors: data.errors[0].message};
    }
    if (!response.ok) {
      throw new Error("Failed to delete member");
    }
   
    dispatch({ type: "DELETE_MEMBER_SUCCESS", payload: data });
    return {ok: true}

  } catch (error) {
    console.error("Error deleting member:", error);
    return {ok: false, error};
  }
 
};

export const fetchMembers = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  try{
    dispatch({ type: "FETCH_MEMBERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_MEMBERS_SUCCESS", payload: data });
  }catch (error) {
    console.log("Error fetching members:", error);
    dispatch({ type: "FETCH_MEMBERS_FAILURE", payload: "Failed to fetch members" });
  }
  
};