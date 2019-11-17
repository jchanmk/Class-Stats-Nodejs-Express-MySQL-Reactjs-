// write a reactjs code that will count the seconds after component did mount 
// and then have it pop up on the page
// store in a cookie if the user has received a popup before so they only get one 
'use strict';
import PercentageRating from "./PercentageRating.js";
import StarList from "./StarList.js"
import ClassEnjoyment from "./ClassEnjoyment.js"
import ClassUsefulness from "./ClassUsefulness.js"
import ExamDifficulty from "./ExamDifficulty.js"
import AttendanceAttn from "./AttendanceAttn.js"
import ClassType from "./ClassType.js"
import ProfRating from "./ProfRating.js"
import ClassDiffuculty from "./ClassDifficulty.js"
import TestHeavy from "./TestHeavy.js"
import HomeworkLoad from "./HomeworkLoad.js"
import ProfApproach from "./ProfApproach.js"

class PopupRatings extends React.Component {
    constructor() {
        super();
        this.state = {
            courseID: null,
            ratings: [],
            ratings2: [],
            ratings3: [],
            ratings4: [],
            ratings5: [],
            classEnjoyment: null,
            classUsefulness: null,
            examDifficulty: null,
            classDifficulty: null,
            attendanceAttn: null,
            homeworkLoad: null,
            classType: null,
            testHeavy: null,
            profRating: null,
            userRating: null
        };
    }

    componentDidMount() {
        // this.getRatings();
    }

    // Retrieves data from database, upon loading the webpage 
    getRatings() {
        let search = window.location.search;
        fetch('http://localhost:3000/course/findratings1' + search)
            .then(response => response.json())
            .then(response => this.setState({ courseID: response.courseID, ratings: response.data }));

        fetch('http://localhost:3000/course/findratings2' + search)
            .then(response2 => response2.json())
            .then(response2 => this.setState({ ratings2: response2.data }));

        fetch('http://localhost:3000/course/findratings3' + search)
            .then(response3 => response3.json())
            .then(response3 => this.setState({ ratings3: response3.data }));

        fetch('http://localhost:3000/course/findratings4' + search)
            .then(response4 => response4.json())
            .then(response4 => this.setState({ ratings4: response4.data }));

        fetch('http://localhost:3000/course/findratings5' + search)
            .then(response5 => response5.json())
            .then(response5 => this.setState({ ratings5: response5.data }));
    }

    // This sends ratings to the server
    // figure out a way to do without setTimeout, maybe do a promise 
    postRatings(type) {

    }
    userRating(type, rating) {
        this.postRatings(type);
    }

    render() {

        return (
            <div className="container">
                <div id="myModal" className="popup">
                    <div className="modal-content">
                        <div className="container">
                            <div className="row mb-3">
                                <div className="col">
                                    <h3 className="popupHeader">RATE A CLASS</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="popupSubheader">
                                        We noticed you took 
                                            <span className="popupClassInfo"> COMP239: DATA STRUCTURES </span>  
                                        with <span className="popupClassInfo"> Professor Chen </span> 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#popup');
ReactDOM.render(<PopupRatings />, domContainer);


