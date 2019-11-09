'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StarList = function (_React$Component) {
    _inherits(StarList, _React$Component);

    function StarList(props) {
        _classCallCheck(this, StarList);

        console.log(props);

        var _this = _possibleConstructorReturn(this, (StarList.__proto__ || Object.getPrototypeOf(StarList)).call(this, props));

        _this.mouseEnter = function (num) {
            _this.setState({ index: num });
        };

        _this.mouseLeave = function () {
            _this.setState({ index: -1 });
            console.log(_this.state.rating);
        };

        _this.state = {
            index: -1,
            rating: props.rating
        };
        return _this;
    }

    _createClass(StarList, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(props) {
            this.setState({ rating: props.rating });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return [1, 2, 3, 4, 5].map(function (num) {
                return React.createElement(Star, {
                    onMouseEnter: function onMouseEnter() {
                        return _this2.mouseEnter(num);
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.mouseLeave();
                    },
                    onClick: function onClick() {
                        return _this2.props.onClick(num);
                    },
                    isHover: num <= _this2.state.index,
                    isFull: num <= _this2.state.rating && _this2.state.index == -1
                });
            });
        }
    }]);

    return StarList;
}(React.Component);

var Star = function Star(props) {
    return React.createElement(
        "svg",
        {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            viewBox: "0 0 512 512",
            height: "2.0em",
            className: "star"
        },
        React.createElement(
            "g",
            { transform: "scale(.95) translate(15,15)" },
            React.createElement("path", {
                stroke: "rgba(0,0,0,.85)",
                "stroke-width": "30",
                fill: props.isFull ? 'gold' : 'transparent',
                onMouseEnter: props.onMouseEnter,
                onMouseLeave: props.onMouseLeave,
                onClick: props.onClick,
                className: props.isHover ? 'starHover' : null,
                d: "M492.867,181.444l-149.825-21.785L276.014,23.861c-8.187-16.59-31.844-16.589-40.031,0l-67.026,135.799L19.133,181.445c-18.306,2.662-25.615,25.158-12.369,38.071l108.408,105.682L89.592,474.44c-3.125,18.232,16.012,32.136,32.386,23.528l132.475-70.452l134.025,70.451c17.914,8.607,37.051-5.296,33.926-23.528l-25.578-149.241l108.409-105.685C518.482,206.601,511.173,184.105,492.867,181.444z"
            })
        )
    );
};

var LikeButton = function (_React$Component2) {
    _inherits(LikeButton, _React$Component2);

    function LikeButton() {
        _classCallCheck(this, LikeButton);

        var _this3 = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this));

        _this3.renderClassEnjoyment = function (_ref) {
            var ClassEnjoyment = _ref.ClassEnjoyment;
            return React.createElement(
                "div",
                { className: "ratings" },
                "Class Enjoyment:",
                React.createElement(StarList, {
                    key: ClassEnjoyment,
                    rating: Math.round(ClassEnjoyment),
                    onClick: function onClick(rating) {
                        return _this3.userRating(rating);
                    }
                }),
                ClassEnjoyment
            );
        };

        _this3.renderClassUsefulness = function (_ref2) {
            var Useful = _ref2.Useful,
                NotUseful = _ref2.NotUseful;
            return React.createElement(
                "div",
                { className: "ratings" },
                "Class Usefulness: Useful = ",
                Useful,
                ", Not Useful = ",
                NotUseful
            );
        };

        _this3.state = {
            ratings: [],
            classEnjoyment: null
        };
        return _this3;
    }

    _createClass(LikeButton, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getRatings();
        }

        // Retrieves data from database, upon loading the webpage 

    }, {
        key: "getRatings",
        value: function getRatings() {
            var _this4 = this;

            var search = window.location.search;
            fetch('http://localhost:3000/course/findratings' + search).then(function (res) {
                return res.json();
            }).then(function (response) {
                return _this4.setState({ ratings: response.data }, function () {
                    return console.log("ratings fetched...", _this4.state.ratings);
                });
            });
        }

        // This sends ratings to the server
        // ****** This needs to be changed to adapt to any type of rating *****

    }, {
        key: "postRatings",
        value: function postRatings() {
            var _this5 = this;

            setTimeout(function () {
                var classEnjoyment = _this5.state.classEnjoyment;

                fetch("http://localhost:3000/course/addrating?courseid=1609&type=Class_Enjoyment&rating=" + classEnjoyment).then(_this5.getRatings()).catch(function (err) {
                    return console.log(err);
                });
            }, 500);
        }
    }, {
        key: "userRating",
        value: function userRating(rating) {
            this.setState({ classEnjoyment: rating });
            this.postRatings();
        }
        // This renders the stars for class enjoyment, based on current state of the rating based on data from
        // database, it renders filled stars based on the rating, eg. rating = 4, then 4 gold stars

    }, {
        key: "render",
        value: function render() {
            var ratings = this.state.ratings;
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-6" },
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