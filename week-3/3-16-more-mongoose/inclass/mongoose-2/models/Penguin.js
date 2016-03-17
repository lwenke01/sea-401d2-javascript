module.exports = (mongoose, models) => {
  let penguinSchema = mongoose.Schema({
    name: String,
    hats: [{type: mongoose.Schema.Types.ObjectId, ref: 'Hat'}]
  })  
  let Penguin = mongoose.model('Penguin', penguinSchema)
  models.Penguin = Penguin
}
