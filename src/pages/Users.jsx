const Users = ({ data, loading }) => {
  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.slice(0, 5).map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
