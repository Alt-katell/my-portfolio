import React from 'react';
import { ThemeProvider } from 'styled-components';

import 'typeface-raleway';
import 'typeface-dawning-of-a-new-day';

const theme = {
  colors: {
    black: "#020422",
    grey: "#5D5b6A",
  },
  fonts: {
    raleway: "Raleway",
    dawningOfANewDay: "Dawning of a New Day",
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;
