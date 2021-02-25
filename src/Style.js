import styled from "styled-components";

export const Style = styled.div`
  h1 {
    text-align: center;
    color: #777;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: 100px auto;

    label {
      margin-top: 20px;
    }

    input,
    select {
      font-size: 1.2em;
    }

    .error {
      color: red;
      font-size: 0.6em;
    }
  }

  button {
    background: #0275d8;
    padding: 10px;
    color: white;
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    font-size: 1.2em;
  }
`;
