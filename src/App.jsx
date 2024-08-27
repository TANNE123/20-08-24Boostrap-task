import Button from "./components/button-files/button";
import { Card } from "./components/externel-style/cards";
import "./App.css";
import CardComponent from "./components/boostrap-react/boostrap-cards";
import { data } from "./components/boostrap-react/card-data";
import { Bootstrap } from "./components/boostrap/only-boostrap";
import RemoveCard from "./components/boostrap-react/remove";
const App = () => {
  return (
    <>


    <RemoveCard/>
      <Button />

      <Card />  

      {
        data.map((result)=>{
          return(
            <>
              <CardComponent title={result.title} text={result.description} img={result.image}/>

            </>
          )
        })
      }
      <Bootstrap/>
    </>
  );
};
export default App;
