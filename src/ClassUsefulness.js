import PercentageRating from "./PercentageRating.js"

class ClassUsefulness extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            useful: props.Useful,
            notUseful: props.NotUseful,
            submitted: false
        };
    }

    render() {
        return (
            <div className="ratings">
            <div className="row">
                <div className="col-4">
                    <span className="ratingsName">Class Usefulness: </span>
                </div>
                <div className="col-5">
                    <PercentageRating
                        type="useful"
                        color="#27FF9B"
                        rating={this.props.Useful != null ? Math.round(this.props.Useful * 100) : 0}
                        // onClick={() => this.userRating("classUsefulness", 1)}
                        onClick={() => this.props.onClick(1)}
                    />
                    <PercentageRating
                        type="not useful"
                        color="#DB6E6E"
                        rating={this.props.NotUseful != null ? Math.round(this.props.NotUseful * 100) : 0}
                        // onClick={() => this.userRating("classUsefulness", 0)}
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

export default ClassUsefulness;