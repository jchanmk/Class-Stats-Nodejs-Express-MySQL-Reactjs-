'use strict';
import PercentageRating from "./PercentageRating.js";
import StarList from "./StarList.js"
import HomeClassEnjoyment from "./HomeClassEnjoyment.js"
import HomeClassDifficulty from "./HomeClassDifficulty.js";
import HomeClassUsefulness from "./HomeClassUsefulness.js";


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            courseID: null,
            ratings: [],
            classEnjoyment: [],
            classDifficulty: [],
            classUsefulness: [],
            studentID: document.getElementById('homeHeader').getAttribute('data-name').replace(/ /g, "_")
        };
    }

    componentDidMount() {
        // fetch data from server, get all current classes this.studentID is taking 
        // their first 3 ratings, name, instructor
        // console.log(this.state.studentID)
       this.getRatings();
    }

    getRatings() {
        // fetch data from server, get all current classes this.studentID is taking 
        // their first 3 ratings, name, instructor
        // then add ratings to state
        // render ratings
        fetch('http://localhost:3000/home/' + this.state.studentID)
            .then(response => response.json())
            .then(response => this.setState({ ratings: response.data }));
    }

    postRatings(type, courseID, rating) {
        setTimeout(() => {
            // const { courseID, userRating } = this.state;
            fetch(`http://localhost:3000/course/addrating?courseid=${courseID}&type=${type}&rating=${rating}`)
                .then(response => response)
                .then(response => this.getRatings())
                .catch(err => console.log(err))
        }, 500)
    }
    userRating(type, courseID, rating) {
        // console.log(type)
        // console.log(courseID)
        // console.log(rating)
        if (type === "classEnjoyment" && !this.state.classEnjoyment.includes(courseID)) {            
            this.setState( state => {
                const classEnjoyment = state.classEnjoyment.concat(courseID);
                return{
                    classEnjoyment
                };
            })
        } else if (type === "classDifficulty" && !this.state.classDifficulty.includes(courseID)) {            
            this.setState( state => {
                const classDifficulty = state.classDifficulty.concat(courseID);
                return{
                    classDifficulty
                };
            })
        } else if (type === "classUsefulness" && !this.state.classUsefulness.includes(courseID)) {            
            this.setState( state => {
                const classUsefulness = state.classUsefulness.concat(courseID);
                return{
                    classUsefulness
                };
            })
        } else {
            return
        }
        this.postRatings(type, courseID, rating);
    }

    render() {
        const ratings = this.state.ratings
        if (!this.state.ratings.length)
            return null;
        console.log(ratings)

        return (
            ratings.map(Courses => (
                <div className="mt-3 mb-5 ml-5 homeCourses">
                    <div className="row mt-3 mb-3">
                        <div className="col">
                            <h4 className="homeCourseName">{Courses.Name}</h4>
                            <span className="homeSubHeadings">Professor {Courses.Lname}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 homeSubHeadings">
                            STATS: 
                            <div className="callToAction">*hover over each stat to provide your own!</div>
                        </div>
                        <div className="col-lg-3 homeSubHeadings">Class Enjoyment
                            <HomeClassEnjoyment
                                ClassEnjoyment={Courses.ClassEnjoyment}
                                Submitted={this.state.classEnjoyment.includes(Courses.CourseID) ? true : false}
                                onClick={rating => this.userRating("classEnjoyment", Courses.CourseID, rating)}
                            />
                        </div>
                        <div className="col-lg-3 homeSubHeadings">Class Difficulty 
                            <HomeClassDifficulty
                                Easy={Courses.Easy}
                                Medium={Courses.Medium}
                                Hard={Courses.Hard}
                                Submitted={this.state.classDifficulty.includes(Courses.CourseID) ? true : false}
                                onClick={rating => this.userRating("classDifficulty", Courses.CourseID, rating)}
                                // onClick={rating => console.log(rating)}
                            />
                        </div>
                        <div className="col-lg-3 homeSubHeadings">Class Usefulness 
                            <HomeClassUsefulness
                                 Useful={Courses.Useful}
                                 NotUseful={Courses.NotUseful}
                                 Submitted={this.state.classUsefulness.includes(Courses.CourseID) ? true : false}
                                 onClick={rating => this.userRating("classUsefulness", Courses.CourseID, rating)}
                                //  onClick={rating => console.log(rating)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <a 
                                className="float-right viewMore" 
                                href={`/course?instructorid=${Courses.InstructorID}&courseid=${Courses.CourseID}`}>
                                    VIEW MORE
                            </a>
                        </div>
                    </div>
                </div>
            ))

        );
    }
}

let domContainer = document.querySelector('#test');
ReactDOM.render(<Home />, domContainer);

// To do:
// - Other homescreen ratings
// - homescreen only submit one rating per class per rating functionality