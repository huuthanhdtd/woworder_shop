import React, { useEffect, useState } from 'react';
import styles from './Banner.module.scss';
import { CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import { autoCount } from '../../lib/Count';
import { getMediaFollowSize } from '../../lib/media';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ReactMarkdown from 'react-markdown';

function Banner({
  bannerRef,
  project,
  changeBanner,
  bannerProject,
  urlImageResize,
  focusBanner,
}) {
  const [budgetLand, setBudgetLand] = useState(0);
  const [product, setProduct] = useState(0);
  const [projectsTotal, setProjectsTotal] = useState(0);
  const [provinces, setProvinces] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [resProducts, setRestProducts] = useState(0);
  const [areaProject, setAreaProject] = useState(0);
  const [customerProject, setCustomerProject] = useState(0);
  const [productsSold, setProductsSold] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    if (focusBanner) {
      setTimeout(() => {
        //Budget Land
        autoCount(bannerProject.attributes.acreage, 10, 9, setBudgetLand);
        //Products
        autoCount(bannerProject.attributes.product, 10, 23, setProduct);
        //Projects
        autoCount(bannerProject.attributes.Project, 100, 2, setProjectsTotal);
        //Provinces
        autoCount(bannerProject.attributes.province, 100, 1, setProvinces);
        //Customers
        autoCount(bannerProject.attributes.customer, 1, 15, setCustomers);
        if (project) {
          //Rest product
          autoCount(
            project.attributes.total_product - project.attributes.products_sold,
            80,
            project.attributes.total_product -
              project.attributes.products_sold >
              50
              ? 6
              : 1,
            setRestProducts
          );
          //Area project
          autoCount(
            project.attributes.acreage,
            project.attributes.acreage > 40 ? 80 : 200,
            1,
            setAreaProject
          );
          //Customer Detail Project
          autoCount(
            project.attributes.customer,
            project.attributes.customer > 100 ? 20 : 50,
            1,
            setCustomerProject
          );
          //Products Sold Detail Project
          autoCount(
            project.attributes.products_sold,
            5,
            project.attributes.products_sold > 400 ? 9 : 1,
            setProductsSold
          );
          //Total Products Detail Project
          autoCount(
            project.attributes.total_product,
            5,
            project.attributes.products_sold > 400 ? 11 : 1,
            setTotalProducts
          );
        }
      }, 800);
      return () => clearTimeout();
    } else {
      setBudgetLand(0);
      setProduct(0);
      setProjectsTotal(0);
      setProvinces(0);
      setCustomers(0);
      setRestProducts(0);
      setAreaProject(0);
      setCustomerProject(0);
      setProductsSold(0);
      setTotalProducts(0);
    }
  }, [focusBanner]);
  return (
    <>
      <div className={styles.cover}>
        <CardMedia
          className={styles.image}
          image={
            urlImageResize
              ? getMediaFollowSize(urlImageResize)
              : 'errorImage.jpg'
          }
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={styles.container}
            ref={bannerRef}
          >
            <Grid
              item
              sm={6}
              xs={7}
              className={styles.content}
              data-aos="fade-right"
            >
              {project ? (
                <>
                  <Typography variant="h4">
                    {project.attributes.title}
                  </Typography>

                  <Typography variant="body2">
                    {project.attributes.description}
                  </Typography>
                </>
              ) : (
                <div className={styles.markdown}>
                  <ReactMarkdown
                    source={bannerProject.attributes.content}
                    escapeHtml={false}
                  />
                </div>
              )}
            </Grid>
            <Grid
              item
              sm={6}
              xs={5}
              className={styles.detail}
              data-aos="fade-left"
            >
              <div className={styles.left}>
                <div className={styles.item}>
                  <Typography variant="h3">
                    {changeBanner ? `${areaProject} ha` : `${budgetLand} ha`}
                  </Typography>
                  <Typography variant="body2">
                    {changeBanner ? 'Diện tích' : 'Quỹ đất'}
                  </Typography>
                  <Divider className={styles.divider} />
                </div>
                <div className={styles.item}>
                  <Typography variant="h3">
                    {changeBanner ? customerProject : product}
                  </Typography>
                  <Typography variant="body2">
                    {changeBanner ? 'Khách hàng phục vụ' : 'Đơn vị sản phẩm'}
                  </Typography>
                  <Divider className={styles.divider} />
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.item}>
                  <Typography variant="h3">
                    {changeBanner ? totalProducts : projectsTotal}
                  </Typography>
                  <Typography variant="body2">
                    {changeBanner ? 'Tổng sản phẩm' : 'Dự án đã triển khai'}
                  </Typography>
                  <Divider className={styles.divider} />
                </div>
                <div className={styles.item}>
                  <Typography variant="h3">
                    {changeBanner ? productsSold : provinces}
                  </Typography>
                  <Typography variant="body2">
                    {changeBanner ? 'Sản phẩm đã bán' : 'Tỉnh thành'}
                  </Typography>
                  <Divider className={styles.divider} />
                </div>
                <div className={styles.item}>
                  <Typography variant="h3">
                    {changeBanner ? resProducts : `${customers}`}
                  </Typography>
                  <Typography variant="body2">
                    {changeBanner ? 'Sản phẩm còn lại' : 'Khánh hàng phục vụ'}
                  </Typography>
                  <Divider className={styles.divider} />
                </div>
              </div>
            </Grid>
          </Grid>
        </CardMedia>
      </div>
    </>
  );
}

export default Banner;
