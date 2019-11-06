'use strict';

class LikeButton extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = { liked: false };
    //   }

    constructor() {
        super();
        this.state = {
            ratings: [],
            classEnjoyment: null
        };
    }

    componentDidMount() {
        this.getRatings();
    }

    // Retrieves data from database, upon loading the webpage 
    getRatings() {
        let search = window.location.search;
        fetch('http://localhost:3000/course/findratings' + search)
            .then(res => res.json())
            .then(response => this.setState({ ratings: response.data }, () => console.log("ratings fetched...",
                this.state.ratings)));
    }

    // This sends ratings to the server
    // ****** This needs to be changed to adapt to any type of rating *****
    postRatings() {
        setTimeout(() => {
            const { classEnjoyment } = this.state;
            fetch(`http://localhost:3000/course/addrating?courseid=1609&type=Class_Enjoyment&rating=${classEnjoyment}`)
                .then(this.getRatings())
                .catch(err => console.log(err))
        }, 500)
    }

    // actual star component, is filled based on parameters, and each individual one is clicked 
    // it sends a different rating to the database
    star(full, index, type) {
        return (
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                height="2.0em"
                className="star"
                onClick={() => {
                    if( type == "Class_Enjoyment")
                        this.setState({ classEnjoyment: index }, this.postRatings())
                    else
                        console.log("different rating");
                }
                }
            >
                <g transform="scale(.95) translate(15,15)">
                    <path
                        stroke="rgba(0,0,0,.85)"
                        stroke-width="30"
                        fill={full ? 'gold' : 'transparent'}
                        d="M492.867,181.444l-149.825-21.785L276.014,23.861c-8.187-16.59-31.844-16.589-40.031,0l-67.026,135.799L19.133,181.445c-18.306,2.662-25.615,25.158-12.369,38.071l108.408,105.682L89.592,474.44c-3.125,18.232,16.012,32.136,32.386,23.528l132.475-70.452l134.025,70.451c17.914,8.607,37.051-5.296,33.926-23.528l-25.578-149.241l108.409-105.685C518.482,206.601,511.173,184.105,492.867,181.444z"
                    />
                </g>
            </svg>
        );
    }

    // Create the star ratings based on the score, and the type of rating
    createStarRatings(rating, type) {
        let stars = []
        for (var i = 1; i < 6; i++) {
            if (i <= rating)
                stars.push(this.star(true, i, type));
            else
                stars.push(this.star(false, i, type));
        }
        return stars
    }

    // This renders the stars for class enjoyment, based on current state of the rating based on data from
    // database, it renders filled stars based on the rating, eg. rating = 4, then 4 gold stars
    renderClassEnjoyment = ({ ClassEnjoyment }) => 
    <div>
        Class Enjoyment: {(ClassEnjoyment)}     
        {this.createStarRatings(Math.round(ClassEnjoyment), "Class_Enjoyment")}
    </div>;


    renderClassUsefulness = ({ Useful, NotUseful }) => <div>Class Usefulness: Useful = {Useful}, Not Useful = {NotUseful}</div>;

    render() {
        const ratings = this.state.ratings;

        return (
            <div className="row">
                <div className="col-6">
                    {ratings.map(this.renderClassEnjoyment)}
                    {ratings.map(this.renderClassUsefulness)}
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);