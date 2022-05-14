import { Typography, Grid } from '@material-ui/core';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import styles from './Detail.module.scss';
import { Visibility } from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';
import Banner from '../Banner/Banner';
import { AiOutlineRight } from 'react-icons/ai';
import { Context } from '../../constants/Context';
import { getNewImageUrl } from '../../lib/resizeMarkdown';
import { getStrapiMedia } from '../../lib/media';

function Detail({ project, projects, projectCommon }) {
  const {
    bannerRef,
    focusBanner,
    setFocusBanner,
    pageYOffset,
    getWindowDimensions,
    sizeImage,
    setSizeImage,
  } = useContext(Context);
  const preLinkNews = '/tin-tuc';
  const preLinkProject = '/du-an';
  const [contentMarkdown, setContentMarkdown] = useState(
    project.attributes.content
  );
  const [urlImageResize, setUrlImageResize] = useState(
    getStrapiMedia(project.attributes.image)
  );
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (
      pageYOffset >= bannerRef.current.offsetTop &&
      pageYOffset < bannerRef.current.offsetTop + 600
    ) {
      setFocusBanner(true);
    } else {
      setFocusBanner(false);
    }
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (windowDimensions.width) {
      if (windowDimensions.width > 2600) {
        setSizeImage('');
        setContentMarkdown(
          getNewImageUrl(sizeImage, project.attributes.content)
        );
        setUrlImageResize(
          getNewImageUrl(sizeImage, getStrapiMedia(project.attributes.image))
        );
      }
      if (windowDimensions.width <= 2600) {
        setSizeImage('xl_');
        setContentMarkdown(
          getNewImageUrl(sizeImage, project.attributes.content)
        );
        setUrlImageResize(
          getNewImageUrl(sizeImage, getStrapiMedia(project.attributes.image))
        );
      }
      if (windowDimensions.width <= 1900) {
        setSizeImage('lg_');
        setContentMarkdown(
          getNewImageUrl(sizeImage, project.attributes.content)
        );
        setUrlImageResize(
          getNewImageUrl(sizeImage, getStrapiMedia(project.attributes.image))
        );
      }
      if (windowDimensions.width <= 1280) {
        setSizeImage('md_');
        setContentMarkdown(
          getNewImageUrl(sizeImage, project.attributes.content)
        );
        setUrlImageResize(
          getNewImageUrl(sizeImage, getStrapiMedia(project.attributes.image))
        );
      }
      if (windowDimensions.width <= 960) {
        setSizeImage('sm_');
        setContentMarkdown(
          getNewImageUrl(sizeImage, project.attributes.content)
        );
        setUrlImageResize(
          getNewImageUrl(sizeImage, getStrapiMedia(project.attributes.image))
        );
      }
      if (windowDimensions.width <= 600) {
        setSizeImage('xs_');
        setContentMarkdown(
          getNewImageUrl(sizeImage, project.attributes.content)
        );
        setUrlImageResize(
          getNewImageUrl(sizeImage, getStrapiMedia(project.attributes.image))
        );
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pageYOffset, windowDimensions.width]);
  return (
    <>
      <Banner
        bannerRef={bannerRef}
        focusBanner={focusBanner}
        project={project}
        changeBanner={true}
        bannerProject={projectCommon}
        urlImageResize={urlImageResize}
        sizeImage={sizeImage}
        width={windowDimensions.width}
        pageYOffset={pageYOffset}
      />
      <Grid container justifyContent="center" className={styles.container}>
        <Grid item xs={9}>
          <div className={styles.title}>
            <Typography variant="h5">
              <Link href={preLinkProject}>Dự án</Link>
              <span>
                <AiOutlineRight fontSize={15} />
              </span>
              <span>{project.attributes.title}</span>
            </Typography>
          </div>
          <div className={styles.content}>
            <ReactMarkdown
              source={
                sizeImage !== '' ? contentMarkdown : project.attributes.content
              }
              escapeHtml={false}
            />
          </div>
          {project.attributes.news_articles.data.length > 0 ? (
            <div className={styles.relativeNews}>
              <Typography variant="h5">Tin liên quan</Typography>
              <div className={styles.linkNews}>
                {project.attributes.news_articles.data.map((article) => (
                  <Link
                    key={article.id}
                    href={`${preLinkNews}/${article.attributes.slug}`}
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
                    href={
                      project.attributes.link !== null
                        ? `${project.attributes.link}`
                        : `${preLinkProject}/${project.attributes.slug}`
                    }
                  >
                    {project.attributes.title}
                  </Link>
                ))}
              </div>
              <div className={styles.button}>
                <Visibility />
                <Link href={preLinkProject}>Xem thêm</Link>
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
