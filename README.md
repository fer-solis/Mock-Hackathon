# Hacking Challenge 
### Boutique, Fashion & Clothes 
#### Digital Retail challenge


The system described below is the one required to achieve our objectives as a startup fashion company, it must provide capabilities that allow our customers to find, select and view details of our products and share them in their social media networks. 

On the other hand this system must allow our employees to create, update, and delete products as well create, update and delete promotions for discounts only. 

Lastly an analytics module is required to see most visited products from the catalog.

This document along with its references provides a complete description of the required system capabilities. It also includes some expectations of the design for the pages to be developed. 

Styles are not included in the pages below it is up to the squads to give some beauty to the system.

Some of the screens/figures may include generic information but at the end such information is essentially equal from the actual ones.

## Índice

* [1. System Home Page](#1-system-home-page)
* [2. List of promotions page](#2-list-of-promotions-page)
* [3. List of categories page](#3-list-of-categories-page)
* [4. List of products page](#4-list-of-products-page)
* [5. Analytics page](#5-analytics-page)
* [6. Stack of Technologies](#6-stack-of-technologies)
------------
## 1. System Home Page

This is the expected home page for the system, it’s meant for public access and no login is required to see all the information in it.

Detailed description:

##### HEADER
- Picture Logo, it can be created by the squad
- Login button should display a simple modal window or redirect to an entire login view (it’s up to the teams), only username and password are required to perform the login operation via API. There’s is only one valid login: <br>
**username: “admin”** <br>
**password: “Adm1n@2020”**
- Welcome label (displays name of the user currently logged in).
- Shopping cart button should display a simple modal window or redirect to an entire cart view (it’s up to the teams), into this view must display the items that has been selected by the customer and it must allow to complete the purchase (by invoking an API passing the list of products along with the paymentMethod “Cash”, as result this API will provide the order Id and shipping address.

##### CONTENT AREA 
- Link “see all promotions” must redirect to the list of promotions
- Search product box searches products by description and redirects to the list of products.
- Always 2 random promotions are presented, one as main (taller height) and the second as secondary (less height)
- Link “see all products” must redirect to the list of categories
- Categories cards must display 3 random categories from the API of Categories, when a customer hits a category then the list of products corresponding to that category must be displayed.

##### FOOTER
- It only displays a copyright text and it’s always visible at the very bottom of the window even if the content is not large enough.

------------

## 2. List of promotions page
- It must display all the existing promotions with no pagination
- Social media buttons will include the image, product name and price in the new post construction.
- Buttons for “Add new Promotions”, “Edit”, “Delete” are only available when user admin is logged in.
- When admin hits Add New Promotion, Edit or Delete it should be redirected to the promotion page:
  - When a new promotion is created, raise a new post with the new promotion on the Facebook’s official page of the store.
  - Delete button is only available when the admin is modifying an existing promotion, this page is only accessible by the admin user.

------------

## 3. List of categories page
- It must display all the existing categories with no pagination.
- When customer hits the category picture it must be routed to the list of products related to that category
- Buttons for “Add new Category”, “Edit”, “Delete” are only available when user admin is logged in.
- When admin hits Add New Category, Edit or Delete it should be redirected to the category page:
  - Delete button is only available when admin is modifying an existing category, this page is only accessible by the admin user.
  - Deletion of category won’t be executed if child products still exists.
  - Only admin user can access this page

------------

## 4. List of products page
- It must display existing products in pages of 9 items and any pagination technique is allowed such as infinity scroll or by page number buttons. 
- Buttons for “Add new Product”, “Edit”, “Delete” are only available when user admin is logged in.
- When customer hits the shopping car button a modal window will be displayed with the product name and the fields quantity, color and size (if applicable) and the button “Add to cart”.
  - Also update the counter of the shopping cart icon located at the header.
  - The application will manage locally the shopping cart until customer complete the transaction.
- When the admin hits “Add New Product”, “Edit” or “Delete” it should be redirected to the product page:
  - When a new product is created, raise a new post with the new product on the Facebook’s official page of the store.
  - Delete button is only available when admin is modifying an existing product, this page is only accessible by the admin user.
  - Only admin user can access this page
- When customer hits a product (image or product name), the single product view will be displayed.
  - Social media buttons will include the image, product name and price in the new post construction.

------------
## 5. Analytics page
This page is only accessible when admin user is logged in.
- Retrieve the list of most viewed products from the Analytics API
- Edit product link should redirect to the create product page and load the product to be modified.

------------
## 6. Stack of Technologies
It's recommended to use the new frameworks based on component development such as React or Angular.

It's also recommended to implement a state management system for the data and shopping cart.

One of the requirements of the MVP is to create a responsive application so you can implement bootstrap or flexbox or whatever framework for UI responsiveness.

The only required browser to make the project work is Chrome.

Use github for your code repository.

It's acceptable to present your system running locally however if you are in good shape to deploy then talk to your mentor to check the available infrastructure for deployment.
