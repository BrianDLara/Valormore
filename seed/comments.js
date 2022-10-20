const db = require('../db')
const Product = require('../models/product')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products = [
    {
      product_name: 'Crystal Pen',
      description:
        "Lets face it, if you are not a writer, you probably hate pens and pencils. Why should't writing be fun? With our Crystal Pen don't only bring your imagination back to life, but also your passion.",
      image: 'https://i.imgur.com/vrFsuS6.png'
    },
    {
      product_name: 'Moon Light',
      description: 'Calling all space lovers! This lamp is out of this world. ',
      image: 'https://i.imgur.com/G8U2zVR.jpg'
    },
    {
      product_name: 'Dog Flask',
      description: `Calling all dog lovers. Keep your furry friend hydrated anywhere you go.`,
      image: 'https://i.imgur.com/DVWruQu.jpg'
    },
    {
      product_name: 'Wireless Hair Curler',
      description: `If you like being a minimalist, and love efficiency, get yourself this hair curler. Keep your bathroom counter mess free from your usual long cords, and store it anywhere because of its compact size`,
      image: 'https://i.imgur.com/Qe5gwsX.jpg'
    },
    {
      product_name: 'Phone Soft Light',
      description: `Take professional like photos, with this portable soft light. Just clip it on your phone, that a selfie, and upload it so everyone can envy your photographer skills.`,
      image: 'https://i.imgur.com/QyILOmA.jpg'
    },
    {
      product_name: 'Fleeced Leggings',
      description: `Want to stay warm, but don't like to wear loose sweat pants? This leggings have a fleece inner lining that came keep you warm all day`,
      image: 'https://i.imgur.com/XCIoG28.jpg'
    }
  ]

  await Product.insertMany(products)
  console.log('Created some products!')
}
const run = async () => {
  await main()
  db.close()
}

run()
