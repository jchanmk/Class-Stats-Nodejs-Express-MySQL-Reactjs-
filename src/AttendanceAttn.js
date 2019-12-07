import PercentageRating from "./PercentageRating.js"

class AttendanceAttn extends React.Component {
    constructor(props) {
        // console.log(props)
        console.log("in attendance attn component")
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
                    <span className="ratingsName">Professors Attention to Attendance/ Tardies: </span>
                </div>
                <div className="col-5">
                    <PercentageRating
                        type="inattentive"
                        color="#27FF9B"
                        rating={this.props.Inattentive != null ? Math.round(this.props.Inattentive * 100) : 0}
                        // onClick={() => this.userRating("attendanceAttn", 1)}
                        onClick={() => this.props.onClick(1)}
                    />
                    <PercentageRating
                        type="attentive"
                        color="#DB6E6E"
                        rating={this.props.Attentive != null ? Math.round(this.props.Attentive * 100) : 0}
                        // onClick={() => this.userRating("attendanceAttn", 0)}
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

export default AttendanceAttn;