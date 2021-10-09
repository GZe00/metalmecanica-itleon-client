import { CgSpinnerTwo } from "react-icons/cg";
import styled from "styled-components";

const SpinnerStyled = styled.div`
  .spinner {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .spinning {
    animation: spinner 1s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <SpinnerStyled>
      <div className="spinner">
        <CgSpinnerTwo className="spinning" size={60} style={{color: '#01135D'}} />
      </div>
    </SpinnerStyled>
  );
};

export default Spinner;
