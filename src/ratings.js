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

class Ratings extends React.Component {
    constructor() {
        super();
        this.state = {
            courseID: null,
            ratings: [{ ClassEnjoyment: 0 }],
            ratings2: [],
            ratings3: [],
            ratings4: [],
            classEnjoyment: null,
            classUsefulness: null,
            examDifficulty: null,
            classDifficulty: null,
            attendanceAttn: null,
            classType: null,
            testHeavy: null,
            profRating: null,
            userRating: null
        };
    }

    componentDidMount() {
        this.getRatings();
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
    }

    // This sends ratings to the server
    // figure out a way to do without setTimeout, maybe do a promise 
    postRatings(type) {
        setTimeout(() => {
            const { courseID, userRating } = this.state;
            fetch(`http://localhost:3000/course/addrating?courseid=${courseID}&type=${type}&rating=${userRating}`)
                .then(response => response)
                .then(response => this.getRatings())
                .catch(err => console.log(err))
        }, 500)
    }
    userRating(type, rating) {
        if (type === "classEnjoyment") {
            if (this.state.classEnjoyment) {
                return;
            }
            this.setState({ classEnjoyment: true, userRating: rating })
        } else if (type === "classUsefulness") {
            if (this.state.classUsefulness) {
                return;
            }
            this.setState({ classUsefulness: true, userRating: rating })
        } else if (type === "examDifficulty") {
            if (this.state.examDifficulty) {
                return;
            }
            this.setState({ examDifficulty: true, userRating: rating })
        } else if (type === "attendanceAttn") {
            if (this.state.attendanceAttn) {
                return;
            }
            this.setState({ attendanceAttn: true, userRating: rating })
        } else if (type === "profRating") {
            if (this.state.profRating) {
                return;
            }
            this.setState({ profRating: true, userRating: rating })
        } else if (type === "classDifficulty") {
            if (this.state.classDifficulty) {
                return;
            }
            this.setState({ classDifficulty: true, userRating: rating })
        } else if (type === "testHeavy") {
            if (this.state.testHeavy) {
                return;
            }
            this.setState({ testHeavy: true, userRating: rating })
        } else if (type === "classType") {
            if (this.state.classType) {
                return;
            }
            this.setState({ classType: true, userRating: rating })
        }
        // console.log(this.state.ratings[0].ClassEnjoyment)
        this.postRatings(type);
    }

    render() {
        const ratings = this.state.ratings;
        const ratings2 = this.state.ratings2;
        const ratings3 = this.state.ratings3;
        const ratings4 = this.state.ratings4;
        console.log(this.state.ratings4)
        // need to add conditions for all ratings
        if (!this.state.ratings.length || !this.state.ratings2.length || !this.state.ratings3.length || !this.state.ratings4.length) {
            return null
        }
        return (
            <div className="row">
                <div className="col-6 pl-5">
                    <ClassEnjoyment
                        ClassEnjoyment={ratings[0].ClassEnjoyment}
                        Submitted={this.state.classEnjoyment}
                        onClick={rating => this.userRating("classEnjoyment", rating)}
                    />
                    <ClassUsefulness
                        Useful={ratings[0].Useful}
                        NotUseful={ratings[0].NotUseful}
                        Submitted={this.state.classUsefulness}
                        onClick={rating => this.userRating("classUsefulness", rating)}
                    />
                    <ExamDifficulty
                        Easy={ratings2[0].Easy}
                        Medium={ratings2[0].Medium}
                        Hard={ratings2[0].Hard}
                        Submitted={this.state.examDifficulty}
                        onClick={rating => this.userRating("examDifficulty", rating)}
                    />
                    <AttendanceAttn
                        Inattentive={ratings2[0].Inattentive}
                        Attentive={ratings2[0].Attentive}
                        Submitted={this.state.attendanceAttn}
                        onClick={rating => this.userRating("attendanceAttn", rating)}
                    />

                    <ClassType
                        Lecture={ratings4[0].Lecture}
                        Discussion={ratings4[0].Discussion}
                        Submitted={this.state.classType}
                        onClick={rating => this.userRating("classType", rating)}
                    />
                </div>
                <div className="col-6">
                    <ProfRating
                        ProfRating={ratings3[0].ProfRating}
                        Submitted={this.state.profRating}
                        onClick={rating => this.userRating("profRating", rating)}
                    />
                    <ClassDiffuculty
                        Easy={ratings3[0].Easy}
                        Medium={ratings3[0].Medium}
                        Hard={ratings3[0].Hard}
                        Submitted={this.state.classDifficulty}
                        onClick={rating => this.userRating("classDifficulty", rating)}
                    />
                    <TestHeavy
                        Light={ratings4[0].Light}
                        Heavy={ratings4[0].Heavy}
                        Submitted={this.state.testHeavy}
                        onClick={rating => this.userRating("testHeavy", rating)}
                    />
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<Ratings />, domContainer);

// To do:
// Add other ratings, change databases if needed, add more tables for other ratings