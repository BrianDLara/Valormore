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
      image: 'https://i.imgur.com/vrFsuS6.png',
      price: '$19.99',
      prevPrice: '$29.99',
      available: 23
    },
    {
      product_name: 'Moon Light',
      description: 'Calling all space lovers! This lamp is out of this world. ',
      image: 'https://i.imgur.com/G8U2zVR.jpg',
      price: '$49.99',
      prevPrice: '$59.99',
      available: 19
    },
    {
      product_name: 'Dog Flask',
      description: `Calling all dog lovers. Keep your furry friend hydrated anywhere you go.`,
      image: 'https://i.imgur.com/DVWruQu.jpg',
      price: '$14.99',
      prevPrice: '$19.99',
      available: 5
    },
    {
      product_name: 'Wireless Hair Curler',
      description: `If you like being a minimalist, and love efficiency, get yourself this hair curler. Keep your bathroom counter mess free from your usual long cords, and store it anywhere because of its compact size`,
      image: 'https://i.imgur.com/Qe5gwsX.jpg',
      price: '$69.99',
      prevPrice: '$89.99',
      available: 1
    },
    {
      product_name: 'Phone Soft Light',
      description: `Take professional like photos, with this portable soft light. Just clip it on your phone, that a selfie, and upload it so everyone can envy your photographer skills.`,
      image: 'https://i.imgur.com/QyILOmA.jpg',
      price: '$19.99',
      prevPrice: '$29.99',
      available: 27
    },
    {
      product_name: 'Fleeced Leggings',
      description: `Want to stay warm, but don't like to wear loose sweat pants? This leggings have a fleece inner lining that came keep you warm all day`,
      image: 'https://i.imgur.com/XCIoG28.jpg',
      price: '$29.99',
      prevPrice: '$39.99',
      available: 16
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
