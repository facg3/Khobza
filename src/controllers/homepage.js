const queries = require('../model/query/queries');
const homepage = (req, res) => {
  queries.GetProduct((err, products) => {
    if (err) {
      res.redirect("/error");
    } else {
      res.render('homepage', {
        products: products
      });
    }
  });
}
const POSThomepage = (req, res) => {
  const {
    quantity,
    idproduct
  } = req.body;
  const quantityNo = quantity ? quantity : 1;
  queries.makeOrder(req.user.id, idproduct, quantityNo, (err, data) => {
    if (err) return res.render("error", {
      error: err.toString(),
      layout: false
    });

    queries.GetProduct((err, products) => {
      if (err) return res.redirect("/error");
      res.status(200).render('homepage', {
        products: products,
        icon: true
      });
    });
  });

}

module.exports = {
  homepage,
  POSThomepage
}
