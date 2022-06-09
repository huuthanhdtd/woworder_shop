import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Grid from '@material-ui/core/Grid';
import { GoTriangleRight } from 'react-icons/go';
import { useRouter } from 'next/router';
import { reverse } from '../../../lib/reverse';
import clsx from 'clsx';
import { ImCircleRight } from 'react-icons/im';
import Aos from 'aos';
import 'aos/dist/aos.css';
import RenderImage from '../SelectSizeImg';
import { useWindowSize } from 'react-use';
import { Context } from '../../../constants/Context';

function News({ articles, newsRef, newsIntoView }) {
  const { setOpenVideo, setContentVideo, openVideo } = useContext(Context);
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
    return result.slice(0, 4);
  }, [articles]);
  const handleClick = () => {
    router.push('/tin-tuc');
  };
  const clickToDetail = (item) => {
    if (item.attributes.category === 'video') {
      setOpenVideo(true);
      setContentVideo(item.attributes.content);
    } else {
      router.push(`/tin-tuc/${item.attributes.slug}`);
    }
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
          <Grid container className={styles.newsList} spacing={2}>
            {data &&
              data.map((item, index) => (
                <Grid key={index} item sm={6} xs={12} md={3}>
                  <div
                    data-aos="fade-up"
                    data-aos-duration={`${(index + 1) * 60}0`}
                    // dataAosDelay={`${index}00`}
                    className={clsx(styles.wrapper)}
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

                    {/* <Link href={`/tin-tuc/${item.attributes.slug}`}> */}
                    <div onClick={() => clickToDetail(item)}>
                      <h3>
                        {` ${
                          item.attributes.category === 'video' ? 'Video: ' : ''
                        } ${item.attributes.title.slice(
                          0,
                          item.attributes.title.slice(0, 40).lastIndexOf(' ')
                        )}...`}
                        <GoTriangleRight className={styles.rightIcon} />
                      </h3>
                    </div>
                    {/* </Link> */}
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
