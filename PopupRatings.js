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

var PopupRatings = function (_React$Component) {
    _inherits(PopupRatings, _React$Component);

    function PopupRatings() {
        _classCallCheck(this, PopupRatings);

        var _this = _possibleConstructorReturn(this, (PopupRatings.__proto__ || Object.getPrototypeOf(PopupRatings)).call(this));

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

    _createClass(PopupRatings, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
        // this.getRatings();


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
        value: function postRatings(type) {}
    }, {
        key: "userRating",
        value: function userRating(type, rating) {
            this.postRatings(type);
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { id: "myModal", className: "popup" },
                    React.createElement(
                        "div",
                        { className: "modal-content" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row mb-3" },
                                React.createElement(
                                    "div",
                                    { className: "col" },
                                    React.createElement(
                                        "h3",
                                        { className: "popupHeader" },
                                        "RATE A CLASS"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col" },
                                    React.createElement(
                                        "p",
                                        { className: "popupSubheader" },
                                        "We noticed you took",
                                        React.createElement(
                                            "span",
                                            { className: "popupClassInfo" },
                                            " COMP239: DATA STRUCTURES "
                                        ),
                                        "with ",
                                        React.createElement(
                                            "span",
                                            { className: "popupClassInfo" },
                                            " Professor Chen "
                                        )
                                    )
                                )
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