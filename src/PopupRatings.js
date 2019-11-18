// write a reactjs code that will count the seconds after component did mount 
// and then have it pop up on the page
// store in a cookie if the user has received a popup before so they only get one 
'use strict';
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
import PopupHeaders from "./PopupHeaders.js"

class PopupRatings extends React.Component {
    constructor() {
        super();
        this.state = {
            courseID: null,
            courseName: null,
            profName: null,
            studentID: document.getElementById('userInfo').getAttribute('data-name').replace(/ /g, "_"),
            ratings: [{ ClassEnjoyment: null }],
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
            userRating: 0,
            popupExit: false,
            popup: false
        };
    }

    componentDidMount() {
        this.getClassInfo();
        if (sessionStorage.getItem('popup') !== 'shown') {
            setTimeout(() => this.setState({ popup: true }), 20000);
            // localStorage.setItem('popup', 'shown');
            sessionStorage.setItem('popup', 'shown');
        } else {
            console.log("popup isnt coming");
        }
    }

    getClassInfo() {
        // Write a function that calls to the server, picks the class info for one of the courses
        // that the user has taken in the past 
        fetch('http://localhost:3000/popup/' + this.state.studentID)
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(response => this.setState({
                courseID: response.data[0].CourseID,
                courseName: response.data[0].Name,
                profName: response.data[0].Lname
            }));
    }

    // Retrieves data from database, upon loading the webpage 
    getRatings() {
        // console.log(this.state.courseID)
        fetch('http://localhost:3000/course/findratings1?courseid=' + this.state.courseID)
            .then(response => response.json())
            .then(response => this.setState({ ratings: response.data }));

        fetch('http://localhost:3000/course/findratings2?courseid=' + this.state.courseID)
            .then(response2 => response2.json())
            .then(response2 => this.setState({ ratings2: response2.data }));

        fetch('http://localhost:3000/course/findratings3?courseid=' + this.state.courseID)
            .then(response3 => response3.json())
            .then(response3 => this.setState({ ratings3: response3.data }));

        fetch('http://localhost:3000/course/findratings4?courseid=' + this.state.courseID)
            .then(response4 => response4.json())
            .then(response4 => this.setState({ ratings4: response4.data }));

        fetch('http://localhost:3000/course/findratings5?courseid=' + this.state.courseID)
            .then(response5 => response5.json())
            .then(response5 => this.setState({ ratings5: response5.data }));
    }

    // This sends ratings to the server
    // figure out a way to do without setTimeout, maybe do a promise 
    postRatings(type, rating) {
        const { courseID } = this.state;
        fetch(`http://localhost:3000/course/addrating?courseid=${courseID}&type=${type}&rating=${rating}`)
            .then(response => response)
            .then(response => this.getRatings())
            .catch(err => console.log(err))
    }
    userRating(type, rating) {
        if (type === "classEnjoyment" && !this.state.classEnjoyment) {
            this.setState({ classEnjoyment: true })
        } else if (type === "classUsefulness" && !this.state.classUsefulness) {
            this.setState({ classUsefulness: true })
        } else if (type === "examDifficulty" && !this.state.examDifficulty) {
            this.setState({ examDifficulty: true })
        } else if (type === "attendanceAttn" && !this.state.attendanceAttn) {
            this.setState({ attendanceAttn: true })
        } else if (type === "profRating" && !this.state.profRating) {
            this.setState({ profRating: true })
        } else if (type === "classDifficulty" && !this.state.classDifficulty) {
            this.setState({ classDifficulty: true })
        } else if (type === "testHeavy" && !this.state.testHeavy) {
            this.setState({ testHeavy: true })
        } else if (type === "classType" && !this.state.classType) {
            this.setState({ classType: true })
        } else if (type === "homeworkLoad" && !this.state.homeworkLoad) {
            this.setState({ homeworkLoad: true })
        } else if (type === "profApproach" && !this.state.profApproach) {
            this.setState({ profApproach: true })
        } else {
            return
        }
        this.setState({ userRating: this.state.userRating + 1 });
        this.postRatings(type, rating);
    }

    closePopup() {
        console.log(this.state.userRating);
        this.setState({ popupExit: true })
        if (this.state.userRating < 3) {
            return
        }
        this.setState({ popup: false })
    }

