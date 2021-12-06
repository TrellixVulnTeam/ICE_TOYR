// const customerInfo = {
//   contactInfo: {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//   },
//   address: {
//     houseNumber: '',
//     street: '',
//     streetType: '',
//     city: '',
//     state: '',
//     zipcode: '',
//   },
//   howYouHeardOfUs: '',
//   typeOfWork: {
//     snowRemoval: {
//       typeOfResidence: {
//         residential: {
//           typeOfDriveway: '',
//           longerThan50: '',
//           shovelSidewalks: {
//             yes: {
//               numnberOfDoors: '',
//             },
//             no: '',
//           },
//         },
//         commercial: ''
//       },
//     },
//     excavating: {
//       projectDescription: '',
//       projectPics: '',
//     },
//   },
//   map: '',
// };

const updateCustomerReducer = (state = [], action) => {
  console.log('hit cuustomer reducer', action);
  switch (action.type) {
    case 'UPDATE_CUSTOMER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default updateCustomerReducer;