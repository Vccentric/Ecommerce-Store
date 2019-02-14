import img1 from '../assets/bananas.jpg';
import img2 from '../assets/oranges.jpg';
import img3 from '../assets/red-pepper.jpg';
import img4 from '../assets/red-tomatoes.jpg';

let data = {
    "products": [
        {
            "name": "Bananas",
            "image": img1,
            "description": "This is a yellow fruit.",
            "price": "$10.55",
            "inStock": true
        },
        {
            "name": "Oranges",
            "image": img2,
            "description": "This is a orange fruit.",
            "price": "$4.15",
            "inStock": true
        },
        {
            "name": "Red Pepper",
            "image": img3,
            "description": "This is a spicy red pepper.",
            "price": "$14.80",
            "inStock": false
        },
        {
            "name": "Red Tomatoes",
            "image": img4,
            "description": "This is a red tomato.",
            "price": "$2.00",
            "inStock": true
        }
    ]
};

export default data;
