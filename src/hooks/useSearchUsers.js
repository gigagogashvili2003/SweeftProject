import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data";

// This component is only to fetch all users data.
const useSearchUsers = (pageNumber) => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  // const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();

    dispatch(dataActions.isLoading(true));
    dispatch(dataActions.isError(false));
    axios({
      method: "GET",
      url: `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNumber}/20`,
      params: { page: pageNumber },
      signal: abortCont.signal,
    })
      .then((res) => {
        setUsers((prevUsers) => {
          return [...prevUsers, ...res.data.list];
        });
        // setHasMore(res.data.list.length > 0);
        dispatch(dataActions.isMore(res.data.list.length > 0));

        dispatch(dataActions.isLoading(false));
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Abort Error");
        } else {
          dispatch(dataActions.isError(true));
        }
      });
    return () => abortCont.abort();
  }, [pageNumber]);

  return { users };
};

export default useSearchUsers;
