# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

---

## Husky + Lint-Staged Setup

This project uses **Husky** and **lint-staged** to automatically lint and format your code before commits.

### First-Time Setup

Run these commands **once** after cloning the repo:

```bash
# Initialize Husky and create the .husky/ folder
npx husky install

# Add a prepare script to package.json so Husky installs automatically on npm install
npm set-script prepare "husky install"

# Run the prepare script manually the first time
npm run prepare
