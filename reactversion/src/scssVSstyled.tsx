import React, { useState } from "react";
import styled from "styled-components";
import "./style/scss.scss";

function App() {
  const [click, setclick] = useState(false);
  const [click2, setclick2] = useState(false);
  return (
    <div>
      <Button click={click} onClick={() => setclick(!click)}>
        버튼
      </Button>
      <button
        onClick={() => setclick2(!click2)}
        className={click2 ? "button" : "button click"}
      >
        버튼2
      </button>
    </div>
  );
}

const Button = styled.button<{ click: boolean }>`
  background: ${({ click }) => (click ? "red" : "green")};
`;

export default App;
