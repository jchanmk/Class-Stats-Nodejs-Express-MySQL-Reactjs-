'use strict';
import PercentageRating from "./PercentageRating.js";
import StarList from "./StarList.js"
import HomeClassEnjoyment from "./HomeClassEnjoyment.js"


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            courseID: null,
            ratings: [],
            classEnjoyment: null,
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
        console.log(type)
        console.log(courseID)
        console.log(rating)
        if (type === "classEnjoyment") {
            // figure out how to only allow one submission for ratings per class

            // if (this.state.classEnjoyment) {
            //     return;
            // }
            // this.setState({ classEnjoyment: true, userRating: rating })
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
                        <div className="col-2 homeSubHeadings">STATS: </div>
                        <div className="col-3 homeSubHeadings">Class Enjoyment
                            <HomeClassEnjoyment
                                ClassEnjoyment={Courses.ClassEnjoyment}
                                Submitted={this.state.classEnjoyment}
                                onClick={rating => this.userRating("classEnjoyment", Courses.CourseID, rating)}
                            />
                        </div>
                        <div className="col-3 homeSubHeadings">Class Difficulty </div>
                        <div className="col-3 homeSubHeadings">Class Usefulness </div>
                    </div>
                    <div className="row">
                        <div className="col"><a className="float-right" href="">VIEW MORE</a></div>
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