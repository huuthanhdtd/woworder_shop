import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import { footerData } from '../../constants/commonData';
import styles from './aboutStyles.module.scss';
import { GoPrimitiveDot } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { TiSocialFacebook } from 'react-icons/ti';
import { IoLogoInstagram } from 'react-icons/io';
import Image from 'next/image';
import Tiktok from '../../assets/image/tiktok.svg';

const About = () => {
  const { introduce, address, support, takecare } = footerData;
  return (
    <Grid container justifyContent="center" className={styles.root}>
      <Grid item lg={12}>
        <Grid container>
          <Grid item lg={6}>
            <Grid container justifyContent="space-evenly">
              <Grid item lg={5} className={styles.box}>
                <Typography variant="h6">{introduce.title}</Typography>
                <Typography variant="body2">{introduce.description}</Typography>
              </Grid>
              <Grid item lg={5} className={styles.box}>
                <Typography variant="h6"> </Typography>
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
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Grid container justifyContent="space-evenly">
              <Grid item lg={5} className={styles.box}>
                <Typography variant="h6">{support.title}</Typography>
                {support.items.map((it, idx) => (
                  <Link href="/" key={idx}>
                    <Typography variant="body2">
                      <GoPrimitiveDot className={styles.dot} />
                      {it.text}
                    </Typography>
                  </Link>
                ))}
              </Grid>
              <Grid item lg={5} className={styles.box}>
                <Typography variant="h6">{takecare.title}</Typography>
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
