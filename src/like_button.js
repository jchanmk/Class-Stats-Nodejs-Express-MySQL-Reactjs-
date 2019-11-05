// 'use strict';

import StarRatings from './react-star-ratings';

class LikeButton extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = { liked: false };
    //   }

    constructor() {
        super();
        this.state = {
            ratings: []
        };
    }

    componentDidMount() {
        let search = window.location.search;
        fetch('http://localhost:3000/course/findratings' + search)
            .then(res => res.json())
            .then(response => this.setState({ ratings: response.data }, () => console.log("ratings fetched...",
                this.state.ratings)));
    }

    renderClassEnjoyment = ({ ClassEnjoyment }) => <div>Class Enjoyment: {ClassEnjoyment}</div>;
    renderClassUsefulness = ({ Useful, NotUseful }) => <div>Class Usefulness: Useful = {Useful}, Not Useful = {NotUseful}</div>;

    render() {
        const ratings = this.state.ratings;
        return (
            <div className="row">
                <div className="col-6">
                    {ratings.map(this.renderClassEnjoyment)}
                    {ratings.map(this.renderClassUsefulness)}
                </div>
                {/* <Star full={ true } /> */}
            </div>
        );
    }

}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);