import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import convertRupiah from "rupiah-format";
import { API } from "../config/api";
import { useMutation } from "react-query";

import NavAdmin from "../components/NavAdmin";
import DeleteData from "../components/modal/DeleteData";

function ListProduct() {
  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  // Modal Confirm delete data
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dataproduct, setDataproduct] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const dataproduct = async () => {
      try {
        const response = await API.get("/products");
        setDataproduct(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataproduct();
  }, [setDataproduct]);

  console.log(dataproduct);

  const handleDelete = (id) => {
    setIdDelete(id);
    handleShow();
  };

  const deleteById = useMutation(async (id) => {
    try {
      await API.delete(`/product/${id}`);
      const response = await API.get(`products`);
      setDataproduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    if (confirmDelete) {
      // Close modal confirm delete data
      handleClose();
      // execute delete data by id function
      deleteById.mutate(idDelete);
      setConfirmDelete(null);
    }
  }, [confirmDelete]);

  const movetoUpdate = (id) => {
    navigate("/update-product/" + id);
  };

  return (
    <div>
      <NavAdmin />
      <div className='m-5'>
        <Table striped size='lg' variant='light'>
          <thead>
            <tr className='text-center'>
              <th width='1%' className='text-center'>
                No
              </th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Description</th>
              <th colspan='2'>Action</th>
            </tr>
          </thead>
          {dataproduct?.map((item, index) => {
            return (
              <tbody>
                <tr className='text-center'>
                  <td className='align-middle text-center'>{item.id}</td>
                  <td className='align-middle'>
                    <img
                      src={item.image}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td className='align-middle'>{item.name}</td>

                  <td className='align-middle'>
                    {convertRupiah.convert(item.price)}
                  </td>
                  <td className='align-middle'>{item.stock}</td>
                  <td className='align-middle'>{item.description}</td>
                  <td className='align-middle justify-content-beetween'>
                    <Button
                      className='btn-sm btn-success me-2'
                      style={{ width: "135px" }}
                      onClick={() => movetoUpdate(item?.id)}>
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      className='btn-sm btn-danger'
                      style={{ width: "135px" }}>
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
      <DeleteData
        setConfirmDelete={setConfirmDelete}
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
}

export default ListProduct;
