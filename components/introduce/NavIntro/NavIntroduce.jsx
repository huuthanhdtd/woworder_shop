// import React, { useState, useContext } from 'react';
// import Link from 'next/Link';
// import styles from './NavIntroduce.module.scss';
// import MenuIcon from '@material-ui/icons/Menu';
// import { AiOutlineClose } from 'react-icons/ai';
// import nav from '../../../constants/navsBar.json';
// import { Context } from '../../../constants/Context';
// import { Container } from '@material-ui/core';
// import clsx from 'clsx';

// export default function NavIntroduce() {
//   const [isMenu, setIsMenu] = useState(false);
//   const { introduceTpye, setIntroduceType } = useContext(Context);
//   const handleClickNav = (idNav) => {
//     setIntroduceType(idNav);
//     setIsMenu(false);
//   };
//   const handleClose = () => setIsMenu(false);
//   return (
//     <div className={styles.Main}>
//       <div
//         className={clsx(styles.NavIntroduce, {
//           [styles.show]: isMenu === true,
//         })}
//       >
//         <Container className={styles.ModuleContent}>
//           {nav[1].list &&
//             nav[1].list.map((data, index) => (
//               <Link href={`#${data.idNav}`} key={index}>
//                 <li
//                   onClick={() => handleClickNav(data.idNav)}
//                   className={clsx({
//                     [styles.active]: introduceTpye === data.idNav,
//                   })}
//                 >
//                   {data.title}
//                 </li>
//               </Link>
//             ))}
//           <div className={styles.close} onClick={handleClose}>
//             <AiOutlineClose />
//           </div>
//         </Container>
//       </div>
//       <div className={styles.btnWrapper} onClick={() => setIsMenu(true)}>
//         <div className={styles.btnNav}>
//           GIỚI THIỆU <MenuIcon />
//         </div>
//       </div>
//     </div>
//   );
// }
