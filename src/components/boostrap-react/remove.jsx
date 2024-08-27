import { Component } from "react";
import CardComponent from "./boostrap-cards";

class RemoveCard extends Component {
  state = {
    cards: [
      { name: "rajesh", course: "html" },
      { name: "sandeep", course: "react" },
    ],
  };

remove=(index)=>{
console.log(index)
const filter=this.state.cards.filter((_,id)=>id !==index)

this.setState({
    cards:filter
})


}

  render() {
    return (
      <>
        {this.state.cards.map((res,index) => {
          return (
            <>
              <CardComponent title={res.name} text={res.course} index={index} remove={this.remove}/>
            </>
          );
        })}
      </>
    );
  }
}

export default RemoveCard;
