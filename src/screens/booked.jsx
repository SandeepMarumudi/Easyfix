import { useDispatch, useSelector } from "react-redux";
import { fetchPromisedata } from "../redux/getdetails/getslice";
import { useEffect } from "react";
import HorizontalCard from "../components/card";

const UserBookedServices = () => {
  const useremail = localStorage.getItem("useremail");  // Fix case sensitivity
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getdata);  // Destructure state

  useEffect(() => {
    if (useremail) {
      dispatch(fetchPromisedata(useremail));
    }
  }, [useremail, dispatch]);  // Fix dependency array

  return (
    <>
      {data?.booked?.map((item, index) => {
        return (
          <HorizontalCard
            key={index}
            title={item.name}
            price={item.price}
            url={item.url}
          />
        );
      })}
    </>
  );
};

export default UserBookedServices;
