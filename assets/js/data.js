/* Sample data. Replace with your real properties. Set `image: "assets/img/xyz.jpg"` to show a photo. */
const DESTINATIONS = [
  {name:"Delhi NCR",type:"Metros",hotels:14578,avg:6626,blurb:"The dynamic capital, where monuments stand beside 21st-century icons."},
  {name:"Mumbai",type:"Metros",hotels:5665,avg:7837,blurb:"A cosmopolitan city of Bollywood, world cuisines and sea-facing luxury."},
  {name:"Bengaluru",type:"Metros",hotels:8602,avg:5111,blurb:"The Garden City, loved for lakes, pubs and a temperate climate."},
  {name:"Jaipur",type:"Heritage",hotels:5620,avg:5849,blurb:"Palaces, forts and bazaars steeped in the glory of Rajasthan's royal past."},
  {name:"Udaipur",type:"Heritage",hotels:2961,avg:7808,blurb:"The City of Lakes, famed for romantic palace stays."},
  {name:"Agra",type:"Heritage",hotels:1120,avg:4300,blurb:"Home of the Taj Mahal, Fatehpur Sikri and centuries of Mughal grandeur."},
  {name:"Goa",type:"Beach",hotels:4210,avg:6200,blurb:"Sunny beaches, Portuguese churches and easy-going evenings."},
  {name:"Port Blair",type:"Beach",hotels:310,avg:6900,blurb:"Gateway to the Andamans: coral reefs, snorkelling and island-hopping."},
  {name:"Mussoorie",type:"Hills",hotels:1554,avg:6527,blurb:"The Queen of the Hills, with waterfalls, gardens and mountain trails."},
  {name:"Darjeeling",type:"Hills",hotels:640,avg:4800,blurb:"Tea gardens, toy trains and Kanchenjunga at sunrise."},
  {name:"Gangtok",type:"Hills",hotels:520,avg:5200,blurb:"A Himalayan capital with monasteries, markets and mountain views."},
  {name:"Siliguri",type:"Metros",hotels:410,avg:3600,blurb:"The gateway to North Bengal, Sikkim and Bhutan."}
];
const PROPERTIES = [
  {id:1,name:"The Rajmahal Palace",city:"Jaipur",type:"Heritage",stars:5,rating:4.7,reviews:2140,price:14500,tag:"Bestseller",am:["Pool","Spa","Breakfast included","Free Wi-Fi"]},
  {id:2,name:"Lakeview Residency",city:"Udaipur",type:"Resort",stars:5,rating:4.6,reviews:1380,price:12800,tag:"Lake view",am:["Pool","Spa","Restaurant","Free Wi-Fi"]},
  {id:3,name:"Marina Bay Suites",city:"Mumbai",type:"Hotel",stars:5,rating:4.5,reviews:3012,price:16900,tag:"Sea facing",am:["Gym","Bar","Airport transfer","Free Wi-Fi"]},
  {id:4,name:"Garden City Inn",city:"Bengaluru",type:"Hotel",stars:4,rating:4.3,reviews:1876,price:6400,tag:"Business friendly",am:["Gym","Breakfast included","Co-working","Free Wi-Fi"]},
  {id:5,name:"Palm Shore Retreat",city:"Goa",type:"Resort",stars:4,rating:4.4,reviews:2290,price:9800,tag:"Beachfront",am:["Pool","Beach access","Bar","Free Wi-Fi"]},
  {id:6,name:"Taj View Haveli",city:"Agra",type:"Heritage",stars:4,rating:4.2,reviews:960,price:7200,tag:"Couple friendly",am:["Rooftop","Restaurant","Breakfast included"]},
  {id:7,name:"Pine & Peak Lodge",city:"Mussoorie",type:"Resort",stars:4,rating:4.4,reviews:845,price:8100,tag:"Mountain view",am:["Bonfire","Restaurant","Free parking"]},
  {id:8,name:"Tea Estate Bungalow",city:"Darjeeling",type:"Heritage",stars:4,rating:4.6,reviews:512,price:7600,tag:"Top rated",am:["Tea tasting","Fireplace","Breakfast included"]},
  {id:9,name:"Kanchenjunga Heights",city:"Gangtok",type:"Hotel",stars:3,rating:4.1,reviews:640,price:4900,tag:"Value pick",am:["Mountain view","Restaurant","Free Wi-Fi"]},
  {id:10,name:"Teesta Grand",city:"Siliguri",type:"Hotel",stars:4,rating:4.2,reviews:733,price:4300,tag:"Airport 12 km",am:["Pool","Gym","Breakfast included","Free Wi-Fi"]},
  {id:11,name:"Connaught Court",city:"Delhi NCR",type:"Hotel",stars:5,rating:4.5,reviews:2780,price:15200,tag:"Central location",am:["Spa","Bar","Metro nearby","Free Wi-Fi"]},
  {id:12,name:"Island Coral Resort",city:"Port Blair",type:"Resort",stars:4,rating:4.3,reviews:410,price:9300,tag:"Dive packages",am:["Private beach","Scuba desk","Restaurant"]}
];
