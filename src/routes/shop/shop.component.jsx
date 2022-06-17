import { useContext, Fragment } from 'react';
import ProductCard from '../../components/product-card/product-card.component';

import './shop.style.scss';

import { CategoriesContext } from '../../contexts/categories.context';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map(title => (
        <Fragment key={title}>
          <h2 className="font-bold my-10 underline">{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;
