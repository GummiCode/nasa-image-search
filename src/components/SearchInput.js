import React, { useState } from 'react';
import styled from 'styled-components';
import getImages from '../requests/getImages'

const StyledSearchFrame = styled.div`
  height: 28px;
  background: transparent;
  border-radius: 5px;
  border: 2px solid maroon;
  margin: 0 5px;
  padding: 0 5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const StyledSearchInput = styled.input`
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: #F6F4F0;
  font-size: 1em;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
`
const StyledSearchIcon = styled.img`
  height: 18px;
  width: auto;
  margin: 0 0 0 5px;
`

const SearchInput = (props) => {

  const [searchState, updateSearchState] = useState("moon");

  const [searchResults, updateSearchResults] = useState ({

  });

  const performSearch = () => {
    getImages(searchState);
  };
  
  const submitSearch = (event) => {
    if (event.key === 'Enter' || event.target.alt === "Click here to search") {
      performSearch();
    }
  };

  return (
    <>
      <StyledSearchFrame>
        <StyledSearchInput
          type="search"
          placeholder="Search"
          onChange={e => updateSearchState(e.target.value)}
          onKeyDown={submitSearch}
        />
        <StyledSearchIcon 
          src="./images/search.png"
          alt="Click here to search"
          onClick={submitSearch}
        />
      </StyledSearchFrame>
    </>
  )
};

export default SearchInput;