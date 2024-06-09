# LavaPayments

## Introduction

LavaPayments is a JavaScript library designed to interact with the Lava API, facilitating the management of products, sales, and invoices. This library provides a simple interface to perform various operations such as retrieving products, sales data, and creating invoices.

## Table of Contents

-   [Introduction](#introduction)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Initialization](#initialization)
    -   [Methods](#methods)
-   [Features](#features)
-   [Dependencies](#dependencies)
-   [Configuration](#configuration)
-   [Examples](#examples)
-   [Troubleshooting](#troubleshooting)
-   [Contributors](#contributors)
-   [License](#license)

## Installation

To install LavaPayments, you need to have Node.js installed. You can then use npm or yarn to install the package.

```sh
npm install lava-payments
```

or

```sh
yarn add lava-payments
```

## Usage

### Initialization

To start using LavaPayments, you need to create an instance of the `LavaPayments` class by providing your API key.

```javascript
import LavaPayments from 'lava-payments'

const lavaPayments = new LavaPayments('your-api-key')
```

### Methods

#### `getProducts()`

Retrieves a list of products.

```javascript
const products = await lavaPayments.getProducts()
console.log(products)
```

or

```javascript
lavaPayments
    .getProducts()
    .then((products) => {
        console.log(products)
    })
    .catch((error) => {
        console.error(error)
    })
```

#### `getSales()`

Retrieves a list of sales.

```javascript
lavaPayments
    .getSales()
    .then((sales) => {
        console.log(sales)
    })
    .catch((error) => {
        console.error(error)
    })
```

#### `getProductSales(uuid)`

Retrieves sales information for a specific product using its UUID.

```javascript
lavaPayments
    .getProductSales('product-uuid')
    .then((sales) => {
        console.log(sales)
    })
    .catch((error) => {
        console.error(error)
    })
```

#### `getInvoice(id)`

Retrieves an invoice by its ID.

```javascript
lavaPayments
    .getInvoice('invoice-id')
    .then((invoice) => {
        console.log(invoice)
    })
    .catch((error) => {
        console.error(error)
    })
```

#### `createInvoice({ email, offerId, currency, buyerLanguage })`

Creates a new invoice. All fields are required.

```javascript
const invoiceData = {
    email: 'buyer@example.com',
    offerId: 'offer-id',
    currency: 'USD',
    buyerLanguage: 'en',
}

lavaPayments
    .createInvoice(invoiceData)
    .then((invoice) => {
        console.log(invoice)
    })
    .catch((error) => {
        console.error(error)
    })
```

## Features

-   Retrieve product information.
-   Retrieve sales information.
-   Retrieve specific product sales.
-   Retrieve invoice details.
-   Create new invoices.

## Dependencies

-   `node-fetch`: Used to make HTTP requests.

## Configuration

You need to configure the LavaPayments instance with your API key to authenticate your requests.

## Examples

See the [Usage](#usage) section for examples on how to use each method provided by LavaPayments.

## Troubleshooting

If you encounter issues, ensure that:

-   Your API key is correct and active.
-   The Lava API endpoint is reachable.
-   Required parameters are provided for each method.

## Contributors

-   https://github.com/merkuluf

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
