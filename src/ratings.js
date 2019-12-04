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
import ServerURL from "/config/serverUrl.js"

class Ratings extends React.Component {
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
        this.getRatings();
        console.log("hi, ratings js file " + ServerURL)
    }

    // Retrieves data from database, upon loading the webpage 
    // getRatings() {
    //     let search = window.location.search;
    //     fetch(ServerURL + '/course/findratings1' + search)
    //         .then(response => response.json())
    //         .then(response => this.setState({ courseID: response.courseID, ratings: response.data }));

    //     fetch(ServerURL + '/course/findratings2' + search)
    //         .then(response2 => response2.json())
    //         .then(response2 => this.setState({ ratings2: response2.data }));

    //     fetch(ServerURL + '/course/findratings3' + search)
    //         .then(response3 => response3.json())
    //         .then(response3 => this.setState({ ratings3: response3.data }));

    //     fetch(ServerURL + '/course/findratings4' + search)
    //         .then(response4 => response4.json())
    //         .then(response4 => this.setState({ ratings4: response4.data }));

    //     fetch(ServerURL + '/course/findratings5' + search)
    //         .then(response5 => response5.json())
    //         .then(response5 => this.setState({ ratings5: response5.data }));
    // }
    getRatings() {
        let search = window.location.search;
        fetch(ServerURL + '/course/findratings1' + search)
            .then(response => response.json())
            .then(response => this.setState({ courseID: response.courseID, ratings: response.data }),

            fetch(ServerURL + '/course/findratings2' + search)
            .then(response2 => response2.json())
            .then(response2 => this.setState({ ratings2: response2.data }),

        fetch(ServerURL + '/course/findratings3' + search)
            .then(response3 => response3.json())
            .then(response3 => this.setState({ ratings3: response3.data }),

        fetch(ServerURL + '/course/findratings4' + search)
            .then(response4 => response4.json())
            .then(response4 => this.setState({ ratings4: response4.data }),
        fetch(ServerURL + '/course/findratings5' + search)
            .then(response5 => response5.json())
            .then(response5 => this.setState({ ratings5: response5.data }))))))
    }

    // This sends ratings to the server
    // figure out a way to do without setTimeout, maybe do a promise 
    postRatings(type, rating) {
        // setTimeout(() => {
            const { courseID } = this.state;
            console.log(courseID + " " + type + " " + rating)
            fetch(ServerURL + `/course/addrating?courseid=${courseID}&type=${type}&rating=${rating}`)
                .then(response => response)
                .then(response => this.getRatings())
                .catch(err => console.log(err))
        // }, 500)
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
            // console.log("hi")
            return
        }
        this.postRatings(type, rating);
    }

    render() {
        const ratings = this.state.ratings;
        const ratings2 = this.state.ratings2;
        const ratings3 = this.state.ratings3;
        const ratings4 = this.state.ratings4;
        const ratings5 = this.state.ratings5;
        // console.log(ratings5);

        // need to add conditions for all ratings
        if (!this.state.ratings.length || !this.state.ratings2.length || !this.state.ratings3.length || !this.state.ratings4.length || !this.state.ratings5.length) {
            return null
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pl-lg-5">
                        <ClassEnjoyment
                            ClassEnjoyment={ratings[0].ClassEnjoyment}
                            Submitted={this.state.classEnjoyment}
                            onClick={rating => this.userRating("classEnjoyment", rating)}
                        />
                    </div>
                    <div className="col-md-6">
                        <ProfRating
                            ProfRating={ratings3[0].ProfRating}
                            Submitted={this.state.profRating}
                            onClick={rating => this.userRating("profRating", rating)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pl-lg-5">
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
                    <div className="col-md-6">
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
                        <HomeworkLoad
                            Light={ratings5[0].Light}
                            Heavy={ratings5[0].Heavy}
                            Submitted={this.state.homeworkLoad}
                            onClick={rating => this.userRating("homeworkLoad", rating)}
                        />
                        <ProfApproach
                            Yes={ratings5[0].Yes}
                            No={ratings5[0].No}
                            Submitted={this.state.profApproach}
                            onClick={rating => this.userRating("profApproach", rating)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#ratings_container');
ReactDOM.render(<Ratings />, domContainer);

