import { useDispatch, useSelector } from "react-redux";
import HorizontalCard from "../components/card";
import { Button } from 'react-bootstrap';

import axios from "axios";
import { useEffect } from "react";
import { fetchPromisedata } from "../redux/getdetails/getslice";

const Cartscreen = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.getdata); // Extract data, loading, and error from state
    

    const userId = localStorage.getItem('userId');
    const useremail = localStorage.getItem('useremail');
    console.log(userId)

    // Fetch data when component mounts
    useEffect(() => {
        if (useremail) {
            dispatch(fetchPromisedata(useremail));
        }
    }, [dispatch, useremail]);

    // Handle loading state
    if (loading) return <p>Please wait...</p>;

    // Handle error state
    if (error) return <p>{error}</p>;

    // Function to remove a single item from the cart
    const handleRemoveSingle = async (email, cartId) => {
        try {
          // Step 1: Fetch the user by their email
          const response = await axios.get(`http://localhost:3000/users?email=${email}`);
          
          // Ensure there is at least one user returned
          if (response.data.length > 0) {
            const user = response.data[0];  // First user
            const { cart } = user;  // Destructure the cart
            console.log(cart);
            console.log(cartId);
            
            // Step 2: Filter the cart to remove the item with the given cartId
            const updatedCart = cart.filter((each) => each.id !== cartId);
            console.log(updatedCart);
      
            // Step 3: Update the user's cart with the new filtered cart
            await axios.put(`http://localhost:3000/users/${user.id}`, {
              ...user,
              cart: updatedCart
            });
      
            console.log('Cart updated successfully');
            dispatch(fetchPromisedata(useremail)); 
          } else {
            console.error('User not found');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      

    // Function to remove all items from the cart
    const removeAllfromCart= async (userid) => {
        try {
            await axios.patch(`http://localhost:3000/users/${userid}`, {
                cart: []  // This sets the cart to an empty array
            });
            console.log('All cart items removed successfully');
            dispatch(fetchPromisedata(useremail)); // Fetch updated data after removal
        } catch (error) {
            console.error('Error removing all cart items', error);
        }
    };

    const bookServicehandler=(obj)=>{
        postBookedServiceToServer(obj)
    }

    const postBookedServiceToServer=async(obj)=>{
        const userEmail = localStorage.getItem('useremail');
        if (userEmail) {
            try {
                // Fetch user details from the server
                const response = await axios.get(`http://localhost:3000/users?email=${userEmail}`);
                const user = response.data[0];

                if (user) {
                  const userBooked = user.booked || [];
                  const updatedBooked = [...userBooked,obj];
                   
                    await axios.patch(`http://localhost:3000/users/${user.id}`, { booked: updatedBooked });
                    console.log('booked updated successfully on the server!');
                }
            } catch (error) {
                console.error('Error updating booked on the server:', error);
            }
        }

    }

    return (
        <>
            {data.cart && data.cart.length > 0 ? (  // Check if cart exists and is not empty
                data.cart.map((item, index) => (
                    <HorizontalCard
                        key={index}
                        title={item.name}
                        price={item.price}
                        url={item.url}
                        button_text1={'Remove'}
                        button_text2={'Book'}
                        remove={() => handleRemoveSingle(useremail,item.id)}  // Remove single item
                        onpress={()=>bookServicehandler(
                            {
                                id:item.id,
                                title:item.title,
                                price:item.price,
                                url:item.url,
                            }

                        )}
                    />
                ))
            ) : (
                <p>Your cart is empty</p>  // Handle empty cart
            )}
            <Button variant="primary" onClick={() => removeAllfromCart(userId)}>Remove All</Button>  {/* Remove all items */}
        </>
    );
};

export default Cartscreen;
