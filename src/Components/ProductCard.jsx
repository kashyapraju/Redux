// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';


// const MyCard = () => {
//   return (
//     <Card>
     
//       <CardContent>
//         <Typography variant="h5" component="div">
//           My Card with Multiple Images
//         </Typography>
//         <Typography variant="h3">
//           This is a Material-UI card with multiple images.
//         </Typography>
//         <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
//           <CardMedia style = {{marginRight:40}}
//             component="img"
//             height="300"
//             image="https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Image 1"
//           />
//           <CardMedia style = {{marginRight:40}}
//             component="img"
//             height="300"
//             image="https://images.unsplash.com/photo-1711900197142-b0733129bf12?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Image 2"
//           />
//           <CardMedia style = {{marginRight:40}}
//             component="img"
//             height="300"
//             image="https://images.unsplash.com/photo-1711641420780-658d136f2b64?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Image 3"
//           />
//         </div>
//       </CardContent>
      
//     </Card>
//   );
// }

// export default MyCard;

// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';

// const MyCard = () => {
//   const [quantity, setQuantity] = useState(0);

//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           My Card with Quantity
//         </Typography>
//         <Typography variant="body2">
//           This is a Material-UI card with a quantity increment/decrement button.
//         </Typography>
//         <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px' }}>
//           <CardMedia
//             component="img"
//             height="400"
//             image="https://images.unsplash.com/photo-1696775007692-f3536d6f30fd?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Your Image"
//           />
//         </div>
//       </CardContent>

//       <div style = {{marginTop:30}}>
//             <Typography variant="body1" gutterBottom>
//               Quantity: {quantity}
//             </Typography>
//             <Button variant="contained" color="primary" onClick={incrementQuantity} >
//               Increment
           
//             </Button>
//             <Button variant="contained" color="secondary" onClick={decrementQuantity} style = {{marginLeft:20}}>
//               Decrement
//             </Button>
//           </div>

//     </Card>


//   );
// }

// export default MyCard;

// increment karne pr total amount bhi add hota rhe

// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';

// const ProductCard = ({ name, price, image }) => {
//   const [quantity, setQuantity] = useState(0);

//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <Card >
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {name}
//         </Typography>
//         <Typography variant="subtitle1" gutterBottom>
//           Price: ${price}
//         </Typography>
//         <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px' }}>
//           <CardMedia style = {{marginRight:40}} 
//             component="img"
//             height="500"
//             image="https://images.unsplash.com/photo-1696775007692-f3536d6f30fd?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="my img"
//           />
         
//         </div>
//       </CardContent>
//       <div>
//             <Typography variant="body1" gutterBottom>
//               Quantity: {quantity}
//             </Typography>
//             <Button variant="contained" color="primary" onClick={incrementQuantity}>
//               Increment
//             </Button>
//             <Button variant="contained" color="secondary" onClick={decrementQuantity}>
//               Decrement
//             </Button>
//           </div>

//     </Card>
//   );
// }


// export default ProductCard;