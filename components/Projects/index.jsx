import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import CardProject from './Card/CardItem';
import styles from './Projects.module.scss';
import LayoutProject from './Layout';
import NavProject from '../../constants/navProject.json';
import { Context } from '../../constants/Context';
import { reverse } from '../../lib/reverse';
import clsx from 'clsx';
import Aos from 'aos';
import 'aos/dist/aos.css';

const firstIndex = 0;

function ProjectsPage({ projects, bannerProject, image }) {
  const { type, handleTypeProjects, isFilter, isActive } = useContext(Context);
  const [pageSize, setPageSize] = useState(6);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isSelect, setSelect] = useState(1);

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });

    const res = reverse(projects);
    setData(res.slice(firstIndex, pageSize));

    if (type !== null)
      setData(res.filter((project) => project.attributes.type === type));
  }, [projects, type]);

  const handleChange = (event, value) => {
    setPage(value);
    setData(
      projects.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    );
  };
  return (
    <LayoutProject bannerProject={bannerProject} image={image}>
      <Grid container justifyContent="center" className={styles.container}>
        <Grid item md={10} sm={11} xs={11}>
          <Link href="/du-an">
            <Typography
              variant="h5"
              className={styles.caption}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Dự án {type}
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
              {NavProject.map((item) => (
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
          <div className={styles.categories} data-aos="fade-up">
            {NavProject.map((item) => (
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
                  .filter((project) => project.attributes.type === type)
                  .map((project) => (
                    <CardProject
                      dataAos="fade-up"
                      key={project.id}
                      project={project}
                    />
                  ))
              : data.map((project) => (
                  <CardProject
                    dataAos="fade-up"
                    key={project.id}
                    project={project}
                  />
                ))}
          </Grid>
          <div className={styles.pagination} data-aos="fade-zoom-in">
            <Pagination
              color="primary"
              count={
                isFilter && type !== null
                  ? Math.ceil(
                      data.filter((project) => project.attributes.type === type)
                        .length / pageSize
                    )
                  : Math.ceil(projects.length / pageSize)
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
  );
}

export default ProjectsPage;
