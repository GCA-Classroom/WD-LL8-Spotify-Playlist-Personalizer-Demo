# 🎵 Spotify Playlist Personalizer — Teacher Demo Version

## 🎯 Purpose

This repository is designed for **live coding demonstrations** to teach students:
- **Event-driven programming**
- **Dynamic data access** using objects
- **DOM manipulation** through loops
- **Real-world product behavior**

---

## 📚 What's Pre-Written (DO NOT CODE LIVE)

✅ **The data structure** (`playlistData` object)
✅ **DOM element selectors** (`selector`, `container`, `feedback`)
✅ **Helper functions** (`scrollToApp`)

These are intentionally pre-written so you can focus on the **conceptual core**.

---

## 🔥 What to Live-Code (THE IMPORTANT PARTS)

### 1️⃣ The Event Listener (Foundational Concept)

**Why this matters:** This is where students see event-driven programming in action.

```javascript
selector.addEventListener("change", function () {
  // ... your code here
});
```

**Teaching moment:**
- What is an event?
- Why `"change"` instead of `"click"`?
- The page **reacts** to user input

---

### 2️⃣ Dynamic Data Access (⭐ Brain-Expanding Moment)

**Why this matters:** This demonstrates dynamic property access using bracket notation.

```javascript
const mood = selector.value;
const songs = playlistData[mood];
```

**Teaching moment:**
- We're using `playlistData[mood]` NOT `playlistData.focus`
- The key changes **dynamically** based on user input
- This is **real product thinking**

💡 **Demo tip:** Use `console.log(mood)` and `console.log(songs)` to show the values

---

### 3️⃣ The Loop (🎯 MOST IMPORTANT!)

**Why this matters:** This is where data transforms into a visible UI.

```javascript
songs.forEach(function(song) {
  const row = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("div");
  
  row.className = "song-row";
  img.src = song.cover;
  title.innerText = song.title;
  
  row.appendChild(img);
  row.appendChild(title);
  container.appendChild(row);
});
```

**Teaching moment:**
- Loop through data → create elements → see UI update in real-time
- Emphasize **scalability**: we're not hardcoding three playlists
- We built **one system that adapts**

---

## 🎬 Recommended Demo Flow

### Step 1: Show the dropdown working (but no playlist yet)
- Open the page
- Change the dropdown
- Nothing happens yet

### Step 2: Start live-coding
```javascript
selector.addEventListener("change", function () {
  console.log("Dropdown changed!");
});
```
- Test it → Open console → Change dropdown → See "Dropdown changed!"

### Step 3: Capture the mood
```javascript
const mood = selector.value;
console.log("Selected mood:", mood);
```
- Test it → See "focus", "chill", or "hype" in console

### Step 4: Access the data dynamically
```javascript
const songs = playlistData[mood];
console.log("Songs:", songs);
```
- **PAUSE HERE** — This is the key conceptual moment
- Explain: `playlistData[mood]` vs `playlistData.focus`
- Show the array of song objects in the console

### Step 5: Build the loop (slowly and intentionally)
```javascript
songs.forEach(function(song) {
  console.log(song.title);
});
```
- See song titles print in console
- Explain: now we'll turn this into DOM elements

### Step 6: Create the DOM elements
```javascript
const row = document.createElement("div");
row.className = "song-row";

const img = document.createElement("img");
img.src = song.cover;

const title = document.createElement("div");
title.innerText = song.title;
```

### Step 7: Assemble and display
```javascript
row.appendChild(img);
row.appendChild(title);
container.appendChild(row);
```
- **Visual payoff moment** 🎉
- The playlist appears on screen!

### Step 8: Clear previous playlist
```javascript
container.innerHTML = "";  // Add this at the start of the event listener
```

---

## 🧠 Key Teaching Points

### The Transformation Moment
```javascript
const songs = playlistData[mood];
songs.forEach(function(song) { ... });
```

This is where students understand:
> "We're not writing three different playlists.  
> We're writing **one system** that adapts."

**That's product thinking.** 🚀

---

## 📖 Reference Guide

The `script.js` file contains a **Teacher Reference Guide** at the bottom with all code snippets you'll need. Scroll past it during the demo so students don't see the answers!

---

## ⚠️ What NOT to Do

❌ Don't type the entire `playlistData` object live  
❌ Don't fully code out the conditional feedback block  
❌ Don't rush through the loop — this is the **core learning moment**

---

## ✨ Optional Extensions

If time permits, you can:
- Add conditional feedback messages
- Add image fallback protection
- Let students add their own mood/songs
- Style the playlist together

---

## 🎓 Learning Objectives

By the end of this demo, students should understand:
- How event listeners enable interactivity
- How to access object properties dynamically
- How loops transform data into UI elements
- How real products work (not just exercises)

---

**Happy teaching!** 🎉
