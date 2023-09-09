import React, { Component } from "react";
import "./style.scss";

export default class BaiTapDoiKinh extends Component {
  state = {
    imgGlass: "./glassesImage/v1.png",
    imgModel: "./glassesImage/model.jpg",
  };

  listButton = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  renderButton() {
    let newListButton = [];
    newListButton = this.listButton.map((item, index) => {
      return (
        <button
          key={index}
          // red-car
          className="btn d-flex"
          onClick={() => {
            // console.log('object');
            this.setState({
              imgGlass: item.url,
            });
          }}
        >
          <img className="w-100" src={item.url} alt="" />
          <div className="ms-3">
            <h3>{item.title}</h3>
            <p>{item.subTitle}</p>
          </div>
        </button>
      );
    });
    console.log(newListButton);
    return newListButton;
  }

  render() {
    return (
      <div className="container">
        {/* gắn đường dẫn tương đối vào thẻ img  */}
        {/* <img src="./CarBasic/products/black-car.jpg" alt="" /> */}
        {/* <img src={hinhXeDen} alt="" /> */}
        <div className="row">
          <div id="bg" className="col-8">
            {/* xác định được rằng đường dẫn img là dữ liệu thay đổi khi người dùng bấm nút  */}
            <div className="model d-flex justify-content-between">
              <img
                id="model-detail"
                className="w-25 h-50"
                src={this.state.imgModel}
                alt=""
              />
              <img id="glassTry" src={this.state.imgGlass}></img>
            </div>
            <div className="row" key={1}>
              <div id="glassButton" className="col-12 d-flex">
                {this.renderButton()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
