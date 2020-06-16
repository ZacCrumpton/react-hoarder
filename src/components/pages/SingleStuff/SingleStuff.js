import React from 'react';

import './SingleStuff.scss';
import itemData from '../../../helpers/data/itemData';

class SingleStuff extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    itemData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('unable to get sinlge item: ', err));
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleStuff">
        <img src={item.itemImage} alt="items I hoard" className="itemImageSingle" />
        <h1>{item.itemName}</h1>
        <p>{item.itemDescription}</p>
      </div>
    );
  }
}

export default SingleStuff;
