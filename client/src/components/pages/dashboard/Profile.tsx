import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Link to={"/"}>
        <div>Profile</div>
      </Link>
      <Outlet />
    </>
  );
};

export default Profile;
