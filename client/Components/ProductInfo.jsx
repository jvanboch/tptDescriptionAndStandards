import React from 'react';
import ReactDOM from 'react-dom';
import Standards from './Standards.jsx'
import Description from './Description.jsx'
export default class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '',
      value: '',
      productInfo: {}
    };
    // const myScript = document.getElementById('bundle');

  }

  componentDidMount() {
    console.log('href', window.location.href.split("/")[4]) //localhost:3000/products/1
    this.setState({
      productId: [window.location.href.split("/")[4]]
    }, function() {

      fetch(`http://localhost:3002/products/${this.state.productId}/description-and-standards`, {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
        }).then(res=> {return res.json()}).then(data=>this.setState({
          productInfo: data
        })).catch(err=>console.log(err))
        }.bind(this))
    }
  render() {
    return (
      <div className = 'productService'>
        <Description descriptionInfo = {this.state.productInfo} />
        <Standards standardInfo = {this.state.productInfo.standards}/>
      </div>
    );
  }
}




// export default ProductInfo
