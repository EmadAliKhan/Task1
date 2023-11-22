import { Button, Stack, TextField } from '@mui/material';
import React from 'react'
import { DATABASE } from '../Firebase/Firebase';

const UploadProduct = () => {

const submitData = ()=>{
  var productData = {
    title : title.value,
    description : description.value,
    price : price.value
  }
  var referId = ref(DATABASE);
  var ID = push(referId).key;
  productData.id = ID;
  var refer = ref(DATABASE,`students/${productData.id}`);
  set(refer,productData);
}
  return (
    <Stack>
      <TextField id='title'   placeholder='enter Title..'/>
      <TextField id='image' type='file' accept="image/png, image/jpeg" placeholder='enter image....'/>
      <TextField id='description'  placeholder='enter description...'/>
      <TextField id='price'  placeholder='enter price..'/>
    <Button variant='contained' onClick={submitData}>Submit</Button>
    </Stack>
  )
}

export default UploadProduct
