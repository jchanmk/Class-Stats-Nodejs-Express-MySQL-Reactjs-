'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PercentageRating from "./PercentageRating.js";
import StarList from "./StarList.js";
import ClassEnjoyment from "./ClassEnjoyment.js";
import ClassUsefulness from "./ClassUsefulness.js";
import ExamDifficulty from "./ExamDifficulty.js";
import AttendanceAttn from "./AttendanceAttn.js";
import ClassType from "./ClassType.js";
import ProfRating from "./ProfRating.js";
import ClassDiffuculty from "./ClassDifficulty.js";
import TestHeavy from "./TestHeavy.js";
import HomeworkLoad from "./HomeworkLoad.js";
import ProfApproach from "./ProfApproach.js";

var Ratings = function (_React$Component) {
    _inherits(Ratings, _React$Component);

    function Ratings() {
        _classCallCheck(this, Ratings);

        var _this = _possibleConstructorReturn(this, (Ratings.__proto__ || Object.getPrototypeOf(Ratings)).call(this));

        _this.state = {
            courseID: null,
            ratings: [],
            ratings2: [],
            ratings3: [],
            ratings4: [],
            ratings5: [],
            classEnjoyment: null,
            classUsefulness: null,
            examDifficulty: null,
            classDifficulty: null,
            attendanceAttn: null,
            homeworkLoad: null,
            classType: null,
            testHeavy: null,
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

            fetch('http://localhost:3000/course/findratings4' + search).then(function (response4) {
                return response4.json();
            }).then(function (response4) {
                return _this2.setState({ ratings4: response4.data });
            });

            fetch('http://localhost:3000/course/findratings5' + search).then(function (response5) {
                return response5.json();
            }).then(function (response5) {
                return _this2.setState({ ratings5: response5.data });
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
            if (type === "classEnjoyment" && !this.state.classEnjoyment) {
                this.setState({ classEnjoyment: true, userRating: rating });
            } else if (type === "classUsefulness" && !this.state.classUsefulness) {
                this.setState({ classUsefulness: true, userRating: rating });
            } else if (type === "examDifficulty" && !this.state.examDifficulty) {
                this.setState({ examDifficulty: true, userRating: rating });
            } else if (type === "attendanceAttn" && !this.state.attendanceAttn) {
                this.setState({ attendanceAttn: true, userRating: rating });
            } else if (type === "profRating" && !this.state.profRating) {
                this.setState({ profRating: true, userRating: rating });
            } else if (type === "classDifficulty" && !this.state.classDifficulty) {
                this.setState({ classDifficulty: true, userRating: rating });
            } else if (type === "testHeavy" && !this.state.testHeavy) {
                this.setState({ testHeavy: true, userRating: rating });
            } else if (type === "classType" && !this.state.classType) {
                this.setState({ classType: true, userRating: rating });
            } else if (type === "homeworkLoad" && !this.state.homeworkLoad) {
                this.setState({ homeworkLoad: true, userRating: rating });
            } else if (type === "profApproach" && !this.state.profApproach) {
                this.setState({ profApproach: true, userRating: rating });
            } else {
                console.log("hi");
                return;
            }
            this.postRatings(type);
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var ratings = this.state.ratings;
            var ratings2 = this.state.ratings2;
            var ratings3 = this.state.ratings3;
            var ratings4 = this.state.ratings4;
            var ratings5 = this.state.ratings5;
            // console.log(ratings5);

            // need to add conditions for all ratings
            if (!this.state.ratings.length || !this.state.ratings2.length || !this.state.ratings3.length || !this.state.ratings4.length || !this.state.ratings5.length) {
                return null;
            }
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-6 pl-lg-5" },
                        React.createElement(ClassEnjoyment, {
                            ClassEnjoyment: ratings[0].ClassEnjoyment,
                            Submitted: this.state.classEnjoyment,
                            onClick: function onClick(rating) {
                                return _this4.userRating("classEnjoyment", rating);
                            }
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-6" },
                        React.createElement(ProfRating, {
                            ProfRating: ratings3[0].ProfRating,
                            Submitted: this.state.profRating,
                            onClick: function onClick(rating) {
                                return _this4.userRating("profRating", rating);
                            }
                        })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-6 pl-lg-5" },
                        React.createElement(ClassUsefulness, {
                            Useful: ratings[0].Useful,
                            NotUseful: ratings[0].NotUseful,
                            Submitted: this.state.classUsefulness,
                            onClick: function onClick(rating) {
                                return _this4.userRating("classUsefulness", rating);
                            }
                        }),
                        React.createElement(ExamDifficulty, {
                            Easy: ratings2[0].Easy,
                            Medium: ratings2[0].Medium,
                            Hard: ratings2[0].Hard,
                            Submitted: this.state.examDifficulty,
                            onClick: function onClick(rating) {
                                return _this4.userRating("examDifficulty", rating);
                            }
                        }),
                        React.createElement(AttendanceAttn, {
                            Inattentive: ratings2[0].Inattentive,
                            Attentive: ratings2[0].Attentive,
                            Submitted: this.state.attendanceAttn,
                            onClick: function onClick(rating) {
                                return _this4.userRating("attendanceAttn", rating);
                            }
                        }),
                        React.createElement(ClassType, {
                            Lecture: ratings4[0].Lecture,
                            Discussion: ratings4[0].Discussion,
                            Submitted: this.state.classType,
                            onClick: function onClick(rating) {
                                return _this4.userRating("classType", rating);
                            }
                        })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-6" },
                        React.createElement(ClassDiffuculty, {
                            Easy: ratings3[0].Easy,
                            Medium: ratings3[0].Medium,
                            Hard: ratings3[0].Hard,
                            Submitted: this.state.classDifficulty,
                            onClick: function onClick(rating) {
                                return _this4.userRating("classDifficulty", rating);
                            }
                        }),
                        React.createElement(TestHeavy, {
                            Light: ratings4[0].Light,
                            Heavy: ratings4[0].Heavy,
                            Submitted: this.state.testHeavy,
                            onClick: function onClick(rating) {
                                return _this4.userRating("testHeavy", rating);
                            }
                        }),
                        React.createElement(HomeworkLoad, {
                            Light: ratings5[0].Light,
                            Heavy: ratings5[0].Heavy,
                            Submitted: this.state.homeworkLoad,
                            onClick: function onClick(rating) {
                                return _this4.userRating("homeworkLoad", rating);
                            }
                        }),
                        React.createElement(ProfApproach, {
                            Yes: ratings5[0].Yes,
                            No: ratings5[0].No,
                            Submitted: this.state.profApproach,
                            onClick: function onClick(rating) {
                                return _this4.userRating("profApproach", rating);
                            }
                        })
                    )
                )
            );
        }
    }]);

    return Ratings;
}(React.Component);

var domContainer = document.querySelector('#ratings_container');
ReactDOM.render(React.createElement(Ratings, null), domContainer);