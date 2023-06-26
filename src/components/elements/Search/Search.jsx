import React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const StyledSearch = styled('form')(({ theme }) => ({
  position: 'relative',
  borderRadius: "57px",
  height: '100%',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  // padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    borderRadius: "57px",
    border: "1.5px solid var(--faint-strong)",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: '2em',
    // },
    "&:focus": {
      border: "1.5px solid var(--faint-strong-up)",
      // width: '5em',
    },
  },
}));

function Search({ className, ...props }) {
  return (
    <StyledSearch style={{ height: '2rem' }}>
      <SearchIconWrapper>
      </SearchIconWrapper>
      <StyledInputBase
        style={{ width: '20rem' }}
        placeholder="Найти…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </StyledSearch>
  );
}

export default Search;
