import { Grid } from '@material-ui/core';
import { AssistantSharp } from '@material-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import UseList from '../useList';
import styles from './styles.module.scss';

export default function Support({ dataPolicy, filPolicy }) {
  const router = useRouter();
  const nameClass = useMemo(() => {
    if (router.asPath === '/support/support') return styles.support;
    else {
      return styles.item_detail;
    }
  }, [router.asPath]);
  // console.log(nameClass);
  return (
    <div className={styles.support}>
      <div className={styles.breadcrumb_shop}>
        <Link href="/"> Trang chủ</Link> / {filPolicy.name}
      </div>
      <Grid container className={styles.detail}>
        <Grid item xs={12} sm={12} md={8} className={nameClass}>
          <ReactMarkdown children={filPolicy.content} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <UseList dataPolicy={dataPolicy} />
        </Grid>
      </Grid>
    </div>
  );
}
