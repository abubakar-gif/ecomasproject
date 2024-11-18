import React, { useEffect } from "react";
import "./Dashboard.css";
import { useState } from "react";
import upload_area from "../../assets/upload_area.svg";
import cross_icon from "../../assets/cross_icon.png";

export default function Dashboard() {
  const [allimages, setallimages] = useState([]);
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    image: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const addProduct = async () => {
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("image", image);

    await fetch("http://localhost:4000/top-uploadimage", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;

      await fetch("http://localhost:4000/savetopimage", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("failed");
        });
      getTopimage();
    }
  };

  function getTopimage() {
    fetch("http://localhost:4000/top-getimage")
      .then((res) => res.json())
      .then((data) => {
        setallimages(data.data);
        console.log(data.data);
      });
  }

  useEffect(() => {
    getTopimage();
  }, []);

  const removebutton = async (id) => {
    await fetch("http://localhost:4000/removeimage", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    getTopimage();
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-itemfield">
        <label htmlFor="file-input">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="dashboard-thumnail-img1"
            />
          ) : (
            <img src={upload_area} alt="" className="dashboard-thumnail-img" />
          )}
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <div className="Addbutton">
        {image ? <button onClick={addProduct}>Add</button> : <></>}
      </div>
      <div className="listtopimages">
        <div className="Dashbord-image">
          {allimages && allimages.length > 0
            ? allimages.map((images, i) => (
                <div key={i} className="topimagecontener">
                  <img src={images.image} className="topimage" />
                  <img
                    className="removebutton"
                    onClick={() => {
                      removebutton(images.id);
                    }}
                    src={cross_icon}
                    alt=""
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
