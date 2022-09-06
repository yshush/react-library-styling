/** @jsxImportSource @emotion/react */
import { css, Global, keyframes, ClassNames } from "@emotion/react";
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const color = "white";

const style = css`
  color: hotpink;
`;

// const SomeComponent = ({ children }) => (
//   <div css={style}>
//     Some hotpink text.
//     {children}
//   </div>
// );

// const anotherStyle = css({
//   textDecoration: "underline",
// });

// const AnotherComponent = () => (
//   <div css={[anotherStyle, style]}>Some text with an underline.</div>
// );

const P = (props) => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: "1.5",
      fontFamily: "Sans-Serif",
      color: "black",
    }}
    {...props} // <- props contains the `className` prop
  />
);

const ArticleText = (props) => (
  <P
    css={{
      fontSize: 14,
      fontFamily: "Georgia, serif",
      color: "darkgray",
    }}
    {...props} // <- props contains the `className` prop
  />
);

const danger = css`
  color: red;
`;

const base = css`
  background-color: darkgreen;
  color: turquoise;
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

let SomeComponent = (props) => (
  <div className={props.wrapperClassName}>
    in the wrapper!
    <div className={props.className}>{props.children}</div>
  </div>
);

export default function EmotionExample() {
  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <Button>Hello</Button>
      {/* <SomeComponent />
      <AnotherComponent /> */}
      <P>PPPPPPPPPPP</P>
      <ArticleText>ArticleText</ArticleText>
      <div>
        <div css={base}>This will be turquoise</div>
        <div css={[danger, base]}>
          This will be also be turquoise since the base styles overwrite the
          danger styles.
        </div>
        <div css={[base, danger]}>This will be red</div>
      </div>
      <p
        css={css`
          font-size: 30px;
          @media (min-width: 420px) {
            font-size: 50px;
          }
        `}
      >
        {" "}
        <Global
          styles={css`
            p {
              color: hotpink !important;
            }
          `}
        />
        Some text!
      </p>
      <p>Hello World!</p>
      <div
        css={css`
          animation: ${bounce} 1s ease infinite;
        `}
      >
        some bouncing text!
      </div>
      <ClassNames>
        {({ css, cx }) => (
          <SomeComponent
            wrapperClassName={css({ color: "green" })}
            className={css`
              color: hotpink;
            `}
          >
            from children!!
          </SomeComponent>
        )}
      </ClassNames>
    </>
  );
}
