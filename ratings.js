'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
import ServerURL from "/config/serverUrl.js";

var Ratings = function (_React$Component) {
    _inherits(Ratings, _React$Component);

    function Ratings() {
        _classCallCheck(this, Ratings);

        var _this = _possibleConstructorReturn(this, (Ratings.__proto__ || Object.getPrototypeOf(Ratings)).call(this));

        _this.state = {
            courseID: null,
            courseHistory: [],
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
            var type = 1;
            this.getRatings(type);
        }

        // Retrieves data from database, upon loading the webpage 

    }, {
        key: "getRatings",
        value: function getRatings(type) {
            var _this2 = this;

            var search = window.location.search;
            if (type === 1) {
                console.log("getting course history");
                fetch(ServerURL + '/course/findCourseHistory').then(function (response) {
                    return response.json();
                }).then(function (response) {
                    return _this2.setState({ courseHistory: response.data });
                });
                // .then(response => console.log(response.data));
            }

            if (type === "classEnjoyment" || type === "classUsefulness" || type === 1) {
                console.log("in here fetch class enjoyment");
                fetch(ServerURL + '/course/findratings1' + search).then(function (response) {
                    return response.json();
                }).then(function (response) {
                    return _this2.setState({ courseID: response.courseID, ratings: response.data });
                });
            }

            if (type === "examDifficulty" || type === "attendanceAttn" || type === 1) {
                console.log("in exam difficutly fetch");
                fetch(ServerURL + '/course/findratings2' + search).then(function (response2) {
                    return response2.json();
                }).then(function (response2) {
                    return _this2.setState({ ratings2: response2.data });
                });
            }

            if (type === "profRating" || type === "classDifficulty" || type === 1) {
                fetch(ServerURL + '/course/findratings3' + search).then(function (response3) {
                    return response3.json();
                }).then(function (response3) {
                    return _this2.setState({ ratings3: response3.data });
                });
            }

            if (type === "testHeavy" || type === "classType" || type === 1) {
                fetch(ServerURL + '/course/findratings4' + search).then(function (response4) {
                    return response4.json();
                }).then(function (response4) {
                    return _this2.setState({ ratings4: response4.data });
                });
            }

            if (type === "homeworkLoad" || type === "profApproach" || type === 1) {
                fetch(ServerURL + '/course/findratings5' + search).then(function (response5) {
                    return response5.json();
                }).then(function (response5) {
                    return _this2.setState({ ratings5: response5.data });
                });
            }
        }
        // getRatings() {
        //     let search = window.location.search;
        //     fetch(ServerURL + '/course/findratings1' + search)
        //         .then(response => response.json())
        //         .then(response => this.setState({ courseID: response.courseID, ratings: response.data }),

        //         fetch(ServerURL + '/course/findratings2' + search)
        //         .then(response2 => response2.json())
        //         .then(response2 => this.setState({ ratings2: response2.data }),

        //     fetch(ServerURL + '/course/findratings3' + search)
        //         .then(response3 => response3.json())
        //         .then(response3 => this.setState({ ratings3: response3.data }),

        //     fetch(ServerURL + '/course/findratings4' + search)
        //         .then(response4 => response4.json())
        //         .then(response4 => this.setState({ ratings4: response4.data }),
        //     fetch(ServerURL + '/course/findratings5' + search)
        //         .then(response5 => response5.json())
        //         .then(response5 => this.setState({ ratings5: response5.data }))))))
        // }

        // This sends ratings to the server

    }, {
        key: "postRatings",
        value: function postRatings(type, rating) {
            var _this3 = this;

            var courseID = this.state.courseID;

            console.log(courseID + " " + type + " " + rating);
            fetch(ServerURL + ("/course/addrating?courseid=" + courseID + "&type=" + type + "&rating=" + rating)).then(function (response) {
                return response;
            }).then(function (response) {
                return _this3.getRatings(type);
            }).catch(function (err) {
                return console.log(err);
            });
        }

        // identify the type of user rating and then send it to the server in postRatings()

    }, {
        key: "userRating",
        value: function userRating(type, rating) {
            // this for loop checks to see if the user submitting the rating has taken the class before
            // if they haven't they cannot submit a rating

            for (var i = 0; i < this.state.courseHistory.length; i++) {
                if (this.state.courseHistory[i].CourseNum == this.state.courseID) {
                    break;
                } else if (i == this.state.courseHistory.length - 1) {
                    return;
                }
            }

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
                return;
            }
            this.postRatings(type, rating);
        }

        // renders the ratings with reactjs and ratings stored in state

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