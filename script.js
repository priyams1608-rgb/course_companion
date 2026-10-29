// ============================================================
// COLLEGE COMPANION - JAVASCRIPT
// ============================================================


// ------------------------------------------------------------
// 1. EDIT PROFILE
// ------------------------------------------------------------

// Find the Edit Profile button
const editProfileBtn = document.getElementById("editProfileBtn");

if (editProfileBtn) {

    editProfileBtn.addEventListener("click", function () {

        const name = prompt("Enter your name:");

        if (name !== null && name.trim() !== "") {

            // Find the profile name on the page
            const profileName = document.getElementById("profileName");

            if (profileName) {
                profileName.textContent = name;
            }

            // Save the name in browser storage
            localStorage.setItem("studentName", name);

            alert("Profile updated successfully!");

        }

    });

}


// ------------------------------------------------------------
// 2. LOAD SAVED PROFILE NAME
// ------------------------------------------------------------

const savedName = localStorage.getItem("studentName");

if (savedName) {

    const profileName = document.getElementById("profileName");

    if (profileName) {
        profileName.textContent = savedName;
    }

}


// ------------------------------------------------------------
// 3. ATTENDANCE CALCULATOR
// ------------------------------------------------------------

function calculateAttendance() {

    const attendedInput = document.getElementById("attendedClasses");
    const totalInput = document.getElementById("totalClasses");
    const result = document.getElementById("attendanceResult");

    if (!attendedInput || !totalInput || !result) {
        return;
    }

    const attended = Number(attendedInput.value);
    const total = Number(totalInput.value);

    if (total <= 0) {

        result.textContent = "Please enter a valid number of total classes.";

        return;
    }

    if (attended < 0 || attended > total) {

        result.textContent =
            "Attended classes cannot be greater than total classes.";

        return;
    }

    const percentage = (attended / total) * 100;

    result.textContent =
        "Your attendance is " + percentage.toFixed(2) + "%";

}


// ------------------------------------------------------------
// 4. ADD ATTENDANCE CALCULATOR BUTTON
// ------------------------------------------------------------

const attendanceButton =
    document.getElementById("calculateAttendanceBtn");

if (attendanceButton) {

    attendanceButton.addEventListener(
        "click",
        calculateAttendance
    );

}


// ------------------------------------------------------------
// 5. ASSIGNMENT MANAGEMENT
// ------------------------------------------------------------

const addAssignmentBtn =
    document.getElementById("addAssignmentBtn");

if (addAssignmentBtn) {

    addAssignmentBtn.addEventListener("click", function () {

        const assignmentName =
            prompt("Enter assignment name:");

        if (assignmentName === null ||
            assignmentName.trim() === "") {

            return;
        }

        const assignmentList =
            document.getElementById("assignmentList");

        if (!assignmentList) {
            return;
        }

        // Create new assignment
        const assignment =
            document.createElement("div");

        assignment.className = "assignment pending";

        assignment.innerHTML = `
            <h3>${assignmentName}</h3>
            <p>Status: Pending</p>
            <button class="completeAssignment">
                Mark Complete
            </button>
        `;

        assignmentList.appendChild(assignment);

        alert("Assignment added successfully!");

    });

}


// ------------------------------------------------------------
// 6. MARK ASSIGNMENT AS COMPLETED
// ------------------------------------------------------------

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("completeAssignment")) {

        const assignment =
            event.target.parentElement;

        assignment.classList.remove("pending");

        assignment.classList.add("completed");

        const status =
            assignment.querySelector("p");

        if (status) {

            status.textContent =
                "Status: Completed";

        }

        event.target.remove();

    }

});


// ------------------------------------------------------------
// 7. NOTES SEARCH
// ------------------------------------------------------------

const searchNotes =
    document.getElementById("searchNotes");

if (searchNotes) {

    searchNotes.addEventListener("input", function () {

        const searchText =
            searchNotes.value.toLowerCase();

        const notes =
            document.querySelectorAll(".note");

        notes.forEach(function (note) {

            const text =
                note.textContent.toLowerCase();

            if (text.includes(searchText)) {

                note.style.display = "";

            } else {

                note.style.display = "none";

            }

        });

    });

}


// ------------------------------------------------------------
// 8. EXAM COUNTDOWN
// ------------------------------------------------------------

function startExamCountdown() {

    const countdown =
        document.getElementById("examCountdown");

    if (!countdown) {
        return;
    }

    // Change this date to your actual exam date
    const examDate =
        new Date("2026-10-15 09:00:00").getTime();


    setInterval(function () {

        const now =
            new Date().getTime();

        const difference =
            examDate - now;


        if (difference <= 0) {

            countdown.textContent =
                "Exam time has arrived!";

            return;
        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (difference %
                    (1000 * 60 * 60 * 24)) /
                    (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (difference %
                    (1000 * 60 * 60)) /
                    (1000 * 60)
            );


        const seconds =
            Math.floor(
                (difference %
                    (1000 * 60)) /
                    1000
            );


        countdown.textContent =
            days + " Days " +
            hours + " Hours " +
            minutes + " Minutes " +
            seconds + " Seconds";


    }, 1000);

}

startExamCountdown();


// ------------------------------------------------------------
// 9. LOGIN
// ------------------------------------------------------------

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;


        if (email === "" || password === "") {

            alert("Please enter email and password.");

            return;
        }


        alert("Login successful!");

    });

}


// ------------------------------------------------------------
// 10. REGISTRATION
// ------------------------------------------------------------

const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            alert("Passwords do not match!");

            return;
        }


        alert("Registration successful!");

    });

}


// ------------------------------------------------------------
// 11. WELCOME MESSAGE
// ------------------------------------------------------------

console.log("College Companion JavaScript loaded successfully!");


// ------------------------------------------------------------
// 12. CURRENT DATE
// ------------------------------------------------------------

const currentDate =
    new Date();

console.log(
    "Today is: " +
    currentDate.toDateString()
);