// productImages: [{id, productId, imageUrl}]

// Generate Order Data
// function createData(id, price, stock, sku, name, description, imageUrl, rating, category, keyFeatures, productImages, sellerUser ) {
//   return { id, price, stock, sku, name, description, imageUrl, rating, category, keyFeatures, productImages, sellerUser };
// }

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import ProductsData from "../../../../assets/json/productsData.json"
import axios from 'axios';
import { useState } from 'react';
import { AddBox, ArrowBack, ArrowLeft, BackHand, Delete, Edit } from '@mui/icons-material';
import { Box, Modal, Typography, TextField, FormControlLabel, Checkbox, Button, Link, Grid } from '@mui/material';


// productImages: [{id, productId, imageUrl}]

// Generate Order Data
// function createData(id, price, stock, sku, name, description, imageUrl, rating, category, keyFeatures, productImages, sellerUser ) {
//   return { id, price, stock, sku, name, description, imageUrl, rating, category, keyFeatures, productImages, sellerUser };
// }

export default function Products() {
  const [newProduct, setNewProduct] = useState(false)

  // axios.get("http://localhost:8080/api/v1/products/seller/{sellerId}").then(res => setList(res.data))
  return (
    <div>
      {newProduct ? 
        (<Box sx={{ width: '100vw'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <ArrowBack onClick={() => setNewProduct(false)}/> New Product
          </Typography>
          <Box component="form" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: 1, width: '50%' }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    id="description"
                    label="Description"
                    name="description"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Price"
                    name="price"
                    type='number'
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Stock"
                    name="stock"
                    type='number'
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="SKU"
                    name="sku"
                    type='number'
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="imageUrl"
                    label="Image URL"
                    name="imageUrl"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Rating"
                    name="rating"
                    type='number'
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    id="keyFeatures"
                    label="Key Features"
                    name="keyFeatures"
                    autoFocus
                  />
                  {/* Image List */}
                  
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Box>
        </Box>)
      :(<><div style={{ display: 'flex', alignItems: 'center' }}>
        <Title>All Products</Title><span style={{ padding: "0 5px", cursor: 'pointer' }} onClick={() => setNewProduct(true)}><AddBox color='primary' /></span>
      </div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>SKU</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>ImageUrl</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Key Features</TableCell>
            <TableCell>Product Images</TableCell>
            <TableCell>User</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ProductsData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.stock}</TableCell>
              <TableCell>{row.sku}</TableCell>
              <TableCell>{row.description}</TableCell>
              <img src={row.imageUrl} />
              <TableCell>{row.rating}</TableCell>
              <TableCell>{row.eoProductCategory.name}</TableCell>
              <TableCell>{row.keyFeatures}</TableCell>
              <TableCell></TableCell>
              <TableCell>{row.sellerUser.firstName}</TableCell>
              <TableCell><Edit /></TableCell>
              <TableCell><Delete /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table></>)}
    </div>
  );
}