import React, { useState, useEffect } from "react";
import ArrowRightIconButton from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { useStateValue } from "./StateProvider";
import '../Css/Subtotalinfo.css'


function SubtotalInfo({ id, image, price ,quantity}) {
  const [{ basket }, dispatch] = useStateValue();
  const [input, setInput] = useState(quantity);
  const [ids, setIds] = useState();

  useEffect(() => {
    setIds(id);
    setInput(quantity)
  }, [basket]);

  const addIncrement = () => {
    setInput(input + 1);
    const quantityChanged = input + 1;
    const basketCopys = Object.assign([], basket);
     console.log("basketCopys",basketCopys)
    const copyBasket = basketCopys

    const index = copyBasket.findIndex((copybasket) => {
      return copybasket.id == ids;
    });

    const basketcopy = Object.assign({}, copyBasket[index]);
    basketcopy.quantity = quantityChanged;

    
    basketCopys[index] = basketcopy;

  //  console.log(basketCopys)
   
    dispatch({
      type: "ADD_QUANTITY",
      item: {
        newBaskets: basketCopys,
      },
    });
  };

  const addDecrement = () => {
    setInput(input>1 ? input - 1 : 1);
    const quantityChanged = input>1 ? input - 1 : 1;
    const basketCopys = Object.assign([], basket);
    const copyBasket = basketCopys.length==0 ? basket : basketCopys

    const index = copyBasket.findIndex((copybasket) => {
      return copybasket.id == ids;
    });

    const basketcopy = Object.assign({}, copyBasket[index]);
    basketcopy.quantity = quantityChanged;

    
    basketCopys[index] = basketcopy;


      dispatch({
        type: "SUBSTRACT_QUANTITY",
        item: {
          newBaskets: basketCopys,
        },
      });
  
  };

  return (
  <div className="subtotal_info">
    <div className="subtotal_infoColumn">
      <img className="subtotal_infoImage" src={image} alt="" />
      <ArrowLeftIcon onClick={addDecrement} />
      <h5>{`$${price}`} </h5>
      <h3>*</h3>
      <h5>{quantity}</h5>

      <ArrowRightIconButton onClick={addIncrement} />

      <span>Subtotal 
      <h4>{`$${price * quantity}`} </h4>
      </span>
      <br />
    </div>
    </div>
  );
}

export default SubtotalInfo;
