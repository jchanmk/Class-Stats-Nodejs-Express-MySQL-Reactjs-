import PercentageRating from "./PercentageRating.js"

class ClassType extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            inattentive: props.Inattentive,
            attentive: props.Attentive,
            submitted: false
        };
    }

    render() {
        return (
            <div className="ratings">
            <div className="row">
                <div className="col-4">
                    <span className="ratingsName">Discussion or Lecture based curriculum? </span>
                </div>
                <div className="col-5">
                    <PercentageRating
                        type="lecture"
                        color="#27B4FF"
                        rating={this.props.Lecture != null ? Math.round(this.props.Lecture * 100) : 0}
                        // onClick={() => this.userRating("classType", 1)}
                        onClick={() => this.props.onClick(1)}
                    />
                    <PercentageRating
                        type="discussion"
                        color="#27B4FF"
                        rating={this.props.Discussion != null ? Math.round(this.props.Discussion * 100) : 0}
                        // onClick={() => this.userRating("classType", 0)}
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

export default ClassType;