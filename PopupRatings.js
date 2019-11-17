// write a reactjs code that will count the seconds after component did mount 
// and then have it pop up on the page
// store in a cookie if the user has received a popup before so they only get one 
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
import PopupHeaders from "./PopupHeaders.js";

var PopupRatings = function (_React$Component) {
    _inherits(PopupRatings, _React$Component);

    function PopupRatings() {
        _classCallCheck(this, PopupRatings);

        var _this = _possibleConstructorReturn(this, (PopupRatings.__proto__ || Object.getPrototypeOf(PopupRatings)).call(this));

        _this.state = {
            courseID: null,
            courseName: null,
            profName: null,
            studentID: document.getElementById('courseTitle').getAttribute('data-name').replace(/ /g, "_"),
            ratings: [{ ClassEnjoyment: null }],
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
            userRating: null,
            popup: true
        };
        return _this;
    }

    _createClass(PopupRatings, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.getClassInfo();
            // this.getRatings();
            // this.getRatings();
            // setTimeout(() => this.setState({popup: true}), 4000);
        }
    }, {
        key: "getClassInfo",
        value: function getClassInfo() {
            var _this2 = this;

            // Write a function that calls to the server, picks the class info for one of the courses
            // that the user has taken in the past 
            fetch('http://localhost:3000/popup/' + this.state.studentID).then(function (response) {
                return response.json();
            })
            // .then(response => console.log(response))
            .then(function (response) {
                return _this2.setState({
                    courseID: response.data[0].CourseID,
                    courseName: response.data[0].Name,
                    profName: response.data[0].Lname
                });
            });
        }

        // Retrieves data from database, upon loading the webpage 

    }, {
        key: "getRatings",
        value: function getRatings() {
            var _this3 = this;

            // console.log(this.state.courseID)
            fetch('http://localhost:3000/course/findratings1?courseid=' + this.state.courseID).then(function (response) {
                return response.json();
            }).then(function (response) {
                return _this3.setState({ ratings: response.data });
            });

            fetch('http://localhost:3000/course/findratings2?courseid=' + this.state.courseID).then(function (response2) {
                return response2.json();
            }).then(function (response2) {
                return _this3.setState({ ratings2: response2.data });
            });

            fetch('http://localhost:3000/course/findratings3?courseid=' + this.state.courseID).then(function (response3) {
                return response3.json();
            }).then(function (response3) {
                return _this3.setState({ ratings3: response3.data });
            });

            fetch('http://localhost:3000/course/findratings4?courseid=' + this.state.courseID).then(function (response4) {
                return response4.json();
            }).then(function (response4) {
                return _this3.setState({ ratings4: response4.data });
            });

            fetch('http://localhost:3000/course/findratings5?courseid=' + this.state.courseID).then(function (response5) {
                return response5.json();
            }).then(function (response5) {
                return _this3.setState({ ratings5: response5.data });
            });
        }

        // This sends ratings to the server
        // figure out a way to do without setTimeout, maybe do a promise 

    }, {
        key: "postRatings",
        value: function postRatings(type, rating) {
            var _this4 = this;

            var courseID = this.state.courseID;

            fetch("http://localhost:3000/course/addrating?courseid=" + courseID + "&type=" + type + "&rating=" + rating).then(function (response) {
                return response;
            }).then(function (response) {
                return _this4.getRatings();
            }).catch(function (err) {
                return console.log(err);
            });
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
                return;
            }
            // console.log(this.state.courseID);
            // console.log(this.state.courseName);
            // console.log(this.state.profName);
            // console.log(rating)
            // console.log(this.state.ratings)
            this.postRatings(type, rating);
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            var ratings = this.state.ratings;
            var ratings2 = this.state.ratings2;
            var ratings3 = this.state.ratings3;
            var ratings4 = this.state.ratings4;
            var ratings5 = this.state.ratings5;

            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { id: "myModal", className: "popup", style: this.state.popup ? { display: 'block' } : { display: 'false' } },
                    React.createElement(
                        "div",
                        { className: "container modal-content" },
                        React.createElement(PopupHeaders, {
                            ClassName: this.state.courseName,
                            Professor: this.state.profName
                        }),
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col-md-6 pl-lg-5" },
                                React.createElement(ClassEnjoyment, {
                                    ClassEnjoyment: this.state.classEnjoyment && ratings.length ? ratings[0].ClassEnjoyment : null,
                                    Submitted: this.state.classEnjoyment,
                                    onClick: function onClick(rating) {
                                        return _this5.userRating("classEnjoyment", rating);
                                    }
                                })
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-6" },
                                React.createElement(ProfRating
                                // ProfRating={ratings3[0].ProfRating}
                                , { ProfRating: this.state.profRating && ratings3.length ? ratings3[0].ProfRating : null,
                                    Submitted: this.state.profRating,
                                    onClick: function onClick(rating) {
                                        return _this5.userRating("profRating", rating);
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
                                React.createElement(ClassUsefulness
                                // Useful={ratings[0].Useful}
                                , { Useful: this.state.classUsefulness && ratings.length ? ratings[0].Useful : null,
                                    NotUseful: this.state.classUsefulness && ratings.length ? ratings[0].NotUseful : null,
                                    Submitted: this.state.classUsefulness,
                                    onClick: function onClick(rating) {
                                        return _this5.userRating("classUsefulness", rating);
                                    }
                                }),
                                React.createElement(ExamDifficulty, {
                                    Easy: this.state.examDifficulty && ratings2.length ? ratings2[0].Easy : null,
                                    Medium: this.state.examDifficulty && ratings2.length ? ratings2[0].Medium : null,
                                    Hard: this.state.examDifficulty && ratings2.length ? ratings2[0].Hard : null,
                                    Submitted: this.state.examDifficulty,
                                    onClick: function onClick(rating) {
                                        return _this5.userRating("examDifficulty", rating);
                                    }
                                }),
                                React.createElement(AttendanceAttn, {
                                    Inattentive: this.state.attendanceAttn && ratings2.length ? ratings2[0].Inattentive : null,
                                    Attentive: this.state.attendanceAttn && ratings2.length ? ratings2[0].Attentive : null,
                                    Submitted: this.state.attendanceAttn,
                                    onClick: function onClick(rating) {
                                        return _this5.userRating("attendanceAttn", rating);
                                    }
                                }),
                                React.createElement(ClassType, {
                                    Lecture: this.state.classType && ratings4.length ? ratings4[0].Lecture : null,
                                    Discussion: this.state.classType && ratings4.length ? ratings4[0].Discussion : null,
                                    Submitted: this.state.classType,
                                    onClick: function onClick(rating) {
                                        return _this5.userRating("classType", rating);
                                    }
                                })
                            ),
                            React.createElement(
                                "div",
                                { className: "col-md-6" },
                                React.createElement(ClassDiffuculty, {
                                    Easy: this.state.classDifficulty && ratings3.length ? ratings3[0].Easy : null,
                                    Medium: this.state.classDifficulty && ratings3.length ? ratings3[0].Medium : null,
                                    Hard: this.state.classDifficulty && ratings3.length ? ratings3[0].Hard : null,
                                    Submitted: this.state.classDifficulty,
                                    onClick: function onClick(rating) {
                                        return _this5.userRating("classDifficulty", rating);
                                    }
                                }),
                                React.createElement(TestHeavy, {
                                    Light: this.state.testHeavy && ratings4.length ? ratings4[0].Light : null,
                                    Heavy: this.state.testHeavy && ratings4.length ? ratings4[0].Heavy : null
                                    // Heavy={ratings4[0].Heavy}
                                    , Submitted: this.state.testHeavy,
                                    onClick: function onClick(rating) {
                                        return _this5.userRating("testHeavy", rating);
                                    }
                                }),
                                React.createElement(HomeworkLoad, {
                                    Light: this.state.homeworkLoad && ratings5.length ? ratings5[0].Light : null,
                                    Heavy: this.state.homeworkLoad && ratings5.length ? ratings5[0].Heavy : null,
                                    Submitted: this.state.homeworkLoad,
                                    onClick: function onClick(rating) {
                                        return _this5.userRating("homeworkLoad", rating);
                                    }
                                }),
                                React.createElement(ProfApproach, {
                                    Yes: this.state.profApproach && ratings5.length ? ratings5[0].Yes : null,
                                    No: this.state.profApproach && ratings5.length ? ratings5[0].No : null,
                                    Submitted: this.state.profApproach,
                                    onClick: function onClick(rating) {
                                        return _this5.userRating("profApproach", rating);
                                    }
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PopupRatings;
}(React.Component);

var domContainer = document.querySelector('#popup');
ReactDOM.render(React.createElement(PopupRatings, null), domContainer);