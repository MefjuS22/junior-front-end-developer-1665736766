import React from 'react';
import { FooterContent, FooterWrapper, FooterItem } from './FooterStyles';
const Footer = () => {
  return (
      <FooterWrapper>
        <FooterContent>
          <FooterItem>Terms of service</FooterItem>
          <FooterItem>•</FooterItem>
          <FooterItem>Privacy policy</FooterItem>
          <FooterItem>•</FooterItem>
          <FooterItem>Copyright</FooterItem>
        </FooterContent>
        <FooterContent>
          <FooterItem>nerds.family Version 1.2</FooterItem>
          <FooterItem>•</FooterItem>
          <FooterItem>Last update 10/09/2022</FooterItem>
        </FooterContent>
      </FooterWrapper>
  );
};

export default Footer;
