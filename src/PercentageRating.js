class PercentageRating extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            isHover: false
        };
    }
    componentWillReceiveProps(props) {
        this.setState({ rating: props.rating });
    }
    mouseEnter = (num) => {
        this.setState({ index: num })
    }
    mouseLeave = () => {
        this.setState({ index: -1 })
    }
    render() {
        return (
            <button className="percentageButtons align-middle"
                style={!this.state.isHover ?
                    { background: `linear-gradient(to right, ${this.props.color} ${this.props.rating}%, white 0%)` }
                    : { background: "none" }}
                onMouseEnter={() => this.setState({ isHover: true })}
                onMouseLeave={() => this.setState({ isHover: false })}
                onClick={this.props.onClick}
            >
                <span className="percentageName" style={!this.state.isHover ? { display: "block" } : { display: "none" }}>
                    {this.props.type}
                </span>
                <span className="percentage" style={!this.state.isHover ? { display: "block" } : { display: "none" }}>
                    {this.props.rating}%
                </span>
                <span className="submit" style={this.state.isHover ? { display: "block" } : { display: "none" }}>
                    submit<i class="fas fa-arrow-right" style={{ position: "absolute", right: "10px", bottom: "6px" }}></i>
                </span>
            </button>
        )
    }
}

export default PercentageRating;
