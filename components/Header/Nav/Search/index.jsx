import { Button, debounce } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Suggestions from './Suggestions';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Loading from '../../../Loading';

export default function Search({
  searchTerm,
  setSearchTerm,
  suggestions,
  setSuggestions,
  onfocus,
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    setSuggestions(false);
  };
  useEffect(() => {
    setLoading(false);
  }, [router.query.searchTerm]);
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
        {loading ? (
          <div className={styles.icon}>
            <Loading />
          </div>
        ) : (
          <Button className={styles.icon} type="submit">
            <AiOutlineSearch />
          </Button>
        )}
      </form>
      <Suggestions
        searchTerm={searchTerm}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
      />
    </div>
  );
}
