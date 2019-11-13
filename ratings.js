'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PercentageRating = function (_React$Component) {
    _inherits(PercentageRating, _React$Component);

    function PercentageRating(props) {
        _classCallCheck(this, PercentageRating);

        var _this = _possibleConstructorReturn(this, (PercentageRating.__proto__ || Object.getPrototypeOf(PercentageRating)).call(this, props));
        // console.log(props)


        _this.mouseEnter = function (num) {
            _this.setState({ index: num });
        };

        _this.mouseLeave = function () {
            _this.setState({ index: -1 });
        };

        _this.state = {
            isHover: false
        };
        return _this;
    }

    _createClass(PercentageRating, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(props) {
            this.setState({ rating: props.rating });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "button",
                { className: "percentageButtons align-middle",
                    style: !this.state.isHover ? { background: "linear-gradient(to right, " + this.props.color + " " + this.props.rating + "%, white 0%)" } : { background: "none" },
                    onMouseEnter: function onMouseEnter() {
                        return _this2.setState({ isHover: true });
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ isHover: false });
                    },
                    onClick: this.props.onClick
                },
                React.createElement(
                    "span",
                    { className: "percentageName", style: !this.state.isHover ? { display: "block" } : { display: "none" } },
                    this.props.type
                ),
                React.createElement(
                    "span",
                    { className: "percentage", style: !this.state.isHover ? { display: "block" } : { display: "none" } },
                    this.props.rating,
                    "%"
                ),
                React.createElement(
                    "span",
                    { className: "submit", style: this.state.isHover ? { display: "block" } : { display: "none" } },
                    "submit",
                    React.createElement("i", { "class": "fas fa-arrow-right", style: { position: "absolute", right: "10px", bottom: "6px" } })
                )
            );
        }
    }]);

    return PercentageRating;
}(React.Component);

