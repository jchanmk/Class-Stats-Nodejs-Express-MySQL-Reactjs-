import StarList from "./StarList.js"

class HomeClassEnjoyment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: props.ClassEnjoyment,
            submitted: false
        };
    }
    componentWillReceiveProps(props) {
        this.setState({ rating: props.ClassEnjoyment });
    }

    render() {
        return (
            <div className="ratings">
                <StarList
                    key={this.props.ClassEnjoyment}
                    rating={Math.round(this.props.ClassEnjoyment)}
                    // onClick={(rating) => this.userRating("classEnjoyment", rating)}
                    onClick={this.props.onClick}
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
        )
    }
}

export default HomeClassEnjoyment;