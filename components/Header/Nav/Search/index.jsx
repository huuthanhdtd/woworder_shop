import { Button, debounce } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Suggestions from './Suggestions';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Loading from '../../../Loading';
import axios from 'axios';

export default function Search({ suggestions, setSuggestions, onfocus }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(router.query.query || '');
  const [loading, setLoading] = useState(false);
  const handleOnchange = (e) => {
    setSearchTerm(e.target.value);
    setSuggestions(true);
  };
  const handleSubmitSearch = async (e) => {
    e?.preventDefault();
    router.push({
      pathname: '/page-search',
      query: { query: searchTerm },
    });
    setLoading(true);
    setSuggestions(false);
  };
  useEffect(() => {
    if (!router.isReady) return;
    axios
      .get(
        `https://khanhbui.vn/api/stores/search?limit=10&page=1&brandIds=&query=${router.query.query}`
        // {
        // params: {
        //   limit: 10,
        //   page: 1,
        //   brandIds: '',
        //   query: searchTerm,
        // },
        // }
      )
      .then((res) =>
        // console.log(res),
        setLoading(false)
      );
  }, [router.query]);

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
