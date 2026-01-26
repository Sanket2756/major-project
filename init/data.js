const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1611337765360-1fb5b41b69ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1729615220950-f5b403467b3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    "title": "Coastal Lighthouse Keeper's Cottage",
    "description": "Stay in a beautifully restored cottage adjacent to a historic lighthouse with breathtaking ocean views.",
    "image": {
      "filename": "listingimage_lighthouse",
      "url": "https://images.unsplash.com/photo-1708149901749-1e3a4fd45ae4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
    },
    "price": 450,
    "location": "Cornwall",
    "country": "United Kingdom"
  },
  {
    "title": "Alpine Cabin with Hot Tub",
    "description": "A rustic but luxurious cabin nestled in the mountains, perfect for skiing or summer hiking. Features a wood-fired hot tub.",
    "image": {
      "filename": "listingimage_cabin",
      "url": "https://images.unsplash.com/photo-1677526010352-825fbb221795?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
    },
    "price": 600,
    "location": "Chamonix",
    "country": "France"
  },
  {
    "title": "Floating River Houseboat",
    "description": "Wake up to the gentle sounds of the river in this charming and fully-equipped houseboat.",
    "image": {
      "filename": "listingimage_houseboat",
      "url": "https://images.unsplash.com/photo-1725006136539-46bef885df06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
    },
    "price": 280,
    "location": "Amsterdam",
    "country": "Netherlands"
  },
  {
    "title": "Modern City Loft Penthouse",
    "description": "Sleek, modern design with stunning panoramic views of the city skyline. Central location for urban explorers.",
    "image": {
      "filename": "listingimage_loft",
      "url": "https://images.unsplash.com/photo-1677177907213-7c20413e2953?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
    },
    "price": 950,
    "location": "New York City",
    "country": "United States"
  },
  {
    "title": "Bamboo Eco-Lodge",
    "description": "Experience sustainable living in this beautiful lodge crafted entirely from local bamboo, situated near a lush jungle.",
    "image": {
      "filename": "listingimage_bamboo",
      "url": "https://images.unsplash.com/photo-1642636782784-3c826b9ba722?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
    },
    "price": 200,
    "location": "Ubud",
    "country": "Indonesia"
  },
  {
    "title": "Underground Hobbit Hole",
    "description": "A truly unique experience in a cozy, grass-roofed dwelling built into a hillside, reminiscent of a fantasy novel.",
    "image": {
      "filename": "listingimage_hobbithole",
      "url": "https://images.unsplash.com/photo-1674216644907-8c9092f33251?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
    },
    "price": 320,
    "location": "Matamata",
    "country": "New Zealand"
  },
  {
    "title": "Seaside Greek Villa",
    "description": "Traditional whitewashed villa overlooking the Aegean Sea. Private terrace perfect for sunset viewing.",
    "image": {
      "filename": "listingimage_villa",
      "url": "https://images.unsplash.com/photo-1690314754158-7287f2022d9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
    },
    "price": 750,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Converted Train Carriage",
    "description": "A quirky and historic train carriage lovingly converted into a comfortable and stylish guesthouse.",
    "image": {
      "filename": "listingimage_train",
      "url": "https://images.unsplash.com/photo-1528735000313-039ec3a473b0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 190,
    "location": "Dorset",
    "country": "United Kingdom"
  },
  {
    "title": "Luxury Safari Tent",
    "description": "Glamping at its finest. A full-service luxury tent with an en-suite bathroom and private deck for wildlife viewing.",
    "image": {
      "filename": "listingimage_safari",
      "url": "https://images.unsplash.com/photo-1454388683759-ee76c15fee26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
    },
    "price": 1200,
    "location": "Maasai Mara",
    "country": "Kenya"
  },
  {
    "title": "Rural Windmill Stay",
    "description": "Spend a night in a historic, converted Dutch windmill. Enjoy panoramic views of the flat, beautiful countryside.",
    "image": {
      "filename": "listingimage_windmill",
      "url": "https://images.unsplash.com/photo-1673262791211-55f7a4e13118?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJlYWNoJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
    },
    "price": 350,
    "location": "Kinderdijk",
    "country": "Netherlands"
  },
  {
    "title": "Iglu Village Getaway",
    "description": "Sleep in a warm, glass-roofed iglu and watch the Northern Lights from the comfort of your bed.",
    "image": {
      "filename": "listingimage_iglu",
       "url" : "https://plus.unsplash.com/premium_photo-1661962862470-a03bcc2fb415?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 550,
    "location": "Lapland",
    "country": "Finland"
  },
  {
    "title": "Japanese Ryokan Retreat",
    "description": "A traditional Japanese inn offering tatami floors, onsen access, and a focus on serene simplicity.",
    "image": {
      "filename": "listingimage_ryokan",
      "url": "https://media.istockphoto.com/id/2176590755/photo/maldives-swimming-pool-at-tropical-island-resort-hotel-beach-with-palm-trees-and-sun-beds.webp?a=1&b=1&s=612x612&w=0&k=20&c=uEWrJCarfbCfZaW7FLVpltKiUCokQ9VpExijLcqGuek="
    },
    "price": 400,
    "location": "Kyoto",
    "country": "Japan"
  },
  {
    "title": "Rustic Farm Stay Cottage",
    "description": "An authentic, charming cottage on a working farm. Perfect for a peaceful retreat away from the city bustle.",
    "image": {
      "filename": "listingimage_farm",
      "url": "https://plus.unsplash.com/premium_photo-1680287296835-0424869199ae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 120,
    "location": "Tuscany",
    "country": "Italy"
  },
  {
    "title": "Tropical Beachfront Bungalow",
    "description": "Steps from the ocean with a private hammock and direct beach access. An idyllic, classic island paradise.",
    "image": {
      "filename": "listingimage_bungalow",
      "url": "https://images.unsplash.com/photo-1527142879-95b61a0b8226?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 500,
    "location": "Phuket",
    "country": "Thailand"
  },
  {
    "title": "Desert Yurt Experience",
    "description": "A spacious, traditional yurt offering a cozy and unique stay under the stars in the quiet desert landscape.",
    "image": {
      "filename": "listingimage_yurt",
      "url": "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 150,
    "location": "Mojave",
    "country": "United States"
  },
];

module.exports = { data: sampleListings };
