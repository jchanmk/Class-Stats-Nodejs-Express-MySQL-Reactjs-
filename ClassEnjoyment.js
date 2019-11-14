// import StarList from "./StarList.js"

// class ClassEnjoyment extends React.Component{
//     constructor(props) {
//         // console.log(props)
//         super(props);
//         this.state = {
//             classEnjoyment: null
//         };
//     }
// }

// renderClassEnjoyment = ({ ClassEnjoyment }) =>
//         <div className="ratings">
//             <div className="row">
//                 <div className="col-4">
//                     <span className="ratingsName">Class Enjoyment: </span>
//                 </div>
//                 <div className="col-5">
//                     <StarList
//                         key={ClassEnjoyment}
//                         rating={Math.round(ClassEnjoyment)}
//                         onClick={(rating) => this.userRating("classEnjoyment", rating)}
//                     />
//                     {/* {(ClassEnjoyment)} */}
//                     <span
//                         class="submitted"
//                         style={this.state.classEnjoyment ?
//                             { display: "block" } :
//                             { display: "none" }}
//                     >
//                         submitted!
//                         </span>
//                 </div>
//             </div>
//         </div>;