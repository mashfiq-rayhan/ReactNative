# 📱 React Native Workspace

A multi-project React Native + Expo workspace that covers core-to-advanced mobile app capabilities.
Each folder is a runnable app/module focused on a specific part of production app development.

Built with consistency, clarity, and production mindset, this workspace reflects strong React Native engineering discipline.

## 🚀 Workspace Snapshot

- 🧱 Framework: React Native (Expo)
- ⚙️ Tooling: JavaScript, Babel, Expo CLI
- 🗂️ Architecture: Feature/module-based app folders
- 📦 Scope: UI, navigation, state, forms, HTTP, auth, native device APIs

---

## 📂 Module Capability Map

| Module                                         | Primary Capability                           |
| ---------------------------------------------- | -------------------------------------------- |
| 🎮 04. Building a Mini-Game App                | Core RN components, state, interaction logic |
| 📐 05. Building Adaptive User Interfaces       | Adaptive and cross-platform UI behavior      |
| 🍽️ 06. MEALS APP                               | Navigation-heavy app architecture            |
| 🧠 07. State Management with Redux_Context API | Context API + Redux integration              |
| 💸 08. The Expense Tracker App                 | Stateful CRUD-style app flow                 |
| ✍️ 09. Handling User Input                     | Form design and input validation             |
| 🌐 10. Http                                    | API communication and request lifecycle      |
| 🔐 11. Authentication                          | Session/auth structure and protected routes  |
| 📷 12. Using Native Device Features            | Native API usage patterns                    |

---

## 🏆 Why This Workspace Stands Out

- 🌟 Strong breadth: it covers the most important React Native capabilities in one unified workspace.
- 🧠 Strong depth: each module goes beyond surface-level demos and focuses on practical app behavior.
- 🧱 Solid structure: clean separation of components, screens, store, constants, and utilities.
- ⚡ Execution-ready: every module is runnable and organized for fast development cycles.
- 📈 Portfolio-grade quality: this is the kind of workspace that shows real mobile engineering skill.

---

## 🛠️ Run Any Project

1. Open a module folder:

   cd "08. The Expense Tracker App"

2. Install dependencies:

   npm install

3. Start Expo:

   npx expo start

4. Launch target device:

- 🤖 Android emulator: press a
- 🍎 iOS simulator (macOS): press i
- 📷 Physical device: scan QR in Expo Go

---

## 🧠 React Native Skills Covered

| Skill Area          | Coverage in Workspace                                          |
| ------------------- | -------------------------------------------------------------- |
| 🎨 UI Composition   | Reusable components, custom buttons, cards, and screen layouts |
| 📐 Adaptive Layouts | Platform-based styling and responsive interfaces               |
| 🧭 Navigation       | Multi-screen flows, nested navigation patterns                 |
| 🧾 State Management | Context API and Redux-based state architecture                 |
| ✍️ Input Handling   | Controlled inputs, validation, and form UX                     |
| 🌐 Networking       | HTTP requests, async data fetch/update flows                   |
| 🔐 Authentication   | Auth flows and protected-screen app structure                  |
| 📷 Native Features  | Integration patterns for device capabilities                   |
| 🧩 App Organization | Folder-level modularization and shared utilities               |

---

## 🧩 Shared Structure (Across Modules)

- App.js -> App entry point
- components/ -> Reusable UI building blocks
- screens/ -> Screen-level containers
- store/ -> State layer (where applicable)
- util/ -> Utility helpers
- constants/ -> Centralized constants/styles
- assets/ -> Fonts and image resources

---

## 🧯 Troubleshooting

### Metro cache / stale bundle

    npx expo start -c

### Module switch issues

- Stop Expo server before changing folders
- Run npm install inside the selected module
- Restart with npx expo start

---

## 📚 Reference

For production stack notes and architecture ideas, see [RN.md](RN.md).
