import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import { Button, Grid } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import Image from '../image';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: '80%',
    maxHeight: '80%',
  },
  desc: {
    textAlign: 'justify',
  },
  detail: {
    overflowY: 'scroll',
    height: 500,
  },
}));

export default function TransitionsModal({ setOpenModal, openModal, maps }) {
  const classes = useStyles();
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div
            className={classes.paper}
            style={{
              overflow: 'hidden',
              position: 'relative',
              paddingTop: '47px',
            }}
          >
            <Button
              onClick={handleClose}
              style={{
                position: 'absolute',
                right: '0',
                top: '0',
                background: '#fff',
              }}
            >
              <CloseIcon />
            </Button>
            {maps &&
              maps.map((data, index) => (
                <Grid
                  container
                  spacing={2}
                  className={classes.detail}
                  key={index}
                >
                  <Grid item sm={3} md={2} xs={12}>
                    {<Image image={data.attributes.image} />}
                  </Grid>
                  <Grid item sm={9} md={10} xs={12} className={classes.desc}>
                    <p>{data.attributes.title}</p>
                    <ReactMarkdown
                      source={data.attributes.content}
                      escapeHtml={false}
                    />
                  </Grid>
                </Grid>
              ))}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
