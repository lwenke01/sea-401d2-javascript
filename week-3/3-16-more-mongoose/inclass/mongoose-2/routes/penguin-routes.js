module.exports = (router, models) => {
  let Penguin = models.Penguin

  router.route('/penguins')
  .get((req, res) => {
    Penguin
  })
  .post((req, res) => {

  })
}
