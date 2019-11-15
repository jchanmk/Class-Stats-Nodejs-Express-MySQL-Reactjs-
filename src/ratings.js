'use strict';
import PercentageRating from "./PercentageRating.js";
import StarList from "./StarList.js"

class Ratings extends React.Component {
    constructor() {
        super();
        this.state = {
            courseID: null,
            ratings: [],
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
        this.postRatings(type);
    }

    // This renders the stars for class enjoyment, based on current state of the rating based on data from
    // database, it renders filled stars based on the rating, eg. rating = 4, then 4 gold stars
    renderClassEnjoyment = ({ ClassEnjoyment }) =>
        <div className="ratings">
            <div className="row">
                <div className="col-4">
                    <span className="ratingsName">Class Enjoyment: </span>
                </div>
                <div className="col-5">
                    <StarList
                        key={ClassEnjoyment}
                        rating={Math.round(ClassEnjoyment)}
                        onClick={(rating) => this.userRating("classEnjoyment", rating)}
                    />
                    {/* {(ClassEnjoyment)} */}
                    <span
                        class="submitted"
                        style={this.state.classEnjoyment ?
                            { display: "block" } :
                            { display: "none" }}
                    >
                        submitted!
                        </span>
                </div>
            </div>
        </div>;

    renderProfRating = ({ ProfRating }) =>
        <div className="ratings">
            <div className="row">
                <div className="col-4">
                    <span className="ratingsName">Professor Rating: </span>
                </div>
                <div className="col-5">
                    <StarList
                        key={ProfRating}
                        rating={Math.round(ProfRating)}
                        onClick={(rating) => this.userRating("profRating", rating)}
                    />
                    <span
                        class="submitted"
                        style={this.state.profRating ?
                            { display: "block" } :
                            { display: "none" }}
                    >
                        submitted!
                        </span>
                </div>
            </div>
        </div>;

    renderClassUsefulness = ({ Useful, NotUseful }) =>
        <div className="ratings">
            <div className="row">
                <div className="col-4">
                    <span className="ratingsName">Class Usefulness: </span>
                </div>
                <div className="col-5">
                    <PercentageRating
                        type="useful"
                        color="#27FF9B"
                        rating={Useful != null ? Math.round(Useful * 100) : 0}
                        onClick={() => this.userRating("classUsefulness", 1)}
                    />
                    <PercentageRating
                        type="not useful"
                        color="#DB6E6E"
                        rating={NotUseful != null ? Math.round(NotUseful * 100) : 0}
                        onClick={() => this.userRating("classUsefulness", 0)}
                    />
                    <span
                        class="submitted"
                        style={this.state.classUsefulness ?
                            { display: "block", marginTop: "0" } :
                            { display: "none" }}
                    >
                        submitted!
                        </span>
                </div>
            </div>
        </div>;

    renderExamDifficulty = ({ Easy, Medium, Hard }) =>
        <div className="ratings">
            <div className="row">
                <div className="col-4">
                    <span className="ratingsName">Exam/Midterm Difficulty: </span>
                </div>
                <div className="col-5">
                    <PercentageRating
                        type="easy"
                        color="#27FF9B"
                        rating={Easy != null ? Math.round(Easy * 100) : 0}
                        onClick={() => this.userRating("examDifficulty", 1)}
                    />
                    <PercentageRating
                        type="medium"
                        color="#27B4FF"
                        rating={Medium != null ? Math.round(Medium * 100) : 0}
                        onClick={() => this.userRating("examDifficulty", 0)}
                    />
                    <PercentageRating
                        type="hard"
                        color="#DB6E6E"
                        rating={Hard != null ? Math.round(Hard * 100) : 0}
                        onClick={() => this.userRating("examDifficulty", -1)}
                    />
                    <span
                        class="submitted"
                        style={this.state.examDifficulty ?
                            { display: "block", marginTop: "0" } :
                            { display: "none" }}
                    >
                        submitted!
                </span>
                </div>
            </div>
        </div>;

    renderAttendanceAttn = ({ Inattentive, Attentive }) =>
        <div className="ratings">
            <div className="row">
                <div className="col-4">
                    <span className="ratingsName">Professors Attention to Attendance/ Tardies: </span>
                </div>
                <div className="col-5">
                    <PercentageRating
                        type="inattentive"
                        color="#27FF9B"
                        rating={Inattentive != null ? Math.round(Inattentive * 100) : 0}
                        onClick={() => this.userRating("attendanceAttn", 1)}
                    />
                    <PercentageRating
                        type="attentive"
                        color="#DB6E6E"
                        rating={Attentive != null ? Math.round(Attentive * 100) : 0}
                        onClick={() => this.userRating("attendanceAttn", 0)}
                    />
                    <span
                        class="submitted"
                        style={this.state.attendanceAttn ?
                            { display: "block", marginTop: "0" } :
                            { display: "none" }}
                    >
                        submitted!
                        </span>
                </div>
            </div>
        </div>;

    renderClassDifficulty = ({ Easy, Medium, Hard }) =>
        <div className="ratings">
            <div className="row">
                <div className="col-4">
                    <span className="ratingsName">Class Difficulty: </span>
                </div>
                <div className="col-5">
                    <PercentageRating
                        type="easy"
                        color="#27FF9B"
                        rating={Easy != null ? Math.round(Easy * 100) : 0}
                        onClick={() => this.userRating("classDifficulty", 1)}
                    />
                    <PercentageRating
                        type="medium"
                        color="#27B4FF"
                        rating={Medium != null ? Math.round(Medium * 100) : 0}
                        onClick={() => this.userRating("classDifficulty", 0)}
                    />
                    <PercentageRating
                        type="hard"
                        color="#DB6E6E"
                        rating={Hard != null ? Math.round(Hard * 100) : 0}
                        onClick={() => this.userRating("classDifficulty", -1)}
                    />
                    <span
                        class="submitted"
                        style={this.state.classDifficulty ?
                            { display: "block", marginTop: "0" } :
                            { display: "none" }}
                    >
                        submitted!
        </span>
                </div>
            </div>
        </div>;

    renderTestHeavy = ({ Light, Heavy }) =>
        <div className="ratings">
            <div className="row">
                <div className="col-4">
                    <span className="ratingsName">Is the class test heavy? </span>
                </div>
                <div className="col-5">
                    <PercentageRating
                        type="light"
                        color="#27FF9B"
                        rating={Light != null ? Math.round(Light * 100) : 0}
                        onClick={() => this.userRating("testHeavy", 1)}
                    />
                    <PercentageRating
                        type="heavy"
                        color="#DB6E6E"
                        rating={Heavy != null ? Math.round(Heavy * 100) : 0}
                        onClick={() => this.userRating("testHeavy", 0)}
                    />
                    <span
                        class="submitted"
                        style={this.state.testHeavy ?
                            { display: "block", marginTop: "0" } :
                            { display: "none" }}
                    >
                        submitted!
                </span>
                </div>
            </div>
        </div>;

    renderClassType = ({ Lecture, Discussion }) =>
        <div className="ratings">
            <div className="row">
                <div className="col-4">
                    <span className="ratingsName">Discussion or Lecture based curriculum? </span>
                </div>
                <div className="col-5">
                    <PercentageRating
                        type="lecture"
                        color="#27FF9B"
                        rating={Lecture != null ? Math.round(Lecture * 100) : 0}
                        onClick={() => this.userRating("classType", 1)}
                    />
                    <PercentageRating
                        type="discussion"
                        color="#DB6E6E"
                        rating={Discussion != null ? Math.round(Discussion * 100) : 0}
                        onClick={() => this.userRating("classType", 0)}
                    />
                    <span
                        class="submitted"
                        style={this.state.classType ?
                            { display: "block", marginTop: "0" } :
                            { display: "none" }}
                    >
                        submitted!
        </span>
                </div>
            </div>
        </div>;

    render() {
        const ratings = this.state.ratings;
        const ratings2 = this.state.ratings2;
        const ratings3 = this.state.ratings3;
        const ratings4 = this.state.ratings4;

        return (
            <div className="row">
                <div className="col-6 pl-5">
                    {ratings.map(this.renderClassEnjoyment)}
                    {ratings.map(this.renderClassUsefulness)}
                    {ratings2.map(this.renderExamDifficulty)}
                    {ratings2.map(this.renderAttendanceAttn)}
                    {ratings4.map(this.renderClassType)}
                </div>
                <div className="col-6">
                    {ratings3.map(this.renderProfRating)}
                    {ratings3.map(this.renderClassDifficulty)}
                    {ratings4.map(this.renderTestHeavy)}
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<Ratings />, domContainer);

// To do:
// Add other ratings, change databases if needed, add more tables for other ratings