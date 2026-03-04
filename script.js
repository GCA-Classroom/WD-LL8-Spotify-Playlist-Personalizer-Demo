/* ===================================================== */
/* Scroll function from hero to app */
/* ===================================================== */

function scrollToApp() {
  document.getElementById("app").scrollIntoView({ behavior: "smooth" });
}

/* ===================================================== */
/* PLAYLIST DATA OBJECT */
/* Reliable images with fallback protection */
/* ===================================================== */

const playlistData = {
  focus: [
    {
      title: "Tycho — Awake",
      cover:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&q=80",
    },

    {
      title: "Lo-fi Beats",
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80",
    },

    {
      title: "Hans Zimmer — Time",
      cover:
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&q=80",
    },
  ],

  chill: [
    {
      title: "Frank Ocean — Pink + White",
      cover:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
    },

    {
      title: "SZA — Good Days",
      cover:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=300&q=80",
    },

    {
      title: "Daniel Caesar — Best Part",
      cover:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&q=80",
    },
  ],

  hype: [
    {
      title: "Drake — Nonstop",
      cover:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&q=80",
    },

    {
      title: "Travis Scott — SICKO MODE",
      cover:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&q=80",
    },

    {
      title: "Kanye West — POWER",
      cover:
        "https://images.unsplash.com/photo-1464375117522-1311dd6d0cd1?w=300&q=80",
    },
  ],
};

/* ===================================================== */
/* DOM ELEMENTS */
/* ===================================================== */

const selector = document.getElementById("mood-selector");

const container = document.getElementById("playlist-container");

const feedback = document.getElementById("feedback");

/* ===================================================== */
/* EVENT LISTENER - LIVE CODE THIS! */
/* ===================================================== */

/*
 * 🎯 TEACHER DEMO GUIDE:
 *
 * This is the core of event-driven personalization.
 * Walk through this step-by-step:
 *
 * STEP 1: Set up the event listener
 * - What is an event?
 * - Why "change" instead of "click"?
 * - Show students: the page reacts when the user does something
 *
 * STEP 2: Access the data dynamically
 * - console.log(selector.value) to show the mood
 * - Explain: playlistData[mood] vs playlistData.focus
 * - This is dynamic property access!
 *
 * STEP 3: The loop (MOST IMPORTANT!)
 * - console.log(playlistData[mood]) to show the array
 * - Build the forEach loop live
 * - Create DOM elements one by one
 * - Watch the magic happen in real-time!
 *
 * 💡 TIP: Clear the playlist first with container.innerHTML = "";
 *
 * START HERE: */

/* ===================================================== */
/* 📚 TEACHER REFERENCE GUIDE */
/* ===================================================== */

/*
 * Code snippets to build during the demo:
 * (Students should NOT see this section during demo - scroll past it!)
 *
 * ─────────────────────────────────────────────────────
 * SNIPPET 1: Basic Event Listener Setup
 * ─────────────────────────────────────────────────────
 *
 * selector.addEventListener("change", function () {
 *   console.log("Dropdown changed!");
 * });
 *
 * ─────────────────────────────────────────────────────
 * SNIPPET 2: Getting the Selected Mood
 * ─────────────────────────────────────────────────────
 *
 * const mood = selector.value;
 * console.log("Selected mood:", mood);
 *
 * ─────────────────────────────────────────────────────
 * SNIPPET 3: Dynamic Data Access (⭐ KEY CONCEPT!)
 * ─────────────────────────────────────────────────────
 *
 * const songs = playlistData[mood];
 * console.log("Songs for this mood:", songs);
 *
 * 💡 Emphasize: playlistData[mood] NOT playlistData.focus
 *    The key changes based on user input!
 *
 * ─────────────────────────────────────────────────────
 * SNIPPET 4: Clearing Previous Playlist
 * ─────────────────────────────────────────────────────
 *
 * container.innerHTML = "";
 *
 * ─────────────────────────────────────────────────────
 * SNIPPET 5: The Loop (⭐⭐⭐ MOST IMPORTANT!)
 * ─────────────────────────────────────────────────────
 *
 * songs.forEach(function(song) {
 *   console.log(song.title);
 * });
 *
 * ─────────────────────────────────────────────────────
 * SNIPPET 6: Creating DOM Elements
 * ─────────────────────────────────────────────────────
 *
 * const row = document.createElement("div");
 * row.className = "song-row";
 *
 * const img = document.createElement("img");
 * img.src = song.cover;
 *
 * const title = document.createElement("div");
 * title.innerText = song.title;
 *
 * ─────────────────────────────────────────────────────
 * SNIPPET 7: Assembling and Displaying
 * ─────────────────────────────────────────────────────
 *
 * row.appendChild(img);
 * row.appendChild(title);
 * container.appendChild(row);
 *
 * ─────────────────────────────────────────────────────
 * OPTIONAL: Conditional Feedback
 * ─────────────────────────────────────────────────────
 *
 * if (mood === "focus") {
 *   feedback.innerText = "Time to focus. Let's get productive.";
 * } else if (mood === "chill") {
 *   feedback.innerText = "Relax and enjoy the vibes.";
 * } else if (mood === "hype") {
 *   feedback.innerText = "Energy mode activated.";
 * }
 *
 * ─────────────────────────────────────────────────────
 * BONUS: Image Fallback Protection
 * ─────────────────────────────────────────────────────
 *
 * img.onerror = function() {
 *   this.src = "https://placehold.co/60x60?text=Music";
 * };
 *
 * ═════════════════════════════════════════════════════
 * 🎓 TEACHING TIP:
 *
 * The transformation moment happens here:
 *
 *   const songs = playlistData[mood];
 *   songs.forEach(function(song) { ... });
 *
 * This is where students understand:
 * "We're not writing three different playlists.
 *  We're writing ONE SYSTEM that adapts."
 *
 * That's product thinking. 🚀
 * ═════════════════════════════════════════════════════
 */
