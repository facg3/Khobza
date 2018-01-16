BEGIN;
 DROP TABLE IF EXISTS appusers, products, orders, suggestions CASCADE;
CREATE TABLE appusers (
  id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL,
   mobile INTEGER NOT NULL,
   order_count INTEGER NOT NULL,
   money_paid INTEGER NOT NULL,
   banned BOOLEAN NOT NULL
);


CREATE TABLE products  (
  id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL,
    url number (100) NOT NULL,
    price INTEGER NOT NULL,
    description VARCHAR(200) NOT NULL
);


CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
user_id FOREIGN KEY REFERENCES users(id),
count INTEGER NOT NULL,
productss_id FOREIGN KEY REFERENCES products(id),
notes   VARCHAR(250) NOT NULL
);

CREATE TABLE suggestions (
  id SERIAL PRIMARY KEY,
  user_id FOREIGN KEY REFERENCES users(id),
  suggestion VARCHAR(250) NOT NULL,
);
COMMIT;
