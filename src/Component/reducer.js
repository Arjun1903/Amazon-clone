export const initialState = {
  basket: [],
  user: null,
  userName: null
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.quantity * item.price + amount, 0);

  export const getQuantityTotal = (basket) =>
  basket?.reduce((amount, item) => item.quantity + amount, 0);



const reducer = (state, action) => {
console.log("This is Action>>>>>>",action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "ADD_QUANTITY":
      let newbaskets = action.item.newBaskets;
      return {
        ...state,
        basket: newbaskets,
      };

    case "SUBSTRACT_QUANTITY":
      let newbasketss = action.item.newBaskets;
      return {
        ...state,
        basket: newbasketss,
      };

    case "REMOVEFROM_BASKET":
     
      let newbasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newbasket.splice(index,1);
      } else {
        console.warn(
          `cant remove product (Id: ${action.id}) ads its not in basket !`
        );
      }

      return {
        ...state,
        basket: newbasket,
      };

      case "EMPTY_BASKET":
        return{
          ...state,
          basket:[ ],
        }

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
export default reducer;
