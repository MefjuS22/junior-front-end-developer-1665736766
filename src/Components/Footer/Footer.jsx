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
          <FooterItem>Last update 27/10/2022</FooterItem>
        </FooterContent>
      </FooterWrapper>
  );
};

export default Footer;
