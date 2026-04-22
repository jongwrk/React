import styled from "styled-components";

const Wrapper = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fade 1s infinite alternate;
`;

const Text = styled.span`
  font-size: 24px;
`;

function Loading() {
  return (
    <Wrapper>
      <Text>Loading,,,</Text>
    </Wrapper>
  );
}

export default Loading;
