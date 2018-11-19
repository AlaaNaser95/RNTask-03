import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index.js";
// NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  List,
  Button,
  ListItem,
  Icon
} from "native-base";

class CoffeeCart extends Component {
  renderItem(item, index) {
    return (
      <ListItem key={index}>
        <Left>
          <Text style={{ color: "white", marginLeft: 16 }}> {item.drink} </Text>
          <Text note style={{ marginLeft: 16 }}>
            {item.option}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "white" }}>{item.quantity}</Text>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="trash" style={{ color: "white", fontSize: 21 }} onPress={() => this.props.removeItemFromCart(item)}/>
          </Button>
        </Right>
      </ListItem>
    );
  }

  render() {
    const { list } = this.props.cart;
    return (
      <List>
        {list.map((item, index) => this.renderItem(item, index))}
        <Button full danger onPress={() => { alert("Thank You");return this.props.checkOutCart()}} >
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});
const mapDispatchToProps = dispatch => {
 return {
   removeItemFromCart: item => dispatch(actionCreators.removeItemFromCart(item)),
   checkOutCart:() => dispatch(actionCreators.checkOutCart()),
 };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);
