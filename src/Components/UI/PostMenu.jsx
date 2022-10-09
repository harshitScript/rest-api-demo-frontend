import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep, MdOutlineViewInAr } from "react-icons/md";
import styled from "styled-components";

const PostMenu = ({ postId }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((current) => !current);

  return (
    <div>
      {showMenu ? (
        <IoIosArrowDropright size="2rem" onClick={toggleMenu} color="#ffb7" />
      ) : (
        <IoIosArrowDropleft size="2rem" onClick={toggleMenu} color="#ffb7" />
      )}
      {showMenu ? (
        <Menu>
          <FaEdit title="Edit" size="1.3rem" color="#ffb7" />
          <MdDeleteSweep title="Delete" size="1.3rem" color="#ffb7" />
          <MdOutlineViewInAr title="View" size="1.3rem" color="#ffb7" />
        </Menu>
      ) : (
        <></>
      )}
    </div>
  );
};

const Menu = styled.section`
  min-width: 200px;
  height: 40px;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 0 0 2px #ffb7;
  border-radius: 0.5rem;
  position: absolute;
  margin-left: -205px;
  margin-top: -35px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: space-around;
  animation: fadeIn 1s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default PostMenu;
