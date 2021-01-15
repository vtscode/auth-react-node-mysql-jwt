import React from 'react';
import { Layout, Button} from "antd";
import styled from "styled-components";

const {Footer} = Layout;
const FooterStyled = styled(Footer)`
  text-align: center;
  padding:unset;
`;

export default () => (
  <FooterStyled>
    Baked with <span role="img" aria-label="&#x1F49C;">&#x1F49C;</span> by <Button type="text" onClick={() => window.location.replace('https://rhivent.github.io')}>Riventus</Button>
  </FooterStyled>
);