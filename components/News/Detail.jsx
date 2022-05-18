import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Detail.module.scss';
import { Button, Typography, Container, CardMedia } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import { AiOutlineRight } from 'react-icons/ai';
import { getMediaFollowSize, getStrapiMedia } from '../../lib/media';
import { getNewImageUrl } from '../../lib/resizeMarkdown';
import useWindowDimensions from '../../lib/hook/useWindowDimensions';

function DetailArticle({ article, anotherArticle, image, articleMarkdown }) {
  const preLinkNews = '/tin-tuc';
  const title = 'Tin tức';
  const urlCurrent = image.data.attributes.formats;
  const [contentMarkdown, setContentMarkdown] = useState();
  const [urlImageResize, setUrlImageResize] = useState(urlCurrent.thumbnail);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width) {
      if (width > 2600) {
        setContentMarkdown(getNewImageUrl('', articleMarkdown));
        setUrlImageResize(image.data.attributes);
      }
      if (width <= 2600) {
        if (urlCurrent.xl === undefined) {
          setUrlImageResize(image.data.attributes);
          setContentMarkdown(getNewImageUrl('', article.attributes.content));
        } else {
          setContentMarkdown(getNewImageUrl('md_', articleMarkdown));
          setUrlImageResize(urlCurrent.xl);
        }
      }
      if (width <= 1900) {
        if (urlCurrent.lg === undefined) {
          setUrlImageResize(image.data.attributes);
          setContentMarkdown(getNewImageUrl('', articleMarkdown));
        } else {
          setContentMarkdown(getNewImageUrl('md_', articleMarkdown));
          setUrlImageResize(urlCurrent.lg);
        }
      }
      if (width <= 1280) {
        if (urlCurrent.md === undefined) {
          setUrlImageResize(image.data.attributes);
          setContentMarkdown(getNewImageUrl('', articleMarkdown));
        } else {
          setContentMarkdown(getNewImageUrl('md_', articleMarkdown));
          setUrlImageResize(urlCurrent.md);
        }
      }
      if (width <= 960) {
        if (urlCurrent.sm === undefined) {
          setUrlImageResize(image.data.attributes);
          setContentMarkdown(getNewImageUrl('', articleMarkdown));
        } else {
          setContentMarkdown(getNewImageUrl('sm_', articleMarkdown));
          setUrlImageResize(urlCurrent.sm);
        }
      }
      if (width <= 600) {
        if (urlCurrent.xs === undefined) {
          setUrlImageResize(image.data.attributes);
          setContentMarkdown(getNewImageUrl('', articleMarkdown));
        } else {
          setContentMarkdown(getNewImageUrl('xs_', articleMarkdown));
          setUrlImageResize(urlCurrent.xs);
        }
      }
    }
  }, [width, image, articleMarkdown, article, anotherArticle]);
  return (
    <>
      <CardMedia
        className={styles.banner}
        image={getMediaFollowSize(urlImageResize)}
      >
        <div className={styles.cover}></div>
      </CardMedia>
      <Container className={styles.container}>
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

        {anotherArticle !== undefined ? (
          <div className={styles.anotherNews}>
            <Typography variant="h5">Các tin khác</Typography>
            <div className={styles.linkNews}>
              {anotherArticle.slice(0, 8).map((article) => (
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
              <Link href={preLinkNews}>
                <Button>Xem thêm</Button>
              </Link>
            </div>
          </div>
        ) : (
          ''
        )}
      </Container>
    </>
  );
}

export default DetailArticle;
