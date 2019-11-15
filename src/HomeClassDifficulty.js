import PercentageRating from "./PercentageRating.js"

class HomeClassDifficulty extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            easy: props.Easy,
            medium: props.Medium,
            hard: props.Hard,
            submitted: false
        };
    }

    render() {
        return (
            <div className="ratings">
                <PercentageRating
                    type="easy"
                    color="#27FF9B"
                    rating={this.props.Easy != null ? Math.round(this.props.Easy * 100) : 0}
                    // onClick={() => this.userRating("examDifficulty", 1)}
                    onClick={() => this.props.onClick(1)}
                />
                <PercentageRating
                    type="medium"
                    color="#27B4FF"
                    rating={this.props.Medium != null ? Math.round(this.props.Medium * 100) : 0}
                    // onClick={() => this.userRating("examDifficulty", 0)}
                    onClick={() => this.props.onClick(0)}
                />
                <PercentageRating
                    type="hard"
                    color="#DB6E6E"
                    rating={this.props.Hard != null ? Math.round(this.props.Hard * 100) : 0}
                    // onClick={() => this.userRating("examDifficulty", -1)}
                    onClick={() => this.props.onClick(-1)}
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
        )
    }
}

export default HomeClassDifficulty;