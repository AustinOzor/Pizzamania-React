
 function PizzaType() {
  return (
    <div className="container" id="pizza">
      <div className="row">
        <h3 className="text-center pizzatype">OZZS Pizza Types</h3>
        <div className="col-md-3">
          <div className="thumbnail">
            <img src="images/pt1.webp" className="img-responsive" alt="..."/>
            <div className="caption">
              <h3>Cheese Pizza</h3>
              <p>It should be no shocker that a classNameic is the statistical favorite.
                Cheese pizza is one of the most popular choices.
                It will always be a simple, unadorned masterpiece
                on its own.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="thumbnail">
            <img src="images/veggies.webp" className="img-responsive" alt="..."/>
            <div className="caption">
              <h3>veggies Pizza</h3>
              <p>When you want to jazz up your cheese pizza with color
                and texture, veggies are the perfect topping.
                And you’re only limited by your imagination.
                Everything from peppers and mushrooms, to
                eggplant and onions make for an exciting and
                tasty veggie pizza.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="thumbnail">
            <img src="images/pepperoni.webp" className="img-responsive" alt="..."/>
            <div className="caption">
              <h3>Pepperoni Pizza</h3>
              <p>There’s a reason this is one of the most popular
                types of pizza. Who doesn’t love biting into a crispy,
                salty round of pepperoni?</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="thumbnail">
            <img src="images/meat.webp" className="img-responsize" alt="..."/>
            <div className="caption">
              <h3>Meat Pizza</h3>
              <p>If pepperoni just isn’t enough, and you’re looking for a
                pie with a bit more heft, a meat pizza is a perfect and popular
                choice. Pile on ground beef and sausage for a hearty meal.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PizzaType;