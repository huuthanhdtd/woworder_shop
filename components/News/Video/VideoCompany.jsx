import {
  CardMedia,
  Fade,
  Modal,
  Typography,
  Backdrop,
} from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import styles from './VideoCompany.module.scss';
import { BsCaretRightFill } from 'react-icons/bs';

const VideoCompany = ({ articles }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.boxVideo}>
      <Typography variant="h5">video</Typography>
      <CardMedia
        className={styles.thumbnail}
        image="https://www.novaland.com.vn/Data/Sites/1/News/8679/700x394/0214-3-1.jpeg"
        onClick={handleOpen}
      />
      <div>
        {articles.map((article, index) => (
          <Typography
            key={index}
            onClick={handleOpen}
            className={styles.linkVideo}
          >
            {article.attributes.title}
            <BsCaretRightFill style={{ position: 'absolute', bottom: 15 }} />
          </Typography>
        ))}
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        className={styles.modalVideo}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div
            // style={{
            //   width: 700,
            //   height: 400,
            //   background: "crimson",
            //   margin: "auto",
            //   marginTop: 100,
            // }}
            className={styles.videoYoutube}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/WAluUcSz2h0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default VideoCompany;