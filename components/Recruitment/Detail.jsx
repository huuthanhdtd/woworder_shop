import { Typography, Grid } from '@material-ui/core';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './Detail.module.scss';
import { Visibility } from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';
import Banner from './Banner/Banner';
import { AiOutlineRight } from 'react-icons/ai';
import { getStrapiMedia } from '../../lib/media';
import { getNewImageUrl } from '../../lib/resizeMarkdown';
import { useWindowSize } from 'react-use';

function DetailRecruitment({
  article,
  anotherArticle,
  image,
  articleMarkdown,
}) {
  const [contentMarkdown, setContentMarkdown] = useState(articleMarkdown);
  const [urlImageResize, setUrlImageResize] = useState(getStrapiMedia(image));
  const { width } = useWindowSize();
  const preLinkNews = '/tuyen-dung';
  const title = 'Tuyển dụng';
  useEffect(() => {
    if (width) {
      if (width > 2600) {
        setContentMarkdown(getNewImageUrl('', articleMarkdown));
        setUrlImageResize(getNewImageUrl('', getStrapiMedia(image)));
      }
      if (width <= 2600) {
        if (image.data.attributes.formats.xl === undefined) {
          setUrlImageResize(getNewImageUrl('', getStrapiMedia(image)));
          setContentMarkdown(getNewImageUrl('', articleMarkdown));
        } else {
          setContentMarkdown(getNewImageUrl('xl_', articleMarkdown));
          setUrlImageResize(getNewImageUrl('xl_', getStrapiMedia(image)));
        }
      }
      if (width <= 1900) {
        if (image.data.attributes.formats.lg === undefined) {
          setUrlImageResize(getNewImageUrl('', getStrapiMedia(image)));
          setContentMarkdown(getNewImageUrl('', articleMarkdown));
        } else {
          setContentMarkdown(getNewImageUrl('lg_', articleMarkdown));
          setUrlImageResize(getNewImageUrl('lg_', getStrapiMedia(image)));
        }
      }
      if (width <= 1280) {
        if (image.data.attributes.formats.md === undefined) {
          setUrlImageResize(getNewImageUrl('', getStrapiMedia(image)));
          setContentMarkdown(getNewImageUrl('', articleMarkdown));
        } else {
          setContentMarkdown(getNewImageUrl('md_', articleMarkdown));
          setUrlImageResize(getNewImageUrl('md_', getStrapiMedia(image)));
        }
      }
      if (width <= 960) {
        if (image.data.attributes.formats.sm === undefined) {
          setUrlImageResize(getNewImageUrl('', getStrapiMedia(image)));
          setContentMarkdown(getNewImageUrl('', articleMarkdown));
        } else {
          setContentMarkdown(getNewImageUrl('sm_', articleMarkdown));
          setUrlImageResize(getNewImageUrl('sm_', getStrapiMedia(image)));
        }
      }
      if (width <= 600) {
        if (image.data.attributes.formats.xs === undefined) {
          setUrlImageResize(getNewImageUrl('', getStrapiMedia(image)));
          setContentMarkdown(getNewImageUrl('', articleMarkdown));
        } else {
          setContentMarkdown(getNewImageUrl('xs_', articleMarkdown));
          setUrlImageResize(getNewImageUrl('xs_', getStrapiMedia(image)));
        }
      }
    }
  }, [width]);
  return (
    <>
      <Banner urlImageResize={urlImageResize} />
      <Grid container justifyContent="center" className={styles.container}>
        <Grid item xs={9}>
          <div className={styles.title}>
            <Typography variant="h5">
              <Link href={preLinkNews}>{title}</Link>
              <span>
                <AiOutlineRight fontSize={15} />
              </span>
              <span>{article.attributes.title}</span>
            </Typography>
          </div>
          <div className={styles.content}>
            <ReactMarkdown source={contentMarkdown} escapeHtml={false} />
          </div>
          {anotherArticle.length > 0 ? (
            <div className={styles.anotherNews}>
              <Typography variant="h5">Các dự án khác</Typography>

              <div className={styles.linkNews}>
                {anotherArticle.slice(0, 5).map((article) => (
                  <Link
                    key={article.id}
                    href={`${preLinkNews}/${article.attributes.slug}`}
                  >
                    {article.attributes.title}
                  </Link>
                ))}
              </div>
              <div className={styles.button}>
                <Visibility />
                <Link href={preLinkNews}>Xem thêm</Link>
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

export default DetailRecruitment;
