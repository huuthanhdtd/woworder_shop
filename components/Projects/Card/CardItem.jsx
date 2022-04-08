import Link from 'next/link';
import NextImage from '../../image';
import React from 'react';
import styles from './CardItem.module.scss';
import { Typography } from '@material-ui/core';

function CardProject({ project }) {
  return (
    <>
      <Link href={`/du-an/${project.attributes.slug}`}>
        <div className={styles.container}>
          <NextImage image={project.attributes.image} />
          {/* <img src={`/Du-an/${project.id}.jpg`} alt="" /> */}
          <div className={styles.title}>
            <Typography variant="h6">{project.attributes.title}</Typography>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CardProject;
