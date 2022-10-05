import React from 'react';
// import Carts from '../../components/Cart';
import dynamic from 'next/dynamic';

const Carts = dynamic(() => import('../../components/Cart'), { ssr: false });

export default function index() {
  return (
    <div>
      <Carts />
    </div>
  );
}
