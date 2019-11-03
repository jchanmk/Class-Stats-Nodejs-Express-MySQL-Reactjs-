'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  componentDidMount(){
    let search = window.location.search;
    // console.log(search)

    // Successfully pass query params to API YEET
    fetch('http://localhost:3000/course/findratings' + search)
    //   .then(res => res.)
      // work on this
}
  render() {
    // if (this.state.liked) {
    //   return (
    //   <button onClick={() => this.setState({ liked: false }) }>
    //   Unike
    // </button>);
    // }

    // return (
    //   <button onClick={() => this.setState({ liked: true }) }>
    //     Like
    //   </button>
    // );

    return(
        <div class="row">
            <div class="col-6">
                <span>Class Enjoyment: </span><span>4/5</span>
            </div>
        </div>
    );
  }
  
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);