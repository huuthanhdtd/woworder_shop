import { List, MenuItem } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './ListsMenu.module.scss';

const ListsMenu = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <List className={styles.listsMenu}>
        <MenuItem
          className={router.asPath === '/tin-tuc/thi-truong' ? styles.item : ''}
        >
          <Link href="/tin-tuc/thi-truong">Tin tức thị trường</Link>
        </MenuItem>
        <MenuItem
          className={router.asPath === '/tin-tuc/du-an' ? styles.item : ''}
        >
          <Link href="/tin-tuc/du-an">Tin tức dự án</Link>
        </MenuItem>

        <MenuItem>
          <Link href="/tin-tuc ">Video</Link>
        </MenuItem>
      </List>
    </div>
  );
};

export default ListsMenu;
