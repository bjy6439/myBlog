import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = () => {
    axios.post("http://localhost:3001/posts", {
      title,
      body,
    });
  };

  return (
    <AppContainer className="container">
      <InputWrap className="mb-3 w-100">
        <label className="form-label">title</label>
        <TitleInput
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </InputWrap>
      <InputWrap className="mb-3">
        <label className="form-label">body</label>
        <BodyInput
          className="form-control"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          rows="20"
        />
      </InputWrap>
      <PostBtn className="btn btn-primary" onClick={onSubmit}>
        Post
      </PostBtn>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const TitleInput = styled.input`
  width: 500px;
  height: 30px;
`;

const BodyInput = styled.textarea`
  width: 500px;
  height: 200px;
`;

const PostBtn = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: skyblue;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
