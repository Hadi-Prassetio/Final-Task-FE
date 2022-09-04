import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Products from "../datadummies/Products.jsx";
import NavUser from "../components/NavUser.jsx";
import { Container, Card, Col, Row } from "react-bootstrap";
import { API } from "../config/api";
import convertRupiah from "rupiah-format";

export default function DetailProduct() {
  let navigate = useNavigate();
  const { id } = useParams();
  // Product Fetch
  const [product, SetProduct] = useState();
  const findProduct = async () => {
    try {
      let response = await API.get("/product/" + id);
      SetProduct(response.data.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    findProduct();
  }, []);

  // Check Transaction
  // const [transaction, setTransaction] = useState();
  // const getTrans = async () => {
  //   try {
  //     let response = await API.get("/transaction-status");
  //     setTransaction(response.data.data);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  // useEffect(() => {
  //   getTrans();
  // }, []);

  // console.log(transaction);

  // Handle for Add to cart
  // const handleAddToCart = useMutation(async (e) => {
  //   try {
  //     e.preventDefault();

  //     const config = {
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     };
  //     await API.post("/transaction", config);

  //     const data = {
  //       product_id: product.id,
  //       qty: 1,
  //       sub_amount: product.price,
  //     };

  //     const body = JSON.stringify(data);

  //     await API.post("/cart", body, config);
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  return (
    <div>
      <NavUser />
      <Container className='m-5'>
        <Row>
          <Col sm={5}>
            <img src={product?.image} alt='' style={{ width: "90%" }} />
          </Col>
          <Col sm={7} className='mt-5'>
            <h1 style={{ color: "#613D2B" }}>{product?.name}</h1>
            <p style={{ color: "#974A4A" }}>stock: {product?.stock}</p>
            <p>{product?.description}</p>
            <h4 className='text-end mt-4 mb-4' style={{ color: "#974A4A" }}>
              {convertRupiah.convert(product?.price)}
            </h4>
            <button
              style={{
                width: "100%",
                backgroundColor: "#613D2B",
                color: "white",
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
              }}>
              Add Cart
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
