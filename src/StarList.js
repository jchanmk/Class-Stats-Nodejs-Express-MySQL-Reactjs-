import Star from "./Star.js"

class StarList extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            index: -1,
            rating: props.rating
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
        // console.log(this.state.rating);
    }
    render() {
        return (
            [1, 2, 3, 4, 5].map(num => (
                <Star
                    onMouseEnter={() => this.mouseEnter(num)}
                    onMouseLeave={() => this.mouseLeave()}
                    onClick={() => this.props.onClick(num)}
                    isHover={num <= this.state.index}
                    isFull={num <= this.state.rating && this.state.index == -1}
                />
            ))
        )
    }
}

export default StarList;