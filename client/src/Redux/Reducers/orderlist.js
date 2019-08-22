import * as actionTypes from '../actionTypes';


const initialState = {
    isLoading: false,
    orders:[
        { key: '0001', purchasePoint: "faisalabad", purchaseDate: "May 23, 2019 5:43:04 AM", billtoName: "RaheelArif",shiptoName: "RaheelArif", grandTotalBase: "$30.00", grandTotalPurchase: "$30.00", status: "pending", },
    ]
}

const addOrder = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_NEW_ORDER_LOADING:{
            // AddStore.AddStore(action.payload)
            // console.log(action.payload)
            return { ...state, isLoading: true, orders:[...state.orders , action.payload] , user: null };
        }

        case actionTypes.ADD_NEW_ORDER_FAILED:{
            return { ...state, isLoading: true,  user: null };
        }
        case actionTypes.ADD_NEW_ORDER_SUCCESS:{
            return { ...state, isLoading: false,  user: null };
        }
          default:
          return state;
      }
    
}

export default addOrder

//   const   orders= [
//             { key: '0001', purchasePoint: "faisalabad", PurchaseDate: "May 23, 2019 5:43:04 AM", BillToName: "RaheelArif",ShipToName: "RaheelArif", GrandTotalBase: "$30.00", GrandTotalPurchase: "$30.00", Status: "pending", },
//             { key: '0002', purchasePoint: "karachi", PurchaseDate: "May 23, 2019 5:43:04 AM", BillToName: "faisal",ShipToName: "RaheelArif", GrandTotalBase: "$30.00", GrandTotalPurchase: "$30.00", Status: "pending", },
//             { key: '0003', purchasePoint: "laahore", PurchaseDate: "May 23, 2019 5:43:04 AM", BillToName: "ahmed",ShipToName: "RaheelArif", GrandTotalBase: "$34.00", GrandTotalPurchase: "$34.00", Status: "pending", },
//             { key: '0004', purchasePoint: "multan", PurchaseDate: "May 23, 2019 5:43:04 AM", BillToName: "sarfraz",ShipToName: "RaheelArif", GrandTotalBase: "$20.00", GrandTotalPurchase: "$30.00", Status: "pending", },
//             { key: '0005', purchasePoint: "jaranwala", PurchaseDate: "May 23, 2019 5:43:04 AM", BillToName: "qayyum",ShipToName: "RaheelArif", GrandTotalBase: "$30.00", GrandTotalPurchase: "$50.00", Status: "pending", },
//             { key: '0006', purchasePoint: "islamabad", PurchaseDate: "May 23, 2019 5:43:04 AM", BillToName: "zain",ShipToName: "RaheelArif", GrandTotalBase: "$50.00", GrandTotalPurchase: "$60.00", Status: "pending", },
//             { key: '0007', purchasePoint: "faisalabad", PurchaseDate: "May 23, 2019 5:43:04 AM", BillToName: "RaheelArif",ShipToName: "RaheelArif", GrandTotalBase: "$30.00", GrandTotalPurchase: "$30.00", Status: "pending", },
//             { key: '0008', purchasePoint: "karachi", PurchaseDate: "May 23, 2019 5:43:04 AM", BillToName: "faisal",ShipToName: "RaheelArif", GrandTotalBase: "$30.00", GrandTotalPurchase: "$30.00", Status: "pending", },
//             { key: '0009', purchasePoint: "laahore", PurchaseDate: "May 23, 2019 5:43:04 AM", BillToName: "ahmed",ShipToName: "RaheelArif", GrandTotalBase: "$34.00", GrandTotalPurchase: "$34.00", Status: "pending", },
//             { key: '0010', purchasePoint: "multan", PurchaseDate: "May 23, 2019 5:43:04 AM", BillToName: "sarfraz",ShipToName: "RaheelArif", GrandTotalBase: "$20.00", GrandTotalPurchase: "$30.00", Status: "pending", },
//             { key: '0011', purchasePoint: "jaranwala", PurchaseDate: "May 23, 2019 5:43:04 AM", BillToName: "qayyum",ShipToName: "RaheelArif", GrandTotalBase: "$30.00", GrandTotalPurchase: "$50.00", Status: "pending", },
//             { key: '0012', purchasePoint: "islamabad", PurchaseDate: "May 23, 2019 5:43:04 AM", BillToName: "zain",ShipToName: "RaheelArif", GrandTotalBase: "$50.00", GrandTotalPurchase: "$60.00", Status: "pending", },

//         ]


// const OrderList = (
//   state = {
//     orders:orders,
//   },
//   action
// ) => {
//   switch (action.type) {
//     case "getorder":
//       return { ...state, };
 
//     default:
//       return state;
//   }
// };

// export default OrderList;
