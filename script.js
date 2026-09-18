/* =====================================================
   JAVASCRIPT QUIZ
===================================================== */

const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which language is mainly used to style webpages?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correct: 1
    },

    {
        question: "Which keyword creates a constant in JavaScript?",
        answers: [
            "var",
            "let",
            "const",
            "constant"
        ],
        correct: 2
    },

    {
        question: "Which method is used to select an element by ID?",
        answers: [
            "getElementById()",
            "getElement()",
            "selectById()",
            "findElement()"
        ],
        correct: 0
    },

    {
        question: "Which CSS feature is useful for two-dimensional layouts?",
        answers: [
            "CSS Grid",
            "CSS Text",
            "CSS Font",
            "CSS Border"
        ],
        correct: 0
    }
];


let currentQuestion = 0;

let score = 0;

let answered = false;


const questionText =
    document.getElementById("questionText");

const answerButtons =
    document.getElementById("answerButtons");

const nextButton =
    document.getElementById("nextButton");

const questionNumber =
    document.getElementById("questionNumber");

const scoreDisplay =
    document.getElementById("scoreDisplay");

const quizProgress =
    document.getElementById("quizProgress");

const quizResult =
    document.getElementById("quizResult");


function loadQuestion() {

    answered = false;

    nextButton.disabled = true;

    quizResult.textContent = "";

    const question =
        questions[currentQuestion];


    questionText.textContent =
        question.question;


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    scoreDisplay.textContent =
        `Score: ${score}`;


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;


    quizProgress.style.width =
        `${progress}%`;


    answerButtons.innerHTML = "";


    question.answers.forEach(
        function (answer, index) {

            const button =
                document.createElement("button");

            button.className =
                "answer-button";

            button.textContent =
                answer;


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(index, button);

                }
            );


            answerButtons.appendChild(button);

        }
    );
}


function selectAnswer(index, selectedButton) {

    if (answered) {
        return;
    }


    answered = true;

    nextButton.disabled = false;


    const correctAnswer =
        questions[currentQuestion].correct;


    const allButtons =
        document.querySelectorAll(".answer-button");


    allButtons.forEach(
        function (button, buttonIndex) {

            button.disabled = true;


            if (buttonIndex === correctAnswer) {

                button.classList.add("correct");

            }

        }
    );


    if (index === correctAnswer) {

        score++;

        selectedButton.classList.add("correct");

        quizResult.textContent =
            "Correct! Great job.";

    } else {

        selectedButton.classList.add("wrong");

        quizResult.textContent =
            "Not quite. The correct answer is highlighted.";

    }


    scoreDisplay.textContent =
        `Score: ${score}`;
}


nextButton.addEventListener(
    "click",
    function () {

        currentQuestion++;


        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            showQuizResult();

        }

    }
);


function showQuizResult() {

    questionText.textContent =
        "Quiz Completed!";

    questionNumber.textContent =
        "Finished";

    scoreDisplay.textContent =
        `Final Score: ${score}/${questions.length}`;

    answerButtons.innerHTML = "";

    quizProgress.style.width = "100%";


    let message;


    if (score === questions.length) {

        message =
            "Perfect score! Excellent work.";

    } else if (score >= 3) {

        message =
            "Great job! Keep learning.";

    } else {

        message =
            "Good attempt! Practice makes progress.";

    }


    quizResult.textContent = message;


    nextButton.textContent =
        "Restart Quiz";

    nextButton.disabled = false;


    nextButton.onclick = function () {

        currentQuestion = 0;

        score = 0;

        nextButton.textContent =
            "Next Question";

        nextButton.onclick = null;

        loadQuestion();

    };

}


/* Start Quiz */

loadQuestion();



/* =====================================================
   IMAGE CAROUSEL
===================================================== */

const images = [
    {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        title: "Modern Development Workspace"
    },

    {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        title: "Learning Web Development"
    },

    {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        title: "Programming and Code"
    },

    {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
        title: "Writing JavaScript"
    },

    {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        title: "Technology and Innovation"
    }
];


let currentImage = 0;


const carouselImage =
    document.getElementById("carouselImage");

const imageTitle =
    document.getElementById("imageTitle");

const imageCounter =
    document.getElementById("imageCounter");

const carouselDots =
    document.getElementById("carouselDots");

const previousButton =
    document.getElementById("previousButton");

const nextImageButton =
    document.getElementById("nextImageButton");


function showImage(index) {

    const image =
        images[index];


    carouselImage.src =
        image.url;


    carouselImage.alt =
        image.title;


    imageTitle.textContent =
        image.title;


    imageCounter.textContent =
        `${index + 1} / ${images.length}`;


    carouselDots.innerHTML = "";


    images.forEach(
        function (_, dotIndex) {

            const dot =
                document.createElement("button");

            dot.className =
                "carousel-dot";


            if (dotIndex === index) {

                dot.classList.add("active");

            }


            dot.addEventListener(
                "click",
                function () {

                    currentImage = dotIndex;

                    showImage(currentImage);

                }
            );


            carouselDots.appendChild(dot);

        }
    );
}


