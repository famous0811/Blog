import React from "react";
import styled from "styled-components";

interface ModalProps {
  children?: React.ReactNode;
}
const colors = {
  primary: "#000000",
};
const viewport = {
  mobile: "800px",
};
function Modal({ children }: ModalProps) {
  
  return (
    <Wrap
      onClick={() => {
          alert("모달 중지")
        // history.replace("/");
      }}
    >
      <Body onClick={(e) => e.stopPropagation()}>
        <div>
          modal
          {children}
        </div>
      </Body>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3000;
  animation: appear 0.5s;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Body = styled.div`
  position: absolute;
  background: white;
  max-width: 720px;
  width: 100%;
  box-sizing: border-box;
  padding: 3em 2em;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  transition: background 0.5s;
  @media (max-width: ${viewport.mobile}) {
    max-width: 520px;
  }
  &:focus {
    outline: 0;
  }
`;

export default Modal;
