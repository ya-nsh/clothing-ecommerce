import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h2 className="my-10">
      <span className="title font-bold text-2xl">{title.toUpperCase()}</span>
    </h2>
    <div className="preview">
      {products
        .filter((_, idx) => idx < 4)
        .map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
