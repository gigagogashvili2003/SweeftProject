import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data";
// Fetchs only friends data
const useSearchFriends = (id, pageNumber) => {
  const dispatch = useDispatch();

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    dispatch(dataActions.isLoading(true));
    dispatch(dataActions.isError(false));

    axios({
      method: "GET",
      url: `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${pageNumber}/20`,
      params: { id: id, page: pageNumber },
    })
      .then((res) => {
        setFriends((prevData) => [...prevData, ...res.data.list]);

        dispatch(dataActions.isLoading(false));

        dispatch(dataActions.isMore(res.data.list.length > 0));
      })
      .catch((err) => {
        dispatch(dataActions.isError(true));
      });

    return () => setFriends([]);
  }, [id, pageNumber]);

  return {
    friends,
  };
};

export default useSearchFriends;
