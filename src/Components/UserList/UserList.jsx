import { React, useState } from "react";
import "./UserList.css";
import UserCard from "../UserCard/UserCard";
import  Pagination  from "@mui/material/Pagination";
import usePagination from "../UserCard/Pagination";
function UserList({ data }) {
  let [page, setPage] = useState(1);
  const PER_PAGE = 3;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <div className="userList__container">
      {_DATA.currentData().map((user) => {
        return (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            address={user.address}
            phone={user.phone}
            website={user.website}
            company={user.company}
          />
        );
      })}
       <Pagination
        count={count}
        size="large"
        page={page}
        shape="rounded"
        onChange={handleChange}
        color="primary"
      />
    </div>
  );
}

export default UserList;
