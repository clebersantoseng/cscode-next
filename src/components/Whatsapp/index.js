import React from 'react';

import { Container, Box } from './styles';

export default function Whatsapp() {
  return (
    <Container>
      <Box>
        <a href="https://api.whatsapp.com/send?phone=5562996121210" target="_blank" rel="noopener noreferrer" >
          <img src="/image/whatsapp.png" alt="Whatsapp" />
        </a>
      </Box>
    </Container>
  );
}