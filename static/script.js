import { zxcvbn, zxcvbnOptions } from "@zxcvbn-ts/core";

const input = document.getElementById('password');
const meter = document.getElementById('strength-meter');
const bar = document.getElementById('strength-bar');
const feedback = document.getElementById('feedback');