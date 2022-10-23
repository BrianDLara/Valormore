const db = require('../db')
const Review = require('../models/review')
const Product = require('../models/product')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const leggings = await Product.find({ product_name: 'Fleeced Leggings' })
  const pen = await Product.find({ product_name: 'Crystal Pen' })
  const reviews = [
    {
      title: 'Good quality at a great price',
      description:
        "I went with a large based on reviews. Glad I did. Putting these leggings on reminded me a bit of the spanx gyrations I used to endure as part of dressing for meetings. Been a while since that's had to happen with the suspension of business travel. Once on, these are comfortable and have a nice shaping effect. The fabric is a great winter weight, soft inside and good looking matte finish. The seams appear to be reinforced and overall construction is good. I'm happy with this purchase.",
      product_id: leggings[0]._id
    },
    {
      title: 'A Must Have!',
      description: `Y’all, I am OBSESSED with these fleece lined leggings! They’re not super thick, so maybe not for freezing weather, but great for Florida fall/winters. I’m also a bit of a wimp when it comes to cold weather too, so take that in to consideration lol. I absolutely love these and need to get more. They’re super comfortable and so soft; normal leggings don’t even feel the same anymore! They’re even long enough for my long legs, being 5’10”.`,
      product_id: leggings[0]._id
    },
    {
      title: 'This kit has it all',
      description: `This kit is a great starter kit for using glass dip pens. Because it has three pens, it provides just the right writing thickness for any job or a variety for one job. The glass pen rest keeps your work surface clean and the wide variety of ink colors should suit any need. The pens are easy to use and work great. I love this buy.`,
      product_id: pen[0]._id
    }
  ]

  await Review.insertMany(reviews)
  console.log('Created some reviews!')
}
const run = async () => {
  await main()
  db.close()
}

run()
