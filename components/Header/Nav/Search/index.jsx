import { Button, debounce } from '@material-ui/core';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './styles.module.scss';
import Suggestions from './Suggestions';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Loading from '../../../Loading';
import axios from 'axios';

export default function Search({ suggestions, setSuggestions, onfocus }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);
  const handleOnchange = (e) => {
    setSearchTerm(e.target.value);
    setSuggestions(true);
  };
  useMemo(() => {
    if (!router.isReady) return;
    else {
      if (searchTerm == '') return;
      else {
        axios
          .get(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/stores/search?limit=10&page=1&brandIds=&query=${searchTerm}`
          )
          .then((res) => setDataSearch(res.data));
      }
    }
  }, [searchTerm]);
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
    setLoading(false);
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
        dataSearch={dataSearch}
        searchTerm={searchTerm}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
      />
    </div>
  );
}
