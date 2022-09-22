import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import { footerData } from '../../constants/commonData';
import styles from './aboutStyles.module.scss';
import { GoPrimitiveDot } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { TiSocialFacebook } from 'react-icons/ti';
import { IoLogoInstagram } from 'react-icons/io';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import Image from 'next/image';
import Tiktok from '../../assets/image/tiktok.svg';
import { BsUiChecksGrid } from 'react-icons/bs';
import clsx from 'clsx';
import { useWindowSize } from 'react-use';

const About = () => {
  const { introduce, address, support, takecare } = footerData;
  const [expIntro, setExpIntro] = React.useState(false);
  const [expSupport, setExpSupport] = React.useState(false);
  const [expTakecare, setExpTakecare] = React.useState(false);

  const { width } = useWindowSize();
  React.useEffect(() => {
    if (width - 5 >= 960) {
      setExpIntro(true);
      setExpSupport(true);
      setExpTakecare(true);
    } else {
      setExpIntro(false);
      setExpSupport(false);
      setExpTakecare(false);
    }
  }, [width]);

  return (
    <Grid container justifyContent="center" className={styles.root}>
      <Grid item lg={12} md={11} sm={10} xs={11}>
        <Grid container justifyContent="center">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container justifyContent="space-evenly">
              <RiArrowDownSLine
                className={clsx(styles.expandIcon, {
                  [styles.rotate]: expIntro,
                })}
                onClick={() => setExpIntro(!expIntro)}
              />
              <Grid item lg={5} md={5} sm={6} xs={6} className={styles.box}>
                <Typography variant="h6">{introduce.title}</Typography>
                <div
                  className={clsx(styles.content, {
                    [styles.close]: !expIntro,
                  })}
                >
                  <Typography variant="body2">
                    {introduce.description}
                  </Typography>
                </div>
              </Grid>
              <Grid item lg={5} md={5} sm={6} xs={6} className={styles.box}>
                <Typography variant="h6"> </Typography>
                <div
                  className={clsx(styles.content, {
                    [styles.close]: !expIntro,
                  })}
                >
                  <Typography variant="body2">
                    <span>Địa chỉ: </span>
                    {address.address}
                  </Typography>
                  <Typography variant="body2">
                    <span>Điện thoại: </span>
                    {address.hotline}
                  </Typography>
                  <Typography variant="body2">
                    <span>Email: </span>
                    {address.email}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container justifyContent="space-evenly">
              <Grid item lg={5} md={5} sm={12} xs={12} className={styles.box}>
                <Typography variant="h6">{support.title}</Typography>
                <RiArrowDownSLine
                  className={clsx(styles.expandIcon, {
                    [styles.rotate]: expSupport,
                  })}
                  onClick={() => setExpSupport(!expSupport)}
                />
                <div
                  className={clsx(styles.content, {
                    [styles.close]: !expSupport,
                  })}
                >
                  {support.items.map((it, idx) => (
                    <Link href="/" key={idx}>
                      <Typography variant="body2" className={styles.link}>
                        <GoPrimitiveDot className={styles.dot} />
                        {it.text}
                      </Typography>
                    </Link>
                  ))}
                </div>
              </Grid>
              <Grid item lg={5} md={5} sm={12} xs={12} className={styles.box}>
                <Typography variant="h6">{takecare.title}</Typography>
                <RiArrowDownSLine
                  className={clsx(styles.expandIcon, {
                    [styles.rotate]: expTakecare,
                  })}
                  onClick={() => setExpTakecare(!expTakecare)}
                />
                <div
                  className={clsx(styles.content, {
                    [styles.close]: !expTakecare,
                  })}
                >
                  <div className={styles.inTouch}>
                    <FiPhoneCall className={styles.iconCall} />
                    <div className={styles.infor}>
                      <Typography variant="body2" className={styles.phone}>
                        {takecare.phone}
                      </Typography>
                      <Typography variant="body2" className={styles.email}>
                        {takecare.email}
                      </Typography>
                    </div>
                  </div>
                  <Typography variant="h6">{takecare.connect}</Typography>
                  <div className={styles.socialMedia}>
                    <Link href="/" className={styles.icon}>
                      <TiSocialFacebook size={20} />
                    </Link>
                    <Link href="/" className={styles.icon}>
                      <IoLogoInstagram size={20} />
                    </Link>
                    <Link href="/" className={styles.icon}>
                      <Image src={Tiktok} width={20} height={20} />
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
