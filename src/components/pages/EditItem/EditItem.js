import React from 'react';

import './EditItem.scss';
import itemData from '../../../helpers/data/itemData';
import authData from '../../../helpers/data/authData';

class EditItem extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  componentDidMount() {
    const editId = this.props.match.params.itemId;
    itemData.getSingleItem(editId)
      .then((response) => {
        const item = response.data;
        this.setState({
          itemName: item.itemName,
          itemImage: item.itemImage,
          itemDescription: item.itemDescription,
        });
      })
      .catch((err) => console.error('unable to get item to edit: ', err));
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  updateItem = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;
    const updatedItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };
    itemData.putItem(itemId, updatedItem)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to save item: ', err));
  }

  render() {
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;
    return (
      <div className="EditItem col-12">
        <h1>Edit Item</h1>
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
          <button type="submit" className="btn btn-dark" onClick={this.updateItem}>Update Item</button>
          </form>
      </div>
    );
  }
}

export default EditItem;
