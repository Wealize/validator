import React from "react";
import { TextProps } from "react-native";
import styled from "styled-components";
import { H2Styled } from "..";


const Title = styled(H2Styled).attrs({ title: true })`
  font-family: Montserrat;
`;

export default Title;
