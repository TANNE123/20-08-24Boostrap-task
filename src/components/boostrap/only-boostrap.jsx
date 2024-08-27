import CardComponent from "../boostrap-react/boostrap-cards";


export const Bootstrap = () => {
  return (
    <>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <CardComponent text="welcome" title=" create cards" img="https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png"/>
          </div>
          <div className="col-sm-4">
          <CardComponent text="welcome" title=" create cards" img="https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png"/>

          </div>
          <div className="col-sm-4">
          <CardComponent text="welcome" title=" create cards" img="https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png"/>

          </div>
        </div>
      </div>
    </>
  );
};