    render() {
        const ratings = this.state.ratings;
        const ratings2 = this.state.ratings2;
        const ratings3 = this.state.ratings3;
        const ratings4 = this.state.ratings4;
        const ratings5 = this.state.ratings5;
        let popup = (
            <div id="myModal" className="popup" style={{ display: 'block' }}>
                <div className="container modal-content">
                    <div>
                        <i
                            className="fas fa-times float-right popupExit"
                            onClick={() => this.closePopup()}
                        ></i>
                        <div className="float-right popupExitText" style={this.state.popupExit ? { display: 'block' } : { display: 'none' }}>
                            You must submit at <br />least 3 ratings to exit!
                        </div>
                        <PopupHeaders
                            ClassName={this.state.courseName}
                            Professor={this.state.profName}
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-6 pl-lg-5">
                            <ClassEnjoyment
                                ClassEnjoyment={this.state.classEnjoyment && ratings.length ? ratings[0].ClassEnjoyment : null}
                                Submitted={this.state.classEnjoyment}
                                onClick={rating => this.userRating("classEnjoyment", rating)}
                            />
                        </div>
                        <div className="col-md-6">
                            <ProfRating
                                // ProfRating={ratings3[0].ProfRating}
                                ProfRating={this.state.profRating && ratings3.length ? ratings3[0].ProfRating : null}
                                Submitted={this.state.profRating}
                                onClick={rating => this.userRating("profRating", rating)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 pl-lg-5">
                            <ClassUsefulness
                                // Useful={ratings[0].Useful}
                                Useful={this.state.classUsefulness && ratings.length ? ratings[0].Useful : null}
                                NotUseful={this.state.classUsefulness && ratings.length ? ratings[0].NotUseful : null}
                                Submitted={this.state.classUsefulness}
                                onClick={rating => this.userRating("classUsefulness", rating)}
                            />
                            <ExamDifficulty
                                Easy={this.state.examDifficulty && ratings2.length ? ratings2[0].Easy : null}
                                Medium={this.state.examDifficulty && ratings2.length ? ratings2[0].Medium : null}
                                Hard={this.state.examDifficulty && ratings2.length ? ratings2[0].Hard : null}
                                Submitted={this.state.examDifficulty}
                                onClick={rating => this.userRating("examDifficulty", rating)}
                            />
                            <AttendanceAttn
                                Inattentive={this.state.attendanceAttn && ratings2.length ? ratings2[0].Inattentive : null}
                                Attentive={this.state.attendanceAttn && ratings2.length ? ratings2[0].Attentive : null}
                                Submitted={this.state.attendanceAttn}
                                onClick={rating => this.userRating("attendanceAttn", rating)}
                            />

                            <ClassType
                                Lecture={this.state.classType && ratings4.length ? ratings4[0].Lecture : null}
                                Discussion={this.state.classType && ratings4.length ? ratings4[0].Discussion : null}
                                Submitted={this.state.classType}
                                onClick={rating => this.userRating("classType", rating)}
                            />
                        </div>
                        <div className="col-md-6">
                            <ClassDiffuculty
                                Easy={this.state.classDifficulty && ratings3.length ? ratings3[0].Easy : null}
                                Medium={this.state.classDifficulty && ratings3.length ? ratings3[0].Medium : null}
                                Hard={this.state.classDifficulty && ratings3.length ? ratings3[0].Hard : null}
                                Submitted={this.state.classDifficulty}
                                onClick={rating => this.userRating("classDifficulty", rating)}
                            />
                            <TestHeavy
                                Light={this.state.testHeavy && ratings4.length ? ratings4[0].Light : null}
                                Heavy={this.state.testHeavy && ratings4.length ? ratings4[0].Heavy : null}
                                // Heavy={ratings4[0].Heavy}
                                Submitted={this.state.testHeavy}
                                onClick={rating => this.userRating("testHeavy", rating)}
                            />
                            <HomeworkLoad
                                Light={this.state.homeworkLoad && ratings5.length ? ratings5[0].Light : null}
                                Heavy={this.state.homeworkLoad && ratings5.length ? ratings5[0].Heavy : null}
                                Submitted={this.state.homeworkLoad}
                                onClick={rating => this.userRating("homeworkLoad", rating)}
                            />
                            <ProfApproach
                                Yes={this.state.profApproach && ratings5.length ? ratings5[0].Yes : null}
                                No={this.state.profApproach && ratings5.length ? ratings5[0].No : null}
                                Submitted={this.state.profApproach}
                                onClick={rating => this.userRating("profApproach", rating)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
        if (!this.state.popup) {
            popup = null;
        }


        return (
            <div className="container">
                {popup}
            </div>
        );
    }
}

let domContainer = document.querySelector('#popup');
ReactDOM.render(<PopupRatings />, domContainer);


