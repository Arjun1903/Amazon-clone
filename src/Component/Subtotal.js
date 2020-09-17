import React from "react";
import CurrencyFormat from "react-currency-format";
import "../Css/Subtotal.css";

import { useStateValue } from "./StateProvider";
import { getBasketTotal, getQuantityTotal } from "./reducer";
import SubtotalInfo from "./SubtotalInfo";
import { useHistory } from "react-router";

function Subtotal({ value }) {
  const history =useHistory();
  const [{ basket }] = useStateValue();
  

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="subtotalItem">
            <p>
              Total ({getQuantityTotal(basket)} item):</p>
              <strong>{`${value}`}</strong>
        </div>
            <div className="subtotal_info">
              {basket?.map((bas) => (
                <>
                  <SubtotalInfo
                    id={bas.id}
                    image={bas.image}
                    price={bas.price}
                    quantity={bas.quantity}
                  />
                </>
              ))}
            </div>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
