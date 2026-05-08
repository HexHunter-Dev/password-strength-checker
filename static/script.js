import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core'
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en'

// 1. Initialize Options IMMEDIATELY
const zxcvbn_options = {
  translations: zxcvbnEnPackage.translations,
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  },
}
zxcvbnOptions.setOptions(zxcvbn_options)

// 2. Wrap DOM logic to ensure elements are loaded
window.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('password_input');
    const bar = document.getElementById('strength-bar');
    const label = document.getElementById('label');
    const toggleBtn = document.getElementById('toggleBtn');

    // Debugging: This will tell you in the console if an ID is misspelled
    if (!input || !bar || !label || !toggleBtn) {
        console.error("Missing HTML elements! Check your IDs.");
        return;
    }

    input.addEventListener("input", () => {
        const result = zxcvbn(input.value);
        const score = result.score;

        // Visual updates
        const percent = (score / 4) * 100;
        bar.style.width = percent + "%";
        
        // Dynamic colors
        const colors = ["#ff4d4d", "#ffa64d", "#ffff4d", "#b3ff66", "#33cc33"];
        bar.style.backgroundColor = colors[score];

        const labels = ["Very weak", "Weak", "Okay", "Good", "Strong"];
        label.textContent = labels[score];
    });

    toggleBtn.addEventListener('click', () => {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        toggleBtn.textContent = isPassword ? "Hide Password" : "Show Password";
    });
});