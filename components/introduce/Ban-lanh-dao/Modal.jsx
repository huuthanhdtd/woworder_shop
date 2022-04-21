import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: '80%',
    maxHeight: '90%',
  },
  desc: {
    textAlign: 'justify',
  },
}));

export default function TransitionsModal({
  setOpenModal,
  openModal,
  img,
  name,
  Education,
  position,
  specialized,
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
          <div
            className={classes.paper}
            style={{ overflowX: 'hidden', overflowY: 'auto' }}
          >
            <Grid container spacing={2} className={classes.detail}>
              <Grid item sm={2}>
                <img src={img} alt="" />
              </Grid>
              <Grid item sm={10} className={classes.desc}>
                <p>{name}</p>
                <p>{position}</p>
                <ul>
                  {Education &&
                    Education.map((data, index) => <li key={index}>{data}</li>)}
                </ul>
                <p>{specialized}</p>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
