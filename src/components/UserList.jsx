import { useEffect, useState } from "react";
import { fetchUsers } from "../api/fetchUsers";

const UserList = ({ search }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setFilteredUsers(data);
    });
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center">User List</h2>
      <ul className="mt-4 space-y-2">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id} className="p-2 border rounded bg-gray-100">
              {user.name}
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">No users found</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;
