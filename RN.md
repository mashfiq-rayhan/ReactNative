# 🚀 Production-Ready Expo Stack (2026)

A scalable, real-world Expo stack for building modern mobile apps (API-driven, SaaS-style).

---

# 🧱 Core Stack

## Foundation

* Expo (latest SDK)
* React Native
* TypeScript (strict mode)

---

# 🧭 Navigation

* Expo Router (file-based routing)

**Why:**

* Next.js-style routing
* Layout system
* Built-in deep linking

---

# 🌐 API + State Management

## Server State (IMPORTANT)

* TanStack Query (React Query)

**Use for:**

* API caching
* Background sync
* Optimistic updates

👉 Replaces Redux in most cases

---

## Global State (Lightweight)

* Zustand

**Use for:**

* Auth state
* UI state (modals, toggles)

---

# 🎨 UI System

## Styling

* NativeWind (Tailwind for React Native)

## Components (Optional)

* React Native Paper

👉 Or build your own design system for SaaS apps

---

# 🔐 Authentication

* JWT-based auth (via backend)
* Secure storage:

  * Expo SecureStore

---

# 💾 Storage

* AsyncStorage → non-sensitive data
* SecureStore → tokens

---

# 📡 Networking

* Axios

**Setup:**

* Central API client
* Request/response interceptors
* Token injection

---

# 🔔 Notifications

* Expo Notifications

---

# 📊 Forms

* React Hook Form
* Zod (validation)

---

# 🧪 Testing

* Jest
* React Native Testing Library

---

# 🧰 Dev Tools

* Expo DevTools
* Flipper

---

# 🚀 Build & Deployment

* EAS Build
* EAS Submit
* OTA updates (Expo Updates)

---

# 📁 Folder Structure

```
src/
  app/                # Expo Router (routes)
    (auth)/
    (tabs)/
    _layout.tsx

  components/         # Reusable UI components

  features/           # Feature-based modules
    auth/
    user/
    complain/

  services/
    api/              # Axios setup
    query/            # React Query config

  store/              # Zustand stores

  hooks/              # Custom hooks

  lib/                # utils, constants

  types/              # global TypeScript types
```

---

# 🧠 Architecture Pattern

## Feature-Based Structure

```
features/
  auth/
    api.ts
    hooks.ts
    store.ts
    types.ts
```

👉 Keeps code modular and scalable

---

# ⚙️ Setup Commands

## Create App

```bash
npx create-expo-app myApp -t expo-router
```

## Install Core Dependencies

```bash
npm install @tanstack/react-query zustand axios zod react-hook-form
npm install nativewind tailwindcss
```

---

# 🔌 Core Setup Snippets

## React Query Provider

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>;
```

---

## Axios Instance

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.yourapp.com",
});

api.interceptors.request.use(async (config) => {
  // attach token here
  return config;
});
```

---

# 🔥 Production Add-ons

## Error Tracking

* Sentry

## Analytics

* Firebase / PostHog

## Performance

* Lazy loading routes
* Memoization
* Avoid unnecessary re-renders

---

# 🧨 Things to Avoid

* ❌ Redux (overkill)
* ❌ Overusing Context API
* ❌ Mixing business logic in UI components
* ❌ Flat folder structure

---

# 🧠 Mental Model

Think of this stack as:

> “Next.js architecture for mobile apps”

* Fast iteration
* Scalable structure
* Backend-driven design

---

# ✅ Final Recommendation

👉 Start with Expo + this stack
👉 Scale with feature-based architecture
👉 Eject only if absolutely necessary
