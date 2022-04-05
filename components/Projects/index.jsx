import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core"
import { Pagination } from "@material-ui/lab"
import React, { useState, useEffect, useContext } from "react"
import CardProject from "./Card/CardItem"
import styles from "./Projects.module.scss"
import LayoutProject from "./Layout"
import NavProject from "../../constants/navProject.json"
import { Context } from "../../constants/Context"
import clsx from "clsx"
const firstIndex = 0

function ProjectsPage({ projects }) {
  const { type, handleTypeProjects, isFilter, isActive } = useContext(Context)
  const [pageSize, setPageSize] = useState(5)
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [isSelect, setSelect] = useState(1)

  const handleSelect = (event) => {
    setSelect(event.target.value)
  }

  useEffect(() => {
    const res = projects.sort(function (a, b) {
      return new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt)
    })
    setData(res)
    if (type !== null)
      setData(res.filter((project) => project.attributes.type === type))
  }, [projects, type])
  const handleChange = (event, value) => {
    setPage(value)
    setData(
      projects.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    )
  }
  return (
    <LayoutProject>
      <Grid container justifyContent="center" className={styles.container}>
        <Grid item md={10} sm={11} xs={11}>
          <Typography variant="h6" className={styles.caption}>
            Dự án {type}
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            className={styles.formControl}
          >
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
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
          <div className={styles.categories}>
            {NavProject.map((item) => (
              <Button
                key={item.id}
                className={clsx(styles.buttonType, {
                  [styles.active]: isActive == item.id,
                })}
                onClick={() => handleTypeProjects(item.type, item.id)}
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
                    <CardProject key={project.id} project={project} />
                  ))
              : data.map((project) => (
                  <CardProject key={project.id} project={project} />
                ))}
          </Grid>
          <div className={styles.pagination}>
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
  )
}

export default ProjectsPage
