// import { useState } from "react";

// let nextId = 0;

// export default function Random() {
//   const [state, setState] = useState({
//     name: "",
//     artists: "",
//   });
//   const { name, artists } = state;
//   // const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={(e) => setState(e.target.value)} />
//       <button
//         onClick={() => {
//           setState([...state, { id: nextId++, name: name }]);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {/* {artists.map((a) => {
//           <li key={a.id}>{a.name}</li>;
//         })} */}
//         {artists.map((a)=>{})}
//       </ul>
//     </>
//   );
// }
