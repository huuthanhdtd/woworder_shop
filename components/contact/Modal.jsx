import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Button } from '@material-ui/core';
import { GrFormClose } from 'react-icons/gr';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid green',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  paperH2: {
    margin: 'auto',
    color: 'green',
    fontWeight: 600,
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
  },
  icon: {
    margin: '10px auto',
  },
  paperP: {
    margin: '10px auto',
  },
  paperStrong: {
    color: 'green',
  },
  paperP2: {
    margin: '10px auto',
    color: 'rgba(32, 132, 25, 0.8)',
  },
}));

export default function TransitionsModal({
  setOpenModal,
  openModal,
  userName,
}) {
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
          <div className={classes.paper}>
            <Button
              onClick={handleClose}
              style={{ position: 'absolute', top: '0', right: '0px' }}
            >
              <GrFormClose style={{ width: '30px' }} />
            </Button>
            <h2 id="transition-modal-title" className={classes.paperH2}>
              Đã gửi thông tin liên hệ!
            </h2>
            <div className={classes.icon}>
              <CheckCircleIcon
                style={{
                  color: 'green',
                  fontSize: '100px',
                }}
              />
            </div>
            <p id="transition-modal-description" className={classes.paperP}>
              Cảm ơn bạn{' '}
              <strong className={classes.paperStrong}>{userName}</strong> đã
              cung cấp thông tin!!!!
            </p>
            <p id="transition-modal-description" className={classes.paperP2}>
              Chúng tôi sẽ liên hệ trong thời gian sớm nhất.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
