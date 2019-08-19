# express-intro-exercise

## Objective

  - Create an HTTP web wrapper around a set of model code.

# Setup

Follow the instructions for setting up a new project from the
[mehn-template-project readme](../mehn-template-project/readme.md).

NOTE: be sure that `server.js` uses the `express.json()` middleware and _not_
the `express.urlencoded()` middleware.


# Create API

1.  Copy the `models/template.js` to `models/shops.js`
2.  In `models/shops.js` create a set of functions to perform the
    following:

| function name | parameters    |
| :------------ | :------------ |
| getShops      | n/a           |
| getShop       | `index`       |
| createShop    | n/a           |
| addShop       | `newShop`     |
| deleteShop    | `index`       |
| updateShop    | `index, shop` |

Each coffee shop should have the following schema:

  - name (string)
  - employees (number)
  - currentlyOpen (string)

# Create Web Server

1.  Copy the `controllers/template.js` file to `controllers/shops.js`
2.  In `controllers/shops.js` create as set of HTTP request handlers to
    do the following:

| path            | Method | model function to call |
| :-------------- | :----- | :--------------------- |
| `/shops`        | GET    | `getShops`             |
| `/shops/:index` | GET    | `getShop`              |
| `/shops/new`    | GET    | `createShop`           |
| `/shops`        | POST   | `addShop`              |
| `/shops/:index` | DELETE | `deleteShop`           |
| `/shops/:index` | PUT    | `updateShop`           |

# Strech Goals

1.  Add some more methods to your model that modify the data inside of
    the coffee shop (such as adding a menu item or changing the name)
    and write an HTTP request handler around that.
2.  create an other model called employees. Create a controller for
    these employees
3.  add a key to the employees model called `shopIndex`. Add a method
    that will get all employees given the value of `shopIndex`.
4.  Write an controller function that uses the function from the
    previous step.
