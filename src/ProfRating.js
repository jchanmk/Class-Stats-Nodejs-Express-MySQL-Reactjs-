import StarList from "./StarList.js"

class ProfRating extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            rating: props.ProfRating,
            submitted: false
        };
    }
    componentWillReceiveProps(props) {
        this.setState({ rating: props.ProfRating});

    }

    render() {
        return (
            <div className="ratings">
            <div className="row">
                <div className="col-4">
                    <span className="ratingsName">Professor Rating: </span>
                </div>
                <div className="col-5">
                    <StarList
                        key={this.props.ProfRating}
                        rating={Math.round(this.props.ProfRating)}
                        // onClick={(rating) => this.userRating("profRating", rating)}
                        onClick={(rating) => this.props.onClick(rating)}
                    />
                    <span
                        class="submitted"
                        style={this.props.Submitted ?
                            { display: "block" } :
                            { display: "none" }}
                    >
                        submitted!
                        </span>
                </div>
            </div>
        </div>
        )
    }
}

export default ProfRating;