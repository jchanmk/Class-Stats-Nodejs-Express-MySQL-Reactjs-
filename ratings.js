'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PercentageRating from "./PercentageRating.js";
import StarList from "./StarList.js";

var Ratings = function (_React$Component) {
    _inherits(Ratings, _React$Component);

    function Ratings() {
        _classCallCheck(this, Ratings);

        var _this = _possibleConstructorReturn(this, (Ratings.__proto__ || Object.getPrototypeOf(Ratings)).call(this));

        _this.renderClassEnjoyment = function (_ref) {
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
                                return _this.userRating("classEnjoyment", rating);
                            }
                        }),
                        React.createElement(
                            "span",
                            {
                                "class": "submitted",
                                style: _this.state.classEnjoyment ? { display: "block" } : { display: "none" }
                            },
                            "submitted!"
                        )
                    )
                )
            );
        };

        _this.renderProfRating = function (_ref2) {
            var ProfRating = _ref2.ProfRating;
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
                            "Professor Rating: "
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-5" },
                        React.createElement(StarList, {
                            key: ProfRating,
                            rating: Math.round(ProfRating),
                            onClick: function onClick(rating) {
                                return _this.userRating("profRating", rating);
                            }
                        }),
                        React.createElement(
                            "span",
                            {
                                "class": "submitted",
                                style: _this.state.profRating ? { display: "block" } : { display: "none" }
                            },
                            "submitted!"
                        )
                    )
                )
            );
        };

        _this.renderClassUsefulness = function (_ref3) {
            var Useful = _ref3.Useful,
                NotUseful = _ref3.NotUseful;
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
                            rating: Useful != null ? Math.round(Useful * 100) : 0,
                            onClick: function onClick() {
                                return _this.userRating("classUsefulness", 1);
                            }
                        }),
                        React.createElement(PercentageRating, {
                            type: "not useful",
                            color: "#DB6E6E",
                            rating: NotUseful != null ? Math.round(NotUseful * 100) : 0,
                            onClick: function onClick() {
                                return _this.userRating("classUsefulness", 0);
                            }
                        }),
                        React.createElement(
                            "span",
                            {
                                "class": "submitted",
                                style: _this.state.classUsefulness ? { display: "block", marginTop: "0" } : { display: "none" }
                            },
                            "submitted!"
                        )
                    )
                )
            );
        };

        _this.renderExamDifficulty = function (_ref4) {
            var Easy = _ref4.Easy,
                Medium = _ref4.Medium,
                Hard = _ref4.Hard;
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
                                return _this.userRating("examDifficulty", 1);
                            }
                        }),
                        React.createElement(PercentageRating, {
                            type: "medium",
                            color: "#27B4FF",
                            rating: Medium != null ? Math.round(Medium * 100) : 0,
                            onClick: function onClick() {
                                return _this.userRating("examDifficulty", 0);
                            }
                        }),
                        React.createElement(PercentageRating, {
                            type: "hard",
                            color: "#DB6E6E",
                            rating: Hard != null ? Math.round(Hard * 100) : 0,
                            onClick: function onClick() {
                                return _this.userRating("examDifficulty", -1);
                            }
                        }),
                        React.createElement(
                            "span",
                            {
                                "class": "submitted",
                                style: _this.state.examDifficulty ? { display: "block", marginTop: "0" } : { display: "none" }
                            },
                            "submitted!"
                        )
                    )
                )
            );
        };

        _this.renderAttendanceAttn = function (_ref5) {
            var Inattentive = _ref5.Inattentive,
                Attentive = _ref5.Attentive;
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
                            "Professors Attention to Attendance/ Tardies: "
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-5" },
                        React.createElement(PercentageRating, {
                            type: "inattentive",
                            color: "#27FF9B",
                            rating: Inattentive != null ? Math.round(Inattentive * 100) : 0,
                            onClick: function onClick() {
                                return _this.userRating("attendanceAttn", 1);
                            }
                        }),
                        React.createElement(PercentageRating, {
                            type: "attentive",
                            color: "#DB6E6E",
                            rating: Attentive != null ? Math.round(Attentive * 100) : 0,
                            onClick: function onClick() {
                                return _this.userRating("attendanceAttn", 0);
                            }
                        }),
                        React.createElement(
                            "span",
                            {
                                "class": "submitted",
                                style: _this.state.attendanceAttn ? { display: "block", marginTop: "0" } : { display: "none" }
                            },
                            "submitted!"
                        )
                    )
                )
            );
        };

        _this.renderClassDifficulty = function (_ref6) {
            var Easy = _ref6.Easy,
                Medium = _ref6.Medium,
                Hard = _ref6.Hard;
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
                            "Class Difficulty: "
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
                                return _this.userRating("classDifficulty", 1);
                            }
                        }),
                        React.createElement(PercentageRating, {
                            type: "medium",
                            color: "#27B4FF",
                            rating: Medium != null ? Math.round(Medium * 100) : 0,
                            onClick: function onClick() {
                                return _this.userRating("classDifficulty", 0);
                            }
                        }),
                        React.createElement(PercentageRating, {
                            type: "hard",
                            color: "#DB6E6E",
                            rating: Hard != null ? Math.round(Hard * 100) : 0,
                            onClick: function onClick() {
                                return _this.userRating("classDifficulty", -1);
                            }
                        }),
                        React.createElement(
                            "span",
                            {
                                "class": "submitted",
                                style: _this.state.classDifficulty ? { display: "block", marginTop: "0" } : { display: "none" }
                            },
                            "submitted!"
                        )
                    )
                )
            );
        };

        _this.state = {
            courseID: null,
            ratings: [],
            ratings2: [],
            ratings3: [],
            classEnjoyment: null,
            classUsefulness: null,
            examDifficulty: null,
            classDifficulty: null,
            attendanceAttn: null,
            profRating: null,
            userRating: null
        };
        return _this;
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
            var _this2 = this;

            var search = window.location.search;
            fetch('http://localhost:3000/course/findratings1' + search).then(function (response) {
                return response.json();
            }).then(function (response) {
                return _this2.setState({ courseID: response.courseID, ratings: response.data });
            });

            fetch('http://localhost:3000/course/findratings2' + search).then(function (response2) {
                return response2.json();
            }).then(function (response2) {
                return _this2.setState({ ratings2: response2.data });
            });

            fetch('http://localhost:3000/course/findratings3' + search).then(function (response3) {
                return response3.json();
            }).then(function (response3) {
                return _this2.setState({ ratings3: response3.data });
            });
        }

        // This sends ratings to the server
        // figure out a way to do without setTimeout, maybe do a promise 

    }, {
        key: "postRatings",
        value: function postRatings(type) {
            var _this3 = this;

            setTimeout(function () {
                var _state = _this3.state,
                    courseID = _state.courseID,
                    userRating = _state.userRating;

                fetch("http://localhost:3000/course/addrating?courseid=" + courseID + "&type=" + type + "&rating=" + userRating).then(function (response) {
                    return response;
                }).then(function (response) {
                    return _this3.getRatings();
                }).catch(function (err) {
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
            } else if (type === "attendanceAttn") {
                if (this.state.attendanceAttn) {
                    return;
                }
                this.setState({ attendanceAttn: true, userRating: rating });
            } else if (type === "profRating") {
                if (this.state.profRating) {
                    return;
                }
                this.setState({ profRating: true, userRating: rating });
            } else if (type === "classDifficulty") {
                if (this.state.classDifficulty) {
                    return;
                }
                this.setState({ classDifficulty: true, userRating: rating });
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
            var ratings3 = this.state.ratings3;

            return React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-6 pl-5" },
                    ratings.map(this.renderClassEnjoyment),
                    ratings.map(this.renderClassUsefulness),
                    ratings2.map(this.renderExamDifficulty),
                    ratings2.map(this.renderAttendanceAttn)
                ),
                React.createElement(
                    "div",
                    { className: "col-6" },
                    ratings3.map(this.renderProfRating),
                    ratings3.map(this.renderClassDifficulty)
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