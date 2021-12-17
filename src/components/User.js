import React, { useState } from "react";
import useFetchProfile from "../hooks/useFetchProfile";
import classes from "./User.module.css";
import useSearchFriends from "../hooks/useSearchFriend";
import LoadingSpinner from "./UI/LoadingSpinner";
import ErrorMessage from "./UI/ErrorMessage";
import listItemJsx from "./Helpers/listItemJsx";
import { useSelector } from "react-redux";

const User = (props) => {
  // Updating component when hash changes and then getting the id from url
  const idString = window.location.href.slice(27);
  const id = +idString;

  const { profile } = useFetchProfile(id);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  // Friends

  // Intersectional Logic from reusable component
  const [pageNumber, setPageNumber] = useState(1);
  const { friends } = useSearchFriends(id, pageNumber);

  // Content of friend users

  const friendsContent = listItemJsx(friends);

  // UserProfile JXS CODE

  const profileContent = (
    <div className={classes.container}>
      <img src={`${profile.imageUrl}/v=${profile.id}`} />
      <div className={classes.info}>
        <h2>{`${profile.prefix} ${profile.name} ${profile.lastName}`}</h2>
        <p className={classes.title}>{profile.title}</p>
        <div className={classes["info__wrapper"]}>
          <p>
            <u>Email:</u>
            {profile.email}
          </p>
          <p>
            <u>Ip Address:</u>
            {profile.ip}
          </p>
          <p>
            <u>Job Area:</u>
            {profile.jobArea}
          </p>
          <p>
            <u>Job Type:</u>
            {profile.jobType}
          </p>
        </div>
      </div>
      <div className={classes.address}>
        <h2>{`${profile.company?.name} ${profile.company?.suffix}`}</h2>
        <p>
          <u>City:</u>
          {profile.address?.city}
        </p>
        <p>
          <u>Country:</u>
          {profile.address?.country}
        </p>
        <p>
          <u>State:</u>
          {profile.address?.state}
        </p>
        <p>
          <u>Street Address:</u>
          {profile.address?.streetAddress}
        </p>
        <p>
          <u>ZIP:</u>
          {profile.address?.zipCode}
        </p>
      </div>
    </div>
  );

  return (
    <div className={classes.wrapper}>
      {!error && profileContent}

      <div className={classes["friend__title"]}>
        <h2>Friends:</h2>
      </div>
      {loading && !error && <LoadingSpinner />}
      <div className={classes["friends__container"]}>
        {error && <ErrorMessage errorMessage="Something Went Wrong" />}

        {!error && friendsContent}
      </div>
    </div>
  );
};

export default React.memo(User);
