import PercentageRating from "./PercentageRating.js"

class HomeworkLoad extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            light: props.Light,
            heavy: props.Heavy,
            submitted: false
        };
    }
    // componentWillReceiveProps(props) {
    //     this.setState({ rating: props.TestHeavy});
    // }

    render() {
        return (
            <div className="ratings">
                <div className="row">
                    <div className="col-4">
                        <span className="ratingsName">Homework Load: </span>
                    </div>
                    <div className="col-5">
                        <PercentageRating
                            type="light"
                            color="#27FF9B"
                            rating={this.props.Light != null ? Math.round(this.props.Light * 100) : 0}
                            onClick={() => this.props.onClick(1)}
                        />
                        <PercentageRating
                            type="heavy"
                            color="#DB6E6E"
                            rating={this.props.Heavy != null ? Math.round(this.props.Heavy * 100) : 0}
                            onClick={() => this.props.onClick(0)}
                        />
                        <span
                            class="submitted"
                            style={this.props.Submitted ?
                                { display: "block", marginTop: "0" } :
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

export default HomeworkLoad;