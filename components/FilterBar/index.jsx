import React from 'react';
import styles from 'styles.module.scss';

const FilterBar = () => {
  const [isOrder, setOrder] = React.useState(null);

  const handleOrder = useCallback((type) => {
    setOrder(type.name);
  }, []);

  const dataFilter = React.useMemo(() => {
    return filteredResize?.slice(0 + perPage * (page - 1), perPage * page);
  }, [page, checked.length]);

  const handleChangePage = React.useCallback((e) => {
    if (e === 'prev') {
      setPage((prev) => prev - 1);
    } else if (e === 'next') {
      setPage((prev) => prev + 1);
    }
  }, []);
  const totalPage = Math.ceil(filteredResize.length / perPage);
  return (
    <div className={styles.boxOrder}>
      <div className={styles.orderBtn}>
        <Typography variant="h6">Sắp xếp theo</Typography>
        {orderButton.map((it, idx) => (
          <Button
            key={idx}
            className={clsx(styles.button, {
              [styles.active]: isOrder === it.name,
            })}
            onClick={() => handleOrder(it)}
          >
            {it.name}
          </Button>
        ))}
        <SelectList />
      </div>
      <div className={styles.selectPage}>
        <Typography variant="body2">
          {page}/{totalPage}
        </Typography>
        <Button
          disabled={page === 1 ? true : false}
          className={styles.button}
          onClick={() => handleChangePage('prev')}
        >
          <RiArrowLeftSLine size={20} />
        </Button>
        <Button
          disabled={page === totalPage ? true : false}
          className={styles.button}
          onClick={() => handleChangePage('next')}
        >
          <RiArrowRightSLine size={20} />
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
