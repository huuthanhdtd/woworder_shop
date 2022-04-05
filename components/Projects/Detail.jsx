import { Typography, Grid, Container } from '@material-ui/core';
import Link from 'next/link';
import React, { useContext, useMemo } from 'react';
import styles from './Detail.module.scss';
import { Visibility } from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';
import Banner from '../Banner/Banner';

function Detail({ project, projects }) {
  const data = useMemo(() => {
    const rs = projects
      .sort(function (a, b) {
        return (
          new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt)
        );
      })
      .slice(projects.length - 6);
    return rs;
  }, [projects]);
  return (
    <>
      <Grid container justifyContent="center" className={styles.container}>
        <Banner />
        <Grid item xs={9}>
          <div className={styles.title}>
            <Typography variant="h4">
              <Link href="/du-an">Dự án</Link>
              <span>&#8250;</span>
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
          {data.length > 0 ? (
            <div className={styles.anotherNews}>
              <Typography variant="h5">Các dự án khác</Typography>

              <div className={styles.linkNews}>
                {data.slice(0, 5).map((project) => (
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
