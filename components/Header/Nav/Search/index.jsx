import { Button, debounce } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';
import Suggestions from './Suggestions';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/router';

export default function Search({
  searchTerm,
  setSearchTerm,
  suggestions,
  setSuggestions,
  onfocus,
}) {
  const router = useRouter();

  const handleOnchange = (e) => {
    setSearchTerm(e.target.value);
    setSuggestions(true);
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/page-search',
      query: { searchTerm: searchTerm },
    });
    setSuggestions(false);
  };
  return (
    <div className={styles.search}>
      <form onSubmit={(e) => handleSubmitSearch(e)}>
        <input
          id="myInput"
          placeholder="Nhập url/mã/tên sản phẩm để tìm..."
          className={styles.inputSearch}
          onChange={debounce(handleOnchange, 250)}
          onFocus={onfocus}
        />
        <Button className={styles.icon} type="submit">
          <AiOutlineSearch />
        </Button>
      </form>
      <Suggestions
        searchTerm={searchTerm}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
      />
    </div>
  );
}
