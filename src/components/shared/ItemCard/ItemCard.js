import React from 'react';
import { Link } from 'react-router-dom';

import './ItemCard.scss';
import itemShape from '../../../helpers/propz/itemShape';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    const singleLink = `/items/${item.id}`;
    const editLink = `/edit/${item.id}`;
    return (
      <div className="ItemCard col-3">
        <div className="card">
          <div className="card-body">
          <img src={item.itemImage} alt="items I hoard" className="itemImage card-img-top" />
          <h5 className="card-title">{item.itemName}</h5>
          <Link className="btn btn-info" to={singleLink}><i className="fas fa-binoculars"></i></Link>
          <Link className="btn btn-warning" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
          <p className="card-text">{item.itemDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
