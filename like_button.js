'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LikeButton = function (_React$Component) {
    _inherits(LikeButton, _React$Component);

    //   constructor(props) {
    //     super(props);
    //     this.state = { liked: false };
    //   }

    function LikeButton() {
        _classCallCheck(this, LikeButton);

        var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this));

        _this.renderClassEnjoyment = function (_ref) {
            var ClassEnjoyment = _ref.ClassEnjoyment;
            return React.createElement(
                'div',
                null,
                'Class Enjoyment: ',
                ClassEnjoyment
            );
        };

        _this.renderClassUsefulness = function (_ref2) {
            var Useful = _ref2.Useful,
                NotUseful = _ref2.NotUseful;
            return React.createElement(
                'div',
                null,
                'Class Usefulness: Useful = ',
                Useful,
                ', Not Useful = ',
                NotUseful
            );
        };

        _this.state = {
            ratings: []
        };
        return _this;
    }

    _createClass(LikeButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var search = window.location.search;
            // fetch('http://localhost:3000/course/findratings' + search)
            //   .then(res => res.json())
            //   .then(ratings => this.setState({ratings}, () => console.log("Ratings fetched..", 
            //   this.state.ratings)));
            fetch('http://localhost:3000/course/findratings' + search).then(function (res) {
                return res.json();
            }).then(function (response) {
                return _this2.setState({ ratings: response.data }, function () {
                    return console.log("ratings fetched...", _this2.state.ratings);
                });
            });
            // .then(response => console.log(response))
        }
    }, {
        key: 'render',
        value: function render() {
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
            var ratings = this.state.ratings;
            // console.log(ratings.length);
            // const ClassEnjoyment = " ";
            // if(ratings.length !== 0){
            //     ClassEnjoyment = ratings[0].ClassEnjoyment;
            // }
            return React.createElement(
                'div',
                { 'class': 'row' },
                React.createElement(
                    'div',
                    { 'class': 'col-6' },
                    ratings.map(this.renderClassEnjoyment),
                    ratings.map(this.renderClassUsefulness)
                )
            );
        }
    }]);

    return LikeButton;
}(React.Component);

var domContainer = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(LikeButton, null), domContainer);