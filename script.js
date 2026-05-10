window.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('password_input');
    const bar = document.getElementById('strength-bar');
    const strengthlabel = document.getElementById('strength-label');
    const toggleBtn = document.getElementById('toggleBtn');
    
    // Add this to your HTML: <div id="warning-msg"></div>
    const warningMsg = document.getElementById('warning-msg');

    // Fixed the 'label' vs 'strengthlabel' bug in your check
    if (!input || !bar || !strengthlabel || !toggleBtn) {
        console.error("Missing HTML elements!");
        return;
    }

    input.addEventListener("input", () => {
        const val = input.value;
        if (!val) {
            bar.style.width = "0%";
            strengthlabel.textContent = "";
            if (warningMsg) warningMsg.style.display = "none";
            return;
        }

        const result = zxcvbn(val);
        const score = result.score;
        const warning = result.feedback.warning;

        // Bar logic
        const percent = (score / 4) * 100;
        bar.style.width = percent + "%";
        
        // Colors matching your Midnight Navy vibe
        const colors = ["#f87171", "#fb923c", "#fbbf24", "#818cf8", "#34d399"];
        bar.style.backgroundColor = colors[score];

        const labels = ["Very weak", "Weak", "Okay", "Good", "Strong"];
        strengthlabel.textContent = labels[score];

        // --- THE PYTHON WARNING LOGIC ---
        if (warning && warningMsg) {
            warningMsg.textContent = `WARNING: [${warning}]`;
            warningMsg.style.display = "block";
        } else if (warningMsg) {
            warningMsg.style.display = "none";
        }
    });

    toggleBtn.addEventListener('click', () => {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        toggleBtn.textContent = isPassword ? "Hide Password" : "Show Password";
    });
});