var StarList = function (_React$Component2) {
    _inherits(StarList, _React$Component2);

    function StarList(props) {
        _classCallCheck(this, StarList);

        var _this3 = _possibleConstructorReturn(this, (StarList.__proto__ || Object.getPrototypeOf(StarList)).call(this, props));
        // console.log(props)


        _this3.mouseEnter = function (num) {
            _this3.setState({ index: num });
        };

        _this3.mouseLeave = function () {
            _this3.setState({ index: -1 });
            // console.log(this.state.rating);
        };

        _this3.state = {
            index: -1,
            rating: props.rating
        };
        return _this3;
    }

    _createClass(StarList, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(props) {
            this.setState({ rating: props.rating });
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return [1, 2, 3, 4, 5].map(function (num) {
                return React.createElement(Star, {
                    onMouseEnter: function onMouseEnter() {
                        return _this4.mouseEnter(num);
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this4.mouseLeave();
                    },
                    onClick: function onClick() {
                        return _this4.props.onClick(num);
                    },
                    isHover: num <= _this4.state.index,
                    isFull: num <= _this4.state.rating && _this4.state.index == -1
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
            { transform: "scale(.85) translate(14,14)" },
            React.createElement("path", {
                stroke: "rgba(0,0,0,.85)",
                "stroke-width": "20",
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

var Ratings = function (_React$Component3) {
    _inherits(Ratings, _React$Component3);

    function Ratings() {
        _classCallCheck(this, Ratings);

        var _this5 = _possibleConstructorReturn(this, (Ratings.__proto__ || Object.getPrototypeOf(Ratings)).call(this));

        _this5.renderClassEnjoyment = function (_ref) {
            var ClassEnjoyment = _ref.ClassEnjoyment;
            return React.createElement(
                "div",
                { className: "ratings" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-4" },
                        React.createElement(
                            "span",
                            { className: "ratingsName" },
                            "Class Enjoyment: "
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-5" },
                        React.createElement(StarList, {
                            key: ClassEnjoyment,
                            rating: Math.round(ClassEnjoyment),
                            onClick: function onClick(rating) {
                                return _this5.userRating("classEnjoyment", rating);
                            }
                        }),
                        React.createElement(
                            "span",
                            {
                                "class": "submitted",
                                style: _this5.state.classEnjoyment ? { display: "block" } : { display: "none" }
                            },
                            "submitted!"
                        )
                    )
                )
            );
        };

        _this5.renderClassUsefulness = function (_ref2) {
            var Useful = _ref2.Useful,
                NotUseful = _ref2.NotUseful;
            return React.createElement(
                "div",
                { className: "ratings" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-4" },
                        React.createElement(
                            "span",
                            { className: "ratingsName" },
                            "Class Usefulness: "
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-5" },
                        React.createElement(PercentageRating, {
                            type: "useful",
                            color: "#27FF9B",
                            rating: Math.round(Useful * 100),
                            onClick: function onClick() {
                                return _this5.userRating("classUsefulness", 1);
                            }
                        }),
                        React.createElement(PercentageRating, {
                            type: "not useful",
                            color: "#DB6E6E",
                            rating: Math.round(NotUseful * 100),
                            onClick: function onClick() {
                                return _this5.userRating("classUsefulness", 0);
                            }
                        }),
                        React.createElement(
                            "span",
                            {
                                "class": "submitted",
                                style: _this5.state.classUsefulness ? { display: "block", marginTop: "0" } : { display: "none" }
                            },
                            "submitted!"
                        )
                    )
                )
            );
        };

        _this5.renderExamDifficulty = function (_ref3) {
            var Easy = _ref3.Easy,
                Medium = _ref3.Medium,
                Hard = _ref3.Hard;
            return React.createElement(
                "div",
                { className: "ratings" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-4" },
                        React.createElement(
                            "span",
                            { className: "ratingsName" },
                            "Exam/Midterm Difficulty: "
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-5" },
                        React.createElement(PercentageRating, {
                            type: "easy",
                            color: "#27FF9B",
                            rating: Easy != null ? Math.round(Easy * 100) : 0,
                            onClick: function onClick() {
                                return _this5.userRating("examDifficulty", 1);
                            }
                        }),
                        React.createElement(PercentageRating, {
                            type: "medium",
                            color: "#27B4FF",
                            rating: Medium != null ? Math.round(Medium * 100) : 0,
                            onClick: function onClick() {
                                return _this5.userRating("examDifficulty", 0);
                            }
                        }),
                        React.createElement(PercentageRating, {
                            type: "hard",
                            color: "#DB6E6E",
                            rating: Hard != null ? Math.round(Hard * 100) : 0,
                            onClick: function onClick() {
                                return _this5.userRating("examDifficulty", -1);
                            }
                        }),
                        React.createElement(
                            "span",
                            {
                                "class": "submitted",
                                style: _this5.state.examDifficulty ? { display: "block", marginTop: "0" } : { display: "none" }
                            },
                            "submitted!"
                        )
                    )
                )
            );
        };

        _this5.state = {
            courseID: null,
            ratings: [],
            ratings2: [],
            classEnjoyment: null,
            classUsefulness: null,
            examDifficulty: null,
            userRating: null
        };
        return _this5;
    }

    _createClass(Ratings, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getRatings();
        }

        // Retrieves data from database, upon loading the webpage 

    }, {
        key: "getRatings",
        value: function getRatings() {
            var _this6 = this;

            var search = window.location.search;
            fetch('http://localhost:3000/course/findratings1' + search).then(function (response) {
                return response.json();
            }).then(function (response) {
                return _this6.setState({ courseID: response.courseID, ratings: response.data }, function () {
                    return console.log("ratings fetched...", _this6.state.ratings);
                });
            });

            fetch('http://localhost:3000/course/findratings2' + search).then(function (response) {
                return response.json();
            }).then(function (response) {
                return _this6.setState({ ratings2: response.data }, function () {
                    return console.log("ratings fetched...", _this6.state.ratings2);
                });
            });
        }

        // This sends ratings to the server
        // consider changing rating submission to one parameter instead of one for each
        // then differentiate between ratings based on type in server code

    }, {
        key: "postRatings",
        value: function postRatings(type) {
            var _this7 = this;

            setTimeout(function () {
                var _state = _this7.state,
                    courseID = _state.courseID,
                    userRating = _state.userRating;

                fetch("http://localhost:3000/course/addrating?courseid=" + courseID + "&type=" + type + "&rating=" + userRating).then(_this7.getRatings()).catch(function (err) {
                    return console.log(err);
                });
            }, 500);
        }
    }, {
        key: "userRating",
        value: function userRating(type, rating) {
            if (type === "classEnjoyment") {
                if (this.state.classEnjoyment) {
                    return;
                }
                this.setState({ classEnjoyment: true, userRating: rating });
            } else if (type === "classUsefulness") {
                if (this.state.classUsefulness) {
                    return;
                }
                this.setState({ classUsefulness: true, userRating: rating });
            } else if (type === "examDifficulty") {
                if (this.state.examDifficulty) {
                    return;
                }
                this.setState({ examDifficulty: true, userRating: rating });
            }
            this.postRatings(type);
        }

        // This renders the stars for class enjoyment, based on current state of the rating based on data from
        // database, it renders filled stars based on the rating, eg. rating = 4, then 4 gold stars

    }, {
        key: "render",
        value: function render() {
            var ratings = this.state.ratings;
            var ratings2 = this.state.ratings2;
            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-6 pl-5" },
                    ratings.map(this.renderClassEnjoyment),
                    ratings.map(this.renderClassUsefulness),
                    ratings2.map(this.renderExamDifficulty)
                ),
                React.createElement(
                    "div",
                    { className: "col-6" },
                    ratings.map(this.renderClassEnjoyment)
                )
            );
        }
    }]);

    return Ratings;
}(React.Component);

var domContainer = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(Ratings, null), domContainer);

// To do:
// Add other ratings, change databases if needed, add more tables for other ratings