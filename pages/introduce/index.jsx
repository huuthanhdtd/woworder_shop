import React from 'react';
import Introduce from '../../components/Introduce';

export default function index() {
  return (
    <div>
      <Introduce />
    </div>
  );
}
export const getStaticProps = async () => {
  return {
    props: {
      category: [],
    },
  };
};
