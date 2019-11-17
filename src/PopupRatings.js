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
import PopupHeaders from "./PopupHeaders.js"

class PopupRatings extends React.Component {
    constructor() {
        super();
        this.state = {
            courseID: null,
            courseName: null,
            profName: null,
            studentID: document.getElementById('courseTitle').getAttribute('data-name').replace(/ /g, "_"),
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
            userRating: null,
            popup: true
        };
    }

    componentDidMount() {
        this.getClassInfo();
        // this.getRatings();
        // this.getRatings();
        // setTimeout(() => this.setState({popup: true}), 4000);
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
            this.setState({ classEnjoyment: true, userRating: rating })
        } else if (type === "classUsefulness" && !this.state.classUsefulness) {
            this.setState({ classUsefulness: true, userRating: rating })
        } else if (type === "examDifficulty" && !this.state.examDifficulty) {
            this.setState({ examDifficulty: true, userRating: rating })
        } else if (type === "attendanceAttn" && !this.state.attendanceAttn) {
            this.setState({ attendanceAttn: true, userRating: rating })
        } else if (type === "profRating" && !this.state.profRating) {
            this.setState({ profRating: true, userRating: rating })
        } else if (type === "classDifficulty" && !this.state.classDifficulty) {
            this.setState({ classDifficulty: true, userRating: rating })
        } else if (type === "testHeavy" && !this.state.testHeavy) {
            this.setState({ testHeavy: true, userRating: rating })
        } else if (type === "classType" && !this.state.classType) {
            this.setState({ classType: true, userRating: rating })
        } else if (type === "homeworkLoad" && !this.state.homeworkLoad) {
            this.setState({ homeworkLoad: true, userRating: rating })
        } else if (type === "profApproach" && !this.state.profApproach) {
            this.setState({ profApproach: true, userRating: rating })
        } else {
            return
        }
        // console.log(this.state.courseID);
        // console.log(this.state.courseName);
        // console.log(this.state.profName);
        // console.log(rating)
        // console.log(this.state.ratings)
        this.postRatings(type, rating);
    }

    render() {
        const ratings = this.state.ratings;
        const ratings2 = this.state.ratings2;
        const ratings3 = this.state.ratings3;
        const ratings4 = this.state.ratings4;
        const ratings5 = this.state.ratings5;

        return (
            <div className="container">
                <div id="myModal" className="popup" style={this.state.popup ? { display: 'block' } : { display: 'false' }}>
                    <div className="container modal-content">
                        <PopupHeaders
                            ClassName={this.state.courseName}
                            Professor={this.state.profName}
                        />
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
            </div>
        );
    }
}

let domContainer = document.querySelector('#popup');
ReactDOM.render(<PopupRatings />, domContainer);


