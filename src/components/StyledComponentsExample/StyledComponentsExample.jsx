import React, { useState } from "react";
import styled, {
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${(props) => (props.primary ? "palevioletred" : "white")};
//   color: ${(props) => (props.primary ? "white" : "palevioletred")};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// A new component based on Button, but with some override styles
// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

// const ReversedButton = (props) => (
//   <Button {...props} children={props.children.split("").reverse()} />
// );

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

// Define what props.theme will look like
const defaultTheme = {
  color: "green",
  borderColor: "yellow",
};

const redTheme = {
  color: "red",
  borderColor: "red",
};

const GlobalStyle = createGlobalStyle`
  button {
    background-color: pink;
  }
`;

export default function StyledComponentsExample() {
  const [theme, setTheme] = useState(defaultTheme);
  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <>
      <div>
        <GlobalStyle />
        <button onClick={() => setTheme(redTheme)}>red</button>
        <button onClick={() => setTheme(defaultTheme)}>green</button>
        <ThemeProvider theme={theme}>
          <Button>Normal</Button>
          <Button>Themed</Button>
        </ThemeProvider>
      </div>
      <div>
        <button>Others</button>
      </div>
    </>
  );
}