previousButton.addEventListener(
    "click",
    function () {

        currentImage--;

        if (currentImage < 0) {

            currentImage =
                images.length - 1;

        }

        showImage(currentImage);

    }
);


nextImageButton.addEventListener(
    "click",
    function () {

        currentImage++;

        if (currentImage >= images.length) {

            currentImage = 0;

        }

        showImage(currentImage);

    }
);


/* Automatic Carousel */

setInterval(
    function () {

        currentImage++;

        if (currentImage >= images.length) {

            currentImage = 0;

        }

        showImage(currentImage);

    },
    5000
);


showImage(currentImage);



/* =====================================================
   WEATHER API
===================================================== */

const cityInput =
    document.getElementById("cityInput");

const weatherButton =
    document.getElementById("weatherButton");

const weatherResult =
    document.getElementById("weatherResult");

const weatherError =
    document.getElementById("weatherError");


/*
    Convert weather code into readable text.
*/

function getWeatherDescription(code) {

    const descriptions = {

        0: "Clear sky",

        1: "Mainly clear",

        2: "Partly cloudy",

        3: "Overcast",

        45: "Foggy",

        48: "Rime fog",

        51: "Light drizzle",

        53: "Moderate drizzle",

        55: "Dense drizzle",

        61: "Light rain",

        63: "Moderate rain",

        65: "Heavy rain",

        71: "Light snow",

        73: "Moderate snow",

        75: "Heavy snow",

        80: "Rain showers",

        81: "Moderate rain showers",

        82: "Heavy rain showers",

        95: "Thunderstorm",

        96: "Thunderstorm with hail",

        99: "Thunderstorm with heavy hail"

    };


    return descriptions[code] ||
        "Weather information unavailable";
}


/*
    Get coordinates from city name.
*/

async function getCoordinates(city) {

    const url =
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;


    const response =
        await fetch(url);


    if (!response.ok) {

        throw new Error(
            "Unable to find the location."
        );

    }


    const data =
        await response.json();


    if (!data.results ||
        data.results.length === 0) {

        throw new Error(
            "City not found. Please try another city."
        );

    }


    return data.results[0];
}


/*
    Get weather information.
*/

async function getWeather() {

    const city =
        cityInput.value.trim();


    if (city === "") {

        weatherError.textContent =
            "Please enter a city name.";

        return;

    }


    weatherError.textContent = "";


    weatherResult.innerHTML =
        `<div class="weather-loading">
            Loading weather data...
        </div>`;


    try {

        /*
            First API request:
            Convert city into latitude/longitude.
        */

        const location =
            await getCoordinates(city);


        /*
            Second API request:
            Fetch current weather.
        */

        const weatherUrl =
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`;


        const weatherResponse =
            await fetch(weatherUrl);


        if (!weatherResponse.ok) {

            throw new Error(
                "Weather service is unavailable."
            );

        }


        const weather =
            await weatherResponse.json();


        const current =
            weather.current;


        const description =
            getWeatherDescription(
                current.weather_code
            );


        /*
            Display API data dynamically.
        */

        weatherResult.innerHTML = `

            <div class="weather-main">

                <div class="weather-location">

                    <h3>
                        ${location.name}
                    </h3>

                    <p>
                        ${location.country || ""}
                    </p>

                    <p>
                        ${description}
                    </p>

                </div>

                <div class="weather-temperature">

                    ${Math.round(current.temperature_2m)}°C

                </div>

            </div>


            <div class="weather-details">

                <div class="weather-detail">

                    <strong>
                        ${Math.round(
                            current.apparent_temperature
                        )}°C
                    </strong>

                    <span>
                        Feels Like
                    </span>

                </div>


                <div class="weather-detail">

                    <strong>
                        ${current.relative_humidity_2m}%
                    </strong>

                    <span>
                        Humidity
                    </span>

                </div>


                <div class="weather-detail">

                    <strong>
                        ${Math.round(
                            current.wind_speed_10m
                        )} km/h
                    </strong>

                    <span>
                        Wind Speed
                    </span>

                </div>

            </div>

        `;

    } catch (error) {

        weatherResult.innerHTML = "";

        weatherError.textContent =
            error.message ||
            "Something went wrong while fetching weather.";

    }

}


/* Weather button */

weatherButton.addEventListener(
    "click",
    getWeather
);


/* Press Enter */

cityInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            getWeather();

        }

    }
);


/* Load Jaipur weather automatically */

getWeather();