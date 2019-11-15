import StarList from "./StarList.js"

class ClassEnjoyment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: props.ClassEnjoyment,
            submitted: false
        };
    }
    componentWillReceiveProps(props) {
        this.setState({ rating: props.ClassEnjoyment});
    }

    render() {
        return (
            <div className="ratings">
                <div className="row">
                    <div className="col-4">
                        <span className="ratingsName">Class Enjoyment: </span>
                    </div>
                    <div className="col-5">
                        <StarList
                            key={this.props.ClassEnjoyment}
                            rating={Math.round(this.props.ClassEnjoyment)}
                            // onClick={(rating) => this.userRating("classEnjoyment", rating)}
                            onClick={this.props.onClick}
                        />
                        {/* {(ClassEnjoyment)} */}
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

export default ClassEnjoyment;