const users = [
  { key: "10", userName: "Zeeshan373", firstName: "Muhammad", lastName: "Zeeshan", email: "zeeshan@gmail.com", status: "Active" },
  { key: "20", userName: "Raheel373", firstName: "Raheel", lastName: "Arif", email: "raheel@gmail.com", status: "Active" } , 
  { key: "30", userName: "Zeeshan373", firstName: "Muhammad", lastName: "Zeeshan", email: "zeeshan@gmail.com", status: "Active"},
  { key: "40", userName: "Raheel373",  firstName: "Raheel",  lastName: "Arif", email: "raheel@gmail.com", status: "Active" },
  { key: "50", userName: "Zeeshan373",  firstName: "Muhammad", lastName: "Zeeshan", email: "zeeshan@gmail.com", status: "Active" },
  


]


const AllUsers = (state = users, action) => {
  switch (action.type) {
    case "getuser":
      return state;
    // case "searchUser":
    //   var dataf=state.filter((value)=>{
    //     console.log(typeof(action.payload))
    //     return value.kay===action.payload
    //   })
    //   return dataf;

    default:
      return state;
  }
};

export default AllUsers;
