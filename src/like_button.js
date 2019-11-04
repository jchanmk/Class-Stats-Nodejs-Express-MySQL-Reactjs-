'use strict';

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
        // fetch('http://localhost:3000/course/findratings' + search)
        //   .then(res => res.json())
        //   .then(ratings => this.setState({ratings}, () => console.log("Ratings fetched..", 
        //   this.state.ratings)));
        fetch('http://localhost:3000/course/findratings' + search)
            .then(res => res.json())
            .then(response => this.setState({ ratings: response.data }, () => console.log("ratings fetched...",
                this.state.ratings)));
            // .then(response => console.log(response))
    }

    renderClassEnjoyment = ({ ClassEnjoyment }) => <div>Class Enjoyment: {ClassEnjoyment}</div>;
    renderClassUsefulness = ({ Useful, NotUseful }) => <div>Class Usefulness: Useful = {Useful}, Not Useful = {NotUseful}</div>;

    render() {
        // if (this.state.liked) {
        //   return (
        //   <button onClick={() => this.setState({ liked: false }) }>
        //   Unike
        // </button>);
        // }

        // return (
        //   <button onClick={() => this.setState({ liked: true }) }>
        //     Like
        //   </button>
        // );
        const ratings = this.state.ratings;
        // console.log(ratings.length);
        // const ClassEnjoyment = " ";
        // if(ratings.length !== 0){
        //     ClassEnjoyment = ratings[0].ClassEnjoyment;
        // }
        return (
            <div class="row">
                <div class="col-6">
                    {ratings.map(this.renderClassEnjoyment)}
                    {ratings.map(this.renderClassUsefulness)}
                </div>
            </div>
        );
    }

}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);