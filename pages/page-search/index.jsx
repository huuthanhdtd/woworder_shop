import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import PageSearch from '../../components/PageSearch';
import { fetchAPI } from '../../lib/api';

export default function index({ category }) {
  return (
    <div>
      <PageSearch />
    </div>
  );
}
export const getStaticProps = async () => {
  return {
    props: {},
  };
};
