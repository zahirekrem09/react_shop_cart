# Build ECommerce Shopping Cart by React & Redux

## What you’ll learn

- Design Shopping Cart Using HTML and CSS
- Implement React Components For Product List, Filter, Cart
- Managing Component State using Redux, React-Redux and - Redux-Thunk
- Creating Animations Using React-Reveal and Add Routes using React-Routers
- Build Backend using Node, Express, MongoDB and Mongoose




## Table Of Content

1. React

   1. Products Component
      1. Create data.json {products:[{_id, title, ...}]
      2. Update App.js to import data.json
      3. Create components/Products.js component
   2. Filter Component
      1. Create components/Filter.js
      2. Add it above Products component in App.js
      3. Update Filter.js render
      4.  App.js
      5.  Add Filter Component
   3. Cart Component
      1. Set Active Task Management Spreadsheet
      2. Product.js
      3. App.js
      4. Create addToCart(product)
      5. Slice, Check product existance, add to cartitems
      6. Cart.js
      7.  index.css
    
   4. Add Modal and Animation
      1. Set Active Task Management Spreadsheet
      2. Create branch animation-modal
      3. Show Animation
      4. Install react-reveal
      5. Create fade effect from bottom for products
      6. Create fade left for add to cart
      7. Create fade right for show checkout form
      8. Open Modal by click on product image
      9. Install react-modal
      10. Products.js
      11. Import Modal
      12. Set state for product to null
      13. Define openModal and closeModal
      14. Show Modal if product exist
      15. Create Modal
      16. Create zoom effect for modal
      17. index.css
      18. Style Product Details

2. Node.JS
   1. Create Products Backend
      1. Install nodemon globally
      2. Add server.js
      3. Install express body-parser mongoose shortid
      4. Install MongoDB
      5. app = express()
      6. app.use(bodyParser.json())
      7. mongoose.connect()
      8. create Product model
      9. app.post("/api.products")
      10. route.get("/api/products")
      11. route.delete("/api/products/:id")

3. Redux
   1. Add Redux
      1. npm install redux react-redux redux-thunk
      2. create types
      3. types.js
      4. actions/productActions.js
      5.  create reducers
      6.  reducers/productReducers.js
      7.  create store
      8.  store.js
      9.  import redux
      10. combine reducers
      11. Use store
      12. App.js
      13. import store
      14. wrap all in Provider
      15. connect products
      16. components/Products.js
      17. connect to store
      18. import fetchProducts
      19. fetch products on did mount
      20. package.json
      21. set proxy to http://127.0.0.1:5000
      22. npm run server
      23. check products list
   2. Add Redux To Filter
      1. actions/productActions.js
      2. create filterProducts
      3. create sortProducts
      4.  reducers/productReducers.js
      5.  Filter.js
      6.  App.js
      7.  remove Filter props
   3. Add Redux To Cart

      1. actions/cartActions.js
      2. create addToCart
      3. create removeFromCart
      4. reducers/cartReducers.js
      5.  Cart.js
      6.  Product.js
      7.  App.js
      8.  remove Cart props
      9.  store.js
      10. set initial cartItems to localStorage

4. Advanced Topics
   1. Create Order
      1. Backend
      2. server.js
      3. create order modal
      4. get /api/orders
      5. post /api/orders
      6. delete /api/orders/:id
      7. Frontend
      8. create types
      9. types.js
      10. actions/orderActions.js
      11. create reducers
      12. reducers/orderReducers.js
      13. Update Cart Component
      14. components/Cart.js

   2. Manage Orders
      1. Add new page
      2. Install react-router-dom
      3. App.js
      4. Import BrowserRouter, Route, Link

      5. Route path="/admin" component={AdminScreen}
      6. Route path="/" exact={true} component={HomeScreen}
      7. HomeScreen.js
      8.  <Filter /> <Products /> <Cart />
      9.  AdminScreen.js
      10. <Orders />
      11. components/Orders.js
      12. Backend
      13. server.js
      14. app.get("/api/orders")
      15. app.delete("/api/orders/:id")
      16. Frontend
      17. types.js
      18. actions/orderActions.js
      19. fetchOrders()
      20. reducers/orderReducers.js
      21. components/Orders.js
      22. table orders
      23. index.css


