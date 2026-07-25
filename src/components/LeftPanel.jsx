

export default function LeftPanel() {
  return (
    <div 
      className="left-panel"
      style={{
        // 🚀 FIX: Use the direct / public path string instead of the missing bgImage variable
        backgroundImage: "url('/freestyleLibre.jpeg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* <div className="content">
        {/* 🚀 FIX: Added starting slash / to correctly map to your public folder root */}
        {/* <img src="/freestyleLibre.jpeg" alt="Freestyle Libre" />
      </div>  */}
    </div>
  );
}








// import Image from 'next/image';

// export default function LeftPanel() {
//   return (
//     <div className="left-panel"
//     style={{
//     backgroundImage: `url(${bgImage})`,
//   }}>

//       <div className="content">
    
//         <img src="freestyleLibre.jpeg" />
//         {/* <p>
//           .
//         </p> */}
//       </div>

//       {/* <div className="circle one"></div>
//       <div className="circle two"></div>
//       <div className="circle three"></div> */}

//     </div>
//   );
// }