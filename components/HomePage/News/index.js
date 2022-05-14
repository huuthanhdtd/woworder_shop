import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import { GoTriangleRight } from 'react-icons/go';
import { useRouter } from 'next/router';
import { reverse } from '../../../lib/reverse';
import clsx from 'clsx';
import { ImCircleRight } from 'react-icons/im';
import Aos from 'aos';
import 'aos/dist/aos.css';
import RenderImage from '../SelectSizeImg';
import { useWindowSize } from 'react-use';

function News({ articles, newsRef, newsIntoView }) {
  const { width } = useWindowSize();
  const [sizeImg, setSizeImg] = useState({ width: 0, height: 0 });
  const imgRef = useRef();
  const router = useRouter();
  useEffect(() => {
    Aos.init({ duration: 1000 });
    setSizeImg({
      width: imgRef.current.clientWidth,
      height: imgRef.current.clientWidth * 0.6,
    });
  }, [width]);
  const data = useMemo(() => {
    const result = reverse(articles);
    console.log(result);
    return result.slice(0, 4);
  }, []);
  const handleClick = () => {
    router.push('/tin-tuc');
  };
  return (
    <div className={styles.newInfor} ref={newsRef}>
      <div className={styles.container}>
        <div
          className={styles.newsTitle}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1>Thông tin mới</h1>
          <div className={styles.newsLine}></div>
        </div>
        <div className={styles.newsContent}>
          <Grid container className={styles.newsList} spacing={1}>
            {data &&
              data.map((item, index) => (
                <Grid key={index} item md={3}>
                  <div
                    className={clsx(styles.wrapper, {
                      [styles.active]: newsIntoView === true,
                    })}
                    style={{
                      transition: `all  ${index / 3 + 0.4}s ease-in-out`,
                    }}
                  >
                    <div className={styles.imageBg} ref={imgRef}>
                      <div className={styles.image}>
                        {item.attributes.image.data !== null && (
                          <RenderImage
                            data={item.attributes.image}
                            heightImg={sizeImg.height}
                            widthImg={sizeImg.width}
                          />
                        )}
                      </div>
                    </div>

                    <Link href={`/tin-tuc/${item.attributes.slug}`}>
                      <h3>
                        {`${item.attributes.title.slice(
                          0,
                          item.attributes.title.slice(0, 40).lastIndexOf(' ')
                        )}...`}
                        <GoTriangleRight className={styles.rightIcon} />
                      </h3>
                    </Link>
                    <p>
                      {`${item.attributes.description.slice(
                        0,
                        item.attributes.description
                          .slice(0, 150)
                          .lastIndexOf(' ')
                      )}...`}
                    </p>
                  </div>
                </Grid>
              ))}
          </Grid>
        </div>
        <div
          className={clsx(styles.btnWrapper, {
            [styles.active]: newsIntoView === true,
          })}
        >
          <button onClick={handleClick}>
            Chuyển đến phần tin tức
            <ImCircleRight className={styles.rightIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
