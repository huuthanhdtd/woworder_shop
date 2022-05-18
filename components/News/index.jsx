import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import Link from 'next/link';
import { Pagination } from '@material-ui/lab';
import React, { useState, useEffect, useContext } from 'react';
import CardItem from './Card';
import styles from './NewsPage.module.scss';
import LayoutProject from './Layout';
import NavNews from '../../constants/navNews.json';
import { Context } from '../../constants/Context';
import clsx from 'clsx';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ModalVideo from '../ModalVideo/ModalVideo';
const firstIndex = 0;

function CategoryPage({ articles, title, image }) {
  const {
    type,
    handleTypeProjects,
    isFilter,
    isActive,
    openVideo,
    setOpenVideo,
    contentVideo,
    setContentVideo,
  } = useContext(Context);
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isSelect, setSelect] = useState(1);
  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
    setData(articles.slice(firstIndex, pageSize));
    if (type !== null)
      setData(
        articles.filter((article) => article.attributes.category === type)
      );
  }, [articles, type, data]);
  const handleChange = (event, value) => {
    setPage(value);
    setData(
      articles.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    );
  };
  return (
    <>
      <ModalVideo contentVideo={contentVideo} />
      <LayoutProject image={image}>
        <Grid container justifyContent="center" className={styles.container}>
          <Grid item md={10} sm={11} xs={11}>
            <Link href="/tin-tuc">
              <Typography
                variant="h5"
                className={styles.caption}
                data-aos="fade-right"
                data-aos-duration="500"
              >
                {title}
              </Typography>
            </Link>
            <FormControl
              variant="outlined"
              size="small"
              className={styles.formControl}
              data-aos="fade-up"
            >
              <Select
                labelId="select-outlined-label"
                value={isSelect}
                onChange={handleSelect}
              >
                {NavNews.map((item) => (
                  <MenuItem
                    key={item.id}
                    value={item.id}
                    onClick={() => handleTypeProjects(item.type, item.id)}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div
              className={styles.categories}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              {NavNews.map((item) => (
                <Button
                  key={item.id}
                  className={clsx(styles.buttonType, {
                    [styles.active]: isActive == item.type,
                  })}
                  onClick={() => handleTypeProjects(item.type)}
                >
                  <Typography variant="h6">{item.title}</Typography>
                </Button>
              ))}
            </div>
            <Grid
              container
              justifyContent="center"
              className={styles.projectList}
            >
              {isFilter && type !== null
                ? data
                    .filter((article) => article.attributes.category === type)
                    .map((article, index) => (
                      <CardItem
                        dataAos="fade-up"
                        dataAosDelay={`${index}00`}
                        key={article.id}
                        article={article}
                        setOpenVideo={setOpenVideo}
                        setContentVideo={setContentVideo}
                        type={type}
                      />
                    ))
                : data.map((article, index) => (
                    <CardItem
                      dataAos="fade-up"
                      dataAosDelay={`${index}00`}
                      key={article.id}
                      article={article}
                      setOpenVideo={setOpenVideo}
                      setContentVideo={setContentVideo}
                      type={type}
                    />
                  ))}
            </Grid>
            <div className={styles.pagination} data-aos="fade-zoom-in">
              <Pagination
                color="primary"
                count={
                  isFilter && type !== null
                    ? Math.ceil(
                        data.filter(
                          (article) => article.attributes.category === type
                        ).length / pageSize
                      )
                    : Math.ceil(articles.length / pageSize)
                }
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </div>
          </Grid>
        </Grid>
      </LayoutProject>
    </>
  );
}

export default CategoryPage;
