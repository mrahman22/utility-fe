import React, { Component } from "react";

export class GroupBy extends Component {
  state = {
    groupedProducts: [],
  };

  componentDidMount() {
    this.setState({
      groupedProducts: this.props.products.reduce((r, a) => {
        r[a.type] = r[a.type] || [];
        r[a.type].push(a);
        return r;
      }, Object.create(null)),
    });
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <ul className="groupby-products">
          {Object.keys(this.state.groupedProducts)
            .sort()    
            .map((product) => {
              return (
                <li key={product}>
                  <h2>{product}</h2> 
                  {// eslint-disable-next-line
}{products.map((products) => {
                    if (products.type === product) {
                      return (
                        <div className="groupby-items">
                          <p>{products.name}</p>
                          <p>{products.description}</p>
                          <p>{products.price.value}</p>
                        </div>
                      );
                    }
                  })}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default GroupBy;
