import React, { Component } from "react";

class Item extends Component {
  state = {
    id: this.props.id,
    key: this.props.key,
    src: this.props.src,
    title: this.props.title,
    hoversrc: this.props.hoversrc,
    price: this.props.price,
  };

  render() {
    return (
      <div className="col">
        <img
            className="mr-2 mb-4 ml-2 img-fluid img-thumbnail"
            key={this.props.id}
            id={this.props.id}
            src={this.props.src}
            title={this.props.title}
            hoversrc={this.props.hoversrc}
            width="204"
            height="236"
            price={this.props.price}
            onMouseOver={e => (e.currentTarget.src = this.props.hoversrc)}
            onMouseOut={e => (e.currentTarget.src = this.props.src)}
            onClick={() => this.props.handlePurchase(this.props.price, this.props.title)}
          />
      </div>
    );
  }
}

export default Item;
