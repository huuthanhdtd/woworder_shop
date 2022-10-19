import React from 'react';
import Contact from '../../components/Contact';

export default function index() {
  return (
    <div>
      <Contact />
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
