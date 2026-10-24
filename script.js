window.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('password_input');
    const bar = document.getElementById('strength-bar');
    const strengthlabel = document.getElementById('strength-label');
    const warningMsg = document.getElementById('warning-msg');
    
    const slashLine = document.querySelector('.slash-line');
    const visibilityIcon = document.getElementById('visibility-off');

    if (!input || !bar || !strengthlabel || !visibilityIcon) {
        console.error("Missing HTML elements!");
        return;
    }

    // Calculate dynamic length of the slash line for the drawing animation
    if (slashLine) {
        const length = slashLine.getTotalLength();
        slashLine.style.setProperty('--line-length', `${length}px`);
    }

    // Strength Checker Logic (zxcvbn)
    input.addEventListener("input", () => {
        const val = input.value;
        if (!val) {
            bar.style.width = "0%`";
            strengthlabel.textContent = "";
            if (warningMsg) warningMsg.style.display = "none";
            return;
        }

        const result = zxcvbn(val);
        const score = result.score;
        const warning = result.feedback.warning;

        const percent = (score / 4) * 100;
        bar.style.width = percent + "%";
        
        const colors = ["#f87171", "#fb923c", "#fbbf24", "#818cf8", "#34d399"];
        bar.style.backgroundColor = colors[score];

        const labels = ["Very weak", "Weak", "Okay", "Good", "Strong"];
        strengthlabel.textContent = labels[score];

        if (warning && warningMsg) {
            warningMsg.textContent = `WARNING: [${warning}]`;
            warningMsg.style.display = "block";
        } else if (warningMsg) {
            warningMsg.style.display = "none";
        }
    });

    // Toggle Password Visibility & Animate Slash Line On/Off
    visibilityIcon.addEventListener('click', () => {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        
        if (slashLine) {
            // If input becomes "text" (isPassword was true), remove 'hidden' so the slash draws.
            // If input becomes "password" (isPassword was false), add 'hidden' so the slash undraws.
            slashLine.classList.toggle('hidden', isPassword);
        }
    });
});