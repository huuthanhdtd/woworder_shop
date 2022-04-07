import { Typography, Grid } from '@material-ui/core';
import Link from 'next/link';
import React, { useMemo } from 'react';
import styles from './Detail.module.scss';
import { Visibility } from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';
import Banner from '../Banner/Banner';
import { AiOutlineRight } from 'react-icons/ai';

function Detail({ project, projects }) {
  return (
    <>
      <Grid container justifyContent="center" className={styles.container}>
        <Banner />
        <Grid item xs={9}>
          <div className={styles.title}>
            <Typography variant="h5">
              <Link href="/du-an">Dự án</Link>
              <span>
                <AiOutlineRight fontSize={15} />
              </span>
              <span>{project.attributes.title}</span>
            </Typography>
          </div>
          <div className={styles.content}>
            <ReactMarkdown
              source={project.attributes.content}
              escapeHtml={false}
            />
          </div>
          {project.attributes.articles.data.length > 0 ? (
            <div className={styles.relativeNews}>
              <Typography variant="h5">Tin liên quan</Typography>
              <div className={styles.linkNews}>
                {project.attributes.articles.data.map((article) => (
                  <Link
                    key={article.id}
                    href={`/article/${article.attributes.slug}`}
                  >
                    {article.attributes.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            ' '
          )}
          {projects.length > 0 ? (
            <div className={styles.anotherNews}>
              <Typography variant="h5">Các dự án khác</Typography>

              <div className={styles.linkNews}>
                {projects.slice(0, 5).map((project) => (
                  <Link
                    key={project.id}
                    href={`/du-an/${project.attributes.slug}`}
                  >
                    {project.attributes.title}
                  </Link>
                ))}
              </div>
              <div className={styles.button}>
                <Visibility />
                <Link href="/du-an">Xem thêm</Link>
              </div>
            </div>
          ) : (
            ''
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Detail;
