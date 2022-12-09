import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSvgs";

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
row-gap: 1em;
position: fixed;
bottom: 0;
left; 2rem;

z-index: 3;

& > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;
//need to add in emery's links
const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          to={{
            pathname:
              "https://princeanimal.tumblr.com/post/98935108863/dont-let-me-go-to-heaven-i-want-to-be-undead-with",
          }}
        >
          <Github width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          to={{
            pathname:
              "https://princeanimal.tumblr.com/post/98935108863/dont-let-me-go-to-heaven-i-want-to-be-undead-with",
          }}
        >
          <Twitter width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          to={{
            pathname:
              "https://princeanimal.tumblr.com/post/98935108863/dont-let-me-go-to-heaven-i-want-to-be-undead-with",
          }}
        >
          <Facebook width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          to={{
            pathname:
              "https://princeanimal.tumblr.com/post/98935108863/dont-let-me-go-to-heaven-i-want-to-be-undead-with",
          }}
        >
          <YouTube width={25} height={25} fill="currentColor" />
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
