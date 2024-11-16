import { HiUser } from "react-icons/hi";

export const UserMenu = ({ name, fontSize, color }) => {
    return (
      <div>
        <p><HiUser className="my-icon" size={fontSize} color={color}/> {name}</p>
      </div>
    );
  };
