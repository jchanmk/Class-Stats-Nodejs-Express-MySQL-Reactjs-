'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PercentageRating from "./PercentageRating.js";
import StarList from "./StarList.js";

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

        _this.state = {
            courseID: null,
            ratings: [],
            studentID: document.getElementById('homeHeader').getAttribute('data-name').replace(/ /g, "_")
        };
        return _this;
    }

    _createClass(Home, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            // fetch data from server, get all current classes this.studentID is taking 
            // their first 3 ratings, name, instructor
            // console.log(this.state.studentID)
            fetch('http://localhost:3000/home/' + this.state.studentID).then(function (response) {
                return response.json();
            }).then(function (response) {
                return _this2.setState({ ratings: response.data });
            });
        }
    }, {
        key: "getRatings",
        value: function getRatings() {
            // fetch data from server, get all current classes this.studentID is taking 
            // their first 3 ratings, name, instructor
            // then add ratings to state
            // render ratings
        }
    }, {
        key: "render",
        value: function render() {
            var ratings = this.state.ratings;
            if (!this.state.ratings.length) return null;

            return ratings.map(function (Courses) {
                return React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "h1",
                        null,
                        "YOYO MADE CONTACT"
                    ),
                    React.createElement(
                        "h1",
                        null,
                        Courses.CourseID
                    )
                );
            });
        }
    }]);

    return Home;
}(React.Component);

var domContainer = document.querySelector('#test');
ReactDOM.render(React.createElement(Home, null), domContainer);