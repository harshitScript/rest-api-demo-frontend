import styled from "styled-components";
import { ImCross } from "react-icons/im";

const CustomModal1 = ({
  children = <></>,
  title = "TITLE GOES HERE",
  onClose = () => {},
  footer,
}) => {
  return (
    <>
      <Backdrop />
      <ModalDialog>
        <div
          id="modal-title"
          className={`flex ${
            title ? "justify-between" : "justify-end"
          } align-center`}
        >
          {title ? <span className="text-base font-bold">{title}</span> : <></>}
          <ImCross onClick={onClose} className="cursor-pointer" />
        </div>
        <div id="modal-body" className="py-2">
          {children}
        </div>
        {footer ? <div id="modal-footer">{footer}</div> : <></>}
      </ModalDialog>
    </>
  );
};

export default CustomModal1;

const Backdrop = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.65);
`;

const ModalDialog = styled.div`
  padding: 1rem;
  color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px #ffb7;
  &:hover {
    box-shadow: 0 0 4px gold;
  }
  position: fixed;
  z-index: 2;
  width: 50%;
  top: 20%;
  left: 25%;
  background: #000;
`;
