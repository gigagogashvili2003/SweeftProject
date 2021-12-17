import { useState } from "react";
import classes from "./ListContainer.module.css";

import useSearchUsers from "../hooks/useSearchUsers";
import LoadingSpinner from "./UI/LoadingSpinner";
import ErrorMessage from "./UI/ErrorMessage";
import listItemJsx from "./Helpers/listItemJsx";
import useInterSectional from "../hooks/useInterSectional";
import { useSelector } from "react-redux";

const ListContainer = () => {
  // Whic page number we are currently
  const [pageNumber, setPageNumber] = useState(1);
  const isLoading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const hasMore = useSelector((state) => state.hasMore);
  // Data from useSearchUsers
  const { users } = useSearchUsers(pageNumber);

  // IntersectionalObesevrer to detect which one is last element to update a pageNumber
  const lastUserElementRef = useInterSectional(
    isLoading,
    hasMore,
    setPageNumber
  );
  const listItemContent = listItemJsx(users, lastUserElementRef);

  // Content for return

  return (
    <div className={classes.container}>
      {!error && listItemContent}
      {isLoading && !error && <LoadingSpinner />}
      {error && <ErrorMessage errorMessage="Something Went Wrong" />}
    </div>
  );
};

export default ListContainer;
