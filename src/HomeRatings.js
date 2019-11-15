'use strict';
import PercentageRating from "./PercentageRating.js";
import StarList from "./StarList.js"


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            courseID: null,
            ratings: [],
            studentID: document.getElementById('homeHeader').getAttribute('data-name').replace(/ /g, "_")
        };
    }

    componentDidMount() {
        // fetch data from server, get all current classes this.studentID is taking 
        // their first 3 ratings, name, instructor
        // console.log(this.state.studentID)
        fetch('http://localhost:3000/home/' + this.state.studentID)
            .then(response => response.json())
            .then(response => this.setState({ ratings: response.data }));
    }

    getRatings() {
        // fetch data from server, get all current classes this.studentID is taking 
        // their first 3 ratings, name, instructor
        // then add ratings to state
        // render ratings
    }

    render() {
        const ratings = this.state.ratings
        if (!this.state.ratings.length)
            return null;

        return (
            ratings.map(Courses => (
                <div className="row">
                    <h1>YOYO MADE CONTACT</h1>
                    <h1>{Courses.CourseID}</h1>
                </div>
            ))

        );
    }
}

let domContainer = document.querySelector('#test');
ReactDOM.render(<Home />, domContainer);

