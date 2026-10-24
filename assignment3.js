
const input = prompt("Enter your test score:", "85");
const score = Number(input);

if (
    input === null ||
    input.trim() === "" ||
    !Number.isFinite(score) ||
    score < 0 ||
    score > 100
) {
    console.log("Invalid score");
} else {
    let grade;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    let gradeLabel;

    switch (grade) {
        case "A":
            gradeLabel = "A";
            break;
        case "B":
            gradeLabel = "B";
            break;
        case "C":
            gradeLabel = "C";
            break;
        case "D":
            gradeLabel = "D";
            break;
        default:
            gradeLabel = "F";
    }

    const status = score >= 40 ? "Passed" : "Failed";

    console.log(`Score: ${score}`);
    console.log(`Grade: ${gradeLabel}`);
    console.log(`Status: ${status}`);
}