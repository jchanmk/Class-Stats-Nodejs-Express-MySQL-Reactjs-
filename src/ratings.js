'use strict';

class PercentageRating extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            isHover: false
        };
    }
    componentWillReceiveProps(props) {
        this.setState({ rating: props.rating });
    }
    mouseEnter = (num) => {
        this.setState({ index: num })
    }
    mouseLeave = () => {
        this.setState({ index: -1 })
    }
    render() {
        return (
            <button className="percentageButtons align-middle"
                style={!this.state.isHover ?
                    { background: `linear-gradient(to right, ${this.props.color} ${this.props.rating}%, white 0%)` }
                    : { background: "none" }}
                onMouseEnter={() => this.setState({ isHover: true })}
                onMouseLeave={() => this.setState({ isHover: false })}
                onClick={this.props.onClick}
            >
                <span className="percentageName" style={!this.state.isHover ? { display: "block" } : { display: "none" }}>
                    {this.props.type}
                </span>
                <span className="percentage" style={!this.state.isHover ? { display: "block" } : { display: "none" }}>
                    {this.props.rating}%
                </span>
                <span className="submit" style={this.state.isHover ? { display: "block" } : { display: "none" }}>
                    submit<i class="fas fa-arrow-right" style={{ position: "absolute", right: "10px", bottom: "6px" }}></i>
                </span>
            </button>
        )
    }
}

class StarList extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            index: -1,
            rating: props.rating
        };
    }
    componentWillReceiveProps(props) {
        this.setState({ rating: props.rating });
    }
    mouseEnter = (num) => {
        this.setState({ index: num })
    }
    mouseLeave = () => {
        this.setState({ index: -1 })
        // console.log(this.state.rating);
    }
    render() {
        return (
            [1, 2, 3, 4, 5].map(num => (
                <Star
                    onMouseEnter={() => this.mouseEnter(num)}
                    onMouseLeave={() => this.mouseLeave()}
                    onClick={() => this.props.onClick(num)}
                    isHover={num <= this.state.index}
                    isFull={num <= this.state.rating && this.state.index == -1}
                />
            ))
        )
    }
}

const Star = (props) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            height="2.0em"
            className="star"
        >
            <g transform="scale(.95) translate(15,15)">
                <path
                    stroke="rgba(0,0,0,.85)"
                    stroke-width="20"
                    fill={props.isFull ? 'gold' : 'transparent'}
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}
                    onClick={props.onClick}
                    className={props.isHover ? 'starHover' : null}
                    d="M492.867,181.444l-149.825-21.785L276.014,23.861c-8.187-16.59-31.844-16.589-40.031,0l-67.026,135.799L19.133,181.445c-18.306,2.662-25.615,25.158-12.369,38.071l108.408,105.682L89.592,474.44c-3.125,18.232,16.012,32.136,32.386,23.528l132.475-70.452l134.025,70.451c17.914,8.607,37.051-5.296,33.926-23.528l-25.578-149.241l108.409-105.685C518.482,206.601,511.173,184.105,492.867,181.444z"
                />
            </g>
        </svg>
    )
}

class Ratings extends React.Component {
    constructor() {
        super();
        this.state = {
            courseID: null,
            ratings: [],
            classEnjoyment: null,
            classUsefulness: null,
            userRating: null
        };
    }

    componentDidMount() {
        this.getRatings();
    }

    // Retrieves data from database, upon loading the webpage 
    getRatings() {
        let search = window.location.search;
        fetch('http://localhost:3000/course/findratings' + search)
            .then(response => response.json())
            .then(response => this.setState({ courseID: response.courseID, ratings: response.data }, () => console.log("ratings fetched...",
                this.state.ratings)));
    }

    // This sends ratings to the server
    // consider changing rating submission to one parameter instead of one for each
    // then differentiate between ratings based on type in server code
    postRatings(type) {
        setTimeout(() => {
            const { courseID, userRating } = this.state;
            fetch(`http://localhost:3000/course/addrating?courseid=${courseID}&type=${type}&rating=${userRating}`)
                .then(this.getRatings())
                .catch(err => console.log(err))
        }, 500)
    }
    userRating(type, rating) {
        if (type === "classEnjoyment") {
            if(this.state.classEnjoyment){
                return;
            }
            this.setState({ classEnjoyment: true, userRating: rating })
        } else if (type === "classUsefulness") {
            if(this.state.classUsefulness){
                return;
            }
            this.setState({ classUsefulness: true, userRating: rating })
        }
        this.postRatings(type);
    }

    // This renders the stars for class enjoyment, based on current state of the rating based on data from
    // database, it renders filled stars based on the rating, eg. rating = 4, then 4 gold stars
    renderClassEnjoyment = ({ ClassEnjoyment }) =>
        <div className="ratings">
            <div className="row">
                <div className="col-5">
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


    renderClassUsefulness = ({ Useful, NotUseful }) =>
        <div className="ratings">
            <div className="row">
                <div className="col-5">
                    <span className="ratingsName">Class Usefulness: </span>
                </div>
                <div className="col-5">
                    <PercentageRating
                        type="useful"
                        color="#27FF9B"
                        rating={Math.round(Useful * 100)}
                        onClick={() => this.userRating("classUsefulness", 1)}
                    />
                    <PercentageRating
                        type="not useful"
                        color="#DB6E6E"
                        rating={Math.round(NotUseful * 100)}
                        onClick={() => this.userRating("classUsefulness", 0)}
                    />
                    <span
                        class="submitted"
                        style={this.state.classUsefulness ?
                            { display: "block", marginTop: "0"} :
                            { display: "none"}}
                    >
                        submitted!
                        </span>
                </div>
            </div>
        </div>;

    render() {
        const ratings = this.state.ratings;
        return (
            // Later, when you add more ratings, to have it be 2 columns, simply put ratings in 2 
            // columns
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
ReactDOM.render(<Ratings />, domContainer);