import React from 'react';
import './NewItem.scss';

class NewItem extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  desciptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  render() {
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;

    return (
      <div className="NewItem col-12">
        <h1>New Item</h1>
        <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="item-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="item-name"
              value={itemName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-image">Image</label>
            <input
              type="text"
              className="form-control"
              id="item-image"
              value={itemImage}
              onChange={this.imageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-desciption">Description</label>
            <input
              type="text"
              className="form-control"
              id="item-description"
              value={itemDescription}
              onChange={this.descriptionChange}
            />
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
          </form>
      </div>
    );
  }
}

export default NewItem;
