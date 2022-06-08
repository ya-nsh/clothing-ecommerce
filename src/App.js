import './categories.styles.scss';

function App() {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl:
        'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl:
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    }
  ];

  return (
    <div className="categories-container">
      {categories.map(category => (
        <div key={category.id} className="category-container">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${category.imageUrl})`
            }}
          />
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
