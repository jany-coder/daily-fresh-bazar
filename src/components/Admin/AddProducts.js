import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

const AddProducts = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    const eventData = {
      price: data.price,
      weight: data.weight,
      name: data.name,
      imageURL: imageURL
    };
    const url = `http://localhost:5055/addProducts`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '6240db5ea31d53896e6db40d6b91d895');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);

      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <Container>
      <div className="text-center">
        <h1>Add Your Products Here</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" class="form-control" placeholder="Product Name" ref={register} />
        <br />
        <input name="price" class="form-control" type="number" placeholder="Price" ref={register} />
        <br />
        <input name="weight" class="form-control" type="text" placeholder="Weight KG" ref={register} />
        <br />
        <input name="exampleRequired"  type="file" onChange={handleImageUpload} />
        <br/>
        <input class="form-control" type="submit" />
        <br />
      
      </form>
    </Container>
  );
};

export default AddProducts;