const data = [
{
title: "Luxury Beach Villa",
description: "Beautiful villa with sea view and private pool.",
image: 
{
    filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
price: 8500,
location: "Goa",
country: "India"
},
{
title: "Mountain Retreat Cabin",
description: "Peaceful cabin surrounded by snow-covered peaks.",
image: 
{   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1687960116957-ab813e1e66e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
},price: 4200,
location: "New york",
country: "USA"
},
{
title: "Modern City Apartment",
description: "Stylish apartment in the heart of the city.",
image:{   filename: "listingimage",
    url: "https://plus.unsplash.com/premium_photo-1687960116957-ab813e1e66e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
},price: 6500,
location: "Mumbai",
country: "India"
},
{
title: "Lake View Cottage",
description: "Cozy cottage with stunning lake views.",
image:{   filename: "listingimage",
    url: "https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
},price: 3900,
location: "Nainital",
country: "India"
},
{
title: "Heritage Haveli",
description: "Traditional haveli with royal architecture.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1687960116689-38c34910d26f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
},price: 7500,
location: "Jaipur",
country: "India"
},
{
title: "Riverside Homestay",
description: "Relax near the flowing river.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1682377521720-3a43955c8329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
},price: 3200,
location: "Rishikesh",
country: "India"
},
{
title: "Tea Garden Bungalow",
description: "Stay amidst lush tea plantations.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1675745330147-41c50df90244?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
},price: 5000,
location: "Darjeeling",
country: "India"
},
{
title: "Snow Peak Chalet",
description: "Wooden chalet with breathtaking mountain views.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1682377521597-1d6e5a7ab8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
},price: 6800,
location: "Shimla",
country: "India"
},
{
title: "Backwater Houseboat",
description: "Unique stay on Kerala backwaters.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1748087734665-fc0f73d83858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
},price: 9000,
location: "Alleppey",
country: "India"
},
{
title: "Hilltop Cottage",
description: "Scenic cottage on a quiet hilltop.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1746363361912-fcbc9d8086ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
},price: 4300,
location: "Mussoorie",
country: "India"
},
{
title: "Luxury Penthouse",
description: "Premium penthouse with skyline views.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1748217392686-56e45fcaee65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU2fHx8ZW58MHx8fHx8",
},price: 12000,
location: "Delhi",
country: "India"
},
{
title: "Beachside Hut",
description: "Affordable stay steps from the beach.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1682377521564-b180edfc960c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY2fHx8ZW58MHx8fHx8",
},price: 2500,
location: "Puri",
country: "India"
},
{
title: "Royal Palace Stay",
description: "Experience royal living and heritage.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1764695672967-119262a30b54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8",
},price: 11000,
location: "Udaipur",
country: "India"
},
{
title: "Island Resort Room",
description: "Peaceful stay near crystal-clear waters.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1747326386378-5635788ea82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc5fHx8ZW58MHx8fHx8",
},price: 9500,
location: "Andaman",
country: "India"
},
{
title: "Garden Cottage",
description: "Charming cottage surrounded by flowers.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1661962769148-fbe587e60fb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkwfHx8ZW58MHx8fHx8",
},price: 3500,
location: "Ooty",
country: "India"
},
{
title: "Eco Farm Stay",
description: "Enjoy village life and organic farming.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1687996106476-9e851e2b0eba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1OHx8fGVufDB8fHx8fA%3D%3D",
},price: 2200,
location: "Nashik",
country: "India"
},
{
title: "Downtown Studio",
description: "Compact and modern studio apartment.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1680287296350-aab74ef903f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1MXx8fGVufDB8fHx8fA%3D%3D",
},price: 4800,
location: "Bangalore",
country: "India"
},
{
title: "Luxury Resort Suite",
description: "Five-star suite with premium facilities.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1746888841748-75d72cb6dd94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0M3x8fGVufDB8fHx8fA%3D%3D",
},price: 14000,
location: "Goa",
country: "India"
},
{
title: "Cliffside Cottage",
description: "Amazing cliffside views and fresh air.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1687960116858-013019dc68df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
},price: 5100,
location: "Munnar",
country: "India"
},
{
title: "Adventure Camp",
description: "Perfect stay for adventure lovers.",
image: {   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1687960116861-8a5cf8ae0909?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},price: 2700,
location: "Ranthambore",
country: "India"
},
{
title: "Temple Town Stay",
description: "Comfortable stay near famous temples.",
image: 
{   filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1757976211213-6db08396f3d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExOXx8fGVufDB8fHx8fA%3D%3D",

    },    price: 3000,
location: "Varanasi",
country: "India"
},
{
title: "Luxury Lake Resort",
description: "Elegant resort beside a serene lake.",
image:
{   filename: "listingimage",
    url: "https://plus.unsplash.com/premium_photo-1687960116970-1c16124c5ade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMHx8fGVufDB8fHx8fA%3D%3D",
}  
, price: 9900,
location: "Kumarakom",
country: "India"
},
{
title: "Nature Retreat",
description: "Reconnect with nature in peaceful surroundings.",
image:
{ 
    filename: "listingimage",
    url:"https://plus.unsplash.com/premium_photo-1661505119522-22651550cd42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk2fHx8ZW58MHx8fHx8",

},
 price: 4100,
location: "Kodaikanal",
country: "India"
},
];
module.exports= data;