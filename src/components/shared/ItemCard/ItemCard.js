import React from 'react';

import './ItemCard.scss';
import itemShape from '../../../helpers/propz/itemShape';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;
    return (
      <div className="ItemCard col-3">
        <div className="card">
          <div className="card-body">
          <img src={item.itemImage} alt="items I hoard" className="itemImage card-img-top" />
          <h5 className="card-title">{item.itemName}</h5>
          <p className="card-text">{item.itemDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
