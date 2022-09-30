import Link from 'next/link';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Typography } from '@material-ui/core';

const NotFound = () => {
  const styles = {
    container: {
      height: ' 80vh',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    desc: { color: 'var(--primary-color-)' },
    link: { cursor: 'pointer', color: 'var(--hover-color-)' },
    icon: {
      color: 'var(--hover-color-)',
      fontSize: '25px',
      marginRight: 5,
    },
  };

  return (
    <>
      <div style={styles.container}>
        <h3 style={styles.desc}>404 | Không tìm thấy trang này.</h3>
        <Link href="/">
          <Typography style={styles.link}>
            <BsFillArrowLeftCircleFill style={styles.icon} />
            Trang chủ
          </Typography>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
