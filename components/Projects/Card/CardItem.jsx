import Link from 'next/link';
import React from 'react';
import styles from './CardItem.module.scss';
import { Typography } from '@material-ui/core';
import NextImage from './image';

function CardProject({ project, dataAos, width }) {
  return (
    <>
      <Link
        href={
          project.attributes.link
            ? `${project.attributes.link}`
            : `/du-an/${project.attributes.slug}`
        }
      >
        <div className={styles.container} data-aos={dataAos}>
          <NextImage image={project.attributes.image} />
          <div className={styles.title}>
            <Typography variant="h6">{project.attributes.title}</Typography>
            <Typography variant="body2" className={styles.location}>
              {`${project.attributes.description.slice(
                0,
                project.attributes.description.slice(0, 100).lastIndexOf(' ')
              )}`}
            </Typography>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CardProject;
