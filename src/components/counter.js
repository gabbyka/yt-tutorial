import React, { Component } from "react";
import { Container, Button, Label, List, Header } from "semantic-ui-react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    console.log("props", this.props);
    return (
      <Container>
        {this.props.children}
        <Label color={this.getBadgeColor()}>{this.formatCount()}</Label>
        <Button secondary onClick={() => this.handleIncrement("myproduct")}>
          Increment
        </Button>
        <Button
          negative
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </Button>
        {/*this.renderTags()*/}
      </Container>
    );
  }

  handleIncrement = product => {
    //console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <Header as="h4">There are no tags!</Header>;
    } else {
      return (
        <List>
          {this.state.tags.map(tag => (
            <List.Item key={tag}>{tag}</List.Item>
          ))}
        </List>
      );
    }
  }

  getBadgeColor() {
    return this.state.value === 0 ? "yellow" : "blue";
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
