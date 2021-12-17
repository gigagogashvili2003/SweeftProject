import { Link } from "react-router-dom";
import ListItem from "../ListItem";

// Reusable Jsx code

const listItemJsx = (users) => {
  const listItemContent = users.map((user, index) => {
    // Last user element
    if (users.length === index + 1) {
      return (
        // Evry List Item!
        <Link key={Math.random()} to={`/user/${user.id}`}>
          <ListItem
            // some logic because when fetching images without index+1 the images are all the same...
            imageUrl={`${user.imageUrl}/v=${user.id}`}
            prefix={user.prefix}
            name={user.name}
            lastName={user.lastName}
            title={user.title}
          />
        </Link>
      );
    } else {
      return (
        // Evry List Item!
        <Link key={Math.random()} to={`/user/${user.id}`}>
          <ListItem
            // some logic because when fetching images without index+1 the images are all the same...
            imageUrl={`${user.imageUrl}/v=${user.id}`}
            prefix={user.prefix}
            name={user.name}
            lastName={user.lastName}
            title={user.title}
          />
        </Link>
      );
    }
  });
  return listItemContent;
};

export default listItemJsx;
