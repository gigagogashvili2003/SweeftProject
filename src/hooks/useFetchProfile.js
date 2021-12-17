import { useState, useEffect } from "react";
import axios from "axios";
import { dataActions } from "../store/data";
import { useDispatch } from "react-redux";

// Fetchs profile data
const useFetchProfile = (id) => {
  const dispatch = useDispatch();

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    dispatch(dataActions.isLoading(true));
    dispatch(dataActions.isError(false));
    axios({
      method: "GET",
      url: `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`,
      params: { id },
    })
      .then((res) => {
        setProfile(res.data);

        dispatch(dataActions.isLoading(false));
      })
      .catch((err) => {
        dispatch(dataActions.isError(true));
      });
  }, [id]);

  return {
    profile,
  };
};
export default useFetchProfile;
