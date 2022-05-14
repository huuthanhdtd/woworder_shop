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
import { useWindowSize } from 'react-use';

function Detail({
  project,
  projects,
  projectCommon,
  image,
  projectContentMarkdown,
}) {
  const { bannerRef, focusBanner, setFocusBanner, pageYOffset } =
    useContext(Context);
  const preLinkNews = '/tin-tuc';
  const preLinkProject = '/du-an';
  const [contentMarkdown, setContentMarkdown] = useState(
    projectContentMarkdown
  );
  const imageURLCurrent = image.data.attributes.formats;
  const [urlImageResize, setUrlImageResize] = useState(
    imageURLCurrent.thumbnail
  );
  const { width } = useWindowSize();

  useEffect(() => {
    if (
      pageYOffset >= bannerRef.current.offsetTop &&
      pageYOffset < bannerRef.current.offsetTop + 600
    ) {
      setFocusBanner(true);
    } else {
      setFocusBanner(false);
    }

    if (width) {
      if (width > 2600) {
        setContentMarkdown(getNewImageUrl('', projectContentMarkdown));
        setUrlImageResize(image.data.attributes);
      }
      if (width <= 2600) {
        if (imageURLCurrent.xl === undefined) {
          setContentMarkdown(getNewImageUrl('', projectContentMarkdown));
          setUrlImageResize(image.data.attributes);
        } else {
          setContentMarkdown(getNewImageUrl('md_', projectContentMarkdown));
          setUrlImageResize(imageURLCurrent.xl);
        }
      }
      if (width <= 1900) {
        if (imageURLCurrent.lg === undefined) {
          setContentMarkdown(getNewImageUrl('', projectContentMarkdown));
          setUrlImageResize(image.data.attributes);
        } else {
          setContentMarkdown(getNewImageUrl('md_', projectContentMarkdown));
          setUrlImageResize(imageURLCurrent.lg);
        }
      }
      if (width <= 1280) {
        if (imageURLCurrent.md === undefined) {
          setContentMarkdown(getNewImageUrl('', projectContentMarkdown));
          setUrlImageResize(image.data.attributes);
        } else {
          setContentMarkdown(getNewImageUrl('md_', projectContentMarkdown));
          setUrlImageResize(imageURLCurrent.md);
        }
      }
      if (width <= 960) {
        if (imageURLCurrent.sm === undefined) {
          setContentMarkdown(getNewImageUrl('', projectContentMarkdown));
          setUrlImageResize(image.data.attributes);
        } else {
          setContentMarkdown(getNewImageUrl('sm_', projectContentMarkdown));
          setUrlImageResize(imageURLCurrent.sm);
        }
      }
      if (width <= 600) {
        if (imageURLCurrent.xs === undefined) {
          setContentMarkdown(getNewImageUrl('', projectContentMarkdown));
          setUrlImageResize(image.data.attributes);
        } else {
          setContentMarkdown(getNewImageUrl('xs_', projectContentMarkdown));
          setUrlImageResize(imageURLCurrent.xs);
        }
      }
    }
  }, [pageYOffset, width, image, projectContentMarkdown]);
  return (
    <>
      <Banner
        bannerRef={bannerRef}
        focusBanner={focusBanner}
        project={project}
        changeBanner={true}
        bannerProject={projectCommon}
        urlImageResize={urlImageResize}
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
            <ReactMarkdown source={contentMarkdown} escapeHtml={false} />
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
