import React from 'react';
import './Qna.css'

const Qna = () => {
    return (
        <div className="accordion  mx-auto my-5 qna" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Question #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <strong> How react works?
</strong> React is a javascript library . React mainly work in declarative way. It's easy to debug couse of Components and State. Components and state make easyer to build largh application . React are vary faster and flexiable couse of it's vertual dom. Vartual dom are track change on web by using ID and compear with real js dom and change only the new changes ! That's why react are work faster on web.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Question #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        <strong>Difference between Props and useState </strong> props are likes water , you can pass values on chiled but you can't get it back. Props are read only.you can not modifie props. That is immutable. Props can be accessed by the child component but state cannot be accessed by child component. State can be modified,and it can be asynchonous.it has own setState method to set state value. Both are accessaible as attributes of the component and compose componenet with a different representive.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Question #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        <strong> How useState works?</strong>useState is hook of react.  It's allows to have state variables in function. If you pass the new value with the function argument it will update the state variable . the state variable can be any type. It's fundamentally simpler way to encapsulate stateful behavior and side effects in user interfaces. And it's also help us to maintein extra reload function call.

      </div>
    </div>
  </div>
        </div>
    );
};

export default Qna;