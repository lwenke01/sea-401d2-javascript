module.exports = (mongoose, models) => {
  let hatSchema = mongoose.Schema({
    color: String,
    type: String
  })  
  let Hat = mongoose.model('Hat', hatSchema)
  models.Hat = Hat
}
