import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          {/* {this.props.children} */}
          <span className={this.getBadegClasses()}>{this.formateCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm ml-2"
          >
            Incremet
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm ml-2"
          >
            Decrement
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm ml-2"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
  getBadegClasses() {
    let classes = "badge p-2 m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formateCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;

// renderTags() {
//     if (this.state.tags.length === 0) return <p>Create a tags</p>;
//     return (
//       <ul>
//         {this.state.tags.map((tag) => {
//           return <li key={tag}>{tag}</li>;
//         })}
//       </ul>
//     );
//   }
// state = {
//     value: this.props.counter.value,
//     tags: ["tag1"],
//   };
//   handelIncrement = (value) => {
//     // console.log("Incremnet is hendeled", this);
//     this.setState({ value: this.state.value + 1 });
//   };
//   handelDecrement = (value) => {
//     // console.log("Incremnet is hendeled", this);
//     this.setState({ value: this.state.value - 1 });
//   };
/* <div>
          {this.state.tags.length === 0 && "please Create new tags!!!"}
          <ul>
            {this.state.tags.map((tag) => {
              return <li key={tag}>{tag}</li>;
            })}
          </ul>
        </div> */
