const queries = require('../model/query/queries');
const cart = (req, res) => {
  const { id } = req.user;
  queries.cart(id, (err, data) => {
    if (err) return res.render('error', {
      err: err
    });
    queries.total(id, (err, totalprice) => {
      if (err) return res.render('error', {
        err: err
      });
      if (totalprice[0].sum !== null) {
        return res.status(200).render('cart', {
          data: data,
          totalprice: totalprice[0].sum,
          colorCart:true
        });
      } else {
        return res.status(200).render('cart', {
          data: data,
          totalprice: '0',
          colorCart:true
        });
      }

    })
  });
}

module.exports = cart
