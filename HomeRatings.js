'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PercentageRating from "./PercentageRating.js";
import StarList from "./StarList.js";
import HomeClassEnjoyment from "./HomeClassEnjoyment.js";
import HomeClassDifficulty from "./HomeClassDifficulty.js";
import HomeClassUsefulness from "./HomeClassUsefulness.js";

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

        _this.state = {
            courseID: null,
            ratings: [],
            classEnjoyment: [],
            classDifficulty: [],
            classUsefulness: [],
            studentID: document.getElementById('homeHeader').getAttribute('data-name').replace(/ /g, "_")
        };
        return _this;
    }

    _createClass(Home, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // fetch data from server, get all current classes this.studentID is taking 
            // their first 3 ratings, name, instructor
            // console.log(this.state.studentID)
            this.getRatings();
        }
    }, {
        key: "getRatings",
        value: function getRatings() {
            var _this2 = this;

            // fetch data from server, get all current classes this.studentID is taking 
            // their first 3 ratings, name, instructor
            // then add ratings to state
            // render ratings
            fetch('http://localhost:3000/home/' + this.state.studentID).then(function (response) {
                return response.json();
            }).then(function (response) {
                return _this2.setState({ ratings: response.data });
            });
        }
    }, {
        key: "postRatings",
        value: function postRatings(type, courseID, rating) {
            var _this3 = this;

            setTimeout(function () {
                // const { courseID, userRating } = this.state;
                fetch("http://localhost:3000/course/addrating?courseid=" + courseID + "&type=" + type + "&rating=" + rating).then(function (response) {
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
        value: function userRating(type, courseID, rating) {
            // console.log(type)
            // console.log(courseID)
            // console.log(rating)
            if (type === "classEnjoyment" && !this.state.classEnjoyment.includes(courseID)) {
                this.setState(function (state) {
                    var classEnjoyment = state.classEnjoyment.concat(courseID);
                    return {
                        classEnjoyment: classEnjoyment
                    };
                });
            } else if (type === "classDifficulty" && !this.state.classDifficulty.includes(courseID)) {
                this.setState(function (state) {
                    var classDifficulty = state.classDifficulty.concat(courseID);
                    return {
                        classDifficulty: classDifficulty
                    };
                });
            } else if (type === "classUsefulness" && !this.state.classUsefulness.includes(courseID)) {
                this.setState(function (state) {
                    var classUsefulness = state.classUsefulness.concat(courseID);
                    return {
                        classUsefulness: classUsefulness
                    };
                });
            } else {
                return;
            }
            this.postRatings(type, courseID, rating);
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            var ratings = this.state.ratings;
            if (!this.state.ratings.length) return null;
            console.log(ratings);

            return ratings.map(function (Courses) {
                return React.createElement(
                    "div",
                    { className: "mt-3 mb-5 ml-5 homeCourses" },
                    React.createElement(
                        "div",
                        { className: "row mt-3 mb-3" },
                        React.createElement(
                            "div",
                            { className: "col" },
                            React.createElement(
                                "h4",
                                { className: "homeCourseName" },
                                Courses.Name
                            ),
                            React.createElement(
                                "span",
                                { className: "homeSubHeadings" },
                                "Professor ",
                                Courses.Lname
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-3 homeSubHeadings" },
                            "STATS:",
                            React.createElement(
                                "div",
                                { className: "callToAction" },
                                "*hover over each stat to provide your own!"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-3 homeSubHeadings" },
                            "Class Enjoyment",
                            React.createElement(HomeClassEnjoyment, {
                                ClassEnjoyment: Courses.ClassEnjoyment,
                                Submitted: _this4.state.classEnjoyment.includes(Courses.CourseID) ? true : false,
                                onClick: function onClick(rating) {
                                    return _this4.userRating("classEnjoyment", Courses.CourseID, rating);
                                }
                            })
                        ),
                        React.createElement(
                            "div",
                            { className: "col-3 homeSubHeadings" },
                            "Class Difficulty",
                            React.createElement(HomeClassDifficulty, {
                                Easy: Courses.Easy,
                                Medium: Courses.Medium,
                                Hard: Courses.Hard,
                                Submitted: _this4.state.classDifficulty.includes(Courses.CourseID) ? true : false,
                                onClick: function onClick(rating) {
                                    return _this4.userRating("classDifficulty", Courses.CourseID, rating);
                                }
                                // onClick={rating => console.log(rating)}
                            })
                        ),
                        React.createElement(
                            "div",
                            { className: "col-3 homeSubHeadings" },
                            "Class Usefulness",
                            React.createElement(HomeClassUsefulness, {
                                Useful: Courses.Useful,
                                NotUseful: Courses.NotUseful,
                                Submitted: _this4.state.classUsefulness.includes(Courses.CourseID) ? true : false,
                                onClick: function onClick(rating) {
                                    return _this4.userRating("classUsefulness", Courses.CourseID, rating);
                                }
                                //  onClick={rating => console.log(rating)}
                            })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col" },
                            React.createElement(
                                "a",
                                {
                                    className: "float-right viewMore",
                                    href: "/course?instructorid=" + Courses.InstructorID + "&courseid=" + Courses.CourseID },
                                "VIEW MORE"
                            )
                        )
                    )
                );
            });
        }
    }]);

    return Home;
}(React.Component);

var domContainer = document.querySelector('#test');
ReactDOM.render(React.createElement(Home, null), domContainer);

// To do:
// - Other homescreen ratings
// - homescreen only submit one rating per class per rating functionality